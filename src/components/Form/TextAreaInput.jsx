import "./../Hindi.css";

const TextAreaInput = ({
    label,
    name,
    value = "",
    onChange,
    required = false,
    disabled = false,
    maxLength = 1000,
    rows = 4,
}) => (
    <div className="form-group hindi-branch-new">
        <label
            className={`mb-1${label ? "" : " sr-only"}`}
            htmlFor={name}
            style={{ color: "#45494d" }}
        >
            {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <textarea
            id={name}
            className="form-control hindi-branch-new"
            name={name}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            rows={rows}
        />
        <div className="d-flex justify-content-between">
            <span>
                {value && value.length === maxLength && (
                    <small
                        style={{
                            color: "red",
                            display: "block",
                            marginTop: "4px",
                        }}
                    >
                        {`अधिकतम ${maxLength} अक्षर ही लिख सकते हैं`}
                    </small>
                )}
            </span>
            {!!value && value?.length > 0 && (
                <span>
                    {value?.length}/{maxLength}
                </span>
            )}
        </div>
    </div>
);

export default TextAreaInput;
