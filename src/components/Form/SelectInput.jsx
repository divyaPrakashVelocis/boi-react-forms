import Select from "react-select";
import "./../Hindi.css";

const SelectInput = ({
    label,
    name,
    value,
    options,
    onChange,
    required = false,
    disabled = false,
    readonly = false,
}) => {
    const customStyles = {
        control: (base) => ({
            ...base,
            minHeight: 38,
        }),
    };

    // Format options to standard { label, value }
    const formattedOptions =
        options && options.length > 0
            ? options.map((opt) =>
                  typeof opt === "object" ? opt : { label: opt, value: opt }
              )
            : value
            ? [{ label: value, value }]
            : [];

    // Find selected option
    const selectedOption = formattedOptions.find(
        (opt) => String(opt.value) === String(value)
    );

    const handleChange = (selected) => {
        onChange({
            target: {
                name,
                value: selected ? selected.value : "",
            },
        });
    };

    return (
        <div className="form-group hindi-zone-new common-custom-select">
            <label
                className={`mb-1${label ? "" : " sr-only"}`}
                htmlFor={name}
                style={{ color: "#45494d" }}
            >
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <Select
                id={name}
                className="hindi-zone-new"
                name={name}
                value={selectedOption || null}
                onChange={handleChange}
                options={formattedOptions}
                isDisabled={disabled || readonly}
                isClearable
                styles={customStyles}
                placeholder="विकल्प चुनें"
            />
        </div>
    );
};

export default SelectInput;
