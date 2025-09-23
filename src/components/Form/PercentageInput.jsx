import React from "react";

const PercentageInput = ({
    label,
    name,
    value,
    onChange,
    disabled = false,
    colSize = "col-md-4",
    maxLength = 5,
}) => {
    const handleInput = (e) => {
        let input = e.target.value.replace(/[^\d.]/g, "").slice(0, maxLength);

        // Ensure only one decimal point
        const dotCount = (input.match(/\./g) || []).length;
        if (dotCount > 1) input = input.substring(0, input.length - 1);

        // Cap value between 0 and 100
        const num = parseFloat(input);
        if (!isNaN(num)) {
            if (num > 100) input = "100";
            else if (num < 0) input = "0";
        }

        e.target.value = input;
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
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
                onInput={handleInput}
                pattern="^100(\.0{1,2})?$|^([0-9]{1,2})(\.\d{1,2})?$"
                disabled={disabled}
            />
        </div>
    );
};

export default PercentageInput;
