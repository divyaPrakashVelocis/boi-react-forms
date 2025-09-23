const FileInput = ({
    label,
    name,
    onChange,
    required = false,
    disabled = false,
    accept = "",
    idx,
}) => {
    return (
        <div className="form-group">
            <label className={`${label ? "" : " sr-only"}`} htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type="file"
                className="form-control"
                name={name}
                onChange={(e) => onChange(e, idx)}
                disabled={disabled}
                required={required}
                accept={accept}
            />
        </div>
    );
};

export default FileInput;
