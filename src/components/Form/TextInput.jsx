import { useState } from "react";
import "./../Hindi.css";

const TextInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
    type = "text",
    pattern = {},
    errorMessage = "",
    placeholder,
    isDigit = false,
}) => {
    const [error, setError] = useState("");
    const handleBlur = () => {
        setError("");
        if (
            pattern &&
            !!Object.values(pattern).length &&
            value &&
            !new RegExp(pattern).test(value)
        ) {
            setError(errorMessage);
        }
    };

    const onInputValue = (e) => {
        if (isDigit) e.target.value = e.target.value.replace(/[^\d]/g, "");
    };
    return (
        <div className="form-group online-branch-form-style">
            <label className={`mb-2${label ? "" : " sr-only"}`} htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type={type}
                className="form-control online-branch-form-style"
                name={name}
                value={value || ""}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onInput={(e) => onInputValue(e)}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default TextInput;
