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
        <div className="form-group online-branch-form-style">
            <label
                className={`mb-1${label ? "" : " sr-only"}`}
                htmlFor={name}
                style={{ color: "#45494d" }}
            >
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type="file"
                className="form-control online-branch-form-style"
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
