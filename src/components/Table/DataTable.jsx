import { useNavigate } from "react-router-dom";
import { headerJSON } from "../../utils/dateUtils";
import "./../Hindi.css";
import { useEffect, useState } from "react";

const DataTable = ({
    records,
    filterParams,
    handleDelete,
    canView,
    canEdit,
    canDelete,
}) => {
    const navigate = useNavigate();

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
            className="table-scroll-main table-responsive brsr-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="brsr-header-cell-style">Sr. No</td>
                        {headerJSON.map((headerName, i) => (
                            <td key={i} className="brsr-header-cell-style">
                                {Object.values(headerName)[0]}
                            </td>
                        ))}
                        <td className="brsr-header-cell-style">Actions</td>
                    </tr>
                    {records.length > 0 ? (
                        records.map((record, index) => (
                            <tr key={record.recordId}>
                                <td className="cell-style">
                                    {(filterParams.pageNumber - 1) *
                                        filterParams.pageSize +
                                        index +
                                        1}
                                </td>
                                <td className="cell-style">{record.rrn}</td>
                                <td className="cell-style">{record.fgmo}</td>
                                <td className="cell-style">{record.zone}</td>
                                <td className="cell-style">{record.solid}</td>
                                <td className="cell-style">
                                    {record.branchName}
                                </td>
                                <td className="cell-style">
                                    {record.numStaff}
                                </td>
                                <td className="cell-style">{record.fy}</td>
                                <td className="cell-style">
                                    {record.eleApril}
                                </td>
                                <td className="cell-style">
                                    {record.petApril}
                                </td>
                                <td className="cell-style">
                                    {record.dieApril}
                                </td>
                                <td className="cell-style">{record.eleMay}</td>
                                <td className="cell-style">{record.dieMay}</td>
                                <td className="cell-style">{record.petMay}</td>
                                <td className="cell-style">{record.eleJune}</td>
                                <td className="cell-style">{record.dieJune}</td>
                                <td className="cell-style">{record.petJune}</td>
                                <td className="cell-style">{record.eleJuly}</td>
                                <td className="cell-style">{record.dieJuly}</td>
                                <td className="cell-style">{record.petJuly}</td>
                                <td className="cell-style">{record.eleAug}</td>
                                <td className="cell-style">{record.dieAug}</td>
                                <td className="cell-style">{record.petAug}</td>
                                <td className="cell-style">{record.eleSep}</td>
                                <td className="cell-style">{record.dieSep}</td>
                                <td className="cell-style">{record.petSep}</td>
                                <td className="cell-style">{record.eleOct}</td>
                                <td className="cell-style">{record.dieOct}</td>
                                <td className="cell-style">{record.petOct}</td>
                                <td className="cell-style">{record.eleNov}</td>
                                <td className="cell-style">{record.dieNov}</td>
                                <td className="cell-style">{record.petNov}</td>
                                <td className="cell-style">{record.eleDec}</td>
                                <td className="cell-style">{record.dieDec}</td>
                                <td className="cell-style">{record.petDec}</td>
                                <td className="cell-style">{record.eleJan}</td>
                                <td className="cell-style">{record.dieJan}</td>
                                <td className="cell-style">{record.petJan}</td>
                                <td className="cell-style">{record.eleFeb}</td>
                                <td className="cell-style">{record.dieFeb}</td>
                                <td className="cell-style">{record.petFeb}</td>
                                <td className="cell-style">{record.eleMar}</td>
                                <td className="cell-style">{record.dieMar}</td>
                                <td className="cell-style">{record.petMar}</td>
                                <td className="cell-style">{record.ttlDie}</td>
                                <td className="cell-style">{record.ttlEle}</td>
                                <td className="cell-style">{record.ttlPet}</td>
                                <td className="cell-style">{record.numCen}</td>
                                <td className="cell-style">
                                    {record.numSplit}
                                </td>
                                <td className="cell-style">
                                    {record.numWindow}
                                </td>
                                <td className="cell-style">
                                    {record.numCassette}
                                </td>
                                <td className="cell-style">{record.ttlCen}</td>
                                <td className="cell-style">
                                    {record.ttlSplit}
                                </td>
                                <td className="cell-style">
                                    {record.ttlWindow}
                                </td>
                                <td className="cell-style">
                                    {record.ttlCassette}
                                </td>
                                <td className="cell-style">{record.starCen}</td>
                                <td className="cell-style">
                                    {record.starSplit}
                                </td>
                                <td className="cell-style">
                                    {record.starWindow}
                                </td>
                                <td className="cell-style">
                                    {record.starCassette}
                                </td>
                                <td className="cell-style">
                                    {record.autherName}
                                </td>
                                <td className="cell-style">
                                    {record.createdOn}
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
                                                className="brsr-action-link-style"
                                                onClick={() =>
                                                    navigate(
                                                        `/brsr-1/view/${record.recordId}`
                                                    )
                                                }
                                            >
                                                View
                                            </a>
                                        ),
                                        canEdit && (
                                            <a
                                                key="edit"
                                                className="brsr-action-link-style"
                                                onClick={() =>
                                                    navigate(
                                                        `/brsr-1/edit/${record.recordId}`
                                                    )
                                                }
                                            >
                                                Edit
                                            </a>
                                        ),
                                        canDelete && (
                                            <a
                                                key="delete"
                                                className="brsr-action-link-style"
                                                onClick={() =>
                                                    handleDelete(record)
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
                                colSpan={headerJSON.length + 1}
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
