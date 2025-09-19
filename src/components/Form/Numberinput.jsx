import { useState } from "react";
import "./../advocate-empanelled.css";

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
        console.log("ssssssss");
        let hasError = false;
        if (pattern && value && !new RegExp(pattern).test(value)) {
            setError(errorMessage);
            hasError = true;
        } else {
            setError(""); // Clear error if valid
            hasError = false;
        }
        onChange({
            target: {
                name: name,
                value: value,
                hasError: hasError,
            },
        });
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;

        // Basic numeric check
        if (inputValue && isNaN(inputValue)) {
            return; // Don't update if not a number
        }

        // Enforce max length for STD code (5 digits)
        if (valid === "stdCode" && inputValue.length > 5) {
            return;
        }

        if (valid === "mobile" && inputValue.length > 10) {
            return;
        }

        // Call the parent's onChange
        onChange(e);
    };

    return (
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
                type={type}
                className="form-control advocate-empanelled-new"
                name={name}
                value={value || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                min={min}
                max={max}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default NumberInput;
