import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createForm, updateForm } from "../../service/apiService";

const FormButtons = ({
    loading,
    mode,
    isFormSubmitable,
    form,
    onSubmitToParent,
    sendFormData,
}) => {
    const navigate = useNavigate();
    const [canAllButtonShow, setCanAllButtonShow] = useState(false);
    const [formData, setFormData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { id } = useParams();
    const submitFormStyle = {
        marginLeft: "16px",
        padding: "9px",
        lineHeight: "1.2",
        fontSize: "13px",
        backgroundColor: "#0075be",
    };

    const saveAsDraft = async (e) => {
        console.log("asdfasd", mode);
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response =
                form.formStatus === "SAVE_AS_DRAFT" ||
                (!!formData && (formData?.recordId || id))
                    ? await updateForm(
                          formData?.recordId ? formData?.recordId : id,
                          {
                              ...form,
                              formStatus: "SAVE_AS_DRAFT",
                          }
                      )
                    : await createForm({
                          ...form,
                          formStatus: "SAVE_AS_DRAFT",
                      });
            if (response.success) {
                setCanAllButtonShow(true);
                setFormData(response.data);
                sendFormData(response.data);
                alert("Your record saved in Draft");
            } else {
                const err = response.error;
                if (err?.response?.status === 409) {
                    const duplicateRRN = err?.response?.data?.message;
                    const confirmRoute = window.confirm(duplicateRRN);
                    if (!confirmRoute) return;
                    navigate("/hindi-qpr-branch-1-updated");
                }
            }
        } catch (error) {
            console.error("Submit Error", error);
            const err = error.error;
            if (err?.response?.status === 409) {
                const duplicateRRN = err?.response?.data?.message;
                const confirmRoute = window.confirm(duplicateRRN);
                if (!confirmRoute) return;
                navigate("/hindi-qpr-branch-1-updated");
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    const viewPDF = () => {
        const port1 = window.location.port;
        const iidd = formData?.recordId ? formData?.recordId : id;
        const formType = "branch";
        let URL = "";
        if (!!port1) {
            URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/pdf?id=${iidd}&type=${formType}`;
        } else {
            URL = `${window.location.protocol}//${window.location.hostname}/pdf?id=${iidd}&type=${formType}`;
        }
        window.open(URL, "_blank");
    };

    return (
        <div className="button-group mt-3 d-flex justify-content-center">
            <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate("/hindi-qpr-branch-1-updated")}
            >
                Cancel
            </button>
            {(mode === "add" ||
                (mode === "edit" &&
                    !!form &&
                    form.formStatus === "SAVE_AS_DRAFT")) && (
                <button
                    className="btn btn-secondary"
                    style={submitFormStyle}
                    type="button"
                    disabled={loading || !isFormSubmitable}
                    onClick={(e) => saveAsDraft(e, "SAVE_AS_DRAFT")}
                >
                    {isSubmitting ? "Updating..." : "Save As Draft"}
                </button>
            )}
            {((mode === "add" && canAllButtonShow) || mode === "edit") && (
                <>
                    {(form?.formStatus === "SAVE_AS_DRAFT" ||
                        formData?.formStatus === "SAVE_AS_DRAFT") && (
                        <button
                            className="btn btn-secondary"
                            style={submitFormStyle}
                            type="button"
                            onClick={viewPDF}
                            disabled={
                                !(
                                    mode !== "view" ||
                                    form?.formStatus === "SAVE_AS_DRAFT" ||
                                    form?.formStatus === "SUBMIT"
                                )
                            }
                        >
                            View In PDF
                        </button>
                    )}
                    {(mode !== "view" ||
                        form?.formStatus === "SAVE_AS_DRAFT" ||
                        form?.formStatus === "SUBMIT") && (
                        <button
                            style={submitFormStyle}
                            className="btn btn-primary"
                            type="button"
                            disabled={loading || !isFormSubmitable}
                            onClick={(e) =>
                                onSubmitToParent(e, formData?.recordId)
                            }
                        >
                            {loading
                                ? mode === "add"
                                    ? "Submitting..."
                                    : "Updating..."
                                : mode === "add"
                                ? "Submit"
                                : "Update"}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default FormButtons;
