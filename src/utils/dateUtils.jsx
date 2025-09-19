export const getPreviousQuarterLastMonthName = () => {
    const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
    const currentQuarter = Math.floor(month / 3); // 0 to 3
    const previousQuarter = (currentQuarter + 3) % 4; // handles wrap-around to previous year
    const prevQuarterEndMonthIndex = (previousQuarter + 1) * 3 - 1;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[prevQuarterEndMonthIndex];
};

export const headerJSON = [
    // { sr_no: "Sr. No" },
    { rrn_: "Record Ref. No." },
    { fgmo_: "FGMO" },
    { zone_: "Zone" },
    { solid_: "SOLID" },
    { branch_name: "Branch Name" },
    {
        num_staff:
            "Number of Staff in Branch (Including Permanent Staff, Casual Labour, Driver )",
    },

    { fy_: "FY" },
    { ele_april: "Electrical April 2024" },
    { pet_april: "Petrol April 2024" },
    { die_april: "Diesel April 2024" },

    { ele_may: "Electrical May 2024" },
    { die_may: "Diesel May 2024" },
    { pet_may: "Petrol May 2024" },

    { ele_june: "Electrical June 2024" },
    { die_june: "Diesel June 2024" },
    { pet_june: "Petrol June 2024" },

    { ele_july: "Electrical July 2024" },
    { die_july: "Diesel July 2024" },
    { pet_july: "Petrol July 2024" },

    { ele_aug: "Electrical August 2024" },
    { die_aug: "Diesel August 2024" },
    { pet_aug: "Petrol August 2024" },

    { ele_sep: "Electrical September 2024" },
    { die_sep: "Diesel September 2024" },
    { pet_sep: "Petrol September 2024" },

    { ele_oct: "Electrical October 2024" },
    { die_oct: "Diesel October 2024" },
    { pet_oct: "Petrol October 2024" },

    { ele_nov: "Electrical November 2024" },
    { die_nov: "Diesel November 2024" },
    { pet_nov: "Petrol November 2024" },

    { ele_dec: "Electrical December 2024" },
    { die_dec: "Diesel December 2024" },
    { pet_dec: "Petrol December 2024" },

    { ele_jan: "Electrical January 2025" },
    { die_jan: "Diesel January 2025" },
    { pet_jan: "Petrol January 2025" },

    { ele_feb: "Electrical February 2025" },
    { die_feb: "Diesel February 2025" },
    { pet_feb: "Petrol February 2025" },

    { ele_mar: "Electrical March 2025" },
    { die_mar: "Diesel March 2025" },
    { pet_mar: "Petrol March 2025" },

    { ttl_die: "Total Diesel 2024-25" },
    { ttl_ele: "Total Electrical 2024-25" },
    { ttl_pet: "Total Petrol 2024-25" },

    { num_cen: "Number of Centralized AC" },
    { num_split: "Number of Split AC" },
    { num_window: "Number of Window AC" },
    { num_cassette: "Number of Cassette AC" },

    { ttl_cen: "Total Ton of Centralized AC" },
    { ttl_split: "Total Ton of Split AC" },
    { ttl_window: "Total Ton of Window AC" },
    { ttl_cassette: "Total Ton of Cassette AC" },

    { star_cen: "Star Rating of Centralized AC" },
    { star_split: "Star Rating of Split AC" },
    { star_window: "Star Rating of Window AC" },
    { star_cassette: "Star Rating of Cassette AC" },

    { auther_name: "Author Name" },
    { created_on: "Created On" },
    // { actions: "Actions" },
];

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

const previousYearComponent = () => {
    const previousYear = new Date().getFullYear() - 1;
    return previousYear;
};

const currentYearComponent = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
};

export const months = [
    { label: `April ${previousYearComponent()}`, key: "April" },
    { label: `May ${previousYearComponent()}`, key: "May" },
    { label: `June ${previousYearComponent()}`, key: "June" },
    { label: `July ${previousYearComponent()}`, key: "July" },
    { label: `August ${previousYearComponent()}`, key: "Aug" },
    { label: `September ${previousYearComponent()}`, key: "Sep" },
    { label: `October ${previousYearComponent()}`, key: "Oct" },
    { label: `November ${previousYearComponent()}`, key: "Nov" },
    { label: `December ${previousYearComponent()}`, key: "Dec" },
    { label: `January ${currentYearComponent()}`, key: "Jan" },
    { label: `February ${currentYearComponent()}`, key: "Feb" },
    { label: `March ${currentYearComponent()}`, key: "Mar" },
];

export const acTypes = [
    { label: "Centralized AC", key: "Cen" },
    { label: "Split AC", key: "Split" },
    { label: "Window AC", key: "Window" },
    { label: "Cassette AC", key: "Cassette" },
];

export const acSections = [
    { label: "Number of AC in Branch", prefix: "num" },
    { label: "Total tonnage of all AC", prefix: "ttl" },
    { label: "Star ratings", prefix: "star" },
];

export const selectFields = [
    { label: "FGMO", name: "fgmo" },
    { label: "ZONE", name: "zone" },
    { label: "SOLID", name: "solid" },
];

export const textFields = [
    {
        label: "Branch Name",
        name: "branchName",
        isDigit: false,
    },
    {
        label: "Number of Staff in Branch(Including Permanent Staff, Casual Labour, Driver)",
        name: "numStaff",
        isDigit: true,
    },
    {
        label: "FY",
        name: "fy",
        isDigit: false,
    },
];

export const getPreviousFinancialYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // getMonth is 0-indexed

    let fyStart;
    if (currentMonth >= 4) {
        // April or later = current FY is currentYear - currentYear+1
        fyStart = currentYear - 1;
    } else {
        // Jan–Mar = current FY is lastYear - currentYear
        fyStart = currentYear - 2;
    }

    const fyEnd = fyStart + 1;
    return `${fyStart}-${String(fyEnd).slice(-2)}`;
};

export const getCurrentFinancialYearLabel = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const startYear = month >= 4 ? year : year - 1;
    const endYear = startYear + 1;

    return `FY${startYear}-${String(endYear).slice(-2)}`;
};
