// import { useState } from "react";

// const TextInput = ({
//     label,
//     name,
//     value,
//     onChange,
//     required = false,
//     disabled = false,
//     type = "text",
//     pattern,
//     errorMessage = "",
//     placeholder,
//     isDigit = false,
// }) => {
//     const [error, setError] = useState("");

//     const handleBlur = () => {
//         setError("");
//         if (pattern && value && !new RegExp(pattern).test(value)) {
//             setError(errorMessage);
//         }
//     };

//     const handleChange = (e) => {
//         const newValue = isDigit
//             ? e.target.value.replace(/[^\d]/g, "")
//             : e.target.value;

//         const modifiedEvent = {
//             ...e,
//             target: {
//                 ...e.target,
//                 value: newValue,
//             },
//         };

//         onChange(modifiedEvent);
//     };

//     return (
//         <div className="form-group">
//             <label>
//                 {label} {required && <span style={{ color: "red" }}>*</span>}
//             </label>
//             <input
//                 type={type}
//                 className="form-control"
//                 name={name}
//                 value={value || ""}
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 disabled={disabled}
//                 required={required}
//                 placeholder={placeholder}
//             />
//             {error && <div className="text-danger mt-1">{error}</div>}
//         </div>
//     );
// };

// export default TextInput;

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
    pattern,
    errorMessage = "",
    placeholder,
    isDigit = false,
}) => {
    const [error, setError] = useState("");

    const handleBlur = () => {
        setError("");
        if (pattern && value && !new RegExp(pattern).test(value)) {
            setError(errorMessage);
        }
    };

    const handleChange = (e) => {
        const newValue = isDigit
            ? e.target.value.replace(/[^\d]/g, "")
            : e.target.value;

        // Pass name and newValue explicitly in the event-like object
        onChange({
            target: {
                name,
                value: newValue,
            },
        });
    };

    return (
        <div className="form-group brsr-form-style">
            <label className={`${label ? "" : " sr-only"}`} htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            <input
                id={name}
                type={type}
                className="form-control"
                name={name}
                value={value || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                maxLength={10}
            />
            {error && <div className="text-danger mt-1">{error}</div>}
        </div>
    );
};

export default TextInput;
