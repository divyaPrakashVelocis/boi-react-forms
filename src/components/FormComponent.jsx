import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormSection from "./Form/FormSection";
import FormButtons from "./Form/FormButtons";
import { getFormName, initialForm } from "../utils/dateUtils";
import {
    createForm,
    fetchFormById,
    getAllZone,
    updateForm,
} from "../service/apiService";

function FormComponent({ mode }) {
    const [form, setForm] = useState(initialForm);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formName, setFormName] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [allZones, setAllZones] = useState([]);
    const formStyle = {
        padding: "9px",
        lineHeight: "1.2",
        fontSize: "13px",
    };

    const loadData = async () => {
        if ((mode === "edit" || mode === "view") && id) {
            try {
                const formData = (await fetchFormById(id)).data;
                setForm(formData);
            } catch (err) {
                console.error("Error loading form:", err);
            }
        }
        setFormName(getFormName());
        setIsFormValid(mode === "edit" ? true : false);
    };

    useEffect(() => {
        loadData();
    }, [mode, id]);

    const getAllZoneNames = async () => {
        try {
            const allZones = (await getAllZone()).data;
            console.log(allZones);
            setAllZones(allZones.zones || []);
        } catch (error) {}
    };

    useEffect(() => {
        getAllZoneNames();
    }, []);

    const handleChange = async (e) => {
        const { name, value, hasError = false } = e.target;
        console.log(name, value, hasError);

        setForm((prev) => {
            const updatedForm = { ...prev, [name]: value };
            const isValid =
                !!updatedForm.zone &&
                !!updatedForm.nameOfEmpanelledAdvocate &&
                !!updatedForm.dateEmp;
            setIsFormValid(isValid && !hasError);
            return updatedForm;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response =
                mode === "edit" && id
                    ? await updateForm(id, form)
                    : await createForm(form);

            if (response.success) {
                window.location.hash = "#/advocate-empanelled";
            } else {
                const err = response.error;
                if (err?.response?.status === 409) {
                    const duplicateRRN = err?.response?.data?.message;
                    const confirmRoute = window.confirm(duplicateRRN);
                    if (!confirmRoute) return;
                    navigate("/advocate-empanelled");
                }
            }
        } catch (err) {
            console.error("Submit Error", err);
        } finally {
            setLoading(false);
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
                        allZones={allZones}
                    />
                    <FormButtons
                        mode={mode}
                        loading={loading}
                        isFormSubmitable={isFormValid}
                    />
                </form>
            </div>
        </>
    );
}

export default FormComponent;
