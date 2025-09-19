import { useEffect, useState } from "react";
import SearchForm from "./Table/SearchForm";
import TableActions from "./Table/TableActions";
import DataTable from "./Table/DataTable";
import Pagination from "./Table/Pagination";
import {
    fetchRoles,
    fetchRecords,
    deleteRecord,
    downloadExcel,
} from "./../service/apiService";
import PopupModal from "./Form/ModalErrorPopup";

const TableComponent = () => {
    const [records, setRecords] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [filterOptions, setFilterOptions] = useState({
        columnName: "",
        columnValue: "",
    });
    const [filterParams, setFilterParams] = useState({
        columnName: "rrn_",
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
    const [showPopup, setShowPopup] = useState(false);

    const fetchAndSetRecords = async (params) => {
        const res = (await fetchRecords(params)).data;
        setRecords(res.data || []);
        setTotalCount(res.totalCount || 0);
        setCurrentPage(res.pageNumber ?? params.pageNumber);
    };

    const canUserAdd = (roles) => {
        console.log("llllllll", roles);
        const forbiddenRoles = [
            "HOADMIN",
            "FORM_ADMIN_BRSR",
            "ZONE_ADMIN_BRSR",
        ];
        return (
            Array.isArray(roles) &&
            roles.includes("USERROLE") &&
            !roles.some((role) => forbiddenRoles.includes(role))
        );
    };

    const deriveRightsFromRoles = (roles) => ({
        canAdd: canUserAdd(roles),
        canEdit: roles.some((role) =>
            [
                "HOADMIN",
                "FORM_ADMIN_BRSR",
                "ZONE_ADMIN_BRSR",
                "USERROLE",
            ].includes(role)
        ),
        canDelete: roles.some(
            (role) => ["HOADMIN"].includes(role) // remove  "FORM_ADMIN_BRSR" to delete as per Ronit/Rahul
        ),
        canView: roles.some((role) =>
            [
                "HOADMIN",
                "FORM_ADMIN_BRSR",
                "ZONE_ADMIN_BRSR",
                "USERROLE",
            ].includes(role)
        ),
        canExport: roles.some((role) =>
            [
                "HOADMIN",
                "FORM_ADMIN_BRSR",
                "ZONE_ADMIN_BRSR",
                "USERROLE",
            ].includes(role)
        ),
    });

    const checkCommonElements = (array1, array2) => {
        return array2.some((item) => array1.includes(item));
    };

    const allRoles = [
        "HOADMIN",
        "FORM_ADMIN_BRSR",
        "ZONE_ADMIN_BRSR",
        "USERROLE",
    ];

    const loadData = async () => {
        setLoading(true);
        try {
            const roleData = await fetchRoles();
            if (roleData.success) {
                const hasCommon = checkCommonElements(roleData.data, allRoles);
                if (hasCommon) {
                    setRights(deriveRightsFromRoles(roleData.data));
                    await fetchAndSetRecords(filterParams);
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

    useEffect(() => {
        loadData();
    }, []);

    const filterValue = () => {
        return {
            columnName: filterOptions.columnName ?? "rrn_",
            columnValue: filterOptions.columnValue.toUpperCase() ?? "",
        };
    };

    const handleSearch = async () => {
        const updatedParams = { ...filterValue(), pageNumber: 1, pageSize: 10 };
        setFilterParams(updatedParams);
        await fetchAndSetRecords(updatedParams);
    };

    const handleClear = async () => {
        const resetOptions = { columnName: "rrn_", columnValue: "" };
        setFilterOptions(resetOptions);
        const resetParams = { ...filterParams, ...resetOptions, pageNumber: 1 };
        setFilterParams(resetParams);
        await fetchAndSetRecords(resetParams);
    };

    const handleDelete = async (user) => {
        if (
            window.confirm(
                `Are you sure you want to delete record "${user.rrn}"?`
            )
        ) {
            const res = await deleteRecord(user.recordId);
            if (res.success) {
                setRecords(records.filter((u) => u.recordId !== user.recordId));
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

            // Set desired filename here
            link.setAttribute("download", "brsr.xlsx");

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
        await fetchAndSetRecords(updatedParams);
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

    const handleClose = () => {
        setShowPopup(false);
        window.location.href = "/applications";
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h2>{"BRSR"}</h2>
                        </div>
                        <SearchForm
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

                        {!loading && (
                            <DataTable
                                records={records}
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
