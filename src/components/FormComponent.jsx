import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    fetchZones,
    fetchBranches,
    fetchFormById,
    createForm,
    updateForm,
    regionInHindi,
    branchNameInHindibyBranchCode,
} from "./../service/apiService";
import "./Hindi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormSection from "./Form/FormSection";
import FormButtons from "./Form/FormButtons";
import { convertToBase64, initialForm } from "../utils/dateUtils";
import DescriptionAlerts from "./Alert/Alert";

const fileFields = Array.from({ length: 6 }, (_, i) => i + 1);

function FormComponent({ mode }) {
    const [form, setForm] = useState(initialForm);
    const [zones, setZones] = useState([]);
    const [branchCodeList, setBranchCodeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFormSubmitable, setIsFormSubmitable] = useState(false);
    const [fileData, setFileData] = useState(
        fileFields.reduce((acc, i) => {
            acc[`attachment${i}`] = null;
            acc[`fileName${i}`] = null;
            acc[`fileId${i}`] = null;
            return acc;
        }, {})
    );

    const { id } = useParams();
    const navigate = useNavigate();

    const setFiles = (data) => {
        setFileData((prev) => ({
            ...prev,
            ...fileFields.reduce((acc, i) => {
                acc[`attachment${i}`] = data[`attachment${i}`] ?? null;
                acc[`fileName${i}`] = data[`fileName${i}`] ?? null;
                acc[`fileId${i}`] = data[`fileId${i}`] ?? null;
                return acc;
            }, {}),
        }));
    };

    const formatDateToDDMMYYYY = (dateStr) => {
        const [year, month, day] = dateStr.split("-");
        return `${day}-${month}-${year}`;
    };

    const setDates = (data) => {
        if (!!data.dateA) data.dateA = formatDateToDDMMYYYY(data.dateA);
        if (!!data.dateBInspection)
            data.dateBInspection = formatDateToDDMMYYYY(data.dateBInspection);
        if (!!data.dateOfInspection)
            data.dateOfInspection = formatDateToDDMMYYYY(data.dateOfInspection);
        if (!!data.dateOfJoiningA)
            data.dateOfJoiningA = formatDateToDDMMYYYY(data.dateOfJoiningA);
        if (!!data.dateOfMeetingC)
            data.dateOfMeetingC = formatDateToDDMMYYYY(data.dateOfMeetingC);
        if (!!data.meetingDateA)
            data.meetingDateA = formatDateToDDMMYYYY(data.meetingDateA);
        if (!!data.previousMeetingDate)
            data.previousMeetingDate = formatDateToDDMMYYYY(
                data.previousMeetingDate
            );
        if (!!data.rajbhashaDataC)
            data.rajbhashaDataC = formatDateToDDMMYYYY(data.rajbhashaDataC);

        return data;
    };

    const loadForm = async () => {
        try {
            console.log("asdfasdf");
            const data = (await fetchFormById(id)).data;
            const data1 = setDates(data);
            setForm(data1);
            setForm((prevForm) => ({
                ...prevForm,
                zone: data1.zone.trim(),
            }));
            setFiles(data1);
        } catch (err) {
            setError(err.error);
            setTimeout(() => setError(null), 3000);
        }
    };

    const loadZones = async () => {
        try {
            const zones = (await fetchZones()).data || [];
            setZones(
                zones
                    .filter((z) => z.conactName)
                    .map((z) => z.conactName.trim())
            );
        } catch (err) {
            setError(err.error);
            setTimeout(() => setError(null), 3000);
        }
    };

    useEffect(() => {
        loadZones();
        if ((mode === "edit" || mode === "view") && id) {
            loadForm();
            setIsFormSubmitable(true);
        }
    }, [mode, id]);

    const fetchAllBranches = async (zone) => {
        const branches = await fetchBranches(zone);
        const codes = (branches.data || [])
            .filter((b) => b.branchCode)
            .map((b) => b.branchCode.trim());
        setBranchCodeList(codes);
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;

        const resetFields = {
            yesNoC: [
                "ifNotReasonForNotMembership",
                "ifYesLastOfficerName",
                "designationA",
                "lastMeetingDateA",
            ],
            yesNoF: ["ifNotReasonA"],
            yesNoG: ["ifNotCheckPointRelatedSuggestion"],
            yesNoL: ["ifNotReasonB"],
            yesNoI: ["ifNotReasonC"],
            yesNoD: ["ifNotThenSuggestion"],
        };

        if (name === "zone") {
            setForm((f) => ({
                ...f,
                zone: value,
                area: "",
                branchCode: "",
                branchName: "",
            }));
            fetchAllBranches(value);
            const region = await regionInHindi(value);
            setForm((f) => ({ ...f, area: region.data.regionInHindi }));
        } else if (name === "branchCode") {
            setForm((f) => ({ ...f, branchCode: value }));
            const bName = await branchNameInHindibyBranchCode(value);
            setForm((f) => ({
                ...f,
                branchName: `${bName.data?.[0]?.branchName}/${bName.data?.[0]?.branchNameEnglish}`,
            }));
            setIsFormSubmitable(!!form.zone && !!value);
        } else if (resetFields[name]) {
            setForm((f) => ({
                ...f,
                [name]: value,
                ...resetFields[name].reduce((acc, key) => {
                    acc[key] = value === "हाँ" ? "" : "";
                    return acc;
                }, {}),
            }));
        } else {
            setForm((f) => ({ ...f, [name]: value }));
        }
        const updated = { ...form };
        console.log(updated);
    };

    const handleFileChange = async (e, idx) => {
        const file = e.target.files[0];
        if (!file) return;
        const base64 = await convertToBase64(file);
        console.log(base64);
        setFileData((prev) => ({
            ...prev,
            [`attachment${idx + 1}`]: base64.split(",")[1],
            [`fileName${idx + 1}`]: file.name,
            [`fileId${idx + 1}`]: null,
        }));
    };

    const handleFileDelete = (idx) => {
        setFileData((prev) => ({
            ...prev,
            [`attachment${idx + 1}`]: null,
            [`fileName${idx + 1}`]: null,
            [`fileId${idx + 1}`]: null,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let response;
            const finalFormData = { ...form, ...fileData };

            if (mode === "edit" && id) {
                response = await updateForm(id, finalFormData);
            } else {
                response = await createForm(finalFormData);
            }

            if (response.success) {
                window.location.hash = "#/online-branch-inspection-report";
            } else {
                const err = response.error;
                if (err?.response?.status === 409) {
                    if (!window.confirm(err.response.data)) return;
                    navigate("/online-branch-inspection-report");
                } else {
                    alert("Something went wrong while submitting the form.");
                }
            }
        } catch (err) {
            if (err && err.status !== 200) {
                const duplicateRRN = err?.response?.data?.message;
                const confirmRoute = window.confirm(duplicateRRN);
                if (!confirmRoute) return;
                navigate("/online-branch-inspection-report");
            }
            console.error("Submit Error:", err);
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
                                    <h1>{"ऑनलाइन शाखा निरीक्षण रिपोर्ट"}</h1>
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
                        handleFileChange={handleFileChange}
                        handleFileDelete={handleFileDelete}
                        mode={mode}
                        zones={zones}
                        branchCode={branchCodeList}
                        fileData={fileData}
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
