import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormSection from "./Form/FormSection";
import FormButtons from "./Form/FormButtons";
import { getFormName, initialForm } from "../utils/dateUtils";
import {
    branchNameInHindibyBranchCode,
    createForm,
    fetchBranchCodes,
    fetchFormById,
    fetchZones,
    updateForm,
} from "../service/apiService";

function FormComponent({ mode: initialMode }) {
    const [mode, setMode] = useState(initialMode); // now mode is local state
    const [form, setForm] = useState(initialForm);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formName, setFormName] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [zones, setZones] = useState([]);
    const [branchCodeList, setBranchCodeList] = useState([]);
    const formStyle = {
        padding: "9px",
        lineHeight: "1.2",
        fontSize: "13px",
    };

    const loadData = async () => {
        await loadZones();
        // await loadZones();
        if ((mode === "edit" || mode === "view") && id) {
            try {
                const formData = (await fetchFormById(id)).data;
                setForm(formData);
            } catch (err) {
                console.error("Error loading form:", err);
            }
        } else if (mode === "add") {
            // const defaultZone = (await getLoggedInUserZone()).data;
            // setForm((prevForm) => ({
            //     ...prevForm,
            //     zone: defaultZone?.zone,
            // }));
        }
        setFormName(getFormName());
        setIsFormValid(mode === "edit" ? true : false);
    };

    const loadZones = async () => {
        try {
            const zones = (await fetchZones()).data || [];

            const zoneList = zones
                .filter((item) => item.zoneInHindi)
                .map((item) => item.zoneInHindi.trim());

            setZones(zoneList);
        } catch (err) {}
    };

    useEffect(() => {
        loadData();
    }, [mode, id]);

    const fetchAllBranches = async (zone) => {
        const branches = await fetchBranchCodes(zone);
        const codes = (branches.data || [])
            .filter((b) => b.branchCode)
            .map((b) => b.branchCode.trim());
        setBranchCodeList(codes);
    };

    const handleChange = async (e) => {
        const { name, value, hasError = false } = e.target;

        if (mode === "add") {
            setIsFormValid(false);
        }

        if (name === "zone") {
            setForm((f) => ({
                ...f,
                zone: value,
                branchCode: "",
                branchName: "",
            }));
            fetchAllBranches(value);
        } else if (name === "branchCode") {
            setForm((f) => ({
                ...f,
                branchCode: value,
                branchName: "",
            }));
            const bName = await branchNameInHindibyBranchCode(value);
            const updatedBranchName = `${bName.data?.[0]?.branchName || ""}`;

            setForm((f) => ({
                ...f,
                branchName: updatedBranchName,
            }));

            if (mode === "add" && !hasError) {
                setIsFormValid(!!form.zone && !!value && !!updatedBranchName);
            }
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));

            if (mode === "add" && !hasError) {
                setIsFormValid(
                    !!form.zone && !!form.branchCode && !!form.branchName
                );
            }
        }
    };

    const handleSubmit = async (e, recordId) => {
        e.preventDefault();
        setLoading(true);
        try {
            let Id = recordId ? recordId : id;
            const response =
                (mode === "edit" && id) || recordId
                    ? await updateForm(Id, {
                          ...form,
                          formStatus: "SUBMIT",
                      })
                    : await createForm({
                          ...form,
                          formStatus: "SUBMIT",
                      });

            if (response.success) {
                window.location.hash = "#/hindi-qpr-branch-1-updated";
            } else {
                const err = response.error;
                if (err?.response?.status === 409) {
                    const duplicateRRN = err?.response?.data?.message;
                    const confirmRoute = window.confirm(duplicateRRN);
                    if (!confirmRoute) return;
                    navigate("/hindi-qpr-branch-1-updated");
                    // window.location.hash = "#/hindi-qpr-branch-1-updated";
                }
            }
        } catch (error) {
            console.error("Submit Error", error);
        } finally {
            setLoading(false);
        }
    };

    const sendFormData = (fromData) => {
        console.log("fromData", fromData);
        if (!!fromData && !!fromData.recordId) {
            setMode("edit"); // update mode to 'edit'
        }
    };

    return (
        <>
            <div style={formStyle} className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="leftSpace">
                            <div className="innerBanner">
                                <div id="page-banner">
                                    <img
                                        src="/webdav/stardesk/document_library/HomePage/Images/banner02.jpg"
                                        alt="Banner"
                                    />
                                </div>
                                <div className="caption">
                                    <h1>{formName}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4">
                <form onSubmit={handleSubmit}>
                    <FormSection
                        form={form}
                        handleChange={handleChange}
                        mode={mode}
                        zones={zones}
                        branchCode={branchCodeList}
                    />
                    <FormButtons
                        mode={mode}
                        loading={loading}
                        isFormSubmitable={isFormValid}
                        form={form}
                        onSubmitToParent={handleSubmit}
                        sendFormData={sendFormData}
                    />
                </form>
            </div>
        </>
    );
}

export default FormComponent;
