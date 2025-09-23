const ReadOnlyInputField = ({
    label,
    name,
    value,
    required = false,
    colSize = "col-md-4",
    inputRef = null,
}) => {
    return (
        <div className={`${colSize}`}>
            <label
                className={`form-label${label ? "" : " sr-only"}`}
                htmlFor={name}
            >
                {label}
                {required && <span style={{ color: "red" }}> *</span>}
            </label>
            <input
                id={name}
                type="text"
                className={`form-control`}
                name={name}
                value={value}
                ref={inputRef}
                disabled
                required={required}
            />
        </div>
    );
};

export default ReadOnlyInputField;
