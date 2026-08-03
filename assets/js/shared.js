const JTCShared = (() => {
    const STORAGE_KEYS = {
        students: 'jtcStudents',
        lang: 'jtcLang',
        auth: 'adminLoggedIn'
    };

    const translations = {
        ar: {
            institute_name: 'معهد جمال للغات',
            admin_panel: 'لوحة تحكم المدير · إدارة الشهادات',
            total_students: 'إجمالي الطلاب',
            total_programs: 'عدد البرامج',
            certificates_issued: 'شهادات صادرة',
            add_new_student: 'إضافة طالب جديد',
            edit_student_data: 'تعديل بيانات الطالب',
            full_name: 'الاسم الكامل',
            full_name_placeholder: 'أدخل الاسم كما في الشهادة',
            program: 'البرنامج / الدورة',
            program_placeholder: 'مثال: دورة اللغة الإنجليزية',
            hours: 'الساعات المعتمدة',
            hours_placeholder: 'مثال: 120 ساعة',
            cert_no: 'رقم الشهادة',
            cert_no_placeholder: 'مثال: 00058',
            issue_date: 'تاريخ الإصدار',
            issue_date_label: 'تاريخ الإصدار',
            save: 'حفظ',
            update: 'تحديث',
            cancel: 'إلغاء',
            confirm: 'تأكيد',
            edit: 'تعديل',
            delete: 'حذف',
            preview: 'معاينة',
            student_list: 'قائمة الطلاب',
            actions: 'إجراءات',
            search_placeholder: 'ابحث بالاسم أو رقم الشهادة...',
            no_students: 'لا يوجد طلاب مسجلين. أضف طالباً جديداً.',
            no_search_results: 'لا توجد نتائج مطابقة للبحث',
            cert_preview: 'معاينة الشهادة (قابلة للطباعة/التحميل)',
            republic: 'جمهورية السودان',
            cert_no_label: 'رقم الشهادة',
            institute_name_full: 'مركز جمال للتدريب',
            cert_title_main: 'شهادة',
            cert_title_sub: 'إتمام الدورة',
            this_certifies: 'تشهد هذه الشهادة بأن',
            completed_program: 'قد أكمل بنجاح البرنامج الدراسي المطلوب',
            met_requirements: 'و استوفى جميع متطلبات الدورة',
            program_label: 'البرنامج / الدورة',
            hours_label: 'الساعات المعتمدة',
            director: 'المدير',
            manager: 'المدير التنفيذي',
            qr_code: 'امسح للتحقق من الشهادة',
            select_student: 'اختر طالباً من الجدول للمعاينة، أو أضف طالباً جديداً',
            print: 'طباعة',
            download_pdf: 'تحميل PDF',
            download_png: 'تحميل صورة',
            download_qr: 'تحميل QR',
            qr_info: 'عند مسح الرمز تظهر صفحة توثيق ببيانات الطالب',
            all_fields_editable: 'جميع الحقول قابلة للتعديل. يمكنك إضافة / تعديل / حذف أي طالب.',
            access_denied: 'الوصول ممنوع',
            please_login: 'الرجاء تسجيل الدخول أولاً',
            go_to_login: 'انتقال إلى تسجيل الدخول',
            logout: 'تسجيل خروج',
            confirm_logout: 'هل تريد تسجيل الخروج؟',
            fill_all_fields: 'الرجاء ملء جميع الحقول',
            confirm_delete: 'هل أنت متأكد من حذف هذا الطالب؟ لا يمكن التراجع عن هذا الإجراء.',
            no_qr: 'لا يوجد QR code لعرضه',
            student_added: 'تمت إضافة الطالب بنجاح',
            student_updated: 'تم تحديث بيانات الطالب',
            student_deleted: 'تم حذف الطالب',
            pdf_ready: 'تم تحميل ملف PDF',
            png_ready: 'تم تحميل الصورة',
            exporting: 'جاري التحضير...'
        },
        en: {
            institute_name: 'Jamal Language Institute',
            admin_panel: 'Admin Dashboard · Certificate Management',
            total_students: 'Total Students',
            total_programs: 'Programs',
            certificates_issued: 'Certificates Issued',
            add_new_student: 'Add New Student',
            edit_student_data: 'Edit Student Data',
            full_name: 'Full Name',
            full_name_placeholder: 'Enter name as on certificate',
            program: 'Program / Course',
            program_placeholder: 'e.g., English Language Course',
            hours: 'Accredited Hours',
            hours_placeholder: 'e.g., 120 hours',
            cert_no: 'Certificate No.',
            cert_no_placeholder: 'e.g., 00058',
            issue_date: 'Issue Date',
            issue_date_label: 'Issue Date',
            save: 'Save',
            update: 'Update',
            cancel: 'Cancel',
            confirm: 'Confirm',
            edit: 'Edit',
            delete: 'Delete',
            preview: 'Preview',
            student_list: 'Student List',
            actions: 'Actions',
            search_placeholder: 'Search by name or certificate No...',
            no_students: 'No students registered. Add a new student.',
            no_search_results: 'No results match your search',
            cert_preview: 'Certificate Preview (Printable/Downloadable)',
            republic: 'The Republic of Sudan',
            cert_no_label: 'Certificate No.',
            institute_name_full: 'Jamal Training Center',
            cert_title_main: 'Certificate',
            cert_title_sub: 'Of Completion',
            this_certifies: 'This is to proudly certify that',
            completed_program: 'has successfully completed the required program of study',
            met_requirements: 'and has met all the requirements for the course',
            program_label: 'Program / Course',
            hours_label: 'Accredited Hours',
            director: 'Director',
            manager: 'Manager',
            qr_code: 'Scan to verify this certificate',
            select_student: 'Select a student from the table to preview, or add a new one',
            print: 'Print',
            download_pdf: 'Download PDF',
            download_png: 'Download Image',
            download_qr: 'Download QR',
            qr_info: 'Scanning the code opens a verification page with the student data',
            all_fields_editable: 'All fields are editable. You can add/edit/delete any student.',
            access_denied: 'Access Denied',
            please_login: 'Please login first',
            go_to_login: 'Go to Login',
            logout: 'Logout',
            confirm_logout: 'Do you want to log out?',
            fill_all_fields: 'Please fill all fields',
            confirm_delete: 'Are you sure you want to delete this student? This action cannot be undone.',
            no_qr: 'No QR code to display',
            student_added: 'Student added successfully',
            student_updated: 'Student data updated',
            student_deleted: 'Student deleted',
            pdf_ready: 'PDF downloaded',
            png_ready: 'Image downloaded',
            exporting: 'Preparing...'
        }
    };

    function createTranslator(source) {
        return (key) => source[key] || key;
    }

    function applyLanguage(currentLang, translationsMap) {
        const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.lang = currentLang;
        document.body.setAttribute('dir', dir);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (translationsMap[currentLang] && translationsMap[currentLang][key]) {
                el.textContent = translationsMap[currentLang][key];
            }
        });
    }

    function getSavedLang(defaultLang = 'ar') {
        return localStorage.getItem(STORAGE_KEYS.lang) || defaultLang;
    }

    function saveLang(lang) {
        localStorage.setItem(STORAGE_KEYS.lang, lang);
    }

    function isLoggedIn() {
        return sessionStorage.getItem(STORAGE_KEYS.auth) === 'true';
    }

    function setLoggedIn(value) {
        if (value) {
            sessionStorage.setItem(STORAGE_KEYS.auth, 'true');
            return;
        }
        sessionStorage.removeItem(STORAGE_KEYS.auth);
    }

    function loadStudents() {
        const saved = localStorage.getItem(STORAGE_KEYS.students);
        if (!saved) return [];
        try {
            const parsed = JSON.parse(saved);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    function saveStudents(students) {
        localStorage.setItem(STORAGE_KEYS.students, JSON.stringify(students));
    }

    return {
        STORAGE_KEYS,
        translations,
        createTranslator,
        applyLanguage,
        getSavedLang,
        saveLang,
        isLoggedIn,
        setLoggedIn,
        loadStudents,
        saveStudents
    };
})();