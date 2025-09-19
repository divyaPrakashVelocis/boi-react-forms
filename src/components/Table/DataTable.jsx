import { useNavigate } from "react-router-dom";
import "./../Hindi.css";
import { useEffect, useState } from "react";

const DataTable = ({
    records,
    headerJSON,
    filterParams,
    handleDelete,
    canView,
    canEdit,
    canDelete,
}) => {
    const navigate = useNavigate();

    const headerCellStyle = {
        padding: "4px",
        lineHeight: "1.2",
        fontSize: "11px",
        color: "#ffffff",
        backgroundColor: "#0075be",
    };

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
            className="table-scroll-main table-responsive online-branch-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <tbody>
                    <tr>
                        <td className="online-branch-header-cell-style">
                            Sr. No
                        </td>
                        {headerJSON.map((headerName, i) => (
                            <td
                                key={i}
                                className="online-branch-header-cell-style"
                            >
                                {Object.values(headerName)[0]}
                            </td>
                        ))}
                        <td className="online-branch-header-cell-style">
                            Actions
                        </td>
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
                                <td className="cell-style">{record.zone}</td>
                                <td className="cell-style">{record.area}</td>
                                <td className="cell-style">{record.year}</td>
                                <td className="cell-style">
                                    {record.branchCode}
                                </td>
                                <td className="cell-style">
                                    {record.branchName}
                                </td>
                                <td className="cell-style">
                                    {record.mainBranchName}
                                </td>
                                <td className="cell-style">
                                    {record.officerNameA}
                                </td>
                                <td className="cell-style">
                                    {record.officerNameNumber}
                                </td>
                                <td className="cell-style">
                                    {record.contactNoBranch}
                                </td>
                                <td className="cell-style">
                                    {record.emailBranch}
                                </td>
                                <td className="cell-style">{record.dateA}</td>
                                <td className="cell-style">
                                    {record.dateOfInspection}
                                </td>
                                <td className="cell-style">
                                    {record.actionOnLastInspection}
                                </td>
                                <td className="cell-style">
                                    {record.madDetails}
                                </td>
                                <td className="cell-style">
                                    {record.totalWorkerInBranch}
                                </td>
                                <td className="cell-style">
                                    {record.totalOfficerInBranch}
                                </td>
                                <td className="cell-style">
                                    {record.goodInHindiOfficer}
                                </td>
                                <td className="cell-style">
                                    {record.goodInHindiWorkers}
                                </td>
                                <td className="cell-style">
                                    {record.staffMemberOfficer}
                                </td>
                                <td className="cell-style">
                                    {record.staffMemberWorker}
                                </td>
                                <td className="cell-style">
                                    {record.notDoneDeskOfficer}
                                </td>
                                <td className="cell-style">
                                    {record.notDoneDeskWorker}
                                </td>
                                <td className="cell-style">
                                    {record.orderIssuedWorkers}
                                </td>
                                <td className="cell-style">
                                    {record.orderIssuedOfficers}
                                </td>
                                <td className="cell-style">
                                    {record.dateBInspection}
                                </td>
                                <td className="cell-style">
                                    {record.qtrProgressReportReceived}
                                </td>
                                <td className="cell-style">
                                    {record.helpingAction}
                                </td>
                                <td className="cell-style">
                                    {record.totalCountOfPatrachar}
                                </td>
                                <td className="cell-style">{record.fromA}</td>
                                <td className="cell-style">{record.fromB}</td>
                                <td className="cell-style">{record.fromC}</td>
                                <td className="cell-style">
                                    {record.rajbhashaDataC}
                                </td>
                                <td className="cell-style">
                                    {record.meetingOwner}
                                </td>
                                <td className="cell-style">
                                    {record.dateOfMeetingC}
                                </td>
                                <td className="cell-style">{record.yesNoA}</td>
                                <td className="cell-style">
                                    {record.meetingDateA}
                                </td>
                                <td className="cell-style">{record.yesNoB}</td>
                                <td className="cell-style">{record.yesNoC}</td>
                                <td className="cell-style">
                                    {record.ifYesLastOfficerName}
                                </td>
                                <td className="cell-style">
                                    {record.designationA}
                                </td>
                                <td className="cell-style">
                                    {record.lastMeetingDateA}
                                </td>
                                <td className="cell-style">
                                    {record.ifNotReasonForNotMembership}
                                </td>
                                <td className="cell-style">
                                    {record.previousMeetingDate}
                                </td>
                                <td className="cell-style">
                                    {record.branchManagerWasAvailable}
                                </td>
                                <td className="cell-style">{record.yesNoF}</td>
                                <td className="cell-style">
                                    {record.ifNotReasonA}
                                </td>
                                <td className="cell-style">{record.yesNoG}</td>
                                <td className="cell-style">
                                    {record.ifNotCheckPointRelatedSuggestion}
                                </td>
                                <td className="cell-style">{record.yesNoE}</td>
                                <td className="cell-style">{record.yesNoH}</td>
                                <td className="cell-style">{record.yesNoK}</td>
                                <td className="cell-style">{record.yesNoL}</td>
                                <td className="cell-style">
                                    {record.ifNotReasonB}
                                </td>
                                <td className="cell-style">{record.yesNoI}</td>
                                <td className="cell-style">
                                    {record.ifNotReasonC}
                                </td>
                                <td className="cell-style">{record.yesNoD}</td>
                                <td className="cell-style">
                                    {record.ifNotThenSuggestion}
                                </td>
                                <td className="cell-style">
                                    {record.explanationDetailsBox}
                                </td>
                                <td className="cell-style">
                                    {record.hindiCommentOnFiles}
                                </td>
                                <td className="cell-style">
                                    {record.fullDetailsTarget}
                                </td>
                                <td className="cell-style">
                                    {record.hindiModel}
                                </td>
                                <td className="cell-style">
                                    {record.boardDualTriple}
                                </td>
                                <td className="cell-style">
                                    {record.stampDualInBranch}
                                </td>
                                <td className="cell-style">
                                    {record.recordsFillingInHindi}
                                </td>
                                <td className="cell-style">
                                    {record.englishRegisterNoted}
                                </td>
                                <td className="cell-style">
                                    {record.titleInHindi}
                                </td>
                                <td className="cell-style">
                                    {record.applicationFilledInHindiByWorkers}
                                </td>
                                <td className="cell-style">
                                    {record.manakPatraUseing}
                                </td>
                                <td className="cell-style">{record.yesNoN}</td>
                                <td className="cell-style">{record.yesNoM}</td>
                                <td className="cell-style">
                                    {record.aboveOptionByCustomer}
                                </td>
                                <td className="cell-style">
                                    {record.hindiOptionCustomerNumber}
                                </td>
                                <td className="cell-style">{record.yesNoO}</td>
                                <td className="cell-style">
                                    {record.printingFacility}
                                </td>
                                <td className="cell-style">
                                    {record.availableComputerNumber}
                                </td>
                                <td className="cell-style">
                                    {record.unicodeAvailable}
                                </td>
                                <td className="cell-style">
                                    {record.hindiWorkPer}
                                </td>
                                <td className="cell-style">
                                    {record.hinidDiwasCelebration}
                                </td>
                                <td className="cell-style">
                                    {record.competionName}
                                </td>
                                <td className="cell-style">
                                    {record.narakasParticipation}
                                </td>
                                <td className="cell-style">
                                    {record.otherImportantWorkDoneByBranch}
                                </td>
                                <td className="cell-style">
                                    {record.inspectionOfficerComment}
                                </td>
                                <td className="cell-style">{record.nameA}</td>
                                <td className="cell-style">
                                    {record.designationB}
                                </td>
                                <td className="cell-style">
                                    {record.dateOfJoiningA}
                                </td>
                                <td className="cell-style">{record.mobileA}</td>
                                <td className="cell-style">
                                    {record.nameOfInspectionOfficer}
                                </td>
                                <td className="cell-style">
                                    {record.designationC}
                                </td>
                                <td className="cell-style">
                                    {record.createdOn}
                                </td>
                                <td className="cell-style">
                                    {record.authorName}
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
                                                        `/online-branch-inspection-report/view/${record.recordId}`
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
                                                        `/online-branch-inspection-report/edit/${record.recordId}`
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
