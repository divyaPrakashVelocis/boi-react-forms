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
                    "Please enter a valid number between 1 to 100"
                );
            } else {
                e.target.setCustomValidity("");
            }
        } else {
            e.target.setCustomValidity(
                "Please enter a valid number between 1 to 100"
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

export const getFormName = () => {
    const formN = `Inward Register`;
    return formN;
};

export const initialForm = {
    rrn: "",
    srNo: "",
    recievedFrom: "",
    dateA: "",
    letterLanguage: "",
    categary: "",
    scA: "",
    rn: "",
    rD: "",
    subject: "",
    assignedToDeskOfficer: "",
    scB: "",
    mailDate: "",
    remarks: "",
    searchAdid: "",
    dateB: "",
    nameOfComplainent: "",
    mobileNo: "",
    address: "",
    emailId: "",
    nameOfStaff: "",
    pfNo: "",
};

export const allRole = [
    "HOADMIN",
    "FORM_ADMIN_HINDI_ZONE_P2_UPDATE",
    "ZONE_ADMIN_HINDI_ZONE_P2_UPDATE",
    "USERROLE",
];

export const recievedFrom = [
    { value: "ABBFF", label: "ABBFF" },
    { value: "Anonymous", label: "Anonymous" },
    { value: "CBI", label: "Central Bureau of Investigation" },
    { value: "Complainant", label: "Complainant" },
    { value: "CTE", label: "Chief Technical Examiner" },
    { value: "CUS", label: "Customer" },
    { value: "CVC", label: "Central Vigilance Commission" },
    { value: "ED", label: "Enforcement Directorate" },
    { value: "Employee", label: "Employee" },
    { value: "FGMO", label: "FGMO" },
    { value: "FSIB", label: "FSIB" },
    { value: "GP", label: "General Public" },
    { value: "HO", label: "Head Office" },
    { value: "I&A", label: "Inspection & Audit Department" },
    { value: "Investigating Officer", label: "Investigating Officer" },
    { value: "Lokpal Complaint", label: "Lokpal" },
    { value: "MOF", label: "Ministry of Finance" },
    { value: "NWP", label: "Newspapers" },
    { value: "OTH", label: "Others" },
    {
        value: "Overseas Centres/Subsidiaries",
        label: "Overseas Centres/Subsidiaries",
    },
    { value: "PAR", label: "Parliament" },
    {
        value: "PIDPI",
        label: "Public Interest Disclosure and Protection of Informer",
    },
    { value: "PMO", label: "Prime Minister Office" },
    { value: "POL", label: "Police" },
    { value: "Public Sector Banks", label: "Public Sector Banks" },
    { value: "RBI", label: "Reserve Bank Of India" },
    { value: "RRB", label: "RRB" },
    { value: "RTI", label: "Right to Information" },
    { value: "Vigilance Officer", label: "Vigilance Officer" },
    { value: "Zonal Office", label: "Zonal Office" },
];

export const complaintRecieved = [
    { value: "Anonymous", label: "Anonymous Complaint received" },
    { value: "1.1 (a)", label: "Signed Complaint" },
    { value: "1.1 (b)", label: "Complaints from Ministry/Department" },
    { value: "1.1 (c)", label: "Complaints from CBI" },
    { value: "1.1 (d)", label: "Complaints from Other Sources" },
    { value: "1.1 (e)", label: "Detected through Audit" },
    {
        value: "1.1 (f)",
        label: "Detected through Inspection/Scrutiny of Contracts etc.",
    },
    { value: "CVC Portal Complaint", label: "CVC Portal Complaint" },
    { value: "PIDPI Complaint", label: "PIDPI Complaint" },
    { value: "Unsigned Complaint", label: "Unsigned Complaint" },
];

export const complaintDisposal = [
    {
        value: "1.2 (a)",
        label: "Sent to CBI for Investigation/appropriate action",
    },
    { value: "1.2 (b)", label: "Taken up for detailed investigation by CVO" },
    {
        value: "1.2 (c)",
        label: "Signed complaints filed being non-specific/vague/general allegations",
    },
    {
        value: "1.2 (d)",
        label: "Signed complaints not confirmed by sender-Filed as Pseudonymous",
    },
    {
        value: "1.2 (e)",
        label: "Passed on to Administrative Authorities for appropriate action having no Vigilance Angle/Allegation of corruption",
    },
    { value: "Anonymous", label: "Anonymous Complaint filed" },
    { value: "Sent for Necessary Action", label: "Sent for Necessary Action" },
];

export const category = [
    "17 A",
    "ABBFF advice",
    "Agreed List",
    "CA, DA Decision",
    "CBI Report",
    "CBI Report (u/s 19)",
    "Clearance/Vigilance Status",
    "Complaint",
    "Complaint against Staff",
    "CVC advice",
    "Draft FIR",
    "FIR recieved from CBI",
    "FSP",
    "IAC Minutes",
    "Investigation report",
    "Others",
    "SSP",
    "Training",
    "Vigilance Inspection Report",
    "Vigilance Magazine",
];
