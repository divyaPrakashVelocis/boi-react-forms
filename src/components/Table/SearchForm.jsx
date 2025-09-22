import "./../Hindi.css";

const SearchForm = ({
    itemFieldDetailList,
    filterOptions,
    setFilterOptions,
    handleSearch,
    handleClear,
}) => {
    const formStyle = {
        lineHeight: "1.2",
        fontSize: "13px",
    };

    return (
        <form>
            <div className="row mb-3">
                <div className="form-group col-md-4">
                    <select
                        style={formStyle}
                        className="form-control"
                        name="columnName"
                        value={filterOptions.columnName}
                        onChange={(e) =>
                            setFilterOptions((prev) => ({
                                ...prev,
                                columnName: e.target.value,
                            }))
                        }
                    >
                        <option value="" className="search-by">
                            Search By
                        </option>
                        {itemFieldDetailList.map((opt, i) => (
                            <option key={i} value={opt.columnKey}>
                                {opt.columnName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <input
                        style={formStyle}
                        type="text"
                        className="form-control"
                        name="columnValue"
                        value={filterOptions.columnValue}
                        placeholder="Search by.."
                        onChange={(e) =>
                            setFilterOptions((prev) => ({
                                ...prev,
                                columnValue: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="col-md-4">
                    <button
                        type="button"
                        className="btn btn-primary mx-2 hindi-zone-2-new"
                        style={{ backgroundColor: "#0075be" }}
                        onClick={handleSearch}
                        disabled={
                            !filterOptions.columnName ||
                            !filterOptions.columnValue
                        }
                    >
                        Search
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        style={formStyle}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
