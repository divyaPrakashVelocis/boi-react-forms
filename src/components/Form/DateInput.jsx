import "./../advocate-empanelled.css";

const DateInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
}) => (
    <div className="form-group advocate-empanelled-new">
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
            className="form-control advocate-empanelled-new"
            name={name}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
    </div>
);

export default DateInput;
