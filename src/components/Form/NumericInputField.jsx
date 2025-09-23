import React from "react";

const NumericInputField = ({
    label,
    name,
    value,
    onChange,
    disabled = false,
    maxLength = 9,
    colSize = "col-md-4",
    className = "form-control",
}) => {
    const handleInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, maxLength);
    };

    return (
        <div className={`${colSize} mt-3`}>
            <label
                className={`form-label${label ? "" : " sr-only"}`}
                htmlFor={name}
            >
                {label}
            </label>
            <input
                id={name}
                type="text"
                className={className}
                name={name}
                value={value}
                onChange={onChange}
                onInput={handleInput}
                pattern={`^\\d{1,${maxLength}}$`}
                disabled={disabled}
            />
        </div>
    );
};

export default NumericInputField;
