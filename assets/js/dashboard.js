const app = Vue.createApp({
    data() {
        return {
            students: [],
            form: this.emptyForm(),
            editMode: false,
            editIndex: null,
            previewStudent: null,
            previewIndex: null,
            currentLang: JTCShared.getSavedLang('ar'),
            translations: JTCShared.translations,
            isLoggedIn: false,
            searchQuery: '',
            exporting: false,
            toasts: [],
            toastSeq: 0,
            confirmModal: { show: false, message: '', onConfirm: () => {} }
        };
    },
    mounted() {
        this.checkAuth();
        if (this.isLoggedIn) {
            this.loadData();
        }
    },
    computed: {
        t() {
            return JTCShared.createTranslator(this.translations[this.currentLang]);
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
            JTCShared.saveLang(this.currentLang);
            this.$nextTick(() => this.generateQR());
        }
    },
    methods: {
        emptyForm() {
            return { fullName: '', program: '', hours: '', certNo: '', issueDate: new Date().toISOString().slice(0, 10) };
        },
        checkAuth() {
            this.isLoggedIn = JTCShared.isLoggedIn();
            if (!this.isLoggedIn) {
                const savedLang = localStorage.getItem('jtcLang');
                if (savedLang) {
                    this.currentLang = savedLang;
                    this.applyLanguage();
                }
            }
        },
        loadData() {
            this.students = JTCShared.loadStudents();

            if (!this.students.length) {
                this.students = [
                    { id: Date.now() + 1, fullName: 'أحمد محمد علي', program: 'دورة اللغة الإنجليزية المتقدمة', hours: '120 ساعة', certNo: '00058', issueDate: '2026-06-15' },
                    { id: Date.now() + 2, fullName: 'فاطمة حسن نور', program: 'دورة اللغة الفرنسية', hours: '90 ساعة', certNo: '00102', issueDate: '2026-07-01' }
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
            JTCShared.saveStudents(this.students);
        },
        applyLanguage() {
            JTCShared.applyLanguage(this.currentLang, this.translations);
        },
        toggleLanguage() {
            this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        },
        confirmLogout() {
            this.openConfirm(this.t('confirm_logout'), () => {
                JTCShared.setLoggedIn(false);
                this.isLoggedIn = false;
                window.location.href = 'login.html';
            });
        },
        goToLogin() {
            window.location.href = 'login.html';
        },
        openConfirm(message, onConfirm) {
            this.confirmModal = {
                show: true,
                message,
                onConfirm: () => { this.confirmModal.show = false; onConfirm(); }
            };
        },
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
                fullName: s.fullName,
                program: s.program,
                hours: s.hours,
                certNo: s.certNo,
                issueDate: s.issueDate || new Date().toISOString().slice(0, 10)
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
            return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
        },
        formatDate(dateStr) {
            if (!dateStr) return '';
            try {
                const d = new Date(dateStr);
                return d.toLocaleDateString(this.currentLang === 'ar' ? 'ar-EG' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
            } catch (error) {
                return dateStr;
            }
        },
        nameFontSize(name) {
            const len = (name || '').trim().length || 1;
            if (len <= 18) return 34;
            if (len <= 24) return 30;
            if (len <= 30) return 26;
            if (len <= 38) return 22;
            return 19;
        },
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
                    colorDark: '#0c1f38',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
            } catch (error) {
                container.innerHTML = '<span style="font-size:0.7rem;">QR</span>';
            }
        },
        downloadQR() {
            const canvas = document.querySelector('#qrCodeContainer canvas');
            if (!canvas) {
                this.pushToast(this.t('no_qr'), 'danger');
                return;
            }
            const link = document.createElement('a');
            link.download = `QR_${this.previewStudent.certNo || 'student'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        },
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