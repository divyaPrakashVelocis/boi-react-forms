import { useNavigate } from "react-router-dom";
import "./../Hindi.css";

const TableActions = ({ canAdd, canExport, recordLength, exportToExcel }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-between mb-2 brsr-table-actions">
            <div className="flex-grow-1">
                {canExport && recordLength > 0 && (
                    <button
                        className="btn btn-primary brsr-form-submit-style"
                        style={{ backgroundColor: "#0075be" }}
                        onClick={exportToExcel}
                    >
                        Export to Excel
                    </button>
                )}
            </div>
            <div className="flex-grow-1 text-end">
                {canAdd && (
                    <button
                        className="btn btn-primary brsr-form-submit-style"
                        style={{ backgroundColor: "#0075be" }}
                        onClick={() => navigate("/brsr-1/add")}
                    >
                        Add New Record
                    </button>
                )}
            </div>
        </div>
    );
};

export default TableActions;
