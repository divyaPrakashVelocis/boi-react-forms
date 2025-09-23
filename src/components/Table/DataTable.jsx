import { useNavigate } from "react-router-dom";
import "./../Hindi.css";
import { useEffect, useState } from "react";

const DataTable = ({
    records,
    filterParams,
    handleDelete,
    canView,
    canEdit,
    canDelete,
    itemFieldDetailList = [],
}) => {
    const navigate = useNavigate();
    const actionLinkStyle = {
        color: "#3bbdf5",
        textDecoration: "underline",
        cursor: "pointer",
    };

    const [maxHeight, setMaxHeight] = useState(window.innerHeight * 0.67);

    useEffect(() => {
        const handleResize = () => {
            setMaxHeight(window.innerHeight - 250);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="table-scroll-main table-responsive kri-domestic-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <tbody>
                    <tr>
                        <td key={-1} className="kri-domestic-header-cell-style">
                            {"Sr. No"}
                        </td>
                        {itemFieldDetailList.map((opt, i) => (
                            <td
                                key={i}
                                className="kri-domestic-header-cell-style"
                            >
                                {opt.columnName}
                            </td>
                        ))}
                        <td
                            key={itemFieldDetailList.length + 1}
                            className="kri-domestic-header-cell-style"
                        >
                            {"Actions"}
                        </td>
                    </tr>
                    {records.length > 0 ? (
                        records.map((user, index) => (
                            <tr key={user.recordId}>
                                <td className="cell-style">
                                    {(filterParams.pageNumber - 1) *
                                        filterParams.pageSize +
                                        index +
                                        1}
                                </td>
                                <td className="cell-style">
                                    {user.recordRefNo}
                                </td>
                                <td className="cell-style">{user.zone}</td>
                                <td className="cell-style">{user.branch}</td>
                                <td className="cell-style">{user.solId}</td>
                                <td className="cell-style">
                                    {user.branchType}
                                </td>
                                <td className="cell-style">{user.year}</td>
                                <td className="cell-style">{user.qtrEnded}</td>
                                <td className="cell-style">
                                    {user.advWithoutChargeCreated}
                                </td>
                                <td className="cell-style">
                                    {user.loanWithoutConstrVerification}
                                </td>
                                <td className="cell-style">
                                    {user.pendingStockAudit}
                                </td>
                                <td className="cell-style">
                                    {user.maxEwsPendingDays}
                                </td>
                                <td className="cell-style">
                                    {user.ewsPendingPct}
                                </td>
                                <td className="cell-style">
                                    {user.pendingCpa3Legal}
                                </td>
                                <td className="cell-style">
                                    {user.unfilledKeyPositions}
                                </td>
                                <td className="cell-style">
                                    {user.eodNotCheckedDays}
                                </td>
                                <td className="cell-style">
                                    {user.auditPendingDays}
                                </td>
                                <td className="cell-style">
                                    {user.revenueLeakageAmt}
                                </td>
                                <td className="cell-style">
                                    {user.unreconciledMonths}
                                </td>
                                <td className="cell-style">
                                    {user.unresolvedComplaints}
                                </td>
                                <td className="cell-style">
                                    {user.voucherBundledDays}
                                </td>
                                <td className="cell-style">
                                    {user.notTransferred3Yrs}
                                </td>
                                <td className="cell-style">
                                    {user.noCgtmseClaim}
                                </td>
                                <td className="cell-style">
                                    {user.noSarfaesiAction}
                                </td>
                                <td className="cell-style">
                                    {user.chequeBooksReturned}
                                </td>
                                <td className="cell-style">
                                    {user.securityRiskRating}
                                </td>
                                <td className="cell-style">
                                    {user.safetyRiskRating}
                                </td>
                                <td className="cell-style">
                                    {user.housingLoan}
                                </td>
                                <td className="cell-style">
                                    {user.vehicleLoan}
                                </td>
                                <td className="cell-style">
                                    {user.advanceAmountNotUpdated}
                                </td>
                                <td className="cell-style">
                                    {user.monthsPrsr}
                                </td>

                                <td className="cell-style">{user.createdOn}</td>
                                <td className="cell-style">
                                    {user.authorName}
                                </td>
                                <td
                                    style={{
                                        whiteSpace: "nowrap",
                                        padding: "4px",
                                        lineHeight: "1.2",
                                        fontSize: "12px",
                                    }}
                                >
                                    {[
                                        canView && (
                                            <a
                                                key="view"
                                                style={actionLinkStyle}
                                                onClick={() =>
                                                    navigate(
                                                        `/kri-domestic/view/${user.recordId}`
                                                    )
                                                }
                                            >
                                                View
                                            </a>
                                        ),
                                        canEdit && (
                                            <a
                                                key="edit"
                                                style={actionLinkStyle}
                                                onClick={() =>
                                                    navigate(
                                                        `/kri-domestic/edit/${user.recordId}`
                                                    )
                                                }
                                            >
                                                Edit
                                            </a>
                                        ),
                                        canDelete && (
                                            <a
                                                key="delete"
                                                style={actionLinkStyle}
                                                onClick={() =>
                                                    handleDelete(user)
                                                }
                                            >
                                                Delete
                                            </a>
                                        ),
                                    ]
                                        .filter(Boolean)
                                        .reduce((prev, curr) => [
                                            prev,
                                            " / ",
                                            curr,
                                        ])}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={itemFieldDetailList.length + 3}
                                style={{ textAlign: "center" }}
                            >
                                No data Available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
