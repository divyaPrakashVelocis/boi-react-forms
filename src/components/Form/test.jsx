// import React from "react";
// import TextInput from "./TextInput";
// import SelectInput from "./SelectInput";
// import {
//     acSections,
//     acTypes,
//     getPreviousFinancialYear,
//     months,
//     selectFields,
//     textFields,
// } from "../../utils/dateUtils";

// const FormSection = ({ form, handleChange, mode, zones, branchCodeList }) => {
//     const isReadOnly = mode === "view";
//     const isAddMode = mode === "add";

//     return (
//         <>
//             {/* Select and Text Inputs */}
//             <div className="row mb-5">
//                 {selectFields.map(({ label, name }, idx) => (
//                     <div key={idx} className="col-md-4 mt-2">
//                         <SelectInput
//                             label={label}
//                             name={name}
//                             value={form[name]}
//                             onChange={handleChange}
//                             options={zones.map((opt) => ({
//                                 label: opt,
//                                 value: opt.trim(),
//                             }))}
//                             required
//                             disabled={!isAddMode}
//                         />
//                     </div>
//                 ))}

//                 {textFields.map(({ label, name, isDigit }, idx) => (
//                     <div key={idx} className="col-md-4 mt-2">
//                         <TextInput
//                             label={label}
//                             name={name}
//                             value={form[name]}
//                             onChange={handleChange}
//                             disabled={isReadOnly}
//                             isDigit={isDigit}
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Monthly Consumption Inputs */}
//             <div className="row mb-5">
//                 <div className="col-md-3 mt-2"></div>
//                 <div className="col-md-3 mt-2">Electrical Unit Consumed</div>
//                 <div className="col-md-3 mt-2">
//                     Diesel Utilized for Diesel Generator (in liters)
//                 </div>
//                 <div className="col-md-3 mt-2">
//                     Petrol Utilized in Own Vehicles (in liters)
//                 </div>

//                 {months.map(({ label, key }) => (
//                     <React.Fragment key={key}>
//                         <div className="col-md-3 mt-4">{label}</div>
//                         {["ele", "die", "pet"].map((prefix, i) => (
//                             <div key={i} className="col-md-3 mt-2">
//                                 <TextInput
//                                     name={`${prefix}${key}`}
//                                     value={form[`${prefix}${key}`]}
//                                     onChange={handleChange}
//                                     disabled={isReadOnly}
//                                     isDigit
//                                 />
//                             </div>
//                         ))}
//                     </React.Fragment>
//                 ))}

//                 {/* Total FY Consumption */}
//                 <div className="col-md-3 mt-4">
//                     Total FY {getPreviousFinancialYear()}
//                 </div>
//                 {["ttlEle", "ttlDie", "ttlPet"].map((name, i) => (
//                     <div key={i} className="col-md-3 mt-2">
//                         <TextInput
//                             name={name}
//                             value={form[name]}
//                             onChange={handleChange}
//                             disabled
//                             isDigit
//                         />
//                     </div>
//                 ))}

//                 {/* AC Details */}
//                 <div className="col-md-4 mt-5">Air Conditioner Details</div>
//                 {acTypes.map(({ label }, idx) => (
//                     <div key={idx} className="col-md-2 mt-5">
//                         {label}
//                     </div>
//                 ))}

//                 {acSections.map(({ label, prefix }, secIdx) => (
//                     <React.Fragment key={secIdx}>
//                         <div className="col-md-4 mt-4">{label}</div>
//                         {acTypes.map(({ key }, typeIdx) => (
//                             <div key={typeIdx} className="col-md-2 mt-2">
//                                 <TextInput
//                                     name={`${prefix}${key}`}
//                                     value={form[`${prefix}${key}`]}
//                                     onChange={handleChange}
//                                     disabled={isReadOnly}
//                                     isDigit
//                                 />
//                             </div>
//                         ))}
//                     </React.Fragment>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default FormSection;

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
import React from "react";

const FormSection = ({ form, handleChange, mode, zones, branchCodeList }) => (
    <>
        {/* <div className="row mb-5">
            <div className="col-md-4 mt-2">
                <SelectInput
                    label="FGMO"
                    name="fgmo"
                    value={form.fgmo}
                    onChange={handleChange}
                    options={zones.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    required
                    disabled={mode !== "add"}
                />
            </div>
            <div className="col-md-4 mt-2">
                <SelectInput
                    label="ZONE"
                    name="zone"
                    value={form.zone}
                    onChange={handleChange}
                    options={zones.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    required
                    disabled={mode !== "add"}
                />
            </div>
            <div className="col-md-4 mt-2">
                <SelectInput
                    label="SOLID"
                    name="solid"
                    value={form.solid}
                    onChange={handleChange}
                    options={zones.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    required
                    disabled={mode !== "add"}
                />
            </div>
            <div className="col-md-4 mt-2">
                <TextInput
                    label="Branch Name"
                    name="branchName"
                    value={form.branchName}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-4 mt-2">
                <TextInput
                    label="Number of Staff in Branch(Including Permanent Staff, Casual Labour, Driver)"
                    name="numStaff"
                    value={form.numStaff}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-4 mt-2">
                <TextInput
                    label="FY"
                    name="fy"
                    value={form.fy}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
        </div> */}

        <div className="row mb-5">
            {selectFields.map(({ label, name }, idx) => (
                <div key={idx} className="col-md-4 mt-2">
                    <SelectInput
                        label={label}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        options={zones.map((opt) => ({
                            label: opt,
                            value: opt.trim(),
                        }))}
                        required
                        disabled={mode !== "add"}
                    />
                </div>
            ))}

            {textFields.map(({ label, name, isDigit }, idx) => (
                <div key={idx} className="col-md-4 mt-2">
                    <TextInput
                        label={label}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        disabled={mode === "view"}
                        isDigit={isDigit}
                    />
                </div>
            ))}
        </div>

        <div className="row mb-5">
            <div className="col-md-3 mt-2"></div>
            <div className="col-md-3 mt-2">Electrical Unit Consumed</div>
            <div className="col-md-3 mt-2">
                Diesel Utilized for Diesel Generator(in liters)
            </div>
            <div className="col-md-3 mt-2">
                Petrol Utilized in own Vehicles(in liters)
            </div>

            {/* <div className="col-md-3 mt-4">April 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleApril"
                    value={form.eleApril}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieApril"
                    value={form.dieApril}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petApril"
                    value={form.petApril}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">May 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleMay"
                    value={form.eleMay}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieMay"
                    value={form.dieMay}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petMay"
                    value={form.petMay}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">June 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleJune"
                    value={form.eleJune}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieJune"
                    value={form.dieJune}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petJune"
                    value={form.petJune}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">July 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleJuly"
                    value={form.eleJuly}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieJuly"
                    value={form.dieJuly}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petJuly"
                    value={form.petJuly}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">August 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleAug"
                    value={form.eleAug}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieAug"
                    value={form.dieAug}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petAug"
                    value={form.petAug}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">September 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleSep"
                    value={form.eleSep}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieSep"
                    value={form.dieSep}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petSep"
                    value={form.petSep}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">October 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleOct"
                    value={form.eleOct}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieOct"
                    value={form.dieOct}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petOct"
                    value={form.petOct}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">November 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleNov"
                    value={form.eleNov}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieNov"
                    value={form.dieNov}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petNov"
                    value={form.petNov}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">December 2024</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleDec"
                    value={form.eleDec}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieDec"
                    value={form.dieDec}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petDec"
                    value={form.petDec}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">January 2025</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleJan"
                    value={form.eleJan}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieJan"
                    value={form.dieJan}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petJan"
                    value={form.petJan}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">February 2025</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleFeb"
                    value={form.eleFeb}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieFeb"
                    value={form.dieFeb}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petFeb"
                    value={form.petFeb}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-4">March 2025</div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="eleMar"
                    value={form.eleMar}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="dieMar"
                    value={form.dieMar}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="petMar"
                    value={form.petMar}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div> */}

            {months.map(({ label, key }) => (
                <React.Fragment key={key}>
                    <div className="col-md-3 mt-4">{label}</div>
                    <div className="col-md-3 mt-2">
                        <TextInput
                            label=""
                            name={`ele${key}`}
                            value={form[`ele${key}`]}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            isDigit={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <TextInput
                            label=""
                            name={`die${key}`}
                            value={form[`die${key}`]}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            isDigit={true}
                        />
                    </div>
                    <div className="col-md-3 mt-2">
                        <TextInput
                            label=""
                            name={`pet${key}`}
                            value={form[`pet${key}`]}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            isDigit={true}
                        />
                    </div>
                </React.Fragment>
            ))}

            <div className="col-md-3 mt-4">
                Total FY {getPreviousFinancialYear()}
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="ttlEle"
                    value={form.ttlEle}
                    onChange={handleChange}
                    disabled={true}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="ttlDie"
                    value={form.ttlDie}
                    onChange={handleChange}
                    disabled={true}
                    isDigit={true}
                />
            </div>
            <div className="col-md-3 mt-2">
                <TextInput
                    label=""
                    name="ttlPet"
                    value={form.ttlPet}
                    onChange={handleChange}
                    disabled={true}
                    isDigit={true}
                />
            </div>

            {/* <div className="col-md-4 mt-5">Air Conditioner Details</div>
            <div className="col-md-2 mt-5">Centralized AC</div>
            <div className="col-md-2 mt-5">Split AC</div>
            <div className="col-md-2 mt-5">Window AC</div>
            <div className="col-md-2 mt-5">Cassette AC</div>

            <div className="col-md-4 mt-4">Number of AC in Branch</div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="numCen"
                    value={form.numCen}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="numSplit"
                    value={form.numSplit}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="numWindow"
                    value={form.numWindow}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="numCassette"
                    value={form.numCassette}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-4 mt-4">Total tonnage of all AC</div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="ttlCen"
                    value={form.ttlCen}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="ttlSplit"
                    value={form.ttlSplit}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="ttlWindow"
                    value={form.ttlWindow}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="ttlCassette"
                    value={form.ttlCassette}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-4 mt-4">Star ratings</div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="starCen"
                    value={form.starCen}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="starSplit"
                    value={form.starSplit}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="starWindow"
                    value={form.starWindow}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-2 mt-2">
                <TextInput
                    label=""
                    name="starCassette"
                    value={form.starCassette}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div> */}

            <div className="col-md-4 mt-5">Air Conditioner Details</div>
            {acTypes.map(({ label }, idx) => (
                <div key={idx} className="col-md-2 mt-5">
                    {label}
                </div>
            ))}

            {acSections.map(({ label, prefix }, secIdx) => (
                <React.Fragment key={secIdx}>
                    <div className="col-md-4 mt-4">{label}</div>
                    {acTypes.map(({ key }, typeIdx) => (
                        <div key={typeIdx} className="col-md-2 mt-2">
                            <TextInput
                                label=""
                                name={`${prefix}${key}`}
                                value={form[`${prefix}${key}`]}
                                onChange={handleChange}
                                disabled={mode === "view"}
                                isDigit={true}
                            />
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </>
);

export default FormSection;
