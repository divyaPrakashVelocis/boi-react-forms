import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";
import "./../Hindi.css";
import NumberInput from "./Numberinput";
import PercentageInput from "./PercentageInput";

const FormSection = ({
    form = {},
    handleChange,
    mode = "",
    // zone = "",
    // branchCode = [],
}) => {
    const yesNoOptions = [
        { label: "हाँ", value: "हाँ" },
        { label: "नहीं", value: "नहीं" },
    ];

    const reports = ["आंचलिक कार्यालय", "अंचल की समेकित रिपोर्ट"];

    const optionsName = [
        { label: "केवल अंग्रेजी में", value: "केवल अंग्रेजी में" },
        { label: "आंशिक रूप से द्विभाषी", value: "आंशिक रूप से द्विभाषी" },
        { label: "पूरी तरह से द्विभाषी", value: "पूरी तरह से द्विभाषी" },
    ];

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

    const renderRadio = (label, name, isNotYesNo = false) => (
        <RadioInput
            label={label}
            name={name}
            value={form[name]}
            onChange={handleChange}
            options={isNotYesNo ? optionsName : yesNoOptions}
            disabled={mode === "view"}
        />
    );

    return (
        <>
            <div className="container-fluid mt-4">
                <h4 className="text-center">
                    केंद्र सरकार के राष्‍ट्रीयकृत बैंकों एवं वित्तीय संस्थाओं
                    आदि में राजभाषा हिंदी के प्रगामी प्रयोग से संबंधित तिमाही
                    प्रगति रिपोर्ट
                </h4>
                <div className="container-border-style row mb-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <div className="form-group">
                            {renderInput("तिमाही", "qtr", {
                                disabled: true,
                                required: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            {renderInput("साल", "year", {
                                disabled: true,
                                required: true,
                            })}
                        </div>
                    </div>
                    <div className="col-md-3 mt-4 hindi-zone-2-new">
                        <label>को समाप्त तिमाही</label>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* {mode === "add" ? (
                                <SelectInput
                                    label="अंचल"
                                    name="zone"
                                    value={form.zone}
                                    onChange={handleChange}
                                    options={zones.map((opt) => ({
                                        label: opt,
                                        value: opt.trim(),
                                    }))}
                                    required
                                />
                            ) : (
                                renderInput("अंचल", "zone", {
                                    disabled: true,
                                    required: true,
                                })
                            )} */}
                            {renderInput("अंचल", "zone", {
                                disabled: true,
                                required: true,
                            })}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <SelectInput
                                label="रिपोर्ट"
                                name="report"
                                value={form.report}
                                onChange={handleChange}
                                options={reports.map((opt) => ({
                                    label: opt,
                                    value: opt,
                                }))}
                                required
                                disabled={mode !== "add"}
                            />
                        </div>
                    </div>
                    {/* <div className="col-md-4"> */}
                    {/* <div className="form-group">
                            {renderInput("शाखा का नाम", "branchName", {
                                disabled: true,
                                required: true,
                            })}
                        </div> */}
                    {/* </div> */}
                </div>
                <h5 className="text-center my-3">भाग - II</h5>
                <h5 className="text-center my-3">
                    इसे केवल 31 मार्च को समाप्त तिमाही रिपोर्ट के भाग-I के साथ
                    भरा जाए ।
                </h5>
                <div className="container-border-style row">
                    <div className="form-group col-md-12">
                        {renderRadio(
                            "1.(i) क्या कार्यालय राजभाषा नियम, 1976 के नियम 10 (4) (अर्थात कार्यालय के कुल स्टाफ में से 80% को हिंदी का कार्यसाधक ज्ञान है) के अंतर्गत अधिसूचित है ?",
                            "officeNotifiedUnderRule10"
                        )}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        (ii) प्रत्यक्ष नियंत्रणाधीन कार्यालयों (यदि हों) की
                        राजभाषा नियम,1976 के नियम 10 (4) के अंतर्गत अधिसूचना का
                        विवरण:-
                    </label>
                </div>
                <div className="container-border-style row hindi-zone-2-new">
                    <label className="col-md-4 mt-2">
                        कुल कार्यालयों की संख्या
                    </label>
                    <label className="col-md-4 mt-2">
                        अधिसूचित कार्यालयों की संख्या
                    </label>
                    <label className="col-md-4 mt-2">
                        शेष कार्यालयों को अधिसूचित करने हेतु की गई कार्रवाई
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "totalSubordinateOffices_1a", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "notifiedSubordinateOffices_1a", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "actionForRemainingOffices_1a")}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        2.(i) अधिकारियों/कर्मचारियों को राजभाषा हिंदी का ज्ञान
                    </label>
                </div>
                <div className="container-border-style row hindi-zone-2-new">
                    <label className="col-md-4"></label>
                    <div className="col-md-8">
                        <div className="row">
                            <label className="col-md-4  mt-2">अधिकारी</label>
                            <label className="col-md-4  mt-2">
                                कर्मचारी (लिपिक)
                            </label>
                            <label className="col-md-4  mt-2">
                                कुल संख्या{" "}
                            </label>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) अधिकारियों तथा कर्मचारियों की कुल संख्या
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInput("", "hindiOfficers_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "hindiEmploees_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "totalOfficersEmployees_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) अनुसचिवीय कार्य से संबंधित
                            अधिकारियों/कर्मचारियों की संख्या*
                        </label>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInput("", "secretarialOfficers_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "secretarialEmploees_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput(
                                    "",
                                    "secretarialtotalOfficersEmployees_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2 hindi-zone-2-new">
                                <label className="mt-4">कार्यसाधक</label>
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                <label className="mt-4">प्रवीणता प्राप्त</label>
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                <label className="mt-4">कार्यसाधक</label>
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                <label className="mt-4">प्रवीणता प्राप्त</label>
                            </div>
                            <div className="col-md-4 hindi-zone-2-new">
                                <label className="mt-4">कुल संख्या</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ग) उपर्युक्त (क) में से हिंदी का ज्ञान प्राप्त
                            अधिकारी/कर्मचारी
                        </label>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "knowledgeHindiOfficersExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "knowledgeHindiOfficersProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "knowledgeHindiEmploeesExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "knowledgeHindiEmploeesProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "knowledgeHindiTotal_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (घ) कितने कर्मी हिंदी भाषा का प्रशिक्षण ले रहे हैं?
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "undergoingTrainingOfficersExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "undergoingTrainingOfficersProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "undergoingTrainingEmploeesExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "undergoingTrainingEmploeesProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "undergoingTrainingTotal_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ङ) हिंदी में प्रशिक्षण के लिए शेष
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "remainingTrainingOfficersExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "remainingTrainingOfficersProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "remainingTrainingEmploeesExecutive_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "remainingTrainingEmploeesProficiency_2a",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "remainingTrainingTotal_2a", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new">
                        <h9>
                            *कार्यालय में कार्यरत प्रत्येक अधिकारी/कर्मचारी जो
                            फ़ाइल कार्य/पत्राचार से जुड़ा है, अनुसचिवीय की श्रेणी
                            में माना जाएगा
                        </h9>
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>2.(ii) हिंदी आशुलिपि/टंकण का ज्ञान</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-2 hindi-zone-2-new">कुल संख्या</div>
                    <div className="col-md-2 hindi-zone-2-new">
                        हिंदी में प्रशिक्षित की संख्या
                    </div>
                    <div className="col-md-2 hindi-zone-2-new">
                        प्रशिक्षितों में से कितने हिंदी में काम करते हैं
                    </div>
                    <div className="col-md-2 hindi-zone-2-new">
                        प्रशिक्षण के लिए शेष
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">(क) आशुलिपिक*</label>
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "totalStenographers_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiTrainedStenographers_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "stenographersWorkingInHindi_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "stenographersRemainingTraining_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) टंकक/ लिपिक/ सहायक अनुभाग अधिकारी/ निजी सहायक
                        </label>
                    </div>

                    <div className="col-md-2">
                        {renderInput("", "totalTypistsClerks_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiTrainedTypistsClerks_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "typistsClerksWorkingInHindi_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "typistsClerksRemainingTraining_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">(ग) कर/ पोस्टल सहायक आदि</label>
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "totalOtherStaff_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiTrainedOtherStaff_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "otherStaffWorkingInHindi_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "otherStaffRemainingTraining_2b", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new">
                        <h9>
                            * इसमें निजी सचिव , प्रधान निजी सचिव, वरिष्ठ प्रधान
                            निजी सचिव, प्रधान स्टाफ अधिकारी भी शामिल हैं
                        </h9>
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>2.(iii) अनुवाद का ज्ञान</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 hindi-zone-2-new">
                                अधिकारी
                            </div>
                            <div className="col-md-4 hindi-zone-2-new">
                                कर्मचारी
                            </div>
                            <div className="col-md-4 hindi-zone-2-new">
                                कुल संख्या
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) कुल अधिकारी/कर्मचारी जो अनुवाद कार्य करते हैं ।
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInput("", "officerTranslators_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "employeeTranslators_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "totalTranslators_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) उक्त (क) में से अनुवाद संबंधी प्रशिक्षण कितनों
                            को प्राप्त है ।
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInput("", "officerReceivedTraining_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                            <div className="col-md-4">
                                {renderInput(
                                    "",
                                    "employeeReceivedTraining_2c",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "totalReceivedTraining_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ग) कितनों को प्रशिक्षण दिया जाना शेष है ?
                        </label>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInput(
                                    "",
                                    "officerRemainingTraining_2c",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput(
                                    "",
                                    "employeeRemainingTraining_2c",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-4">
                                {renderInput("", "totalRemainingTraining_2c", {
                                    isDigit: true,
                                    maxLength: 8,
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        3. कंप्यूटर पर हिंदी टंकण करने के लिए प्रशिक्षण
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new">
                        कुल अधिकारियों/कर्मचारियों की संख्या
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        कंप्यूटर पर हिंदी टंकण में प्रशिक्षितों की संख्या
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        कंप्यूटर पर हिंदी में काम करने वालों की संख्या
                    </div>

                    <div className="col-md-4">
                        {renderInput("", "totalStaffForHindiTyping_3", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "trainedInHindiTyping_3", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "workingInHindiTyping_3", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>4. कंप्यूटर/लैपटॉप से संबंधित विवरण</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new">
                        कंप्यूटर/लैपटाप की कुल संख्या
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        यूनिकोड सक्षम (enabled) कंप्यूटर/लैपटाप की संख्‍या
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        हिंदी में किए गए कार्य का प्रतिशत
                    </div>

                    <div className="col-md-4">
                        {renderInput("", "totalComputers_4", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "unicodeEnabledComputers_4", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    {/* <div className="col-md-4">
                        {renderInput("", "percentageWorkInHindi_4", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div> */}
                    <PercentageInput
                        label=""
                        name="percentageWorkInHindi_4"
                        value={form?.percentageWorkInHindi_4}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>5. कोड, मैनुअल, मानकीकृत प्रपत्र आदि</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">कुल संख्या</div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">द्विभाषी</div>

                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) अधिनियम/ नियम/ कार्यालयीन कोड/ मैनुअल/ प्रकिया
                            साहित्य आदि
                        </label>
                    </div>

                    <div className="col-md-4">
                        {renderInput("", "totalActsManuals_5", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "bilingualActsManuals_5", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">(ख) मानकीकृत प्रपत्र</label>
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "totalStandardForms_5", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "bilingualStandardForms_5", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="form-group hindi-zone-2-new col-md-6">
                        <label className="mt-4">
                            6. (i) राजभाषा नियम, 1976 के नियम 8(4) के अंतर्गत
                            संपूर्ण कार्य हिंदी में करने हेतु कुल कितने
                            कार्मिकों को व्यक्तिश: आदेश जारी किए गए :-
                        </label>
                    </div>
                    <div className="col-md-6">
                        {renderInput("", "personnelWithHindiWorkOrders_6", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-6">
                        <label className="mt-4">
                            (ii) शेष कार्मिकों की संख्या :-
                        </label>
                    </div>
                    <div className="col-md-6">
                        {renderInput("", "remainingPersonnelCount_6", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        7. प्रशिक्षण कार्यक्रम (केवल प्रशिक्षण संस्‍थानों के
                        लिए)
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-3 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">
                        प्रशिक्षण की अवधि (घंटों में)
                    </div>
                    <div className="col-md-3 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">
                        प्रशिक्षण कार्यक्रमों का ब्यौरा(नाम)
                    </div>
                    <div className="col-md-3 hindi-zone-2-new">
                        हिंदी में दिए गए प्रशिक्षण
                    </div>
                    <div className="col-md-3 hindi-zone-2-new">
                        अंग्रेजी में दिए गए प्रशिक्षण
                    </div>
                    <div className="col-md-3 hindi-zone-2-new">
                        मिली जुली भाषा में दिए गए प्रशिक्षण
                    </div>
                    <div className="col-md-3">
                        {renderInput("", "trainingProgram1Name_7")}
                    </div>
                    <div className="col-md-3">
                        {renderInput("", "trainingProgram1HindiHours_7", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-3">
                        {renderInput("", "trainingProgram1EnglishHours_7", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-3">
                        {renderInput("", "trainingProgram1MixedHours_7", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        8. वर्ष के दौरान किए गए राजभाषा संबंधी निरीक्षण
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) (i) अनुभागों की कुल संख्‍या
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "totalSections_8", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ii) इनमें से निरीक्षित अनुभागों की संख्‍या
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "inspectedSections_8", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) (i) अधीनस्‍थ कार्यालयों इत्‍यादि (यदि कोई हो) की
                            कुल संख्‍या
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "totalSubOffices_8", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ii) इनमें से निरीक्षित कार्यालयों की संख्‍या
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "inspectedSubOffices_8", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ग) हिंदी में कार्य करने हेतु निर्दिष्ट अनुभागों की
                            संख्या
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "sectionsForHindiWork_8", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>9. पत्रिकाओं आदि का प्रकाशन</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new">कुल संख्‍या</div>
                    <div className="col-md-4 hindi-zone-2-new">हिंदी में</div>
                    <div className="col-md-4 hindi-zone-2-new">
                        अंग्रेजी में
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "totalPublications_9", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "publicationsInHindi_9", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "publicationsInEnglish_9", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>

                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        10. हिंदी पुस्तकों की खरीद (ई-बुक/ डिजिटल माध्यम/
                        ई-हिंदी समाचार पत्र सहित)
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) वर्ष के दौरान पुस्तकों की खरीद पर कुल व्यय
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "totalBookExpenditure_10", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>

                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) हिंदी की पुस्तकों की खरीद पर व्यय
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "hindiBookExpenditure_10", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        11. उप सचिव/ उप महाप्रबंधक/ समकक्ष एवं उनसे उच्‍च स्‍तर
                        के अधिकारियों द्वारा हिंदी में कार्य
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">
                        कॉलम (2) में से हिंदी में कार्य करने वालों की संख्या
                    </div>
                    <div className="col-md-2 hindi-zone-2-new"></div>
                    <div className="col-md-2 hindi-zone-2-new">
                        अधिकारीयों की कुल संख्‍या
                    </div>
                    <div className="col-md-2 hindi-zone-2-new">
                        हिंदी जानने वाले अधिकारियों की संख्या
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2 hindi-zone-2-new">
                                नहीं करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                25 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                26 से 50 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                51 से 75 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                76 प्रतिशत से अधिक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                शत-प्रतिशत करते हैं
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        {renderInput("", "totalSeniorOfficers_11", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "seniorOfficersKnowingHindi_11", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersNotUsingHindi_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersUsingHindiUpTo25_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersUsingHindi26To50_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersUsingHindi51To75_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersUsingHindi76To99_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "seniorOfficersUsingHindi100Percent_11",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        12. हिंदी जानने वाले (प्रवीण तथा कार्यसाधक ज्ञान
                        प्राप्‍त) उप सचिव/समकक्ष से नीचे के स्‍तर के कार्मिकों
                        द्वारा हिंदी में कार्य
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new"></div>
                    <div className="col-md-3 hindi-zone-2-new">
                        कॉलम (2) में से हिंदी में कार्य करने वालों की संख्या
                    </div>
                    <div className="col-md-2 hindi-zone-2-new"></div>

                    <div className="col-md-2 hindi-zone-2-new">
                        अधिकारीयों की कुल संख्‍या
                    </div>
                    <div className="col-md-2 hindi-zone-2-new">
                        हिंदी जानने वाले अधिकारियों की संख्या
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2 hindi-zone-2-new">
                                नहीं करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                25 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                26 से 50 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                51 से 75 प्रतिशत तक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                76 प्रतिशत से अधिक करते हैं
                            </div>
                            <div className="col-md-2 hindi-zone-2-new">
                                शत-प्रतिशत करते हैं
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        {renderInput("", "totalJuniorOfficers_12", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "juniorOfficersKnowingHindi_12", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersNotUsingHindi_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersUsingHindiUpTo25_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersUsingHindi26To50_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersUsingHindi51To75_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersUsingHindi76To99_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                            <div className="col-md-2">
                                {renderInput(
                                    "",
                                    "juniorOfficersUsingHindi100Percent_12",
                                    {
                                        isDigit: true,
                                        maxLength: 8,
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>13. हिंदी के पद</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new"></div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-2 hindi-zone-2-new">
                        पदों की संख्या (मुख्यालय में)
                    </div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-2 hindi-zone-2-new">
                        पदों की संख्या (अधीनस्थ कार्यालयों में)
                    </div>
                    <div className="col-md-1 hindi-zone-2-new"></div>
                    <div className="col-md-4 hindi-zone-2-new">पदनाम</div>
                    <div className="col-md-2 hindi-zone-2-new">स्वीकृत</div>
                    <div className="col-md-2 hindi-zone-2-new">रिक्त</div>
                    <div className="col-md-2 hindi-zone-2-new">स्वीकृत</div>
                    <div className="col-md-2 hindi-zone-2-new">रिक्त</div>
                    <div className="col-md-4">
                        {renderInput("", "hindiPost1Designation_13")}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiPost1HqSanctioned_13", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiPost1HqVacant_13", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiPost1SubSanctioned_13", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "hindiPost1SubVacant_13", {
                            isDigit: true,
                            maxLength: 8,
                        })}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>14. वेबसाइट (संगत स्‍थान पर टिक चिन्हित करें)</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="col-md-4 hindi-zone-2-new">
                        वेबसाइट का पता
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        केवल अंग्रेजी में/आंशिक रूप से द्विभाषी/पूरी तरह से
                        द्विभाषी
                    </div>
                    <div className="col-md-4 hindi-zone-2-new">
                        वैबसाइट खुलते समय हिंदी व अंग्रेजी भाषा के चयन का विकल्प
                    </div>
                    <div className="col-md-4">
                        {renderInput("", "websiteUrl_14", {
                            maxLength: 8,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderRadio("", "websiteFullyBilingual_14", true)}
                    </div>
                    <div className="col-md-4">
                        {renderRadio("", "websiteLanguageSelectionOption_14")}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        15. वर्ष के दौरान राजभाषा नीति के कार्यान्वयन से संबंधित
                        अन्य विशिष्ट उपलब्धियों का संक्षिप्त विवरण :
                    </label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) हिंदी दिवस/ सप्ताह/ पखवाड़ा/ माह (कब से कब तक)
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "hindiDayWeekDetails_15")}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) हिंदी संगोष्ठी की तिथि और विषय
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "hindiSeminarDetails_15")}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ग) उपर्युक्त (क) के अलावा हिंदी में अन्य आयोजन की
                            तिथि और विषय (यदि कोई हो)
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "otherHindiEvents_15")}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (घ) नवोन्मेषी कार्य ( यदि कोई हो )
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderInput("", "innovativeWorks_15")}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>16. केवल अधीनस्थ कार्यालयों के लिए :-</label>
                </div>
                <div className="container-border-style row mb-3">
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (क) क्या आपका कार्यालय नराकास का सदस्य है ?
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderRadio("", "memberOfNarakas_16")}
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ख) पिछली बैठक के आयोजन की तिथि ।
                        </label>
                    </div>
                    <div className="col-md-8">
                        <DateInput
                            label=""
                            name="lastNarakasMeetingDate_16"
                            value={form.lastNarakasMeetingDate_16}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                    <div className="form-group hindi-zone-2-new col-md-4">
                        <label className="mt-4">
                            (ग) क्या विभागाध्यक्ष ने विचारधीन वर्ष में नराकास की
                            दोनों बैठकों में भाग लिया ?
                        </label>
                    </div>
                    <div className="col-md-8">
                        {renderRadio("", "deptHeadAttendedNarakasMeetings_16")}
                    </div>
                </div>
                <div className="form-group hindi-zone-2-new mt-3">
                    <label>
                        17.उल्लिखित आकड़ों की सत्यता के संबंध में प्रमाण-पत्र
                        संलग्न है।
                    </label>
                </div>
                <div className="container-border-style row hindi-zone-2-new">
                    <div className="col-md-4"></div>
                    <label className="col-md-4  mt-3">
                        राष्‍ट्रीयकृत बैंक/ वित्‍तीय संस्‍थान की विभागीय राजभाषा
                        कार्यान्वयन समिति के अध्यक्ष का नाम
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "committeeChairmanName_17")}
                    </div>
                    <div className="col-md-4  mt-3"></div>
                    <label className="col-md-4 mt-3 hindi-zone-2-new">
                        पदनाम
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "committeeChairmanDesignation_17")}
                    </div>
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-2-new">
                        दूरभाष नंबर
                    </label>
                    <div className="col-md-4">
                        <NumberInput
                            label=""
                            name="committeeChairmanPhone_17"
                            value={form.committeeChairmanPhone_17}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            pattern="^\d{10}$"
                            max={10}
                            valid={"mobile"}
                            errorMessage="कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
                            placeholder="कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
                        />
                    </div>
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-2-new">
                        फैक्स नंबर
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "committeeChairmanFax_17", {
                            isDigit: true,
                            maxLength: 15,
                            pattern: "^\\+?[0-9]{2,4}[-.\\s]?[0-9]{6,12}$",
                            placeholder:
                                "फ़ैक्स नंबर दर्ज करें, जैसे 11-23456789",
                            errorMessage: "कृपया वैध फ़ैक्स नंबर दर्ज करें",
                            isFax: true,
                        })}
                    </div>
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-2-new">
                        ई-मेल का पता
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "committeeChairmanEmail_17", {
                            pattern:
                                "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                            placeholder:
                                "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                            errorMessage:
                                "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                        })}
                    </div>
                </div>
                <label className="hindi-zone-2-new">
                    कोई भी कॉलम खाली न छोड़ा जाए और सूचना स्पष्ट रूप से दी जाए।
                </label>
                <div />
            </div>
        </>
    );
};

export default FormSection;
