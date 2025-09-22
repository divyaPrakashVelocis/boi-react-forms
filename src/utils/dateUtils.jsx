export const yesNo = ["हाँ", "नहीं"];
export const yesNoNOtImplemented = ["हाँ", "नहीं", "लागू नहीं"];

export const handleDecimalInput = (e, type) => {
    if (type === "0-100") {
        let value = e.target.value;

        // Remove invalid characters
        value = value.replace(/[^0-9.]/g, "");

        // Allow only one decimal point
        const parts = value.split(".");
        if (parts.length > 2) {
            value = parts[0] + "." + parts[1];
        }

        // Limit to two decimal places
        if (parts[1]?.length > 2) {
            parts[1] = parts[1].slice(0, 2);
            value = parts.join(".");
        }

        // Check value validity
        const num = parseFloat(value);
        if (!isNaN(num)) {
            if (num > 100) {
                e.target.setCustomValidity(
                    "कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                );
            } else {
                e.target.setCustomValidity(""); // clear message if valid
            }
        } else {
            e.target.setCustomValidity(
                "कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
            );
        }

        e.target.value = value;
    } else if (type === "mobile" || type === "stdCode") {
        e.target.value = e.target.value.replace(/[^\d]/g, "");
    } else {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 15);
    }
};

export const getFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = January, 3 = April

    if (month >= 3) {
        // Financial year starts in April
        const nextYearShort = (year + 1).toString().slice(-2);
        return `${year}-${nextYearShort}`;
    } else {
        const prevYear = year - 1;
        const currentYearShort = year.toString().slice(-2);
        return `${prevYear}-${currentYearShort}`;
    }
};

export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const getPreviousQuarterLastDate = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentQuarter = Math.floor(currentMonth / 3);
    let year = now.getFullYear();
    let lastMonthOfPrevQuarter;
    if (currentQuarter === 0) {
        lastMonthOfPrevQuarter = 11; // December
        year -= 1;
    } else {
        lastMonthOfPrevQuarter = currentQuarter * 3 - 1;
    }
    return new Date(year, lastMonthOfPrevQuarter + 1, 0);
};

export const getFormName = () => {
    const formN = `हिंदी क्यूपीआर शाखा मार्च भाग - II`;
    return formN;
};

const previousQuarterHindi = () => {
    const prevQuarterDate = getPreviousQuarterLastDate();
    const day = prevQuarterDate.getDate();
    const month = new Intl.DateTimeFormat("hi-IN", {
        month: "long",
    }).format(prevQuarterDate);
    const str = `${day} ${month}`;
    return str;
};

const previousFinancialYear = () => {
    const prevQuarterDate = getPreviousQuarterLastDate();
    const year = new Intl.DateTimeFormat("hi-IN", {
        year: "numeric",
    }).format(prevQuarterDate);
    const str = `${year}`;
    return str;
};

export const initialForm = {
    qtr: previousQuarterHindi(),
    year: previousFinancialYear(),
    zone: "",
    branchCode: "",
    branchName: "",
    officeNotifiedUnderRule10: "",
    totalSubordinateOffices_1a: "",
    notifiedSubordinateOffices_1a: "",
    actionForRemainingOffices_1a: "",

    hindiOfficers_2a: "",
    hindiEmploees_2a: "",
    totalOfficersEmployees_2a: "",
    secretarialOfficers_2a: "",
    secretarialEmploees_2a: "",
    secretarialtotalOfficersEmployees_2a: "",
    knowledgeHindiOfficersExecutive_2a: "",
    knowledgeHindiOfficersProficiency_2a: "",
    knowledgeHindiEmploeesExecutive_2a: "",
    knowledgeHindiEmploeesProficiency_2a: "",
    knowledgeHindiTotal_2a: "",
    undergoingTrainingOfficersExecutive_2a: "",
    undergoingTrainingOfficersProficiency_2a: "",
    undergoingTrainingEmploeesExecutive_2a: "",
    undergoingTrainingEmploeesProficiency_2a: "",
    undergoingTrainingTotal_2a: "",
    remainingTrainingOfficersExecutive_2a: "",
    remainingTrainingOfficersProficiency_2a: "",
    remainingTrainingEmploeesExecutive_2a: "",
    remainingTrainingEmploeesProficiency_2a: "",
    remainingTrainingTotal_2a: "",

    totalStenographers_2b: "",
    hindiTrainedStenographers_2b: "",
    stenographersWorkingInHindi_2b: "",
    stenographersRemainingTraining_2b: "",
    totalTypistsClerks_2b: "",
    hindiTrainedTypistsClerks_2b: "",
    typistsClerksWorkingInHindi_2b: "",
    typistsClerksRemainingTraining_2b: "",
    totalOtherStaff_2b: "",
    hindiTrainedOtherStaff_2b: "",
    otherStaffWorkingInHindi_2b: "",
    otherStaffRemainingTraining_2b: "",

    officerTranslators_2c: "",
    employeeTranslators_2c: "",
    totalTranslators_2c: "",
    officerReceivedTraining_2c: "",
    employeeReceivedTraining_2c: "",
    totalReceivedTraining_2c: "",
    officerRemainingTraining_2c: "",
    employeeRemainingTraining_2c: "",
    totalRemainingTraining_2c: "",

    totalStaffForHindiTyping_3: "",
    trainedInHindiTyping_3: "",
    workingInHindiTyping_3: "",

    totalComputers_4: "",
    unicodeEnabledComputers_4: "",
    percentageWorkInHindi_4: "",

    totalActsManuals_5: "",
    bilingualActsManuals_5: "",
    totalStandardForms_5: "",
    bilingualStandardForms_5: "",

    personnelWithHindiWorkOrders_6: "",
    remainingPersonnelCount_6: "",

    trainingProgram1Name_7: "",
    trainingProgram1HindiHours_7: "",
    trainingProgram1EnglishHours_7: "",
    trainingProgram1MixedHours_7: "",

    totalSections_8: "",
    inspectedSections_8: "",
    totalSubOffices_8: "",
    inspectedSubOffices_8: "",
    sectionsForHindiWork_8: "",

    totalPublications_9: "",
    publicationsInHindi_9: "",
    publicationsInEnglish_9: "",

    totalBookExpenditure_10: "",
    hindiBookExpenditure_10: "",

    totalSeniorOfficers_11: "",
    seniorOfficersKnowingHindi_11: "",
    seniorOfficersNotUsingHindi_11: "",
    seniorOfficersUsingHindiUpTo25_11: "",
    seniorOfficersUsingHindi26To50_11: "",
    seniorOfficersUsingHindi51To75_11: "",
    seniorOfficersUsingHindi76To99_11: "",
    seniorOfficersUsingHindi100Percent_11: "",

    totalJuniorOfficers_12: "",
    juniorOfficersKnowingHindi_12: "",
    juniorOfficersNotUsingHindi_12: "",
    juniorOfficersUsingHindiUpTo25_12: "",
    juniorOfficersUsingHindi26To50_12: "",
    juniorOfficersUsingHindi51To75_12: "",
    juniorOfficersUsingHindi76To99_12: "",
    juniorOfficersUsingHindi100Percent_12: "",

    hindiPost1Designation_13: "",
    hindiPost1HqSanctioned_13: "",
    hindiPost1HqVacant_13: "",
    hindiPost1SubSanctioned_13: "",
    hindiPost1SubVacant_13: "",

    websiteUrl_14: "",
    websiteFullyBilingual_14: "",
    websiteLanguageSelectionOption_14: "",

    hindiDayWeekDetails_15: "",
    hindiSeminarDetails_15: "",
    otherHindiEvents_15: "",
    innovativeWorks_15: "",

    memberOfNarakas_16: "",
    lastNarakasMeetingDate_16: "",
    deptHeadAttendedNarakasMeetings_16: "",

    committeeChairmanName_17: "",
    committeeChairmanDesignation_17: "",
    committeeChairmanPhone_17: "",
    committeeChairmanFax_17: "",
    committeeChairmanEmail_17: "",

    formStatus: "",
};

export const allRole = [
    "HOADMIN",
    "FORM_ADMIN_HINDI_BRANCH_P2_UPDATE",
    "ZONE_ADMIN_HINDI_BRANCH_P2_UPDATE",
    "USERROLE",
];
