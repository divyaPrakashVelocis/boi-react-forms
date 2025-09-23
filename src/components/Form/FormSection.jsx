import "./../Hindi.css";
import ReadOnlyInputField from "./ReadOnlyInputField";
import SelectField from "./SelectField";
import NumericInputField from "./NumericInputField";
import PercentageInput from "./PercentageInput";

const FormSection = ({ form, handleChange, mode, branch }) => {
    const branchTypes = ["Metro", "Urban", "Semi Urban", "Rural"];
    const lowOption = ["Low", "Medium", "High"];
    const isView = mode === "view";
    const isEdit = mode === "edit";
    return (
        <>
            <div className="row align-items-end">
                <ReadOnlyInputField
                    label="Zone"
                    name="zone"
                    value={form?.zone}
                    required
                />
                <SelectField
                    label="Branch"
                    name="branch"
                    value={form?.branch}
                    onChange={handleChange}
                    options={branch}
                    required
                    disabled={isView || isEdit}
                    placeholder="Choose a Branch"
                />
                <SelectField
                    label="Type of Branch"
                    name="branchType"
                    value={form?.branchType}
                    onChange={handleChange}
                    options={branchTypes}
                    disabled={isView}
                    placeholder="Choose a Branch Type"
                />
            </div>
            <div className="row align-items-end">
                <ReadOnlyInputField
                    label="SOL ID"
                    name="solId"
                    value={form?.solId}
                    required
                />
                <ReadOnlyInputField
                    label="Year"
                    name="year"
                    value={form?.year}
                    required
                />
                <ReadOnlyInputField
                    label="Qtr Ended"
                    name="qtrEnded"
                    value={form?.qtrEnded}
                    required
                />
            </div>
            <div className="row align-items-end">
                <NumericInputField
                    label="Number of Advance Accounts where charge on
                                    securities (EM charge, Charge with ROC,
                                    Charge with RTO) not created as per
                                    sanctioned terms and accounts opened with
                                    incomplete documentation."
                    name="advWithoutChargeCreated"
                    value={form?.advWithoutChargeCreated}
                    onChange={handleChange}
                    disabled={isView}
                />

                <NumericInputField
                    label="In how many loan accounts disbursement made
                                    without verification of construction
                                    progress in Home Loans"
                    name="loanWithoutConstrVerification"
                    value={form?.loanWithoutConstrVerification}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="Number of accounts (Working capital limits)
                                    where Stock Audit/ Annual Special Mentioned
                                    audit is pending."
                    name="pendingStockAudit"
                    value={form?.pendingStockAudit}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="Maximum number of days for which EWS alerts
                                    are pending for closure during the quarter
                                    at branch level"
                    name="maxEwsPendingDays"
                    value={form?.maxEwsPendingDays}
                    onChange={handleChange}
                    disabled={isView}
                />
                <PercentageInput
                    label="Percentage of EWS alerts pending for closure
                                    to the total No. of EWS Alerts (After 7
                                    days) at branch level"
                    name="ewsPendingPct"
                    value={form?.ewsPendingPct}
                    onChange={handleChange}
                    disabled={isView}
                />

                <NumericInputField
                    label="Number of accounts pending for conduct or
                                    closure of CPA 3/Legal Audit during the
                                    quarter"
                    name="pendingCpa3Legal"
                    value={form?.pendingCpa3Legal}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="Number of unfilled key positions viz. Credit
                                    Manager, Branch Manager and Manager Admin as
                                    per job tree"
                    name="unfilledKeyPositions"
                    value={form?.unfilledKeyPositions}
                    onChange={handleChange}
                    disabled={isView}
                />

                <NumericInputField
                    label="After how many days EOD Reports are not
                                    checked by Branch Head including physical
                                    checking of Transfer book with vouchers."
                    name="eodNotCheckedDays"
                    value={form?.eodNotCheckedDays}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="For how many days Audit Reports (Risk Based
                                    Internal Audit, Concurrent, Revenue, RBI,
                                    System, etc.) remain pending for compliance
                                    beyond due date."
                    name="auditPendingDays"
                    value={form?.auditPendingDays}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="Amount of Revenue Leakage Amount detected
                                    during the audit"
                    name="revenueLeakageAmt"
                    value={form?.revenueLeakageAmt}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="For how many months entries remained
                                    un-reconciled in all office accounts (Viz.
                                    SUNCR, SUNDEP, GENSUS etc."
                    name="unreconciledMonths"
                    value={form?.unreconciledMonths}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="Number of complaints remaining unresolved at
                                    the end of the quarter"
                    name="unresolvedComplaints"
                    value={form?.unresolvedComplaints}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="After how many days Vouchers are stitched,
                                    bundled and kept in locked cabinet/room from
                                    the date of EOD."
                    name="voucherBundledDays"
                    value={form?.voucherBundledDays}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="Number of Employees (Officers) not
                                    transferred from a branch for more than 3
                                    years"
                    name="notTransferred3Yrs"
                    value={form?.notTransferred3Yrs}
                    onChange={handleChange}
                    disabled={isView}
                />

                <NumericInputField
                    label="Number of Eligible NPA accounts where CGTMSE
                                    claims were not lodged."
                    name="noCgtmseClaim"
                    value={form?.noCgtmseClaim}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="Number of eligible NPA Accounts where
                                    SARFESI/Legal Action is not initiated."
                    name="noSarfaesiAction"
                    value={form?.noSarfaesiAction}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="Number of Check books undelivered to the
                                    customer and returned to the Branch."
                    name="chequeBooksReturned"
                    value={form?.chequeBooksReturned}
                    onChange={handleChange}
                    disabled={isView}
                />
                <SelectField
                    label="Risk categorisation of the Security system
                                    at the Branch vis. CC TV, Fire Alarm System,
                                    Burglary Alarm System etc. in 1(1),2(2) to
                                    3(3) rating"
                    name="securityRiskRating"
                    value={form?.securityRiskRating}
                    onChange={handleChange}
                    options={lowOption}
                    disabled={isView}
                    placeholder="Choose an Option"
                />
            </div>

            <div className="row align-items-end">
                <SelectField
                    label="Risk categorisation of the Safety measures
                                    viz. Maintenance of Electric
                                    equipment’s/Fittings,FRFC,Fire Extinguisher
                                    etc. 1(1),2(2) to 3(3) rating"
                    name="safetyRiskRating"
                    value={form?.safetyRiskRating}
                    onChange={handleChange}
                    options={lowOption}
                    disabled={isView}
                    placeholder="Choose a Option"
                />
                <PercentageInput
                    label="Percentage of housing loan/LAP loan accounts
                                    sanctioned during the quarter where leads
                                    generated by BSA (Above Rs 10.00 lakhs)"
                    name="housingLoan"
                    value={form?.housingLoan}
                    onChange={handleChange}
                    disabled={isView}
                />

                <PercentageInput
                    label="Percentage of vehicle loan accounts
                                    sanctioned during the quarter where leads
                                    generated by BSA/dealer (Above Rs 5.00
                                    lakhs)"
                    name="vehicleLoan"
                    value={form?.vehicleLoan}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>

            <div className="row align-items-end">
                <NumericInputField
                    label="Number of advance accounts reviewed but not
                                    updated correctly in finacle"
                    name="advanceAmountNotUpdated"
                    value={form?.advanceAmountNotUpdated}
                    onChange={handleChange}
                    disabled={isView}
                />
                <NumericInputField
                    label="Number of months for which PSRS statements
                                    are not submitted"
                    name="monthsPrsr"
                    value={form?.monthsPrsr}
                    onChange={handleChange}
                    disabled={isView}
                />
            </div>
        </>
    );
};

export default FormSection;
