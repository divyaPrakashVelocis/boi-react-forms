import { useNavigate } from "react-router-dom";
import "./../Hindi.css";
import { useEffect, useState } from "react";

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
            className="table-scroll-main table-responsive zone-1-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <tbody>
                    <tr>
                        <td key={-1} className="zone-1-header-cell-style">
                            {"Sr. No"}
                        </td>
                        {itemFieldDetailList.map((opt, i) => (
                            <td key={i} className="zone-1-header-cell-style">
                                {opt.columnName}
                            </td>
                        ))}
                        <td
                            key={itemFieldDetailList.length}
                            className="zone-1-header-cell-style"
                        >
                            {"Status"}
                        </td>
                        <td
                            key={itemFieldDetailList.length + 1}
                            className="zone-1-header-cell-style"
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
                                <td className="cell-style">{user.rrn}</td>

                                {/*  */}
                                <td className="cell-style">{user.qtr}</td>
                                <td className="cell-style">{user.year}</td>
                                <td className="cell-style">{user.zone}</td>
                                <td className="cell-style">{user.report}</td>
                                <td className="cell-style">
                                    {user.bankNameAddress}
                                </td>
                                <td className="cell-style">
                                    {user.officerStdCode}
                                </td>
                                <td className="cell-style">
                                    {user.officerPhone}
                                </td>
                                <td className="cell-style">
                                    {user.officerEmail}
                                </td>
                                <td className="cell-style">
                                    {user.totalMeetingsCmdLevel}
                                </td>
                                <td className="cell-style">
                                    {user.meetingsInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.totalDocumentsIssuedCmd}
                                </td>
                                <td className="cell-style">
                                    {user.documentsInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.totalDocumentsIssued}
                                </td>
                                <td className="cell-style">
                                    {user.documentsIssuedBilingual}
                                </td>
                                <td className="cell-style">
                                    {user.documentsIssuedEnglishOnly}
                                </td>
                                <td className="cell-style">
                                    {user.documentsIssuedHindiOnly}
                                </td>
                                <td className="cell-style">
                                    {user.totalLettersReceivedHindi}
                                </td>
                                <td className="cell-style">
                                    {user.noReplyRequiredHindiLetters}
                                </td>
                                <td className="cell-style">
                                    {user.repliedInHindiBilingual}
                                </td>
                                <td className="cell-style">
                                    {user.repliedInEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_LettersReceivedEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_RepliedInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_RepliedInEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_NoReplyRequired}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_LettersReceivedEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_RepliedInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_RepliedInEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_NoReplyRequired}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_LettersSentHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_LettersSentEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_TotalLettersSent}
                                </td>
                                <td className="cell-style">
                                    {user.regionA_PercentageSentInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_LettersSentHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_LettersSentEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_TotalLettersSent}
                                </td>
                                <td className="cell-style">
                                    {user.regionB_PercentageSentInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionC_LettersSentHindi}
                                </td>
                                <td className="cell-style">
                                    {user.regionC_LettersSentEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.regionC_TotalLettersSent}
                                </td>
                                <td className="cell-style">
                                    {user.regionC_PercentageSentInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.pagesNotedInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.pagesNotedInEnglish}
                                </td>
                                <td className="cell-style">
                                    {user.totalNotingPages}
                                </td>
                                <td className="cell-style">
                                    {user.eOfficeHindiNotesSent}
                                </td>
                                <td className="cell-style">
                                    {user.workshopsConducted}
                                </td>
                                <td className="cell-style">
                                    {user.officersTrained}
                                </td>
                                <td className="cell-style">
                                    {user.staffTrained}
                                </td>
                                <td className="cell-style">
                                    {user.committeeMeetingDate}
                                </td>
                                <td className="cell-style">
                                    {user.subordinateCommitteesCount}
                                </td>
                                <td className="cell-style">
                                    {user.subordinateMeetingsThisQuarter}
                                </td>
                                <td className="cell-style">
                                    {user.agendaMinutesInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.mobileInternetBankingInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.passbookEntriesInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.loanRecoveryLettersInHindi}
                                </td>
                                <td className="cell-style">
                                    {user.formsAreBilingual}
                                </td>
                                <td className="cell-style">
                                    {user.notableActivitiesSummary}
                                </td>
                                <td className="cell-style">
                                    {user.committeeChairpersonName}
                                </td>
                                <td className="cell-style">
                                    {user.chairpersonDesignation}
                                </td>
                                <td className="cell-style">
                                    {user.contactStdCodePhone}
                                </td>
                                <td className="cell-style">
                                    {user.contactFax}
                                </td>
                                <td className="cell-style">
                                    {user.contactEmail}
                                </td>
                                {/*  */}
                                <td className="cell-style">{user.author}</td>
                                <td className="cell-style">{user.createdOn}</td>
                                <td className="cell-style">
                                    <span
                                        style={{
                                            color:
                                                user.formStatus ===
                                                "SAVE_AS_DRAFT"
                                                    ? "red"
                                                    : user.formStatus ===
                                                      "SUBMIT"
                                                    ? "green"
                                                    : "inherit",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {user.formStatus === "SAVE_AS_DRAFT"
                                            ? "Draft"
                                            : user.formStatus === "SUBMIT"
                                            ? "Submit"
                                            : ""}
                                    </span>
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
                                                        `/hindi-qpr-zone-1-updated/view/${user.recordId}`
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
                                                        `/hindi-qpr-zone-1-updated/edit/${user.recordId}`
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
                                colSpan={itemFieldDetailList.length + 1}
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
