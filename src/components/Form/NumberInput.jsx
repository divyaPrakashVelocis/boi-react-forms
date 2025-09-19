import { useState } from "react";
import { handleDecimalInput } from "../../utils/dateUtils";
import "./../Hindi.css";

const NumberInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
    min = 0,
    max = 100000000000,
    type = "text",
    pattern = {},
    errorMessage = "",
    placeholder,
    valid = "",
}) => {
    const [error, setError] = useState("");

    const handleBlur = () => {
        if ((min === 0 && max === 100000000000) || valid === "mobile") {
            if (pattern && value && !new RegExp(pattern).test(value)) {
                setError(errorMessage);
            } else {
                setError("");
            }
        } else if (min === 0 && max !== 100000000000) {
            if (value < min || value > max) {
                setError(errorMessage);
            } else {
                setError("");
            }
        }
    };
    return (
        <div className="form-group online-branch-form-style">
            <label
                className={`mb-1${label ? "" : " sr-only"}`}
                htmlFor={name}
                style={{ color: "#45494d" }}
            >
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type={type}
                className="form-control  online-branch-form-style"
                name={name}
                value={value || ""}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                min={min}
                max={max}
                onInput={(e) => handleDecimalInput(e, valid)}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default NumberInput;
