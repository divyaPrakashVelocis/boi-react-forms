import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import "./../advocate-empanelled.css";
import NumberInput from "./Numberinput";

import {
    speedOfGettingDisposal,
    professionalFees,
    advocateApproach,
    accountabilityOfAdvocate,
    whetherSeekForSaparate,
} from "../../utils/dateUtils";

const FormSection = ({ form = {}, handleChange, mode = "", allZones = [] }) => {
    const renderInput = (label, name, extraProps = {}) => (
        <TextInput
            label={label}
            name={name}
            value={form[name]}
            onChange={handleChange}
            disabled={mode === "view"}
            {...extraProps}
        />
    );

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="container-border-style row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Name of the Zone"
                                name="zone"
                                value={form.zone}
                                onChange={handleChange}
                                options={allZones.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Name of Empanelled Advocate",
                                "nameOfEmpanelledAdvocate",
                                {
                                    required: true,
                                    disabled: mode === "view",
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Address", "address", {
                                disabled: mode === "view",
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Contact Details", "contactDetails", {
                                disabled: mode === "view",
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Nature of work entrusted",
                                "natureOfWork",
                                {
                                    disabled: mode === "view",
                                }
                            )}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <DateInput
                            label="Date of Empanelment"
                            name="dateEmp"
                            value={form.dateEmp}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            required={true}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Number of Cases entrusted during the year under review",
                                "noOfCasesUnderReview",
                                {
                                    disabled: mode === "view",
                                    isDigit: true,
                                }
                            )}
                        </div>
                    </div>
                </div>

                <span>NO OF CASES DISPOSED AND AVERAGE TIME TAKEN</span>
                <div className="container-border-style row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Total Cases", "totalCases", {
                                disabled: mode === "view",
                                isDigit: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Cases in Favour", "casesFavour", {
                                disabled: mode === "view",
                                isDigit: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Cases Against", "caseAgainst", {
                                disabled: mode === "view",
                                isDigit: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Average Time(in months)",
                                "avgTimeInMonth",
                                {
                                    disabled: mode === "view",
                                    isDigit: true,
                                }
                            )}
                        </div>
                    </div>
                </div>

                <span>NO OF ADJOURNMENT TAKEN BT ADVOCATE</span>
                <div className="container-border-style row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Total No of Hearings",
                                "totalNoHearing",
                                {
                                    disabled: mode === "view",
                                    isDigit: true,
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Adjournments taken", "adjournTaken", {
                                disabled: mode === "view",
                                isDigit: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Suo- Moto Adjournment by DRT",
                                "suoMotoDrt",
                                {
                                    disabled: mode === "view",
                                    isDigit: true,
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "No of hearings attended by Junior",
                                "noOfHearingJuniorAttend",
                                {
                                    disabled: mode === "view",
                                    isDigit: true,
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Speed of getting disposal of cases in Bank's favour"
                                name="speedOfGetting"
                                value={form.speedOfGetting}
                                onChange={handleChange}
                                options={speedOfGettingDisposal.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Professional Fees"
                                name="prefessionalFees"
                                value={form.prefessionalFees}
                                onChange={handleChange}
                                options={professionalFees.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Advocate's Approach towards Work"
                                name="advocateApproachWork"
                                value={form.advocateApproachWork}
                                onChange={handleChange}
                                options={advocateApproach.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Accountability of Advocate"
                                name="accountabilityOfAdvo"
                                value={form.accountabilityOfAdvo}
                                onChange={handleChange}
                                options={accountabilityOfAdvocate.map(
                                    (opt) => ({
                                        label: opt,
                                        value: opt.trim(),
                                    })
                                )}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Whether seek for separate Counsel engagement frequently"
                                name="whetherSeekSeparate"
                                value={form.whetherSeekSeparate}
                                onChange={handleChange}
                                options={whetherSeekForSaparate.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <NumberInput
                            label="Satisfaction Score of overall performance of Advocate submitted by FGMO/Zone/Branch (in %)"
                            name="satisfactionScore"
                            value={form.satisfactionScore}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            max={100}
                            min={0}
                            valid={"0-100"}
                            pattern="^(100(\.0{1,2})?|[0-9]{1,2}(\.\d{1,2})?)$"
                            errorMessage="Please enter valid number between 0-100"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormSection;
