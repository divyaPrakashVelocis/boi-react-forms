import Select from "react-select";

const SelectField = ({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
    disabled = false,
    colSize = "col-md-4  common-custom-select",
    placeholder = "Choose an option",
}) => {
    const formattedOptions = options.map((opt) =>
        typeof opt === "string" ? { label: opt, value: opt } : opt
    );

    const selectedValue =
        formattedOptions.find((opt) => opt.value === value) || null;

    const handleChange = (selectedOption) => {
        onChange({
            target: {
                name,
                value: selectedOption ? selectedOption.value : "",
            },
        });
    };

    return (
        <div className={colSize}>
            <label
                className={`form-label${label ? "" : " sr-only"}`}
                htmlFor={name}
            >
                {label}
                {required && <span style={{ color: "red" }}> *</span>}
            </label>
            <Select
                id={name}
                name={name}
                value={selectedValue}
                onChange={handleChange}
                options={formattedOptions}
                isDisabled={disabled}
                placeholder={placeholder}
                isClearable={!required}
            />
        </div>
    );
};

export default SelectField;
