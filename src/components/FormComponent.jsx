import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    fetchFormById,
    createForm,
    updateForm,
    fetchFgmo,
    fetchZonesByFgmo,
    getSolidsByZone,
    getBranchNameByBranchCode,
} from "../service/apiService";
import { getCurrentFinancialYearLabel } from "../utils/dateUtils";
import FormSection from "./Form/FormSection";
import FormButtons from "./Form/FormButtons";
import DescriptionAlerts from "./Alert/Alert";
import "./Hindi.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FormComponent({ mode }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const initialForm = {
        fgmo: "",
        zone: "",
        solid: "",
        branchName: "",
        numStaff: "",
        fy: getCurrentFinancialYearLabel(),
        ttlDie: "",
        ttlEle: "",
        ttlPet: "",
        numCen: "",
        numSplit: "",
        numWindow: "",
        numCassette: "",
        ttlCen: "",
        ttlSplit: "",
        ttlWindow: "",
        ttlCassette: "",
        starCen: "",
        starSplit: "",
        starWindow: "",
        starCassette: "",
        ...Object.fromEntries(
            ["ele", "die", "pet"].flatMap((prefix) =>
                [
                    "April",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                    "Jan",
                    "Feb",
                    "Mar",
                ].map((month) => [`${prefix}${month}`, ""])
            )
        ),
    };

    const [form, setForm] = useState(initialForm);
    const [fgmoList, setFgmoList] = useState([]);
    const [zoneList, setZoneList] = useState([]);
    const [solidList, setSolidList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFormSubmitable, setIsFormSubmitable] = useState(false);

    const showError = (msg) => {
        setError(msg);
        setTimeout(() => setError(null), 3000);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const fgmoRes = await fetchFgmo();
                const filteredFGMO = (fgmoRes.data || [])
                    .filter((z) => z.fgmo)
                    .map((z) => z.fgmo.trim());
                setFgmoList(filteredFGMO.sort());
            } catch (err) {
                showError(err.error);
            }

            if ((mode === "edit" || mode === "view") && id) {
                try {
                    const formData = (await fetchFormById(id)).data;
                    await getAndSetZone(formData.fgmo);
                    await getAndSetSolId(formData.zone);
                    setForm(formData);
                } catch (err) {
                    showError(err.error);
                }
            }
        };

        loadData();
    }, [mode, id]);

    const getAndSetZone = async (value) => {
        const zoneRes = await fetchZonesByFgmo(value);
        const filtered = (zoneRes.data || [])
            .filter((z) => z.zoneInEnglish)
            .map((z) => z.zoneInEnglish.trim());
        setZoneList(filtered.sort());
    };

    const getAndSetSolId = async (value) => {
        const solidsRes = await getSolidsByZone(value);
        const filtered = (solidsRes.data || ["ZO"])
            .filter((z) => z.branchCode)
            .map((z) => z.branchCode.trim());
        filtered.sort().unshift("ZO");
        setSolidList(filtered);
    };

    const handleChange = async (e) => {
        console.log("asdfasdfasdf");
        const { name, value } = e.target;
        const updated = { ...form, [name]: value };
        setIsFormSubmitable(
            !!updated.fgmo && !!updated.zone && !!updated.solid
        );
        if (name === "fgmo") {
            updated.zone = "";
            updated.solid = "";
            updated.branchName = "";
            setZoneList([]);
            setSolidList([]);
            getAndSetZone(value);
        }

        if (name === "zone") {
            updated.solid = "";
            updated.branchName = "";
            setSolidList([]);
            getAndSetSolId(value);
        }
        if (name === "solid") {
            updated.branchName = "";
            const solidsRes = await getBranchNameByBranchCode(value);
            const filtered = (solidsRes.data || [])
                .filter((z) => z.branchNameEnglish)
                .map((z) => z.branchNameEnglish.trim());
            updated.branchName = filtered[0];
        }

        const sumFields = (fields) =>
            fields.reduce(
                (sum, key) => sum + (parseFloat(updated[key]) || 0),
                0
            );

        const months = [
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
        ];
        updated.ttlPet = sumFields(months.map((m) => `pet${m}`)).toString();
        updated.ttlDie = sumFields(months.map((m) => `die${m}`)).toString();
        updated.ttlEle = sumFields(months.map((m) => `ele${m}`)).toString();

        setForm(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (form.ttlDie == "0") form.ttlDie = "";
            if (form.ttlEle == "0") form.ttlEle = "";
            if (form.ttlPet == "0") form.ttlPet = "";

            const response =
                mode === "edit" && id
                    ? await updateForm(id, form)
                    : await createForm(form);

            if (response.success) {
                window.location.hash = "#/brsr-1";
                // navigate("/brsr-1");
            } else {
                // const err = response.error;
                // if (err?.response?.status === 409) {
                //     const msg = err.response.data;
                //     if (window.confirm(msg)) navigate("/brsr-1");
                const err = response.error;
                if (err?.response?.status === 409) {
                    const duplicateRRN = err?.response?.data;
                    const confirmRoute = window.confirm(duplicateRRN);
                    if (!confirmRoute) return;
                    navigate("/brsr-1");
                } else {
                    showError("Error submitting form.");
                }
            }
        } catch (err) {
            console.error("Submit Error", err);
            showError("Unexpected error.");
        } finally {
            setLoading(false);
        }
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
                                    <h1>{"BRSR"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <label>
                    <span
                        style={{
                            color: "red",
                            padding: "9px",
                            lineHeight: "1.2",
                            fontSize: "13px",
                        }}
                    >
                        *
                    </span>
                    Indicated required fields
                </label>
                <form onSubmit={handleSubmit}>
                    <FormSection
                        form={form}
                        handleChange={handleChange}
                        mode={mode}
                        fgmoList={fgmoList}
                        zoneList={zoneList}
                        solidList={solidList}
                    />
                    <FormButtons
                        mode={mode}
                        loading={loading}
                        isFormSubmitable={isFormSubmitable}
                    />
                </form>
                {error && (
                    <DescriptionAlerts
                        severity="error"
                        alertTitle="त्रुटि"
                        message={error}
                        onClose={() => setError(null)}
                    />
                )}
            </div>
        </>
    );
}

export default FormComponent;
