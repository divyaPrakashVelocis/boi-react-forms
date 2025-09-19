import "./../Hindi.css";

const TextAreaInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
}) => (
    <div className="form-group online-branch-form-style">
        <label
            className={`mb-1${label ? "" : " sr-only"}`}
            htmlFor={name}
            style={{ color: "#45494d" }}
        >
            {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <textarea
            id={name}
            className="form-control online-branch-form-style"
            name={name}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            required={required}
            maxLength={250}
            rows={4}
        />
    </div>
);

export default TextAreaInput;
