import "./../Hindi.css";

const DateInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
}) => (
    <div className="form-group hindi-branch-2-new">
        <label
            style={{ color: "#45494d" }}
            className={`mb-1${label ? "" : " sr-only"}`}
            htmlFor={name}
        >
            {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
            id={name}
            type="date"
            className="form-control hindi-branch-2-new"
            name={name}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
    </div>
);

export default DateInput;
