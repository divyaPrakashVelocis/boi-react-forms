import { useEffect, useState } from "react";
import { allRoles } from "./common";
import SearchForm from "./Table/SearchForm";
import DataTable from "./Table/DataTable";
import Pagination from "./Table/Pagination";
// import PopupModal from "./ModalErrorPopup";
import "./Hindi.css";
import {
    deleteUser,
    downloadExcel,
    fetchFieldNames,
    fetchRoles,
    fetchUsers,
} from "../service/apiService";
import TableActions from "./Table/TableActions";
import PopupModal from "./Form/ModalErrorPopup";

function TableComponent() {
    const [users, setUsers] = useState([]);
    const [itemFieldDetailList, setItemFieldDetailList] = useState([]);
    const [rights, setRights] = useState({});
    const [filterOptions, setFilterOptions] = useState({
        columnName: "",
        columnValue: "",
    });
    const [filterParams, setFilterParams] = useState({
        columnName: "",
        columnValue: "",
        pageNumber: 1,
        pageSize: 10,
    });
    const [totalCount, setTotalCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);

    const fetchData = async (params = filterParams) => {
        const res = await fetchUsers(params);
        setUsers(res.data?.data || []);
        setTotalCount(res.data?.totalCount || 0);
        setFilterParams((prev) => ({
            ...prev,
            pageNumber: res.data?.pageNumber || 1,
            pageSize: res.data?.pageSize || 10,
        }));
        setSearching(false);
    };

    const getUserRoles = async () => {
        setLoading(true);
        const res = await fetchRoles();
        console.log(res);
        const roles = res?.data || [];
        const hasCommon = allRoles.some((role) => roles.includes(role));
        if (hasCommon) {
            const has = (r) => roles.includes(r);
            setRights({
                canAdd: [
                    // "USERROLE",
                    "HOADMIN",
                    "KRI_DOMESTIC_FORM_ADMIN",
                    "KRI_DOMESTIC_ZONE_ADMIN",
                ].some(has),
                // // has("USERROLE") &&
                // // !has("HOADMIN") &&
                // // !has("KRI_DOMESTIC_FORM_ADMIN") &&
                // // !has("KRI_DOMESTIC_ZONE_ADMIN"),
                canEdit: [
                    // "USERROLE",
                    "HOADMIN",
                    "KRI_DOMESTIC_FORM_ADMIN",
                    "KRI_DOMESTIC_ZONE_ADMIN",
                ].some(has),
                canDelete: ["HOADMIN"].some(has),
                canView: [
                    // "USERROLE",
                    "HOADMIN",
                    "KRI_DOMESTIC_FORM_ADMIN",
                    "KRI_DOMESTIC_ZONE_ADMIN",
                ].some(has),
                canExport: [
                    // "USERROLE",
                    "HOADMIN",
                    "KRI_DOMESTIC_FORM_ADMIN",
                    "KRI_DOMESTIC_ZONE_ADMIN",
                ].some(has),
            });
            fetchData();
            setLoading(false);
        } else {
            setShowPopup(true);
            setLoading(false);
        }
    };

    const getFieldNames = async () => {
        const res = await fetchFieldNames();
        const fieldList = (res.data || []).map(
            ({ id, formId, formName, columnKey, columnName, sequence }) => ({
                id,
                formId,
                formName,
                columnKey,
                columnName,
                sequence,
            })
        );
        setItemFieldDetailList(fieldList);
    };

    const exportToExcel = async () => {
        const res = await downloadExcel(filterOptions);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "Branch Level KRIs (Domestic).xlsx";
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleDelete = async (user) => {
        if (
            !window.confirm(
                `Are you sure you want to delete record "${user.recordRefNo}"?`
            )
        )
            return;
        await deleteUser(user.recordId);
        setUsers(users.filter((u) => u.recordId !== user.recordId));
    };

    const handleSearch = () => {
        setSearching(true);
        const params = { ...filterParams, ...filterOptions, pageNumber: 1 };
        setFilterParams(params);
        fetchData(params);
    };

    const handleClear = () => {
        const cleared = {
            columnName: "",
            columnValue: "",
            pageNumber: 1,
            pageSize: 10,
        };
        setFilterOptions({ columnName: "", columnValue: "" });
        setFilterParams(cleared);
        fetchData(cleared);
    };

    const handlePageChange = (pageNumber) => {
        const updated = { ...filterParams, pageNumber };
        setFilterParams(updated);
        fetchData(updated);
    };

    const handleClose = () => {
        setShowPopup(false);
        window.location.href = "/applications";
    };

    const getPaginationRange = (currentPage, totalPages) => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                range.push(i);
            }
        }

        let prev;
        for (let i of range) {
            if (prev) {
                if (i - prev === 2) {
                    rangeWithDots.push(prev + 1);
                } else if (i - prev > 2) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            prev = i;
        }

        return rangeWithDots;
    };

    useEffect(() => {
        getUserRoles();
        getFieldNames();
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-1">
                            <h2>{"Branch Level KRIs (Domestic)"}</h2>
                        </div>
                        <SearchForm
                            itemFieldDetailList={itemFieldDetailList}
                            filterOptions={filterOptions}
                            setFilterOptions={setFilterOptions}
                            handleSearch={handleSearch}
                            handleClear={handleClear}
                            searching={searching}
                        />
                        <TableActions
                            canAdd={rights.canAdd}
                            canExport={rights.canExport}
                            recordLength={users.length}
                            exportToExcel={exportToExcel}
                        />
                        {!loading && (
                            <DataTable
                                records={users}
                                itemFieldDetailList={itemFieldDetailList}
                                filterParams={filterParams}
                                handleDelete={handleDelete}
                                canView={rights.canView}
                                canEdit={rights.canEdit}
                                canDelete={rights.canDelete}
                            />
                        )}
                    </div>
                </div>
                <Pagination
                    filterParams={filterParams}
                    totalCount={totalCount}
                    handlePageChange={handlePageChange}
                    getPaginationRange={getPaginationRange}
                />
            </div>
            <PopupModal show={showPopup} handleClose={handleClose} />
        </>
    );
}
export default TableComponent;
