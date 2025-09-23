import { useEffect, useState } from "react";
import PopupModal from "./../components/Form/ModalErrorPopup";
import {
    deleteRecord,
    downloadExcel,
    fetchFormFields,
    fetchRecords,
    fetchRoles,
} from "../service/apiService";
import {
    complaintDisposal,
    complaintRecieved,
    getFormName,
    recievedFrom,
} from "../utils/dateUtils";
import SearchForm from "./Table/SearchForm";
import TableActions from "./Table/TableActions";
import Pagination from "./Table/Pagination";
import DataTable from "./Table/DataTable";

function TableComponent() {
    const [users, setUsers] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        columnName: "",
        columnValue: "",
    });
    const [totalCount, setTotalCount] = useState(0);
    const [itemFieldDetailList, setItemFieldDetailList] = useState([]);
    const [rights, setRights] = useState({
        canAdd: false,
        canEdit: false,
        canDelete: false,
        canView: false,
        canExport: false,
    });
    const [formName, setFormName] = useState("");

    const [filterParams, setFilterParams] = useState({
        columnName: "",
        columnValue: "",
        pageNumber: 1,
        pageSize: 10,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const allRoles = ["HOADMIN", "FORM_ADMIN_INWARD"];

    const checkCommonElements = (array1, array2) => {
        return array2.some((item) => array1.includes(item));
    };

    const hasRole = (roles, role) =>
        Array.isArray(roles) && roles.includes(role);

    const deriveRightsFromRoles = (roles) => {
        const isHoAdmin = hasRole(roles, "HOADMIN");
        const isFormAdmin = hasRole(roles, "FORM_ADMIN_INWARD");
        const hasAllRights = isHoAdmin || isFormAdmin;
        return {
            canAdd: hasAllRights,
            canEdit: hasAllRights,
            canDelete: isHoAdmin,
            canView: hasAllRights,
            canExport: hasAllRights,
        };
    };

    const getAllRoles = async () => {
        setLoading(true);
        try {
            const roleData = await fetchRoles();
            if (roleData.success) {
                const hasCommon = checkCommonElements(roleData.data, allRoles);
                if (hasCommon) {
                    setRights(deriveRightsFromRoles(roleData.data));
                    await loadData();
                } else {
                    setShowPopup(true);
                }
            }
        } catch (error) {
            console.error("Initialization Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const getAllRecords = async (params) => {
        let res = (await fetchRecords(params)).data;
        res = res.data.map((e) => setSelectedData(e));
        setUsers(res || []);
        // setUsers(res.data || []);
        setTotalCount(res.totalCount || 0);
        setCurrentPage(res.pageNumber ?? params.pageNumber);
    };

    const setSelectedData = (formD) => {
        if (!!formD && formD.scA) {
            formD.scA = complaintRecieved.filter(
                (e) => e.value === formD.scA
            )[0].label;
        }
        if (!!formD && formD.scB) {
            formD.scB = complaintDisposal.filter(
                (e) => e.value === formD.scB
            )[0].label;
        }
        if (!!formD && formD.recievedFrom) {
            formD.recievedFrom = recievedFrom.filter(
                (e) => e.value === formD.recievedFrom
            )[0].label;
        }

        return formD;
    };

    const getFormFieldLabel = async () => {
        const res = (await fetchFormFields()).data;
        setItemFieldDetailList(res || []);
    };

    const loadData = async () => {
        await getFormFieldLabel();
        await getAllRecords(filterParams);
    };

    const gtFormName = () => {
        setFormName(getFormName());
    };

    useEffect(() => {
        gtFormName();
        getAllRoles();
    }, []);

    const handleDelete = async (user) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete record "${user.rrn}"?`
        );
        if (!confirmDelete) return;
        const res = await deleteRecord(user.recordId);
        if (res.success) {
            setUsers(users.filter((u) => u.recordId !== user.recordId));
        } else {
            alert(res.error);
        }
    };

    const filterValue = () => {
        return {
            columnName: !!filterOptions.columnName
                ? filterOptions.columnName
                : "rrn",
            columnValue: filterOptions.columnValue.toUpperCase().trim() ?? "",
        };
    };
    const exportToExcel = async () => {
        const res = await downloadExcel(filterValue());
        if (res.success) {
            const blob = new Blob([res.data], {
                type: "application/vnd.ms-excel",
            });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${formName}.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } else {
            alert("Export failed: " + res.error);
        }
    };

    const handleClear = async () => {
        const resetOptions = { columnName: "rrn", columnValue: "" };
        setFilterOptions({ columnName: "", columnValue: "" });
        const resetParams = { ...filterParams, ...resetOptions, pageNumber: 1 };
        setFilterParams(resetParams);
        await getAllRecords(resetParams);
    };

    const handleSearch = async () => {
        const updatedParams = { ...filterValue(), pageNumber: 1, pageSize: 10 };
        setFilterParams(updatedParams);
        await getAllRecords(updatedParams);
    };

    const handlePageChange = async (page) => {
        const updatedParams = { ...filterParams, pageNumber: page };
        setFilterParams(updatedParams);
        await getAllRecords(updatedParams);
    };

    const handleClose = () => {
        setShowPopup(false);
        if (window.location.href.includes("/web/rajbhasha")) {
            window.location.href = "/web/rajbhasha";
        } else {
            window.location.href = "/applications";
        }
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>{formName}</h2>
                        <SearchForm
                            itemFieldDetailList={itemFieldDetailList}
                            filterOptions={filterOptions}
                            setFilterOptions={setFilterOptions}
                            handleSearch={handleSearch}
                            handleClear={handleClear}
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
            <PopupModal
                show={showPopup}
                handleClose={handleClose}
                formName={formName}
            />
        </>
    );
}

export default TableComponent;
