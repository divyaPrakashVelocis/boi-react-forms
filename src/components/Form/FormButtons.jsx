import { useNavigate } from "react-router-dom";

const FormButtons = ({ loading, mode, isFormSubmitable }) => {
    const navigate = useNavigate();

    const submitFormStyle = {
        padding: "9px",
        lineHeight: "1.2",
        fontSize: "13px",
        backgroundColor: "#0075be",
    };
    return (
        <div className="button-group mt-3 d-flex justify-content-center">
            <button
                style={{ marginRight: "5px" }}
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate("/advocate-empanelled")}
            >
                {mode === "add" ? "Cancel" : "Back"}
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
