// =========================================================
// ملف الترجمة
// =========================================================
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

// =========================================================
// تطبيق Vue
// =========================================================
const app = Vue.createApp({
    data() {
        return {
            students: [],
            form: this.emptyForm(),
            editMode: false,
            editIndex: null,
            previewStudent: null,
            previewIndex: null,
            currentLang: 'ar',
            translations: translations,
            isLoggedIn: false,
            searchQuery: '',
            exporting: false,
            toasts: [],
            toastSeq: 0,
            confirmModal: { show: false, message: '', onConfirm: () => {} }
        }
    },
    mounted() {
        this.checkAuth();
        if (this.isLoggedIn) {
            this.loadData();
        }
    },
    computed: {
        t() {
            return (key) => this.translations[this.currentLang][key] || key;
        },
        filteredStudents() {
            const q = this.searchQuery.trim().toLowerCase();
            if (!q) return this.students;
            return this.students.filter(s =>
                (s.fullName || '').toLowerCase().includes(q) ||
                (s.certNo || '').toLowerCase().includes(q) ||
                (s.program || '').toLowerCase().includes(q)
            );
        },
        programCount() {
            const set = new Set(this.students.map(s => (s.program || '').trim()).filter(Boolean));
            return set.size;
        }
    },
    watch: {
        previewStudent: {
            deep: true,
            handler() {
                this.$nextTick(() => this.generateQR());
            }
        },
        currentLang() {
            this.applyLanguage();
            localStorage.setItem('jtcLang', this.currentLang);
            this.$nextTick(() => this.generateQR());
        }
    },
    methods: {
        emptyForm() {
            return { fullName: '', program: '', hours: '', certNo: '', issueDate: new Date().toISOString().slice(0,10) };
        },

        // ===== التحقق من الجلسة =====
        checkAuth() {
            this.isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
            if (!this.isLoggedIn) {
                const savedLang = localStorage.getItem('jtcLang');
                if (savedLang) {
                    this.currentLang = savedLang;
                    this.applyLanguage();
                }
            }
        },

        // ===== تحميل البيانات =====
        loadData() {
            const saved = localStorage.getItem('jtcStudents');
            if (saved) {
                try { this.students = JSON.parse(saved); } catch(e){}
            }

            if (!this.students.length) {
                this.students = [
                    { id: Date.now()+1, fullName: 'أحمد محمد علي', program: 'دورة اللغة الإنجليزية المتقدمة', hours: '120 ساعة', certNo: '00058', issueDate: '2026-06-15' },
                    { id: Date.now()+2, fullName: 'فاطمة حسن نور', program: 'دورة اللغة الفرنسية', hours: '90 ساعة', certNo: '00102', issueDate: '2026-07-01' },
                ];
                this.saveToStorage();
            }

            if (this.students.length) {
                this.previewStudent = { ...this.students[0] };
                this.previewIndex = 0;
                this.$nextTick(() => this.generateQR());
            }

            const savedLang = localStorage.getItem('jtcLang');
            if (savedLang) {
                this.currentLang = savedLang;
                this.applyLanguage();
            }
        },

        saveToStorage() {
            localStorage.setItem('jtcStudents', JSON.stringify(this.students));
        },

        // ===== اللغة =====
        applyLanguage() {
            const dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', dir);
            document.documentElement.lang = this.currentLang;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (this.translations[this.currentLang][key]) {
                    el.textContent = this.translations[this.currentLang][key];
                }
            });
        },
        toggleLanguage() {
            this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        },

        // ===== تسجيل الخروج =====
        confirmLogout() {
            this.openConfirm(this.t('confirm_logout'), () => {
                sessionStorage.removeItem('adminLoggedIn');
                this.isLoggedIn = false;
                window.location.href = 'login.html';
            });
        },
        goToLogin() { window.location.href = 'login.html'; },

        // ===== نافذة التأكيد المخصصة =====
        openConfirm(message, onConfirm) {
            this.confirmModal = {
                show: true,
                message,
                onConfirm: () => { this.confirmModal.show = false; onConfirm(); }
            };
        },

        // ===== إشعارات Toast =====
        pushToast(message, type = 'info') {
            const id = ++this.toastSeq;
            this.toasts.push({ id, message, type });
            setTimeout(() => {
                this.toasts = this.toasts.filter(x => x.id !== id);
            }, 3200);
        },
        toastIcon(type) {
            return {
                success: 'fas fa-check-circle',
                danger: 'fas fa-exclamation-circle',
                info: 'fas fa-info-circle'
            }[type] || 'fas fa-info-circle';
        },

        // ===== النموذج =====
        resetForm() {
            this.form = this.emptyForm();
            this.editMode = false;
            this.editIndex = null;
        },

        saveStudent() {
            const f = this.form;
            if (!f.fullName.trim() || !f.program.trim() || !f.hours.trim() || !f.certNo.trim()) {
                this.pushToast(this.t('fill_all_fields'), 'danger');
                return;
            }

            if (this.editMode && this.editIndex !== null) {
                this.students[this.editIndex] = { id: this.students[this.editIndex].id, ...f };
                this.editMode = false;
                this.editIndex = null;
                this.pushToast(this.t('student_updated'), 'success');
            } else {
                this.students.push({ id: Date.now(), ...f });
                this.pushToast(this.t('student_added'), 'success');
            }

            this.saveToStorage();
            const savedIdx = this.editMode ? this.editIndex : this.students.length - 1;
            this.resetForm();

            if (this.students.length) {
                const idx = this.students.length - 1;
                this.previewStudent = { ...this.students[idx] };
                this.previewIndex = idx;
            }
        },

        editStudent(idx) {
            const s = this.students[idx];
            this.form = {
                fullName: s.fullName, program: s.program, hours: s.hours,
                certNo: s.certNo, issueDate: s.issueDate || new Date().toISOString().slice(0,10)
            };
            this.editMode = true;
            this.editIndex = idx;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        askDelete(idx) {
            this.openConfirm(this.t('confirm_delete'), () => this.deleteStudent(idx));
        },
        deleteStudent(idx) {
            this.students.splice(idx, 1);
            this.saveToStorage();

            if (this.previewIndex === idx) {
                this.previewStudent = this.students.length ? { ...this.students[0] } : null;
                this.previewIndex = this.students.length ? 0 : null;
            } else if (this.previewIndex > idx) {
                this.previewIndex--;
            }
            if (!this.students.length) this.previewStudent = null;
            this.pushToast(this.t('student_deleted'), 'success');
        },

        getRealIndex(student) {
            return this.students.findIndex(s => s.id === student.id);
        },

        initials(name) {
            if (!name) return '?';
            const parts = name.trim().split(/\s+/);
            return parts.slice(0,2).map(p => p[0]).join('').toUpperCase();
        },

        formatDate(dateStr) {
            if (!dateStr) return '';
            try {
                const d = new Date(dateStr);
                return d.toLocaleDateString(this.currentLang === 'ar' ? 'ar-EG' : 'en-GB', { year:'numeric', month:'long', day:'numeric' });
            } catch(e) { return dateStr; }
        },

        // ===== حجم خط الاسم التلقائي (لأسماء طويلة على الشهادة) =====
        nameFontSize(name) {
            const len = (name || '').trim().length || 1;
            if (len <= 18) return 34;
            if (len <= 24) return 30;
            if (len <= 30) return 26;
            if (len <= 38) return 22;
            return 19;
        },

        // ===== معاينة وطباعة =====
        previewCert(idx) {
            this.previewStudent = { ...this.students[idx] };
            this.previewIndex = idx;
            this.$nextTick(() => this.generateQR());
        },

        printCertificate(idx) {
            this.previewStudent = { ...this.students[idx] };
            this.previewIndex = idx;
            this.$nextTick(() => {
                this.generateQR();
                setTimeout(() => window.print(), 300);
            });
        },

        // ===== رابط التحقق المشفّر داخل QR =====
        buildVerifyUrl() {
            const payload = {
                name: this.previewStudent.fullName,
                program: this.previewStudent.program,
                hours: this.previewStudent.hours,
                certNo: this.previewStudent.certNo,
                issueDate: this.previewStudent.issueDate || '',
                inst: this.currentLang
            };
            const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
            const base = window.location.href.replace(/index\.html.*$/, '').replace(/\/$/, '');
            return `${base}/verify.html?d=${encoded}`;
        },

        generateQR() {
            const container = document.getElementById('qrCodeContainer');
            if (!container) return;
            container.innerHTML = '';
            if (!this.previewStudent) return;

            const url = this.buildVerifyUrl();
            try {
                new QRCode(container, {
                    text: url,
                    width: 84,
                    height: 84,
                    colorDark: "#0c1f38",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            } catch(e) {
                container.innerHTML = '<span style="font-size:0.7rem;">QR</span>';
            }
        },

        downloadQR() {
            const canvas = document.querySelector('#qrCodeContainer canvas');
            if (!canvas) { this.pushToast(this.t('no_qr'), 'danger'); return; }
            const link = document.createElement('a');
            link.download = `QR_${this.previewStudent.certNo || 'student'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        },

        // ===== تحميل الشهادة كصورة أو PDF =====
        async captureCertificate() {
            const el = document.getElementById('certificateToPrint');
            return await html2canvas(el, { scale: 3, backgroundColor: '#faf8f2', useCORS: true });
        },

        async downloadPNG() {
            if (this.exporting) return;
            this.exporting = true;
            try {
                const canvas = await this.captureCertificate();
                const link = document.createElement('a');
                link.download = `Certificate_${this.previewStudent.certNo || 'cert'}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                this.pushToast(this.t('png_ready'), 'success');
            } finally {
                this.exporting = false;
            }
        },

        async downloadPDF() {
            if (this.exporting) return;
            this.exporting = true;
            try {
                const canvas = await this.captureCertificate();
                const imgData = canvas.toDataURL('image/png');
                const { jsPDF } = window.jspdf;
                const orientation = canvas.width > canvas.height ? 'landscape' : 'portrait';
                const pdf = new jsPDF({ orientation, unit: 'px', format: [canvas.width, canvas.height] });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save(`Certificate_${this.previewStudent.certNo || 'cert'}.pdf`);
                this.pushToast(this.t('pdf_ready'), 'success');
            } finally {
                this.exporting = false;
            }
        }
    }
});

app.mount('#app');
