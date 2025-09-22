import "./../Hindi.css";

const RadioInput = ({
    label,
    name,
    value,
    options = [],
    onChange,
    required = false,
    disabled = false,
}) => {
    return (
        <div className="form-group hindi-branch-2-new">
            <label
                style={{ marginRight: "15px" }}
                className={`${label ? "" : " sr-only"}`}
                htmlFor={name}
            >
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            {options.map((option, idx) => {
                const optValue =
                    typeof option === "object" ? option.value : option;
                const optLabel =
                    typeof option === "object" ? option.label : option;

                return (
                    <div
                        className="form-check form-check-inline mt-3"
                        key={idx}
                    >
                        <input
                            id={name}
                            className="form-check-input hindi-branch-2-new"
                            type="radio"
                            name={name}
                            value={optValue}
                            checked={value === optValue}
                            onChange={onChange}
                            disabled={disabled}
                            required={required && idx === 0} // Apply required to only one radio in the group
                        />
                        <label className="form-check-label">{optLabel}</label>
                    </div>
                );
            })}
        </div>
    );
};

export default RadioInput;
