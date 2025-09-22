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
    maxLength = 1500,
    isFax = false,
}) => {
    const [error, setError] = useState("");
    const handleBlur = () => {
        setError("");
        let hasError = false;
        if (
            pattern &&
            !!Object.values(pattern).length &&
            value &&
            !new RegExp(pattern).test(value)
        ) {
            setError(errorMessage);
            hasError = true;
        }
        onChange({
            target: {
                name: name,
                value: value,
                hasError: hasError,
            },
        });
    };

    const onInputValue = (e) => {
        if (isDigit && !isFax) {
            e.target.value = e.target.value.replace(/[^\d]/g, "");
        } else if (isDigit && isFax) {
            e.target.value = e.target.value.replace(/[^\d+\-\s.]/g, "");
        }
    };

    return (
        <div className="form-group hindi-branch-new">
            <label className={`mb-2${label ? "" : " sr-only"}`} htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type={type}
                className="form-control hindi-branch-new"
                name={name}
                value={value || ""}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
                maxLength={maxLength}
                required={required}
                placeholder={placeholder}
                onInput={(e) => onInputValue(e)}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default TextInput;
