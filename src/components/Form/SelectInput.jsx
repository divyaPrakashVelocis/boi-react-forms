import { useState } from "react";
import Select from "react-select";
import "./../Hindi.css";
const SelectInput = ({
    label,
    name,
    value,
    options,
    onChange,
    isRequired = false,
    disabled = false,
    readonly = false,
}) => {
    const [error, setError] = useState("");

    const customStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: 38,
            borderColor: error ? "red" : base.borderColor,
            boxShadow: error ? "0 0 0 1px red" : base.boxShadow,
        }),
    };

    const formattedOptions = (options || []).map((opt) => {
        console.log("11111111111111111111");
        return typeof opt === "object" ? opt : { label: opt, value: opt };
    });
    const selectedOption = formattedOptions.find(
        (opt) => String(opt.value) === String(value)
    );

    const handleChange = (selected) => {
        console.log("333333333333333333333", selectedOption, options);
        setError(""); // Clear error on change
        onChange({
            target: {
                name,
                value: selected ? selected.value : "",
            },
        });
    };

    const handleBlur = () => {
        console.log("2222222222222222222222", selectedOption, options);
        if (isRequired && !value) {
            setError("This field is required.");
        } else {
            setError("");
        }
    };

    console.log("value", value);

    return (
        <div className="form-group brsr-form-style common-custom-select">
            {label && (
                <label className={`${label ? "" : " sr-only"}`} htmlFor={name}>
                    {label}{" "}
                    {isRequired && <span style={{ color: "red" }}>*</span>}
                </label>
            )}
            <Select
                id={name}
                className=""
                name={name}
                value={selectedOption || null}
                onChange={handleChange}
                onBlur={handleBlur}
                options={formattedOptions}
                isDisabled={disabled || readonly}
                isClearable
                styles={customStyles}
                placeholder="Choose an Option"
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default SelectInput;
