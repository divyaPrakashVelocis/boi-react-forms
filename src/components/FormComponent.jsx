import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFinancialYearAndQuarter, initialForm } from "./common";
import {
    createForm,
    fetchBranchCode,
    fetchBranchesByZone,
    fetchFormById,
    fetchZoneForLoggedUser,
    updateForm,
} from "../service/apiService";
import FormButtons from "./Form/FormButtons";
import FormSection from "./Form/FormSection";

const FormComponent = ({ mode }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [branch, setBranch] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [isFormSubmitable, setIsFormSubmitable] = useState(false);

    const financialYearAndQTR = () => {
        if (mode === "add") {
            const { financialYear, qtrEnded } = getFinancialYearAndQuarter();
            setForm((prev) => ({
                ...prev,
                year: financialYear,
                qtrEnded: qtrEnded,
            }));
        }
    };

    const getLoggedInUserZone = () => {
        fetchZoneForLoggedUser()
            .then((res) => {
                const data = res.data;
                setForm((prev) => ({ ...prev, zone: data.zoneInEnglish }));
                getBranchNameByzone(data.zoneInEnglish);
                setIsFormSubmitable(mode === "edit" ? true : false);
            })
            .catch((err) => console.error("Failed to load zone", err));
    };

    const getDataById = () => {
        if ((mode === "edit" || mode === "view") && id) {
            fetchFormById(id).then((res) => {
                const formData = res.data;
                setForm(formData);
            });
        }
    };

    const getBranchNameByzone = (zone) => {
        fetchBranchesByZone(zone)
            .then((res) => {
                const branchNames = res.data.map((item) => item.branchName);
                setBranch(branchNames);
            })
            .catch((err) => console.error("Failed to load branches", err));
    };

    const getBranchCodeByBranchNameAndZone = (value) => {
        fetchBranchCode(value, form?.zone)
            .then((res) => {
                if (res.data?.branchCode) {
                    setForm((prev) => ({
                        ...prev,
                        solId: res.data.branchCode,
                    }));
                    setIsFormSubmitable(
                        !!form.zone &&
                            !!value &&
                            !!res.data.branchCode &&
                            !!form.year
                    );
                }
            })
            .catch((err) => console.error("Failed to load SOL ID", err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...form, [name]: value };
        if (name === "branch") {
            getBranchCodeByBranchNameAndZone(value);
        }
        console.log("asdafsdf");

        setForm(updated);
    };

    useEffect(() => {
        financialYearAndQTR();
        getLoggedInUserZone();
        getDataById();
        setIsFormSubmitable(mode === "edit" ? true : false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const request =
            mode === "edit" && id ? updateForm(id, form) : createForm(form);
        request
            .then(() => {
                window.location.hash = "#/kri-domestic";
            })
            .catch((err) => {
                const duplicateRRN = err?.response?.data?.message;
                if (window.confirm(duplicateRRN)) {
                    navigate("/kri-domestic");
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <div className="container-fluid">
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
                                    <h1>{"Branch Level KRIs (Domestic)"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <label>
                    <span style={{ color: "red" }}>*</span>Indicated required
                    fields
                </label>
                <form onSubmit={handleSubmit}>
                    <FormSection
                        form={form}
                        handleChange={handleChange}
                        mode={mode}
                        branch={branch}
                    />
                    <FormButtons
                        mode={mode}
                        loading={loading}
                        isFormSubmitable={isFormSubmitable}
                    />
                </form>
            </div>
        </>
    );
};

export default FormComponent;
