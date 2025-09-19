import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import {
    acSections,
    acTypes,
    getPreviousFinancialYear,
    months,
    selectFields,
    textFields,
} from "../../utils/dateUtils";
import "./../Hindi.css";

const FormSection = ({
    form,
    handleChange,
    mode,
    fgmoList,
    zoneList,
    solidList,
}) => {
    const isReadOnly = mode === "view";
    const isAddMode = mode === "add";

    return (
        <>
            {/* Select and Text Inputs */}
            <div className="row mb-5">
                {selectFields.map(({ label, name }, idx) => {
                    let options = [];

                    if (name === "fgmo") {
                        options = fgmoList.map((opt) => ({
                            label: opt,
                            value: opt.trim(),
                        }));
                    } else if (name === "zone") {
                        options = zoneList.map((opt) => ({
                            label: opt,
                            value: opt.trim(),
                        }));
                    } else if (name === "solid") {
                        options = solidList.map((opt) => ({
                            label: opt,
                            value: opt.trim(),
                        }));
                    }

                    return (
                        <div key={idx} className="col-md-4 mt-2">
                            <SelectInput
                                label={label}
                                name={name}
                                value={form[name] || ""}
                                onChange={handleChange}
                                options={options}
                                isRequired={true}
                                disabled={!isAddMode}
                            />
                        </div>
                    );
                })}

                {textFields.map(({ label, name, isDigit }, idx) => (
                    <div key={idx} className="col-md-4 mt-2">
                        <TextInput
                            label={label}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            disabled={name !== "numStaff" ? true : isReadOnly}
                            isDigit={isDigit}
                        />
                    </div>
                ))}
            </div>

            {/* Monthly Consumption Inputs */}
            <div className="row mb-5">
                <div className="col-md-3 mt-2 brsr-form-style"></div>
                <div className="col-md-3 mt-2 brsr-form-style">
                    Electrical Unit Consumed
                </div>
                <div className="col-md-3 mt-2 brsr-form-style">
                    Diesel Utilized for Diesel Generator (in liters)
                </div>
                <div className="col-md-3 mt-2 brsr-form-style">
                    Petrol Utilized in Own Vehicles (in liters)
                </div>

                {months.map(({ label, key }) => (
                    <React.Fragment key={key}>
                        <div className="col-md-3 mt-5 brsr-form-style">
                            {label}
                        </div>
                        {["ele", "die", "pet"].map((prefix, i) => (
                            <div key={i} className="col-md-3 mt-2">
                                <TextInput
                                    name={`${prefix}${key}`}
                                    value={form[`${prefix}${key}`]}
                                    onChange={handleChange}
                                    disabled={isReadOnly}
                                    isDigit
                                />
                            </div>
                        ))}
                    </React.Fragment>
                ))}

                {/* Total FY Consumption */}
                <div className="col-md-3 mt-5 brsr-form-style">
                    Total FY {getPreviousFinancialYear()}
                </div>
                {["ttlEle", "ttlDie", "ttlPet"].map((name, i) => (
                    <div key={i} className="col-md-3 mt-2">
                        <TextInput
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            disabled
                            isDigit
                        />
                    </div>
                ))}

                {/* AC Details */}
                <div className="col-md-4 mt-5 brsr-form-style">
                    Air Conditioner Details
                </div>
                {acTypes.map(({ label }, idx) => (
                    <div key={idx} className="col-md-2 mt-5 brsr-form-style">
                        {label}
                    </div>
                ))}

                {(() => {
                    const allAcFieldKeys = acSections.flatMap(({ prefix }) =>
                        acTypes.map(({ key }) => `${prefix}${key}`)
                    );

                    const isAnyFilled = allAcFieldKeys.some((key) => form[key]);
                    const isAllFilled = allAcFieldKeys.every(
                        (key) => form[key]
                    );
                    const required = isAnyFilled && !isAllFilled;

                    return acSections.map(({ label, prefix }, secIdx) => (
                        <React.Fragment key={secIdx}>
                            <div className="col-md-4 mt-5 brsr-form-style">
                                {label}
                            </div>
                            {acTypes.map(({ key }, typeIdx) => (
                                <div key={typeIdx} className="col-md-2 mt-2">
                                    <TextInput
                                        name={`${prefix}${key}`}
                                        value={form[`${prefix}${key}`]}
                                        onChange={handleChange}
                                        disabled={isReadOnly}
                                        isDigit
                                        required={required}
                                        showAsterisk={required}
                                    />
                                </div>
                            ))}
                        </React.Fragment>
                    ));
                })()}
            </div>
        </>
    );
};

export default FormSection;
