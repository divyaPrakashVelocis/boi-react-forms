// services/apiService.js
import axios from "axios";

const API_URL = "http://192.168.10.71:8080/o/kri";
const API_URL_COMMON = "http://192.168.10.71:8080/";
const headers = {
    // Authorization: "Basic " + btoa("test@liferay.com:root"), // HOADMIN
    // Authorization: "Basic " + btoa("legal1@liferay.com:test"), // FORMADMIN
    // Authorization: "Basic " + btoa("nitesh@liferay.com:root"), // ZONEADMIN
    Authorization: "Basic " + btoa("crmd@liferay.com:test"), // NO ROLE
};

// const API_URL = "/o/kri";
// const API_URL_COMMON = "/";
// const csrfToken = window?.Liferay?.authToken || "";
// const headers = {
//     "Content-Type": "application/json",
//     "x-csrf-token": csrfToken,
// };

export const fetchUsers = (params) =>
    axios.post(`${API_URL}/all`, params, { headers });

export const fetchRoles = () =>
    axios.get(`${API_URL_COMMON}o/commonApi/get-user-all-role`, { headers });

export const fetchFieldNames = () =>
    axios.get(`${API_URL_COMMON}o/commonApi/formId/3073314`, { headers });

export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`, { headers });

export const downloadExcel = (filterOptions) =>
    axios.post(`${API_URL}/download`, filterOptions, {
        headers,
        responseType: "blob",
    });

export const fetchZoneForLoggedUser = () =>
    axios.get(`${API_URL_COMMON}o/commonApi/getZoneLoginUser`, { headers });

export const fetchBranchesByZone = (zoneInHindiEnglish) =>
    axios.post(
        `${API_URL_COMMON}o/commonApi/branchNameByZone`,
        { zoneInHindiEnglish },
        { headers: { ...headers, "Content-Type": "application/json" } }
    );

export const fetchBranchCode = (branchName, zoneInEnglish) =>
    axios.post(
        `${API_URL_COMMON}o/commonApi/getbranchCodeByBranch`,
        { branchName, zoneInEnglish },
        { headers: { ...headers, "Content-Type": "application/json" } }
    );

export const fetchFormById = (id) => axios.get(`${API_URL}/${id}`, { headers });

export const createForm = (payload) =>
    axios.post(`${API_URL}/add`, payload, { headers });

export const updateForm = (id, payload) =>
    axios.put(`${API_URL}/${id}`, payload, { headers });
