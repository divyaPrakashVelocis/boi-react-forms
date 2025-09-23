export const initialForm = {
    zone: "",
    branch: "",
    branchType: "",
    year: "",
    qtrEnded: "",
    solId: "",
    advWithoutChargeCreated: "",
    loanWithoutConstrVerification: "",
    pendingStockAudit: "",
    maxEwsPendingDays: "",
    ewsPendingPct: "",
    pendingCpa3Legal: "",
    unfilledKeyPositions: "",
    eodNotCheckedDays: "",
    auditPendingDays: "",
    revenueLeakageAmt: "",
    unreconciledMonths: "",
    unresolvedComplaints: "",
    voucherBundledDays: "",
    notTransferred3Yrs: "",
    noCgtmseClaim: "",
    noSarfaesiAction: "",
    chequeBooksReturned: "",
    securityRiskRating: "",
    safetyRiskRating: "",
    housingLoan: "",
    vehicleLoan: "",
    advanceAmountNotUpdated: "",
    monthsPrsr: "",
};

export const allRoles = [
    "HOADMIN",
    "KRI_DOMESTIC_FORM_ADMIN",
    "KRI_DOMESTIC_ZONE_ADMIN",
    // "USERROLE"
];


export const getFinancialYearAndQuarter = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const fullYear = now.getFullYear();

    const startYear = month >= 4 ? fullYear : fullYear - 1;
    const endYear = startYear + 1;
    const financialYear = `${startYear}-${String(endYear).slice(-2)}`;

    let qtrEnded = "";
    if (month >= 1 && month <= 3) {
        qtrEnded = "December";
    } else if (month >= 4 && month <= 6) {
        qtrEnded = "March";
    } else if (month >= 7 && month <= 9) {
        qtrEnded = "June";
    } else if (month >= 10 && month <= 12) {
        qtrEnded = "September";
    }

    return { financialYear, qtrEnded };
};