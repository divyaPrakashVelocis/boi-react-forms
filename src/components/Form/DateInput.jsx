import "./../inward-register.css";

const DateInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
}) => (
    <div className="form-group inward-register-new">
        <label
            className={`mb-1${label ? "" : " sr-only"}`}
            htmlFor={name}
            style={{ color: "#45494d" }}
        >
            {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
            id={name}
            type="date"
            className="form-control inward-register-new"
            name={name}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
    </div>
);

export default DateInput;
