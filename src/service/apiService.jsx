import axios from "axios";

// const API_URL =
//     "http://192.168.10.71:8080/o/online-branch-inspection-report-2025/";
// const API_URL_COMMON = "http://192.168.10.71:8080/o/commonApi/";
// const API_URL_GRADLE = "http://192.168.10.71:8080/o/gradle/";
// const csrfToken = window?.Liferay?.authToken ?? "";

// const headers = {
//     Authorization: "Basic " + btoa("crmd@liferay.com:test"), // USERROLE
//     // Authorization: "Basic " + btoa("nitesh@liferay.com:root"), // FORM_ADMIN
//     // Authorization: "Basic " + btoa("test@liferay.com:root"), // HOADMIN
//     "x-csrf-token": csrfToken,
// };

const API_URL = "/o/online-branch-inspection-report-2025/";
const API_URL_COMMON = "/o/commonApi/";
const API_URL_GRADLE = "/o/gradle/";
const csrfToken = window?.Liferay?.authToken ?? "";
const headers = {
    "Content-Type": "application/json",
    "x-csrf-token": csrfToken,
};

const handleApi = async (apiFunc) => {
    try {
        const response = await apiFunc();
        return { success: true, data: response.data };
    } catch (error) {
        console.error("API Error:", error);
        return { success: false, error: error };
    }
};

export const fetchRecords = (params) =>
    handleApi(() => axios.post(`${API_URL}records`, params, { headers }));

export const fetchRoles = () =>
    handleApi(() =>
        axios.get(`${API_URL_COMMON}get-user-all-role`, { headers })
    );

export const fetchFormFields = () =>
    handleApi(() => axios.get(`${API_URL_COMMON}formId/4262148`, { headers }));

export const deleteRecord = (id) =>
    handleApi(() => axios.delete(`${API_URL}${id}`, { headers }));

export const downloadExcel = (postData) =>
    handleApi(() =>
        axios.post(`${API_URL}download`, postData, {
            headers,
            responseType: "blob",
        })
    );

export const fetchZones = () =>
    handleApi(() =>
        axios.get(`${API_URL_GRADLE}get-rajbhasha-zone-hindi`, { headers })
    );

export const fetchBranches = (zoneInHindiEnglish) =>
    handleApi(() =>
        axios.post(
            `${API_URL_COMMON}getBranchCodeByZoneInHindiAndEnglish`,
            {
                zoneInHindiEnglish,
            },
            { headers }
        )
    );

export const regionInHindi = (zoneInHindiEnglish) =>
    handleApi(() =>
        axios.post(
            `${API_URL_COMMON}regionInHindi`,
            {
                zoneInHindiEnglish,
            },
            { headers }
        )
    );

export const branchNameInHindibyBranchCode = (branchCode) =>
    handleApi(() =>
        axios.post(
            `${API_URL_COMMON}getbranchNameByBranchCode`,
            {
                branchCode,
            },
            { headers }
        )
    );

export const fetchFormById = (id) =>
    handleApi(() => axios.get(`${API_URL}${id}`, { headers }));

export const createForm = (form) =>
    handleApi(() => axios.post(`${API_URL}add`, form, { headers }));

export const updateForm = (id, form) =>
    handleApi(() => axios.put(`${API_URL}${id}`, form, { headers }));
