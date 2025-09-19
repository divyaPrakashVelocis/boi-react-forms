import { useNavigate } from "react-router-dom";

const FormButtons = ({ loading, mode, isFormSubmitable }) => {
    const navigate = useNavigate();

    const submitFormStyle = {
        marginLeft: "16px",
        padding: "9px",
        lineHeight: "1.2",
        fontSize: "13px",
        backgroundColor: "#0075be",
    };

    return (
        <div className="button-group mt-3 d-flex justify-content-center">
            <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate("/online-branch-inspection-report")}
            >
                Cancel
            </button>
            {mode !== "view" && (
                <button
                    style={submitFormStyle}
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading || !isFormSubmitable}
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
        </div>
    );
};

export default FormButtons;
