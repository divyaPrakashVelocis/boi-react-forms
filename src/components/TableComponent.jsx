import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./Table/SearchForm";
import TableActions from "./Table/TableActions";
import DataTable from "./Table/DataTable";
import Pagination from "./Table/Pagination";
import { headerJSON } from "./../utils/dateUtils";
import {
    fetchRoles,
    fetchFormFields,
    fetchRecords,
    deleteRecord,
    downloadExcel,
} from "./../service/apiService";
import PopupModal from "./Form/ModalErrorPopup";

const TableComponent = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [records, setRecords] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [itemFieldDetailList] = useState(headerJSON);
    const [filterOptions, setFilterOptions] = useState({
        columnName: "",
        columnValue: "",
    });
    const [filterParams, setFilterParams] = useState({
        columnName: "rrn",
        columnValue: "",
        pageNumber: 1,
        pageSize: 10,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [rights, setRights] = useState({
        canAdd: false,
        canEdit: false,
        canDelete: false,
        canView: false,
        canExport: false,
    });

    const navigate = useNavigate();

    const allRoles = [
        "HOADMIN",
        "FORM_ADMIN_ONLINE_BRANCH_INSPECTION",
        "ZONE_ADMIN_ONLINE_BRANCH_INSPECTION",
        "USERROLE",
    ];

    const hasRole = (roles, allowed) => roles.some((r) => allowed.includes(r));

    const canUserDelete = (roles) => roles.includes("HOADMIN");
    const canUserAdd = (roles) => {
        return (
            roles.includes("USERROLE") &&
            !roles.includes("HOADMIN") &&
            !roles.includes("FORM_ADMIN_ONLINE_BRANCH_INSPECTION")
        );
    };

    const loadRoles = async () => {
        try {
            const roleData = await fetchRoles();

            if (roleData.success) {
                const roles = roleData.data;
                const hasCommon = checkCommonElements(roles, allRoles);
                if (hasCommon) {
                    setRights({
                        canAdd: canUserAdd(roles),
                        canDelete: canUserDelete(roles), // // remove  "FORM_ADMIN_ONLINE_BRANCH_INSPECTION" to delete as per Ronit/Rahul
                        canEdit: hasRole(roles, allRoles),
                        canView: hasRole(roles, allRoles),
                        canExport: hasRole(roles, allRoles),
                    });
                    loadData();
                } else {
                    setShowPopup(true);
                }
            }
        } catch (error) {
            console.error("Role fetch error:", error);
        }
    };

    const handleClose = () => {
        setShowPopup(false);
        // window.location.href = "/applications1";
        if (window.location.href.includes("/web/rajbhasha")) {
            window.location.href = "/web/rajbhasha";
        } else {
            window.location.href = "applications";
        }
    };

    const checkCommonElements = (array1, array2) => {
        return array2.some((item) => array1.includes(item));
    };

    const loadData = async (params = filterParams) => {
        setLoading(true);
        try {
            const res = (await fetchRecords(params)).data;
            setRecords(res.data || []);
            setTotalCount(res.totalCount ?? 0);
            setCurrentPage(res.pageNumber ?? 1);
        } catch (error) {
            console.error("Data fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadRoles();
    }, []);

    const filterValue = () => ({
        columnName: !!filterOptions.columnName
            ? filterOptions.columnName
            : "rrn",
        columnValue: !!filterOptions.columnValue
            ? filterOptions.columnValue
            : "",
    });

    const handleSearch = async () => {
        const updatedParams = { ...filterValue(), pageNumber: 1, pageSize: 10 };
        setFilterParams(updatedParams);
        loadData(updatedParams);
    };

    const handleClear = async () => {
        const resetOptions = { columnName: "rrn", columnValue: "" };
        setFilterOptions(resetOptions);
        const resetParams = { ...filterParams, ...resetOptions, pageNumber: 1 };
        setFilterParams(resetParams);
        loadData(resetParams);
    };

    const handleDelete = async (user) => {
        if (
            window.confirm(
                `Are you sure you want to delete record "${user.rrn}"?`
            )
        ) {
            const res = await deleteRecord(user.recordId);
            if (res.success) {
                setRecords((prev) =>
                    prev.filter((u) => u.recordId !== user.recordId)
                );
            } else {
                alert(res.error);
            }
        }
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

            link.setAttribute("download", "ऑनलाइन शाखा निरीक्षण रिपोर्ट.xlsx");

            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } else {
            alert("Export failed: " + res.error);
        }
    };
    const handlePageChange = async (page) => {
        const updatedParams = { ...filterParams, pageNumber: page };
        setFilterParams(updatedParams);
        loadData(updatedParams);
    };

    const getPaginationRange = (current, total) => {
        const delta = 2;
        const range = [];
        const dots = [];

        for (let i = 1; i <= total; i++) {
            if (
                i === 1 ||
                i === total ||
                (i >= current - delta && i <= current + delta)
            ) {
                range.push(i);
            }
        }

        let prev;
        for (let i of range) {
            if (prev) {
                if (i - prev === 2) dots.push(prev + 1);
                else if (i - prev > 2) dots.push("...");
            }
            dots.push(i);
            prev = i;
        }
        return dots;
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-1">
                            <h2>{"ऑनलाइन शाखा निरीक्षण रिपोर्ट"}</h2>
                        </div>
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
                            recordLength={records.length}
                            exportToExcel={exportToExcel}
                        />

                        {loading ? (
                            <div className="text-center my-3">Loading...</div>
                        ) : (
                            <DataTable
                                records={records}
                                headerJSON={headerJSON}
                                filterParams={filterParams}
                                handleDelete={handleDelete}
                                canView={rights.canView}
                                canEdit={rights.canEdit}
                                canDelete={rights.canDelete}
                            />
                        )}

                        <Pagination
                            filterParams={filterParams}
                            totalCount={totalCount}
                            handlePageChange={handlePageChange}
                            getPaginationRange={getPaginationRange}
                        />
                    </div>
                </div>
            </div>
            <PopupModal show={showPopup} handleClose={handleClose} />
        </>
    );
};

export default TableComponent;
