import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import "./../inward-register.css";
import NumberInput from "./Numberinput";
import TextAreaInput from "./TextAreaInput";
import { fromEvent } from "rxjs";
import { map, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { useEffect, useState } from "react";

import {
    category,
    recievedFrom,
    complaintDisposal,
    complaintRecieved,
} from "../../utils/dateUtils";
import { getNameByAdid } from "../../service/apiService";

const FormSection = ({ form = {}, handleChange, mode = "" }) => {
    const language = ["English", "Hindi"];
    const [value, setValue] = useState("");
    useEffect(() => {
        const input = document.getElementById("searchAdid");
        const subscription = fromEvent(input, "input")
            .pipe(
                map((e) => e.target.value),
                debounceTime(500), // wait 500ms
                distinctUntilChanged()
            )
            .subscribe(async (val) => {
                setValue(val);
                console.log(val);
                const res = (await getNameByAdid(val)).data;
                const fName = `${res.firstName} ${res.lastName}`;
                const fullName = fName.trimStart().trimEnd()
                    ? fName
                    : "Please enter valid ADID";
                console.log("asdfasdfasd", res);
                // form.assignedToDeskOfficer = fullName;
                handleChange({
                    target: {
                        name: "assignedToDeskOfficer",
                        value: fullName,
                        hasError:
                            fullName === "Please enter valid ADID"
                                ? false
                                : true,
                    },
                });
            });

        return () => subscription.unsubscribe();
    }, []);

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
                            {renderInput("Sr.No.", "srNo", {
                                required: true,
                                disabled: mode !== "add",
                            })}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <DateInput
                            label="Recieved Date"
                            name="dateA"
                            value={form.dateA}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Recieved From"
                                name="recievedFrom"
                                value={form.recievedFrom}
                                onChange={handleChange}
                                options={recievedFrom.map((opt) => ({
                                    label: opt.label,
                                    value: opt.value.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="Letter Language"
                                name="letterLanguage"
                                value={form.letterLanguage}
                                onChange={handleChange}
                                options={language.map((opt) => ({
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
                                label="Category"
                                name="categary"
                                value={form.categary}
                                onChange={handleChange}
                                options={category.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    {!!form &&
                        (form.categary === "Complaint" ||
                            form.categary === "Complaint against Staff") && (
                            <>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        {renderInput(
                                            "Name of the Complainant",
                                            "nameOfComplainent",
                                            {
                                                disabled: mode === "view",
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <NumberInput
                                        label="Mobile No"
                                        name="mobileNo"
                                        value={form.mobileNo}
                                        onChange={handleChange}
                                        disabled={mode === "view"}
                                        pattern="^\d{10}$"
                                        max={10}
                                        valid={"mobile"}
                                        errorMessage="Please enter valid mobile number"
                                        placeholder="Please enter mobile number"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <TextAreaInput
                                        label="Address"
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        disabled={mode === "view"}
                                        maxLength={1000}
                                        rows={4}
                                    />
                                </div>
                                <div className="col-md-6">
                                    {renderInput("Email Id", "emailId", {
                                        pattern:
                                            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                                        errorMessage:
                                            "Please enter valid email (Ex: example@domain.com)",
                                        disabled: mode === "view",
                                    })}
                                </div>
                            </>
                        )}
                    {!!form && form.categary === "Complaint against Staff" && (
                        <>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {renderInput(
                                        "Name of Staff",
                                        "nameOfStaff",
                                        {
                                            disabled: mode === "view",
                                        }
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {renderInput("Pf No", "pfNo", {
                                        disabled: mode === "view",
                                    })}
                                </div>
                            </div>
                        </>
                    )}

                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="If it is complaint then break up complaint recieved under source code"
                                name="scA"
                                value={form.scA}
                                onChange={handleChange}
                                options={complaintRecieved.map((opt) => ({
                                    label: opt.label,
                                    value: opt.value.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("Reference No", "rn", {
                                disabled: mode === "view",
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <DateInput
                            label="Reference Date"
                            name="rD"
                            value={form.rD}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            {renderInput("Subject", "subject", {
                                disabled: mode === "view",
                            })}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            {renderInput("Search by ADID", "searchAdid", {
                                disabled: mode === "view",
                                required: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            {renderInput(
                                "Assigned to Desk Officer",
                                "assignedToDeskOfficer",
                                {
                                    disabled: true,
                                    required: true,
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="If it is complaint then break up 'Disposal' under source code"
                                name="scB"
                                value={form.scB}
                                onChange={handleChange}
                                options={complaintDisposal.map((opt) => ({
                                    label: opt.label,
                                    value: opt.value.trim(),
                                }))}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <DateInput
                            label="Complaint Disposal Date"
                            name="dateB"
                            value={form.dateB}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput(
                                "Outward mail Reference No. and data if any",
                                "mailDate",
                                {
                                    disabled: mode === "view",
                                }
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <TextAreaInput
                            label="Remarks"
                            name="remarks"
                            value={form.remarks}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            maxLength={1000}
                            rows={4}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormSection;
