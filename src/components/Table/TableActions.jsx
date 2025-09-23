import { useNavigate } from "react-router-dom";
import "./../inward-register.css";

const TableActions = ({ canAdd, canExport, recordLength, exportToExcel }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-between inward-register-table-actions mb-2">
            <div className="flex-grow-1">
                {canExport && recordLength > 0 && (
                    <button
                        className="btn btn-primary inward-register-form-submit-style"
                        onClick={exportToExcel}
                    >
                        Export to Excel
                    </button>
                )}
            </div>
            <div className="flex-grow-1 text-end">
                {canAdd && (
                    <button
                        className="btn btn-primary inward-register-form-submit-style"
                        style={{ backgroundColor: "#0075be" }}
                        onClick={() => navigate("/inward-register/add")}
                    >
                        Add New Record
                    </button>
                )}
            </div>
        </div>
    );
};

export default TableActions;
