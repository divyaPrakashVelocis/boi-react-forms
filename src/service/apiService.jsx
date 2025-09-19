import axios from "axios";

// const API_URL = "http://192.168.10.71:8080/o/advocateEmpannelment/";
// const API_URL_COMMON = "http://192.168.10.71:8080/o/commonApi/";
// const headers = {
//     Authorization: "Basic " + btoa("legal1@liferay.com:test"), // FORM_ADMIN
//     // Authorization: "Basic " + btoa("crmd@liferay.com:test"), // USERROLE
//     // Authorization: "Basic " + btoa("nitesh@liferay.com:root"), // ZONE_ADMIN
//     // Authorization: "Basic " + btoa("test@liferay.com:root"), // HOADMIN
//     // Authorization: "Basic " + btoa("divya@liferay.com:password"), // NO ROLE
// };

const API_URL = "/o/advocateEmpannelment/";
const API_URL_COMMON = "/o/commonApi/";
const csrfToken = window?.Liferay?.authToken || "";
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

export const fetchFormFields = () =>
    handleApi(() => axios.get(`${API_URL_COMMON}formId/52677`, { headers }));

export const getAllZone = () =>
    handleApi(() => axios.get(`${API_URL}allZone`, { headers }));

export const fetchRoles = () =>
    handleApi(() =>
        axios.get(`${API_URL_COMMON}get-user-all-role`, { headers })
    );

export const fetchRecords = (params) =>
    handleApi(() =>
        axios.post(`${API_URL}paginated_data`, params, { headers })
    );

export const createForm = (form) =>
    handleApi(() => axios.post(`${API_URL}add`, form, { headers }));

export const fetchFormById = (id) =>
    handleApi(() => axios.get(`${API_URL}getById/${id}`, { headers }));

export const updateForm = (id, form) =>
    handleApi(() => axios.put(`${API_URL}edit/${id}`, form, { headers }));

export const deleteRecord = (id) =>
    handleApi(() => axios.delete(`${API_URL}delete/${id}`, { headers }));

export const downloadExcel = (postData) =>
    handleApi(() =>
        axios.post(`${API_URL}download`, postData, {
            headers,
            responseType: "blob",
        })
    );
