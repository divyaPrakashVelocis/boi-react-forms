import { useNavigate } from "react-router-dom";
import "./../inward-register.css";
import React, { useEffect, useState } from "react";

const DataTable = ({
    records = [],
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
            className="table-scroll-main table-responsive inward-register-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <thead>
                    <tr>
                        <th
                            key={-1}
                            className="inward-register-header-cell-style"
                            style={{ verticalAlign: "top" }}
                        >
                            {"Sr. No"}
                        </th>
                        {itemFieldDetailList.map((opt, i) => (
                            <th
                                key={i}
                                className="inward-register-header-cell-style"
                                style={{ verticalAlign: "top" }}
                            >
                                {opt.columnName}
                            </th>
                        ))}
                        <th
                            key={itemFieldDetailList.length + 1}
                            className="inward-register-header-cell-style"
                            style={{ verticalAlign: "top" }}
                        >
                            {"Actions"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {records.length > 0 ? (
                        records.map((user, index) => (
                            <tr key={user.recordId}>
                                <td className="cell-style">
                                    {(filterParams.pageNumber - 1) *
                                        filterParams.pageSize +
                                        index +
                                        1}
                                </td>

                                <td className="cell-style">{user.rrn}</td>
                                <td className="cell-style">{user.srNo}</td>
                                <td className="cell-style">
                                    {user.recievedFrom}
                                </td>
                                <td className="cell-style">{user.dateA}</td>
                                <td className="cell-style">
                                    {user.letterLanguage}
                                </td>
                                <td className="cell-style">{user.categary}</td>
                                <td className="cell-style">{user.scA}</td>
                                <td className="cell-style">{user.rn}</td>
                                <td className="cell-style">{user.rD}</td>
                                <td className="cell-style">{user.subject}</td>
                                <td className="cell-style">
                                    {user.assignedToDeskOfficer}
                                </td>
                                <td className="cell-style">{user.scB}</td>
                                <td className="cell-style">{user.mailDate}</td>
                                <td className="cell-style">{user.remarks}</td>
                                <td className="cell-style">
                                    {user.searchAdid}
                                </td>
                                <td className="cell-style">{user.dateB}</td>
                                <td className="cell-style">
                                    {user.nameOfComplainent}
                                </td>
                                <td className="cell-style">{user.mobileNo}</td>
                                <td className="cell-style">{user.address}</td>
                                <td className="cell-style">{user.emailId}</td>
                                <td className="cell-style">
                                    {user.nameOfStaff}
                                </td>
                                <td className="cell-style">{user.pfNo}</td>

                                {/* -----------------------------  */}
                                <td className="cell-style">{user.author}</td>
                                <td className="cell-style">{user.createdOn}</td>
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
                                                        `/inward-register/view/${user.recordId}`
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
                                                        `/inward-register/edit/${user.recordId}`
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
                                        .map((element, index, array) => (
                                            <React.Fragment key={element.key}>
                                                {element}
                                                {index < array.length - 1 &&
                                                    " / "}
                                            </React.Fragment>
                                        ))}
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
