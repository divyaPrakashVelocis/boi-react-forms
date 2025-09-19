import axios from "axios";

// const API_URL = "http://192.168.10.71:8080/o/brsr/";
// const API_URL_COMMON = "http://192.168.10.71:8080/o/commonApi/";

// const headers = {
//     Authorization: "Basic " + btoa("crmd@liferay.com:test"), // USERROLE
//     // Authorization: "Basic " + btoa("nitesh@liferay.com:root"), // FORM_ADMIN
//     // Authorization: "Basic " + btoa("test@liferay.com:root"), // HOADMIN
//     "Content-Type": "application/json",
// };

const API_URL = "/o/brsr/";
const API_URL_COMMON = "/o/commonApi/";
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
    handleApi(() =>
        axios.post(`${API_URL}paginated_data`, params, { headers })
    );

export const fetchRoles = () =>
    handleApi(() =>
        axios.get(`${API_URL_COMMON}get-user-all-role`, { headers })
    );

export const fetchFormFields = () =>
    handleApi(() => axios.get(`${API_URL_COMMON}formId/4262148`, { headers }));

export const deleteRecord = (id) =>
    handleApi(() => axios.delete(`${API_URL}delete/${id}`, { headers }));

export const downloadExcel = (postData) =>
    handleApi(() =>
        axios.post(`${API_URL}download_excel`, postData, {
            headers,
            responseType: "blob",
        })
    );

export const fetchFgmo = () =>
    handleApi(() => axios.get(`${API_URL_COMMON}allFgmo`, { headers }));

export const fetchZonesByFgmo = (fgmo) =>
    handleApi(() =>
        axios.post(
            `${API_URL_COMMON}getAllZoneByFgmo`,
            {
                fgmo,
            },
            { headers }
        )
    );

export const getSolidsByZone = (zoneInEnglish) =>
    handleApi(() =>
        axios.post(
            `${API_URL_COMMON}getAllBranchCodeByZone`,
            {
                zoneInEnglish,
            },
            { headers }
        )
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

export const getBranchNameByBranchCode = (branchCode) =>
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
    handleApi(() => axios.get(`${API_URL}getById/${id}`, { headers }));

export const createForm = (form) =>
    handleApi(() => axios.post(`${API_URL}add`, form, { headers }));

export const updateForm = (id, form) =>
    handleApi(() => axios.put(`${API_URL}update/${id}`, form, { headers }));
