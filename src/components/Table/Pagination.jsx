const Pagination = ({
    filterParams,
    totalCount,
    handlePageChange,
    getPaginationRange,
}) => {
    const totalPages = Math.ceil(totalCount / filterParams.pageSize);

    if (totalPages <= 1) return null;

    const pages = getPaginationRange(filterParams.pageNumber, totalPages);

    return (
        <div className="d-flex justify-content-end align-items-center mt-0">
            <div className="me-3">
                {`Showing Records ${
                    totalCount === 0
                        ? 0
                        : (filterParams.pageNumber - 1) *
                              filterParams.pageSize +
                          1
                } to ${Math.min(
                    filterParams.pageNumber * filterParams.pageSize,
                    totalCount
                )} of ${totalCount}`}
            </div>

            <nav>
                <ul className="pagination mb-0">
                    <li
                        className={`page-item ${
                            filterParams.pageNumber === 1 ? "disabled" : ""
                        }`}
                    >
                        <button
                            className="page-link"
                            onClick={() =>
                                handlePageChange(filterParams.pageNumber - 1)
                            }
                            disabled={filterParams.pageNumber === 1}
                        >
                            Previous
                        </button>
                    </li>

                    {pages.map((page, index) => (
                        <li
                            key={index}
                            className={`page-item ${
                                filterParams.pageNumber === page ? "active" : ""
                            } ${page === "..." ? "disabled" : ""}`}
                        >
                            {page === "..." ? (
                                <span className="page-link">...</span>
                            ) : (
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            )}
                        </li>
                    ))}

                    <li
                        className={`page-item ${
                            filterParams.pageNumber === totalPages
                                ? "disabled"
                                : ""
                        }`}
                    >
                        <button
                            className="page-link"
                            onClick={() =>
                                handlePageChange(filterParams.pageNumber + 1)
                            }
                            disabled={filterParams.pageNumber === totalPages}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
