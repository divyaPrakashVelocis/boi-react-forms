export const getPreviousQuarterLastMonthName = () => {
    const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
    const currentQuarter = Math.floor(month / 3); // 0 to 3
    const previousQuarter = (currentQuarter + 3) % 4; // handles wrap-around to previous year
    const prevQuarterEndMonthIndex = (previousQuarter + 1) * 3 - 1;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[prevQuarterEndMonthIndex];
};

export const headerJSON = [
    { rrn: "Record Ref. No." },
    { zone_: "अंचल" },
    { area_: "क्षेत्र" },
    { year_: "साल" },
    { branch_code: "शाखा कोड" },
    { branch_name: "शाखा का नाम" },
    { main_branch_name: "शाखा प्रमुख का नाम" },
    { officer_name_a: "नामित राजभाषा अधिकारी का नाम" },
    { officer_name_number: "नामित राजभाषा अधिकारी का पदनाम व दूरभाषा नम्‍बर" },
    { contact_no_branch: "दूरभाष (शाखा)" },
    { email_branch: "ईमेल (शाखा)" },
    { date_a: "निरीक्षण तिथि (शाखा)" },
    { date_of_inspection: "पिछले निरीक्षण की तिथि" },
    {
        action_on_last_inspection:
            "पिछले निरीक्षण में पाई गई कमियों पर की गई अनुवर्ती कार्रवाई",
    },
    { mad_details_: "उन मदों का ब्‍यौरा जिन पर कारवाई अभी पूरी नही की गई" },
    {
        total_worker_in_branch:
            "शाखा में कार्यरत कुल अधिकारियों कर्मचारी की संख्‍या - अधिकारी",
    },
    {
        total_officer_in_branch:
            "शाखा में कार्यरत कुल अधिकारियों कर्मचारी की संख्‍या - कर्मचारी",
    },
    {
        good_in_hindi_officer:
            "हिंदी में प्रवीणता प्राप्‍त स्टाफ सदस्यों की संख्या - अधिकारी",
    },
    {
        good_in_hindi_workers:
            "हिंदी में प्रवीणता प्राप्‍त स्टाफ सदस्यों की संख्या - कर्मचारी",
    },
    {
        staff_member_officer:
            "कार्यसाधक ज्ञान प्राप्त स्टाफ सदस्यों की संख्या - अधिकारी",
    },
    {
        staff_member_worker:
            "कार्यसाधक ज्ञान प्राप्त स्टाफ सदस्यों की संख्या - कर्मचारी",
    },
    {
        not_done_desk_officer:
            "उनमें से कितनों को अभी डेस्‍क प्रशिक्षण नहीं दिया गया - अधिकारी",
    },
    {
        not_done_desk_worker:
            "उनमें से कितनों को अभी डेस्‍क प्रशिक्षण नहीं दिया गया - कर्मचारी",
    },
    {
        order_issed_workers:
            "क्या प्रवीणता प्राप्त स्टाफ सदस्यों को व्यक्तिशः आदेश जारी किया गया है - अधिकारी",
    },
    {
        order_issed_officers:
            "क्या प्रवीणता प्राप्त स्टाफ सदस्यों को व्यक्तिशः आदेश जारी किया गया है - कर्मचारी",
    },
    {
        date_b_inspection:
            "शाखा की अद्यतन अवधि की तिमाही प्रगति रिपोर्ट कब भिजवाई गई",
    },
    {
        qtr_progress_report_received:
            "क्‍या आंचलिक कार्यालय से तिमाही प्रगति रिपोर्ट की समीक्षा प्राप्‍त हुई",
    },
    {
        helping_action:
            "राजभाषा विभाग द्वारा की गई समीक्षा पर शाखा द्वारा की गई मदवार कार्रवाई",
    },
    {
        total_count_of_patrachar:
            "शाखा का कुल हिंदी पत्राचार (लक्ष्‍य 100%, 90%, 55%)",
    },
    { from_a: '(क)(ख)(ग) क्षेत्र से "क" क्षेत्र (लक्ष्‍य 100%, 90%, 55%)' },
    { from_b: '(क)(ख)(ग) क्षेत्र से "ख" क्षेत्र (लक्ष्‍य 100%, 90%, 55%)' },
    { from_c: '(क)(ख)(ग) क्षेत्र से "ग" क्षेत्र (लक्ष्‍य 65%, 55%, 55%)' },
    {
        rajbhasha_data_c:
            "शाखा में गठित राजभाषा कार्यान्‍वयन समिति की बैठक की तिथि",
    },
    { meeting_owner: "बैठक किसकी अध्‍यक्षता में आयोजित की गई है" },
    { date_of_meeting_c: "बैठक के कार्यवृत्‍त जारी करने की तिथि" },
    {
        yes_no_a:
            "क्‍या बैठक का कार्यवृत्‍त राजभाषा विभाग को प्रेषित किया गया था",
    },
    {
        meeting_date_a:
            "बैठक के कार्यवृत्‍त राजभाषा विभाग को प्रेषित करने की तिथि",
    },
    { yes_no_b: "क्‍या आपके नगर में नगर राजभाषा कार्यान्‍वयन समिति गठित है" },
    { yes_no_c: "क्‍या आपका कार्यालय इसका सदस्‍य है।" },
    {
        if_yes_last_officer_name:
            "यदि हां, तो पिछली बैठक में भाग लेने वाले अधिकारी का नाम",
    },
    { designation_a: "पदनाम" },
    { last_meeting_date_a: "पिछली बैठक की तारीख" },
    {
        if_not_reason_for_not_membership:
            "यदि सदस्‍य नहीं है तो, अब तक सदस्‍यता क्‍यों नहीं ग्रहण की गई",
    },
    { previous_meeting_date: "पिछले बैठक की तिथि" },
    { branch_manager_was_available: "क्या शाखा प्रमुख उपस्थित थे" },
    { yes_no_f: "क्‍या धारा 3(3) का अनुपालन शत-प्रतिशत हो रहा है?" },
    { if_not_reason_a: "अगर नहीं तो उसके कारण" },
    { yes_no_g: "क्‍या इसके लिए कोई चेक पॉइंट निर्धारित किया गया है?" },
    {
        if_not_check_point_related_suggestion:
            "अगर नहीं तो चेक पॉइंट संबंधी सुझाव (अधिकारियों से चर्चा के पश्‍चात)",
    },
    { yes_no_e: "क्या शाखा में वार्षिक कार्यक्रम की प्रति प्राप्‍त हुई है" },
    { yes_no_h: "क्‍या शाखा में हिंदी संबंधी गार्ड फाइल रखी जा रही है" },
    { yes_no_k: "क्या यह फ़ाइल अद्यतन है।" },
    {
        yes_no_l:
            "क्‍या हिंदी में प्राप्‍त सभी पत्रों का उत्‍तर हिंदी में ही दिया जाता है?",
    },
    { if_not_reason_b: "अगर नहीं तो कारण" },
    {
        yes_no_i:
            "क्‍या 'क' एवं 'ख' क्षेत्र से अंग्रेजी में प्राप्‍त पत्रों का उत्‍तर हिंन्‍दी में दिया जाता है?",
    },
    { if_not_reason_c: "अगर नहीं तो कारण" },
    { yes_no_d: "क्‍या इसके लिए कोई चेक प्‍वाईंट निर्धारित किया गया है?" },
    {
        if_not_then_suggestion:
            "अगर नहीं तो चेक प्‍वाईंट संबंधी सुझाव (अधिकारियों से चर्चा पश्‍चात)",
    },
    { explanation_details_box: "विवरण बॉक्स" },
    {
        hindi_comment_on_files:
            "शाखा में फाइलों पर हिंदी टिप्‍पणी लेख का प्रतिशत",
    },
    {
        full_details_target:
            "क्‍या ग्राहकों के प्रयोग में लाए जाने वाले सभी फार्म आदि द्विभाषी रूप में है। कृपया पूरा विवरण दें। (लक्ष्‍य : 100%)",
    },
    { hindi_model_: "क्‍या शाखा हिंदी मॉडल शाखा है" },
    {
        board_dual_triple:
            "क्‍या शाखा के सभी नामपट्ट, सूचना पट्ट, बोर्ड आदि द्विभाषी/त्रिभाषी हैं?",
    },
    {
        stamp_dual_in_branch:
            "क्‍या शाखा में प्रयोग होने वाली सभी मुहरें आदि द्विभाषी हैं?",
    },
    {
        records_filling_in_hindi:
            "क्‍या शाखा में सभी रजिस्‍टरों में प्रविष्टियां हिंदी में की जा रही हैं?",
    },
    {
        english_register_noted_:
            "(जो रजिस्‍टर अंग्रेजी में लिखे जा रहे है उनके नाम अलग से नोट करें)",
    },
    {
        title_in_hindi:
            "क्‍या शाखा में फाइलों/रजिस्‍टरों पर विषय/शीर्षक हिंदी/द्विभाषी में लिखे गए है?",
    },
    {
        application_filled_in_hindi_by_workers:
            "क्‍या अधिकारियों/कर्मचारियों द्वारा अपने आवेदन हिंदी में भरे जाते हैं? (एचआरएमएस सहित)",
    },
    {
        manak_patra_useing:
            "क्‍या शाखा में मानक प्रपत्र हिंदी/द्विभाषी प्रयोग में लाए जा रहे हैं?",
    },
    { yes_no_n: "क्‍या शाखा की उपस्थिति पंजिका हिंदी में है?" },
    {
        yes_no_m:
            "क्‍या शाखा में ग्राहकों की सूचना के लिए हिंदी/क्षेत्रीय भाषा में एसएमएस का विकल्‍प देने संबंधी सूचना का प्रदर्शन किया गया है?",
    },
    { above_option_by_customer: "क्‍या ग्राहकों ने उक्‍त विकल्‍प दिया है" },
    {
        hindi_option_customer_numner:
            "हिंदी/क्षेत्रीय भाषा का विकल्‍प देने वाले ग्राहकों की संख्‍या (गत माह की संख्‍या दी जाए)",
    },
    {
        yes_no_o:
            "शाखा से संबंधित आसपास स्थित एटीएम पर पर्ची द्विभाषी/हिंदी में प्रिंट होती है",
    },
    {
        printing_facility:
            "पास बुक/खाता विवरण आदि हिंदी में प्रिंट करने की सुविधा है",
    },
    { available_computer_number: "शाखा में उपलब्‍ध कंयूटरों की संख्‍या" },
    {
        unicode_available:
            "क्‍या इनमें हिंदी में कार्य करने के लिए यूनिकोड सुविधा उपलब्‍ध हैं?",
    },
    { hindi_work_per: "कंप्‍यूटरों पर हिंदी में कार्य करने का प्रतिशत" },
    {
        hinid_diwas_celebration:
            "क्‍या शाखा में हिंदी माह/हिंदी दिवस मनाया गया ?",
    },
    { competion_name: "आयोजित प्रतियोगिता का नाम" },
    {
        narakas_participation:
            "क्‍या नराकास द्वारा आयोजित प्रतियोगिता में सहभागिता की गई",
    },
    {
        other_important_work_done_by_branch:
            "भाग-9 शाखा द्वारा हिंदी के कार्यान्‍वयन के क्षेत्र में किए गए अन्‍य उल्‍लेखनीय कार्य",
    },
    { inspection_officer_commet: "भाग-10 निरीक्षण अधिकारी की टिप्‍पणी" },
    { name_a: "नाम" },
    { designation_b: "पदनाम" },
    { date_of_joining_a: "शाखा में कार्यभार ग्रहण करने की तारीख" },
    { mobile_a: "मोबाइल नं." },
    { name_of_inspection_officer: "निरीक्षण करने वाले अधिकारी का नाम" },
    { designation_c: "पदनाम" },
    { created_on: "Created On" },
    { author_name: "Author Name" },
];

export const yesNo = ["हाँ", "नहीं"];
export const yesNoNOtImplemented = ["हाँ", "नहीं", "लागू नहीं"];

export const handleDecimalInput = (e, type) => {
    if (type === "0-100") {
        let value = e.target.value;

        // Remove invalid characters
        value = value.replace(/[^0-9.]/g, "");

        // Allow only one decimal point
        const parts = value.split(".");
        if (parts.length > 2) {
            value = parts[0] + "." + parts[1];
        }

        // Limit to two decimal places
        if (parts[1]?.length > 2) {
            parts[1] = parts[1].slice(0, 2);
            value = parts.join(".");
        }

        // Check value validity
        const num = parseFloat(value);
        if (!isNaN(num)) {
            if (num > 100) {
                e.target.setCustomValidity(
                    "कृपया  1 से 100 के बीच एक मान्य संख्या दर्ज करें"
                );
            } else {
                e.target.setCustomValidity(""); // clear message if valid
            }
        } else {
            e.target.setCustomValidity(
                "कृपया  1 से 100 के बीच एक मान्य संख्या दर्ज करें"
            );
        }

        e.target.value = value;
    } else if (type === "mobile") {
        e.target.value = e.target.value.replace(/[^\d]/g, "");
    } else {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 15);
    }
};

export const getFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = January, 3 = April

    if (month >= 3) {
        // Financial year starts in April
        const nextYearShort = (year + 1).toString().slice(-2);
        return `${year}-${nextYearShort}`;
    } else {
        const prevYear = year - 1;
        const currentYearShort = year.toString().slice(-2);
        return `${prevYear}-${currentYearShort}`;
    }
};

export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export const initialForm = {
    zone: "",
    area: "",
    year: getFinancialYear(),
    branchCode: "",
    branchName: "",
    mainBranchName: "",
    officerNameA: "",
    officerNameNumber: "",
    contactNoBranch: "",
    emailBranch: "",
    dateA: "",
    dateOfInspection: "",
    actionOnLastInspection: "",
    madDetails: "",
    totalWorkerInBranch: "",
    totalOfficerInBranch: "",
    goodInHindiOfficer: "",
    goodInHindiWorkers: "",
    staffMemberOfficer: "",
    staffMemberWorker: "",
    notDoneDeskOfficer: "",
    notDoneDeskWorker: "",
    orderIssuedWorkers: "",
    orderIssuedOfficers: "",
    dateBInspection: "",
    qtrProgressReportReceived: "",
    helpingAction: "",
    totalCountOfPatrachar: "",
    fromA: "",
    fromB: "",
    fromC: "",
    rajbhashaDataC: "",
    meetingOwner: "",
    dateOfMeetingC: "",
    yesNoA: "",
    meetingDateA: "",
    yesNoB: "",
    yesNoC: "",
    ifYesLastOfficerName: "",
    designationA: "",
    lastMeetingDateA: "",
    ifNotReasonForNotMembership: "",
    previousMeetingDate: "",
    branchManagerWasAvailable: "",
    yesNoF: "",
    ifNotReasonA: "",
    yesNoG: "",
    ifNotCheckPointRelatedSuggestion: "",
    yesNoE: "",
    yesNoH: "",
    yesNoK: "",
    yesNoL: "",
    ifNotReasonB: "",
    yesNoI: "",
    ifNotReasonC: "",
    yesNoD: "",
    ifNotThenSuggestion: "",
    explanationDetailsBox: "",
    hindiCommentOnFiles: "",
    fullDetailsTarget: "",
    hindiModel: "",
    boardDualTriple: "",
    stampDualInBranch: "",
    recordsFillingInHindi: "",
    englishRegisterNoted: "",
    titleInHindi: "",
    applicationFilledInHindiByWorkers: "",
    manakPatraUseing: "",
    yesNoN: "",
    yesNoM: "",
    aboveOptionByCustomer: "",
    hindiOptionCustomerNumber: "",
    yesNoO: "",
    printingFacility: "",
    availableComputerNumber: "",
    unicodeAvailable: "",
    hindiWorkPer: "",
    hinidDiwasCelebration: "",
    competionName: "",
    narakasParticipation: "",
    otherImportantWorkDoneByBranch: "",
    inspectionOfficerComment: "",
    nameA: "",
    designationB: "",
    dateOfJoiningA: "",
    mobileA: "",
    nameOfInspectionOfficer: "",
    designationC: "",
};

export const allRole = [
    "HOADMIN",
    "FORM_ADMIN_ONLINE_BRANCH_INSPECTION",
    "ZONE_ADMIN_ONLINE_BRANCH_INSPECTION",
    "USERROLE",
];
