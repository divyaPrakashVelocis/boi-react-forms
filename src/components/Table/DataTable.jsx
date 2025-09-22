import { useNavigate } from "react-router-dom";
import "./../Hindi.css";
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
            className="table-scroll-main table-responsive branch-2-table"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto",
            }}
        >
            <table className="table-list table table-bordered">
                <thead style={{ verticalAlign: "top" }}>
                    <tr>
                        <th key={-1} className="zone-1-header-cell-style">
                            {"Sr. No"}
                        </th>
                        {itemFieldDetailList.map((opt, i) => (
                            <th key={i} className="zone-1-header-cell-style">
                                {opt.columnName}
                            </th>
                        ))}
                        <th
                            key={itemFieldDetailList.length}
                            className="zone-1-header-cell-style"
                        >
                            {"Status"}
                        </th>
                        <th
                            key={itemFieldDetailList.length + 1}
                            className="zone-1-header-cell-style"
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

                                {/* -----------------------------  */}

                                <td className="cell-style">{user.qtr}</td>
                                <td className="cell-style">{user.year}</td>
                                <td className="cell-style">{user.zone}</td>
                                <td className="cell-style">
                                    {user.branchCode}
                                </td>
                                <td className="cell-style">
                                    {user.branchName}
                                </td>
                                <td className="cell-style">
                                    {user.officeNotifiedUnderRule10}
                                </td>
                                <td className="cell-style">
                                    {user.totalSubordinateOffices_1a}
                                </td>
                                <td className="cell-style">
                                    {user.notifiedSubordinateOffices_1a}
                                </td>
                                <td className="cell-style">
                                    {user.actionForRemainingOffices_1a}
                                </td>

                                <td className="cell-style">
                                    {user.hindiOfficers_2a}
                                </td>
                                <td className="cell-style">
                                    {user.hindiEmploees_2a}
                                </td>
                                <td className="cell-style">
                                    {user.totalOfficersEmployees_2a}
                                </td>
                                <td className="cell-style">
                                    {user.secretarialOfficers_2a}
                                </td>
                                <td className="cell-style">
                                    {user.secretarialEmploees_2a}
                                </td>
                                <td className="cell-style">
                                    {user.secretarialtotalOfficersEmployees_2a}
                                </td>
                                <td className="cell-style">
                                    {user.knowledgeHindiOfficersExecutive_2a}
                                </td>
                                <td className="cell-style">
                                    {user.knowledgeHindiOfficersProficiency_2a}
                                </td>
                                <td className="cell-style">
                                    {user.knowledgeHindiEmploeesExecutive_2a}
                                </td>
                                <td className="cell-style">
                                    {user.knowledgeHindiEmploeesProficiency_2a}
                                </td>
                                <td className="cell-style">
                                    {user.knowledgeHindiTotal_2a}
                                </td>
                                <td className="cell-style">
                                    {
                                        user.undergoingTrainingOfficersExecutive_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {
                                        user.undergoingTrainingOfficersProficiency_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {
                                        user.undergoingTrainingEmploeesExecutive_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {
                                        user.undergoingTrainingEmploeesProficiency_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {user.undergoingTrainingTotal_2a}
                                </td>
                                <td className="cell-style">
                                    {user.remainingTrainingOfficersExecutive_2a}
                                </td>
                                <td className="cell-style">
                                    {
                                        user.remainingTrainingOfficersProficiency_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {user.remainingTrainingEmploeesExecutive_2a}
                                </td>
                                <td className="cell-style">
                                    {
                                        user.remainingTrainingEmploeesProficiency_2a
                                    }
                                </td>
                                <td className="cell-style">
                                    {user.remainingTrainingTotal_2a}
                                </td>

                                <td className="cell-style">
                                    {user.totalStenographers_2b}
                                </td>
                                <td className="cell-style">
                                    {user.hindiTrainedStenographers_2b}
                                </td>
                                <td className="cell-style">
                                    {user.stenographersWorkingInHindi_2b}
                                </td>
                                <td className="cell-style">
                                    {user.stenographersRemainingTraining_2b}
                                </td>
                                <td className="cell-style">
                                    {user.totalTypistsClerks_2b}
                                </td>
                                <td className="cell-style">
                                    {user.hindiTrainedTypistsClerks_2b}
                                </td>
                                <td className="cell-style">
                                    {user.typistsClerksWorkingInHindi_2b}
                                </td>
                                <td className="cell-style">
                                    {user.typistsClerksRemainingTraining_2b}
                                </td>
                                <td className="cell-style">
                                    {user.totalOtherStaff_2b}
                                </td>
                                <td className="cell-style">
                                    {user.hindiTrainedOtherStaff_2b}
                                </td>
                                <td className="cell-style">
                                    {user.otherStaffWorkingInHindi_2b}
                                </td>
                                <td className="cell-style">
                                    {user.otherStaffRemainingTraining_2b}
                                </td>

                                <td className="cell-style">
                                    {user.officerTranslators_2c}
                                </td>
                                <td className="cell-style">
                                    {user.employeeTranslators_2c}
                                </td>
                                <td className="cell-style">
                                    {user.totalTranslators_2c}
                                </td>
                                <td className="cell-style">
                                    {user.officerReceivedTraining_2c}
                                </td>
                                <td className="cell-style">
                                    {user.employeeReceivedTraining_2c}
                                </td>
                                <td className="cell-style">
                                    {user.totalReceivedTraining_2c}
                                </td>
                                <td className="cell-style">
                                    {user.officerRemainingTraining_2c}
                                </td>
                                <td className="cell-style">
                                    {user.employeeRemainingTraining_2c}
                                </td>
                                <td className="cell-style">
                                    {user.totalRemainingTraining_2c}
                                </td>

                                <td className="cell-style">
                                    {user.totalStaffForHindiTyping_3}
                                </td>
                                <td className="cell-style">
                                    {user.trainedInHindiTyping_3}
                                </td>
                                <td className="cell-style">
                                    {user.workingInHindiTyping_3}
                                </td>

                                <td className="cell-style">
                                    {user.totalComputers_4}
                                </td>
                                <td className="cell-style">
                                    {user.unicodeEnabledComputers_4}
                                </td>
                                <td className="cell-style">
                                    {user.percentageWorkInHindi_4}
                                </td>

                                <td className="cell-style">
                                    {user.totalActsManuals_5}
                                </td>
                                <td className="cell-style">
                                    {user.bilingualActsManuals_5}
                                </td>
                                <td className="cell-style">
                                    {user.totalStandardForms_5}
                                </td>
                                <td className="cell-style">
                                    {user.bilingualStandardForms_5}
                                </td>

                                <td className="cell-style">
                                    {user.personnelWithHindiWorkOrders_6}
                                </td>
                                <td className="cell-style">
                                    {user.remainingPersonnelCount_6}
                                </td>

                                <td className="cell-style">
                                    {user.trainingProgram1Name_7}
                                </td>
                                <td className="cell-style">
                                    {user.trainingProgram1HindiHours_7}
                                </td>
                                <td className="cell-style">
                                    {user.trainingProgram1EnglishHours_7}
                                </td>
                                <td className="cell-style">
                                    {user.trainingProgram1MixedHours_7}
                                </td>

                                <td className="cell-style">
                                    {user.totalSections_8}
                                </td>
                                <td className="cell-style">
                                    {user.inspectedSections_8}
                                </td>
                                <td className="cell-style">
                                    {user.totalSubOffices_8}
                                </td>
                                <td className="cell-style">
                                    {user.inspectedSubOffices_8}
                                </td>
                                <td className="cell-style">
                                    {user.sectionsForHindiWork_8}
                                </td>

                                <td className="cell-style">
                                    {user.totalPublications_9}
                                </td>
                                <td className="cell-style">
                                    {user.publicationsInHindi_9}
                                </td>
                                <td className="cell-style">
                                    {user.publicationsInEnglish_9}
                                </td>

                                <td className="cell-style">
                                    {user.totalBookExpenditure_10}
                                </td>
                                <td className="cell-style">
                                    {user.hindiBookExpenditure_10}
                                </td>

                                <td className="cell-style">
                                    {user.totalSeniorOfficers_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersKnowingHindi_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersNotUsingHindi_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersUsingHindiUpTo25_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersUsingHindi26To50_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersUsingHindi51To75_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersUsingHindi76To99_11}
                                </td>
                                <td className="cell-style">
                                    {user.seniorOfficersUsingHindi100Percent_11}
                                </td>

                                <td className="cell-style">
                                    {user.totalJuniorOfficers_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersKnowingHindi_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersNotUsingHindi_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersUsingHindiUpTo25_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersUsingHindi26To50_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersUsingHindi51To75_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersUsingHindi76To99_12}
                                </td>
                                <td className="cell-style">
                                    {user.juniorOfficersUsingHindi100Percent_12}
                                </td>

                                <td className="cell-style">
                                    {user.hindiPost1Designation_13}
                                </td>
                                <td className="cell-style">
                                    {user.hindiPost1HqSanctioned_13}
                                </td>
                                <td className="cell-style">
                                    {user.hindiPost1HqVacant_13}
                                </td>
                                <td className="cell-style">
                                    {user.hindiPost1SubSanctioned_13}
                                </td>
                                <td className="cell-style">
                                    {user.hindiPost1SubVacant_13}
                                </td>

                                <td className="cell-style">
                                    {user.websiteUrl_14}
                                </td>
                                <td className="cell-style">
                                    {user.websiteFullyBilingual_14}
                                </td>
                                <td className="cell-style">
                                    {user.websiteLanguageSelectionOption_14}
                                </td>

                                <td className="cell-style">
                                    {user.hindiDayWeekDetails_15}
                                </td>
                                <td className="cell-style">
                                    {user.hindiSeminarDetails_15}
                                </td>
                                <td className="cell-style">
                                    {user.otherHindiEvents_15}
                                </td>
                                <td className="cell-style">
                                    {user.innovativeWorks_15}
                                </td>

                                <td className="cell-style">
                                    {user.memberOfNarakas_16}
                                </td>
                                <td className="cell-style">
                                    {user.lastNarakasMeetingDate_16}
                                </td>
                                <td className="cell-style">
                                    {user.deptHeadAttendedNarakasMeetings_16}
                                </td>

                                <td className="cell-style">
                                    {user.committeeChairmanName_17}
                                </td>
                                <td className="cell-style">
                                    {user.committeeChairmanDesignation_17}
                                </td>
                                <td className="cell-style">
                                    {user.committeeChairmanPhone_17}
                                </td>
                                <td className="cell-style">
                                    {user.committeeChairmanFax_17}
                                </td>
                                <td className="cell-style">
                                    {user.committeeChairmanEmail_17}
                                </td>

                                {/* -----------------------------  */}
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
                                                        `/hindi-qpr-branch-2-updated/view/${user.recordId}`
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
                                                        `/hindi-qpr-branch-2-updated/edit/${user.recordId}`
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
