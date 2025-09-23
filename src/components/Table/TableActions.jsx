import { useNavigate } from "react-router-dom";
import "./../Hindi.css";

const TableActions = ({ canAdd, canExport, recordLength, exportToExcel }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-between kri-domestic-table-actions mb-2">
            <div className="flex-grow-1">
                {canExport && recordLength > 0 && (
                    <button
                        className="btn btn-primary kri-domestic-form-submit-style"
                        onClick={exportToExcel}
                    >
                        Export to Excel
                    </button>
                )}
            </div>
            <div className="flex-grow-1 text-end">
                {canAdd && (
                    <button
                        className="btn btn-primary kri-domestic-form-submit-style"
                        style={{ backgroundColor: "#0075be" }}
                        onClick={() => navigate("/kri-domestic/add")}
                    >
                        Add New Record
                    </button>
                )}
            </div>
        </div>
    );
};

export default TableActions;
