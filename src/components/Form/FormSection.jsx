import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";
import TextAreaInput from "./TextAreaInput";
import "./../Hindi.css";
import NumberInput from "./Numberinput";

const FormSection = ({ form, handleChange, mode }) => {
    const yesNoOptions = [
        { label: "हाँ", value: "हाँ" },
        { label: "नहीं", value: "नहीं" },
    ];

    const reportOptions = ["आंचलिक कार्यालय", "अंचल की समेकित रिपोर्ट"];

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

    const renderRadio = (label, name) => (
        <RadioInput
            label={label}
            name={name}
            value={form[name]}
            onChange={handleChange}
            options={yesNoOptions}
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
                <div className="row mb-3">
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
                    <div className="col-md-3 mt-4 hindi-zone-new">
                        <label>को समाप्त तिमाही</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            {renderInput("अंचल", "zone", {
                                disabled: true,
                                required: true,
                            })}
                        </div>
                    </div>

                    <div className="col-md-">
                        <div className="form-group">
                            <SelectInput
                                label="रिपोर्ट"
                                name="report"
                                value={form.report}
                                onChange={handleChange}
                                options={reportOptions.map((opt) => ({
                                    label: opt,
                                    value: opt.trim(),
                                }))}
                                disabled={mode !== "add"}
                                required="true"
                            />
                        </div>
                    </div>
                </div>

                <h5 className="text-center my-3">
                    भाग - I (प्रत्येक तिमाही की समाप्ति पर भरा जाए)
                </h5>

                <div className="row">
                    <div className="form-group col-md-12">
                        {renderInput(
                            "राष्ट्रीयकृत बैंक/ वित्तीय संस्थान का नाम और पूरा पता",
                            "bankNameAddress"
                        )}
                    </div>
                </div>

                <div className="form-group mb-3 hindi-zone-new">
                    <label>संबंधित राजभाषा अधिकारी का फोन नं.</label>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <NumberInput
                                label="एस.टी.डी कोड"
                                name="officerStdCode"
                                value={form.officerStdCode}
                                onChange={handleChange}
                                disabled={mode === "view"}
                                pattern="^\d{5}$"
                                max={5}
                                valid={"stdCode"}
                                errorMessage="मान्य STD कोड दर्ज करें"
                                placeholder="मान्य STD कोड दर्ज करें"
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <NumberInput
                                label="फोन नं."
                                name="officerPhone"
                                value={form.officerPhone}
                                onChange={handleChange}
                                disabled={mode === "view"}
                                pattern="^\d{10}$"
                                max={10}
                                valid={"mobile"}
                                errorMessage="कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
                                placeholder="कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
                            />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            {renderInput("ई-मेल", "officerEmail", {
                                pattern:
                                    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                                placeholder:
                                    "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                                errorMessage:
                                    "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                            })}
                        </div>
                    </div>
                </div>

                <div className="form-group hindi-zone-new">
                    <label>
                        1. सीएमडी/समकक्ष स्तर पर बैठकों/फाइलों का ब्यौरा
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        I.सीएमडी/कार्यालय प्रमुख/समकक्ष स्तर पर कितनी बैठकें
                        आयोजित की गईं
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "totalMeetingsCmdLevel", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        II. इनमें से कितनी बैठकों की कार्यवाही हिंदी में की
                        गई/कार्यवृत्त हिंदी में जारी किए गए
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "meetingsInHindi", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        III.सीएमडी/कार्यालय प्रमुख/समकक्ष स्तर से सीधे जारी किए
                        गए कुल कागजात
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "totalDocumentsIssuedCmd", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        IV. हिंदी में जारी किए गए कागजात की कुल संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "documentsInHindi", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                </div>

                <div className="form-group hindi-zone-new">
                    <label>
                        2. राजभाषा अधिनियम, 1963 की धारा 3(3) के अंतर्गत जारी
                        कागजात
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (क) जारी दस्तावेज की कुल संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "totalDocumentsIssued", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ख) द्विभाषी रूप में जारी किए गए दस्तावेज की संख्‍या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "documentsIssuedBilingual", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ग) केवल अंग्रेजी में जारी किए गए दस्तावेज
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "documentsIssuedEnglishOnly", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (घ) केवल हिंदी में जारी किए गए दस्तावेज
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "documentsIssuedHindiOnly", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>

                    <div className="form-group hindi-zone-new">
                        <label
                            className="text-center"
                            style={{
                                lineHeight: "1.1px",
                                fontWeight: "lighter",
                            }}
                        >
                            (संकल्प, सामान्य आदेश, नियम, अधिसूचनाएं, प्रशासनिक
                            तथा अन्य रिपोर्टें व सरकारी कागजात, संविदा, करार,
                            अनुज्ञप्तियां, अनुज्ञापत्र, निविदा सुचनाएं और निविदा
                            प्रपत्र द्विभाषिक रूप में (अंग्रेजी और हिंदी ) में
                            जारी )
                        </label>
                    </div>
                </div>

                <div className="form-group hindi-zone-new">
                    <label>3. हिंदी में प्राप्त पत्र (राजभाषा नियम - 5)</label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (क) हिंदी में प्राप्त पत्रों की कुल संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "totalLettersReceivedHindi", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ख) इनमें से कितनों के उत्तर दिए जाने अपेक्षित नहीं थे
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "noReplyRequiredHindiLetters", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ग) इनमें से कितनों के उत्तर हिंदी/द्विभाषी में दिए गए
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "repliedInHindiBilingual", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (घ) इनमें से कितनों के उत्तर अंग्रेजी में दिए गए
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "repliedInEnglish", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                </div>
                <div className="form-group my-3 hindi-zone-new">
                    <label>
                        4. अंग्रेजी में प्राप्त पत्रों के उत्तर हिंदी में दिए
                        जाने की स्थिति (केवल 'क' एवं 'ख' क्षेत्र में स्थित
                        कार्यालयों के लिए )
                    </label>
                </div>
                <div className="row hindi-zone-new">
                    <label className="col-md-4"></label>
                    <label className="col-md-2">
                        अंग्रेजी में प्राप्त पत्रों की संख्या
                    </label>
                    <label className="col-md-2">
                        इनमें से कितनों के उत्तर हिंदी में दिए गए
                    </label>
                    <label className="col-md-2">
                        इनमें से कितनों के उत्तर अंग्रेजी में दिए गए
                    </label>

                    <label className="col-md-2">
                        इनमें से कितनों के उत्तर अपेक्षित नहीं थे
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-4 hindi-zone-new">
                        ‘क’क्षेत्र
                    </label>
                    <div className="col-md-2">
                        {renderInput("", "regionA_LettersReceivedEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_RepliedInHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_RepliedInEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_NoReplyRequired", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4 hindi-zone-new">
                        ‘ख’क्षेत्र
                    </label>
                    <div className="col-md-2">
                        {renderInput("", "regionB_LettersReceivedEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_RepliedInHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_RepliedInEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_NoReplyRequired", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>

                <div className="form-group my-3 hindi-zone-new">
                    <label>
                        5. मूल रूप से भेजे गए पत्रों/पत्राचार का ब्यौरा
                    </label>
                </div>
                <div className="row hindi-zone-new">
                    <label className="col-md-4"></label>
                    <label className="col-md-2">हिंदी में</label>
                    <label className="col-md-2">अंग्रेजी में</label>
                    <label className="col-md-2">
                        भेजे गए पत्रों की कुल संख्या
                    </label>
                    <label className="col-md-2">
                        हिंदी में भेजे गए पत्रों का प्रतिशत
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-4 hindi-zone-new">
                        ‘क’ क्षेत्र को
                    </label>
                    <div className="col-md-2">
                        {renderInput("", "regionA_LettersSentHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_LettersSentEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_TotalLettersSent", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionA_PercentageSentInHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4 hindi-zone-new">
                        ‘ख’क्षेत्र को
                    </label>
                    <div className="col-md-2">
                        {renderInput("", "regionB_LettersSentHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_LettersSentEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_TotalLettersSent", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionB_PercentageSentInHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-md-4 hindi-zone-new">
                        ‘ग’क्षेत्र को
                    </label>
                    <div className="col-md-2">
                        {renderInput("", "regionC_LettersSentHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionC_LettersSentEnglish", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionC_TotalLettersSent", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-2">
                        {renderInput("", "regionC_PercentageSentInHindi", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>

                <div className="form-group hindi-zone-new">
                    <label>
                        6. फाइलों / आवतियों/ ई-ऑफिस पर टिप्पण लेखन का ब्यौरा*
                    </label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        हिंदी में लिखी गई टिप्‍पणियों के पृष्‍ठों की संख्‍या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "pagesNotedInHindi", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        अंग्रेजी में लिखी गई टिप्‍पणियों के पृष्‍ठों की संख्‍या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "pagesNotedInEnglish", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        टिप्‍पणियों के पृष्‍ठों की कुल संख्‍या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "totalNotingPages", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        ई -ऑफिस के माध्यम से भेजी गई टिप्पणियों की संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "eOfficeHindiNotesSent", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>

                    <div className="form-group hindi-zone-new">
                        <label
                            className="text-center"
                            style={{
                                lineHeight: "1.1px",
                                fontWeight: "lighter",
                            }}
                        >
                            * हिंदी में टिप्‍पण-पृष्‍ठों की गणना करते समय आधे से
                            कम लिखे हुए पृष्‍ठ को आधा पृष्‍ठ तथा आधे से अधिक
                            लिखे हुए पृष्‍ठ को पूरा पृष्‍ठ समझा जाए।
                        </label>
                    </div>
                    <div className="form-group hindi-zone-new">
                        <label
                            className="text-center"
                            style={{
                                lineHeight: "1.1px",
                                fontWeight: "lighter",
                            }}
                        >
                            ** मद संख्या 3, 4 व 5 के संबंध में हिंदी के भेजे गए
                            तथा प्राप्त आधिकारिक ई-मेल को भी शामिल किया जाए।
                        </label>
                    </div>
                </div>
                <div className="form-group my-3 hindi-zone-new">
                    <label>7. हिंदी कार्यशालाएं</label>
                </div>
                <div className="row">
                    <label className="col-md-4 4mt-3 hindi-zone-new">
                        तिमाही के दौरान आयोजित पूर्ण दिवसीय कार्यशालाओं की
                        संख्‍या
                    </label>
                    <div className="col-md-8">
                        {renderInput("", "workshopsConducted", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>

                <div className="row hindi-zone-new">
                    <label className="col-md-4 mt-4">
                        इनमें प्रशिक्षित कार्मिकों की कुल संख्या
                    </label>
                    <div className="col-md-4">
                        {renderInput("कर्मचारी", "officersTrained", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                    <div className="col-md-4">
                        {renderInput("अधिकारी", "staffTrained", {
                            isDigit: true,
                            maxLength: 5,
                        })}
                    </div>
                </div>
                <label className="hindi-zone-new">
                    नोट : कार्यालयों में हर कार्मिक को प्रत्येक 2 वर्ष में कम से
                    कम एक बार प्रशिक्षित किया जाना अपेक्षित है।
                </label>

                <div className="form-group hindi-zone-new">
                    <label>8. राजभाषा कार्यान्‍वयन समिति की बैठक</label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (क) राजभाषा कार्यान्वयन समिति की बैठक की तिथि
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            <DateInput
                                label=""
                                name="committeeMeetingDate"
                                value={form.committeeMeetingDate}
                                onChange={handleChange}
                                disabled={mode === "view"}
                            />
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ख) अधीनस्थ कार्यालयों में गठित राजभाषा कार्यान्वयन
                        समितियों की संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "subordinateCommitteesCount", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ग) अधीनस्थ कार्यालयों में तिमाही में आयोजित बैठकों की
                        संख्या
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderInput("", "subordinateMeetingsThisQuarter", {
                                isDigit: true,
                                maxLength: 5,
                            })}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (घ) क्या इन बैठकों से संबंधित कार्यसूची और कार्यवृत्त
                        क्या हिंदी में जारी किए गए हैं ?
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderRadio("", "agendaMinutesInHindi")}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ङ) मोबाइल/इंटरनेट बैंकिंग की सुविधा हिंदी में प्रदान की
                        जा रही है ?
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderRadio("", "mobileInternetBankingInHindi")}
                        </div>
                    </div>
                </div>

                <div className="form-group hindi-zone-new">
                    <label>9. कामकाज में हिंदी का प्रयोग</label>
                </div>
                <div className="row">
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (i) पासबुक में प्रविष्टि हिंदी में करने (नाम, पता, जमा,
                        डेबिट आदि) की सुविधा उपलब्‍ध है?
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderRadio("", "passbookEntriesInHindi")}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (ii) ऋण वसूली पत्र हिंदी में जारी किए जाते हैं ?
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderRadio("", "loanRecoveryLettersInHindi")}
                        </div>
                    </div>
                    <label className="col-md-5 hindi-zone-new mt-3">
                        (iii) सारे फार्म (वाउचर/ड्राफ्ट/जमा रसीदें इत्‍यादि)
                        द्विभाषी हैं?
                    </label>
                    <div className="col-md-7">
                        <div className="form-group">
                            {renderRadio("", "formsAreBilingual")}
                        </div>
                    </div>
                </div>
                <div className="form-group  container-fluid hindi-zone-new">
                    <div className="col-md-12">
                        <TextAreaInput
                            label="10. तिमाही में किए गए उल्लेखनीय कार्य/उपलब्धियों का संक्षिप्त विवरण (अधिकतम 1000 कैरेक्टर)"
                            name="notableActivitiesSummary"
                            value={form.notableActivitiesSummary}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            maxLength={1000}
                            rows={4}
                        />
                    </div>
                </div>

                <div className="form-group  hindi-zone-new">
                    <label>
                        11.उल्लिखित आकड़ों की सत्यता के संबंध में प्रमाण-पत्र
                        संलग्न है।
                    </label>
                </div>
                <div className="row  hindi-zone-new">
                    <div className="col-md-4"></div>
                    <label className="col-md-4  mt-3">
                        राष्‍ट्रीयकृत बैंक/वित्‍तीय संस्‍थान की राजभाषा
                        कार्यान्वयन समिति के अध्यक्ष का नाम
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "committeeChairpersonName")}
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-4  mt-3"></div>
                    <label className="col-md-4 mt-3 hindi-zone-new">
                        पदनाम
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "chairpersonDesignation")}
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-new">
                        एसटीडी कोड सहित फोन नंबर
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "contactStdCodePhone", {
                            pattern: "^0[1-9][0-9]{1,5}-[0-9]{6,8}$",
                            placeholder:
                                "मान्य STD कोड और फ़ोन नंबर दर्ज करें जैसे 011-23456789",
                            errorMessage:
                                "मान्य STD कोड और फ़ोन नंबर दर्ज करें जैसे 011-23456789",
                        })}
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-new">
                        फैक्स नंबर
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "contactFax", {
                            isDigit: true,
                            maxLength: 15,
                            pattern: "^\\+?[0-9]{2,4}[-.\\s]?[0-9]{6,12}$",
                            placeholder:
                                "फ़ैक्स नंबर दर्ज करें, जैसे 11-23456789",
                            errorMessage: "कृपया वैध फ़ैक्स नंबर दर्ज करें",
                            isFax: true,
                        })}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4"></div>
                    <label className="col-md-4 mt-3 hindi-zone-new">
                        ई-मेल का पता
                    </label>
                    <div className="col-md-4">
                        {renderInput("", "contactEmail", {
                            pattern:
                                "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                            placeholder:
                                "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                            errorMessage:
                                "वैध ई-मेल दर्ज करें (उदा: example@domain.com)",
                        })}
                    </div>
                </div>
                <label className="hindi-zone-new">
                    कोई भी कॉलम खाली न छोड़ा जाए और सूचना स्पष्ट रूप से दी जाए।
                </label>
                <div />
            </div>
        </>
    );
};

export default FormSection;
