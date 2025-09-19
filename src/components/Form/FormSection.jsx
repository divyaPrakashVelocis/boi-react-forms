import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import TextAreaInput from "./TextAreaInput";
import FileInput from "./FileInput";
import { yesNo, yesNoNOtImplemented } from "../../utils/dateUtils";
import NumberInput from "./NumberInput";
import "./../Hindi.css";

const FormSection = ({
    form,
    handleChange,
    mode,
    zones,
    branchCode,
    handleFileChange,
    handleFileDelete,
    fileData,
}) => (
    <>
        <div className="row mb-3">
            <span className="online-branch-form-style">भाग- 1 सामान्‍य</span>
            {/* <div className="col-md-6">
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
                    disabled={mode !== "add"}
                />
            </div> */}
            <div className="col-md-6">
                {mode === "add" ? (
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
                    <TextInput
                        label="अंचल"
                        name="zone"
                        value={form.zone}
                        onChange={handleChange}
                        disabled
                    />
                )}
            </div>
            <div className="col-md-3">
                <TextInput
                    label="क्षेत्र"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    disabled
                />
            </div>
            <div className="col-md-3">
                <TextInput
                    label="साल"
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    disabled
                />
            </div>

            <div className="col-md-6">
                <SelectInput
                    label="शाखा कोड"
                    name="branchCode"
                    value={form.branchCode}
                    onChange={handleChange}
                    options={branchCode.map((opt) => ({
                        label: opt,
                        value: opt,
                    }))}
                    required
                    disabled={mode !== "add"}
                />
            </div>
            <div className="col-md-6">
                <TextInput
                    label="शाखा का नाम"
                    name="branchName"
                    value={form.branchName}
                    onChange={handleChange}
                    disabled
                />
            </div>
            <div className="col-md-6">
                <TextInput
                    label="शाखा प्रमुख का नाम"
                    name="mainBranchName"
                    value={form.mainBranchName}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6">
                <TextInput
                    label="नामित राजभाषा अधिकारी का नाम"
                    name="officerNameA"
                    value={form.officerNameA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="नामित राजभाषा अधिकारी का पदनाम व दूरभाषा नम्‍बर"
                    name="officerNameNumber"
                    value={form.officerNameNumber}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="दूरभाष (शाखा)"
                    name="contactNoBranch"
                    value={form.contactNoBranch}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="ईमेल (शाखा)"
                    name="emailBranch"
                    type="email"
                    value={form.emailBranch}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    placeholder="वैध ई-मेल दर्ज करें (उदा: example@domain.com)"
                    errorMessage="वैध ई-मेल दर्ज करें (उदा: example@domain.com)"
                />
            </div>
            <div className="col-md-6 ">
                <DateInput
                    label="निरीक्षण तिथि (शाखा)"
                    name="dateA"
                    value={form.dateA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग - 2 पिछले निरीक्षण की जानकारी
            </span>

            <div className="col-md-6 ">
                <DateInput
                    label="पिछले निरीक्षण की तिथि :"
                    name="dateOfInspection"
                    value={form.dateOfInspection}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <TextInput
                    label="पिछले निरीक्षण में पाई गई कमियों पर की गई अनुवर्ती कार्रवाई :"
                    name="actionOnLastInspection"
                    value={form.actionOnLastInspection}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-12 ">
                <TextInput
                    label="उन मदों का ब्‍यौरा जिन पर कारवाई अभी पूरी नही की गई :"
                    name="madDetails"
                    value={form.madDetails}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग -3 हिंदी ज्ञान की स्थिति
            </span>

            <div className="col-md-6 "></div>
            <div className="col-md-3 ">
                <label className="online-branch-form-style">अधिकारी</label>
            </div>
            <div className="col-md-3 ">
                <label className="online-branch-form-style">कर्मचारी</label>
            </div>
            <div className="col-md-4 mt-4">
                <label className="online-branch-form-style">
                    शाखा में कार्यरत कुल अधिकारियों कर्मचारी की संख्‍या :
                </label>
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="totalWorkerInBranch"
                    value={form.totalWorkerInBranch}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    pattern="^\d{1,15}$"
                />
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="totalOfficerInBranch"
                    value={form.totalOfficerInBranch}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    pattern="^\d{1,15}$"
                />
            </div>
            <div className="col-md-4 mt-4">
                <label className="online-branch-form-style">
                    हिंदी में प्रवीणता प्राप्‍त स्टाफ सदस्यों की संख्या :
                </label>
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="goodInHindiOfficer"
                    value={form.goodInHindiOfficer}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="goodInHindiWorkers"
                    value={form.goodInHindiWorkers}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-4 mt-4">
                <label className="online-branch-form-style">
                    कार्यसाधक ज्ञान प्राप्त स्टाफ सदस्यों की संख्या :
                </label>
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="staffMemberOfficer"
                    value={form.staffMemberOfficer}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="staffMemberWorker"
                    value={form.staffMemberWorker}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-4 mt-4">
                <label className="online-branch-form-style">
                    उनमें से कितनों को अभी डेस्‍क प्रशिक्षण नहीं दिया गया :
                </label>
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="notDoneDeskOfficer"
                    value={form.notDoneDeskOfficer}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label=""
                    name="notDoneDeskWorker"
                    value={form.notDoneDeskWorker}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-4 mt-4">
                <label className="online-branch-form-style">
                    क्या प्रवीणता प्राप्त स्टाफ सदस्यों को व्यक्तिशः आदेश जारी
                    किया गया है :
                </label>
            </div>

            <div className="col-md-4 ">
                <SelectInput
                    label=""
                    name="orderIssuedWorkers"
                    value={form.orderIssuedWorkers}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <SelectInput
                    label=""
                    name="orderIssuedOfficers"
                    value={form.orderIssuedOfficers}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग-4 तिमाही प्रगति रिपोर्ट की स्थिति
            </span>

            <div className="col-md-6 ">
                <DateInput
                    label="शाखा की अद्यतन अवधि की तिमाही प्रगति रिपोर्ट कब भिजवाई गई :"
                    name="dateBInspection"
                    value={form.dateBInspection}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या आंचलिक कार्यालय से तिमाही प्रगति रिपोर्ट की समीक्षा प्राप्‍त हुई :"
                    name="qtrProgressReportReceived"
                    value={form.qtrProgressReportReceived}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-12 ">
                <TextInput
                    label="राजभाषा विभाग द्वारा की गई समीक्षा पर शाखा द्वारा की गई मदवार कार्रवाई :"
                    name="helpingAction"
                    value={form.helpingAction}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग - 5 हिंदी पत्राचार की स्थिति
            </span>

            <div className="col-md-6 ">
                <NumberInput
                    label="शाखा का कुल हिंदी पत्राचार (लक्ष्‍य 100%, 90%, 55%)"
                    name="totalCountOfPatrachar"
                    value={form.totalCountOfPatrachar}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>

            <div className="col-md-6 ">
                <NumberInput
                    label='(क)(ख)(ग) क्षेत्र से "क" क्षेत्र (लक्ष्‍य 100%, 90%, 55%)'
                    name="fromA"
                    value={form.fromA}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>

            <div className="col-md-6 ">
                <NumberInput
                    label='(क)(ख)(ग) क्षेत्र से "ख" क्षेत्र (लक्ष्‍य 100%, 90%, 55%)'
                    name="fromB"
                    value={form.fromB}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>

            <div className="col-md-6 ">
                <NumberInput
                    label='(क)(ख)(ग) क्षेत्र से "ग" क्षेत्र (लक्ष्‍य 65%, 55%, 55%)'
                    name="fromC"
                    value={form.fromC}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग -6(i) राजभाषा कार्यान्‍वयन समिति की बैठक की स्थिति
            </span>

            <div className="col-md-6 ">
                <DateInput
                    label="शाखा में गठित राजभाषा कार्यान्‍वयन समिति की बैठक की तिथि :"
                    name="rajbhashaDataC"
                    value={form.rajbhashaDataC}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <TextInput
                    label="बैठक किसकी अध्‍यक्षता में आयोजित की गई है :"
                    name="meetingOwner"
                    value={form.meetingOwner}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <DateInput
                    label="बैठक के कार्यवृत्‍त जारी करने की तिथि :"
                    name="dateOfMeetingC"
                    value={form.dateOfMeetingC}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या बैठक का कार्यवृत्‍त राजभाषा विभाग को प्रेषित किया गया था :"
                    name="yesNoA"
                    value={form.yesNoA}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-12 ">
                <DateInput
                    label="बैठक के कार्यवृत्‍त राजभाषा विभाग को प्रेषित करने की तारीख :"
                    name="meetingDateA"
                    value={form.meetingDateA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग - 6(ii) नगर राजभाषा कार्यान्वयन समिति की बैठक की स्थिति
            </span>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या आपके नगर में नगर राजभाषा कार्यान्‍वयन समिति गठित है"
                    name="yesNoB"
                    value={form.yesNoB}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या आपका कार्यालय इसका सदस्‍य है।"
                    name="yesNoC"
                    value={form.yesNoC}
                    onChange={handleChange}
                    options={yesNoNOtImplemented.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            {form.yesNoC === "हाँ" && (
                <>
                    <div className="col-md-6 ">
                        <TextInput
                            label="यदि हां, तो पिछली बैठक में भाग लेने वाले अधिकारी का नाम"
                            name="ifYesLastOfficerName"
                            value={form.ifYesLastOfficerName}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                    <div className="col-md-6 ">
                        <TextInput
                            label="पदनाम"
                            name="designationA"
                            value={form.designationA}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                    <div className="col-md-6 ">
                        <DateInput
                            label="पिछली बैठक की तारीख"
                            name="lastMeetingDateA"
                            value={form.lastMeetingDateA}
                            onChange={handleChange}
                            disabled={mode === "view"}
                        />
                    </div>
                </>
            )}
            {form.yesNoC === "नहीं" && (
                <div className="col-md-6 ">
                    <TextInput
                        label="यदि सदस्‍य नहीं है तो, अब तक सदस्‍यता क्‍यों नहीं ग्रहण की गई"
                        name="ifNotReasonForNotMembership"
                        value={form.ifNotReasonForNotMembership}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                </div>
            )}
            <div className="col-md-6 ">
                <DateInput
                    label="पिछले बैठक की तिथि"
                    name="previousMeetingDate"
                    value={form.previousMeetingDate}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <SelectInput
                    label="क्या शाखा प्रमुख उपस्थित थे"
                    name="branchManagerWasAvailable"
                    value={form.branchManagerWasAvailable}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग -7 राजभाषा अधिनियम/नियम, वार्षिक और अन्‍य आदेशों के अनुपालन
                के संबंध में रिपोर्ट :
            </span>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या धारा 3(3) का अनुपालन शत-प्रतिशत हो रहा है?"
                    name="yesNoF"
                    value={form.yesNoF}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                {form.yesNoF === "नहीं" && (
                    <TextInput
                        label="अगर नहीं तो उसके कारण"
                        name="ifNotReasonA"
                        value={form.ifNotReasonA}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                )}
            </div>

            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या इसके लिए कोई चेक पॉइंट निर्धारित किया गया है?"
                    name="yesNoG"
                    value={form.yesNoG}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                {form.yesNoG === "नहीं" && (
                    <TextInput
                        label="अगर नहीं तो चेक पॉइंट संबंधी सुझाव (अधिकारियों से चर्चा के पश्‍चात)"
                        name="ifNotCheckPointRelatedSuggestion"
                        value={form.ifNotCheckPointRelatedSuggestion}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                )}
            </div>
            <div className="col-md-4 ">
                <SelectInput
                    label="क्या शाखा में वार्षिक कार्यक्रम की प्रति प्राप्‍त हुई है"
                    name="yesNoE"
                    value={form.yesNoE}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-4 ">
                <SelectInput
                    label="क्‍या शाखा में हिंदी संबंधी गार्ड फाइल रखी जा रही है"
                    name="yesNoH"
                    value={form.yesNoH}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-4 ">
                <SelectInput
                    label="क्या यह फ़ाइल अद्यतन है।"
                    name="yesNoK"
                    value={form.yesNoK}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या हिंदी में प्राप्‍त सभी पत्रों का उत्‍तर हिंदी में ही दिया जाता है?"
                    name="yesNoL"
                    value={form.yesNoL}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                {form.yesNoL === "नहीं" && (
                    <TextInput
                        label="अगर नहीं तो उसके कारण"
                        name="ifNotReasonB"
                        value={form.ifNotReasonB}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                )}
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या 'क' एवं 'ख' क्षेत्र से अंग्रेजी में प्राप्‍त पत्रों का उत्‍तर हिंन्‍दी में दिया जाता है?"
                    name="yesNoI"
                    value={form.yesNoI}
                    onChange={handleChange}
                    options={yesNoNOtImplemented.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                {form.yesNoI === "नहीं" && (
                    <TextInput
                        label="अगर नहीं तो उसके कारण"
                        name="ifNotReasonC"
                        value={form.ifNotReasonC}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                )}
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या इसके लिए कोई चेक प्‍वाईंट निर्धारित किया गया है?"
                    name="yesNoD"
                    value={form.yesNoD}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                {form.yesNoD === "नहीं" && (
                    <TextInput
                        label="अगर नहीं तो चेक प्‍वाईंट संबंधी सुझाव (अधिकारियों से चर्चा पश्‍चात)"
                        name="ifNotThenSuggestion"
                        value={form.ifNotThenSuggestion}
                        onChange={handleChange}
                        disabled={mode === "view"}
                    />
                )}
            </div>
            <div className="col-md-12 ">
                <TextAreaInput
                    label="विवरण बॉक्स"
                    name="explanationDetailsBox"
                    value={form.explanationDetailsBox}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <NumberInput
                    label="शाखा में फाइलों पर हिंदी टिप्‍पणी लेख का प्रतिशत :"
                    name="hindiCommentOnFiles"
                    value={form.hindiCommentOnFiles}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="क्‍या ग्राहकों के प्रयोग में लाए जाने वाले सभी फार्म आदि द्विभाषी रूप में है। कृपया पूरा विवरण दें। (लक्ष्‍य : 100%)"
                    name="fullDetailsTarget"
                    value={form.fullDetailsTarget}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    valid={"0-100"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                आंतरिक कामकाज में हिंदी का प्रयोग :
            </span>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा हिंदी मॉडल शाखा है :"
                    name="hindiModel"
                    value={form.hindiModel}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा के सभी नामपट्ट, सूचना पट्ट, बोर्ड आदि द्विभाषी/त्रिभाषी हैं?"
                    name="boardDualTriple"
                    value={form.boardDualTriple}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा में प्रयोग होने वाली सभी मुहरें आदि द्विभाषी हैं?"
                    name="stampDualInBranch"
                    value={form.stampDualInBranch}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा में सभी रजिस्‍टरों में प्रविष्टियां हिंदी में की जा रही हैं?"
                    name="recordsFillingInHindi"
                    value={form.recordsFillingInHindi}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="(जो रजिस्‍टर अंग्रेजी में लिखे जा रहे है उनके नाम अलग से नोट करें)"
                    name="englishRegisterNoted"
                    value={form.englishRegisterNoted}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा में फाइलों/रजिस्‍टरों पर विषय/शीर्षक हिंदी/द्विभाषी में लिखे गए है?"
                    name="titleInHindi"
                    value={form.titleInHindi}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या अधिकारियों/कर्मचारियों द्वारा अपने आवेदन हिंदी में भरे जाते हैं? (एचआरएमएस सहित)"
                    name="applicationFilledInHindiByWorkers"
                    value={form.applicationFilledInHindiByWorkers}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा में मानक प्रपत्र हिंदी/द्विभाषी प्रयोग में लाए जा रहे हैं?"
                    name="manakPatraUseing"
                    value={form.manakPatraUseing}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा की उपस्थिति पंजिका हिंदी में है?"
                    name="yesNoN"
                    value={form.yesNoN}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या शाखा में ग्राहकों की सूचना के लिए हिंदी/क्षेत्रीय भाषा में एसएमएस का विकल्‍प देने संबंधी सूचना का प्रदर्शन किया गया है?"
                    name="yesNoM"
                    value={form.yesNoM}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="क्‍या ग्राहकों ने उक्‍त विकल्‍प दिया है"
                    name="aboveOptionByCustomer"
                    value={form.aboveOptionByCustomer}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextInput
                    label="हिंदी/क्षेत्रीय भाषा का विकल्‍प देने वाले ग्राहकों की संख्‍या (गत माह की संख्‍या दी जाए)"
                    name="hindiOptionCustomerNumber"
                    value={form.hindiOptionCustomerNumber}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="शाखा से संबंधित आसपास स्थित एटीएम पर पर्ची द्विभाषी/हिंदी में प्रिंट होती है"
                    name="yesNoO"
                    value={form.yesNoO}
                    onChange={handleChange}
                    options={yesNoNOtImplemented.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <SelectInput
                    label="पास बुक/खाता विवरण आदि हिंदी में प्रिंट करने की सुविधा है"
                    name="printingFacility"
                    value={form.printingFacility}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                शाखा में उपलब्‍ध कंप्‍यूटरों की स्थिति
            </span>

            <div className="col-md-4 ">
                <TextInput
                    label="शाखा में उपलब्‍ध कंयूटरों की संख्‍या :"
                    name="availableComputerNumber"
                    value={form.availableComputerNumber}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    isDigit={true}
                />
            </div>

            <div className="col-md-4 ">
                <SelectInput
                    label="क्‍या इनमें हिंदी में कार्य करने के लिए यूनिकोड सुविधा उपलब्‍ध हैं?"
                    name="unicodeAvailable"
                    value={form.unicodeAvailable}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <NumberInput
                    label="कंप्‍यूटरों पर हिंदी में कार्य करने का प्रतिशत"
                    name="hindiWorkPer"
                    value={form.hindiWorkPer}
                    onChange={handleChange}
                    errorMessage="कृपया 1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                    min={0}
                    max={100}
                    disabled={mode === "view"}
                    valid={"0-100"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                भाग-8 शाखा में हिंदी माह/हिंदी दिवस का आयोजन
            </span>

            <div className="col-md-4 ">
                <SelectInput
                    label="क्‍या शाखा में हिंदी माह/हिंदी दिवस मनाया गया ?"
                    name="hinidDiwasCelebration"
                    value={form.hinidDiwasCelebration}
                    onChange={handleChange}
                    options={yesNo.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <TextInput
                    label="आयोजित प्रतियोगिता का नाम"
                    name="competionName"
                    value={form.competionName}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-4 ">
                <SelectInput
                    label="क्‍या नराकास द्वारा आयोजित प्रतियोगिता में सहभागिता की गई"
                    name="narakasParticipation"
                    value={form.narakasParticipation}
                    onChange={handleChange}
                    options={yesNoNOtImplemented.map((opt) => ({
                        label: opt,
                        value: opt.trim(),
                    }))}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-6 ">
                <TextAreaInput
                    label="भाग-9 शाखा द्वारा हिंदी के कार्यान्‍वयन के क्षेत्र में किए गए अन्‍य उल्‍लेखनीय कार्य"
                    name="otherImportantWorkDoneByBranch"
                    value={form.otherImportantWorkDoneByBranch}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
            <div className="col-md-6 ">
                <TextAreaInput
                    label="भाग-10 निरीक्षण अधिकारी की टिप्‍पणी"
                    name="inspectionOfficerComment"
                    value={form.inspectionOfficerComment}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                शाखा में ग्राहकों के लिए लगाए गए नोटिस बोर्ड एवं विभिन्न फॉर्म,
                स्टाफ सदस्यों की उपस्थिति पंजिका एवं अन्य हिंदी
                फ़ाइल/रजिस्टर/गार्ड फ़ाइल/रबर मोहर की छाप की फोटो अपलोड करें:
            </span>

            {Array.from({ length: 6 }).map((_, idx) => {
                const attachKey = `attachment${idx + 1}`;
                const fileNameKey = `fileName${idx + 1}`;

                return (
                    <div key={idx} className="col-md-6 ">
                        {fileData[attachKey] ? (
                            <div className="d-flex justify-content-between align-items-center border p-2 rounded mt-4">
                                <a
                                    className="online-branch-form-style"
                                    disabled={mode === "view"}
                                    href={fileData[attachKey]}
                                    download={fileData[fileNameKey]}
                                >
                                    {fileData[fileNameKey]}
                                </a>
                                {mode !== "view" && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger ms-2"
                                        onClick={() => handleFileDelete(idx)}
                                    >
                                        X
                                    </button>
                                )}
                            </div>
                        ) : (
                            <FileInput
                                label={`फ़ाइल ${idx + 1}`}
                                name="document"
                                onChange={handleFileChange}
                                accept=".pdf,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.jpeg"
                                disabled={mode === "view"}
                                idx={idx}
                            />
                        )}
                    </div>
                );
            })}
        </div>

        <div className="row mb-3">
            <span className="online-branch-form-style">
                निरीक्षण के समय उपस्थित अधिकारी का विवरण
            </span>

            <div className="col-md-6 ">
                <TextInput
                    label="नाम"
                    name="nameA"
                    value={form.nameA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <TextInput
                    label="पदनाम"
                    name="designationB"
                    value={form.designationB}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <DateInput
                    label="शाखा में कार्यभार ग्रहण करने की तारीख"
                    name="dateOfJoiningA"
                    value={form.dateOfJoiningA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <NumberInput
                    label="मोबाइल नं."
                    name="mobileA"
                    value={form.mobileA}
                    onChange={handleChange}
                    disabled={mode === "view"}
                    pattern="^\d{10}$"
                    maxLength={10}
                    valid={"mobile"}
                    errorMessage="कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
                />
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-6 ">
                <TextInput
                    label="निरीक्षण करने वाले अधिकारी का नाम"
                    name="nameOfInspectionOfficer"
                    value={form.nameOfInspectionOfficer}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>

            <div className="col-md-6 ">
                <TextInput
                    label="पदनाम :"
                    name="designationC"
                    value={form.designationC}
                    onChange={handleChange}
                    disabled={mode === "view"}
                />
            </div>
        </div>
    </>
);

export default FormSection;
