const verifyTranslations = {
    ar: {
        institute_name: 'معهد جمال للغات',
        verified_title: 'شهادة موثّقة وصحيحة',
        verified_desc: 'تم التحقق من صحة بيانات هذه الشهادة الصادرة عن معهد جمال للغات',
        invalid_title: 'رابط تحقق غير صالح',
        invalid_desc: 'تعذّر العثور على بيانات شهادة مرتبطة بهذا الرمز. تأكد من مسح رمز QR الأصلي الموجود على الشهادة.',
        full_name: 'الاسم الكامل',
        program: 'البرنامج / الدورة',
        hours: 'الساعات المعتمدة',
        cert_no: 'رقم الشهادة',
        issue_date: 'تاريخ الإصدار',
        footnote: 'هذه الصفحة تُستخدم للتحقق من صحة الشهادات الصادرة عن معهد جمال للغات فقط.'
    },
    en: {
        institute_name: 'Jamal Language Institute',
        verified_title: 'Verified & Authentic Certificate',
        verified_desc: 'This certificate\'s data has been verified as issued by Jamal Language Institute',
        invalid_title: 'Invalid Verification Link',
        invalid_desc: 'No certificate data could be found for this code. Please make sure you scanned the original QR code on the certificate.',
        full_name: 'Full Name',
        program: 'Program / Course',
        hours: 'Accredited Hours',
        cert_no: 'Certificate No.',
        issue_date: 'Issue Date',
        footnote: 'This page is used only to verify certificates issued by Jamal Language Institute.'
    }
};

function decodePayload() {
    try {
        const params = new URLSearchParams(window.location.search);
        const d = params.get('d');
        if (!d) return null;
        const json = decodeURIComponent(escape(atob(d)));
        const obj = JSON.parse(json);
        if (!obj.name || !obj.certNo) return null;
        return obj;
    } catch (e) {
        return null;
    }
}

const verifyApp = Vue.createApp({
    data() {
        return {
            data: decodePayload(),
            currentLang: 'ar',
            translations: verifyTranslations
        }
    },
    mounted() {
        // إن حمل الرمز لغة محفوظة من الشهادة نفسها نستخدمها كافتراضي
        if (this.data && this.data.inst && this.translations[this.data.inst]) {
            this.currentLang = this.data.inst;
        } else {
            const savedLang = localStorage.getItem('jtcLang');
            if (savedLang) this.currentLang = savedLang;
        }
        this.applyLanguage();
    },
    computed: {
        t() {
            return (key) => this.translations[this.currentLang][key] || key;
        }
    },
    watch: {
        currentLang() { this.applyLanguage(); }
    },
    methods: {
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
        formatDate(dateStr) {
            if (!dateStr) return '';
            try {
                const d = new Date(dateStr);
                return d.toLocaleDateString(this.currentLang === 'ar' ? 'ar-EG' : 'en-GB', { year:'numeric', month:'long', day:'numeric' });
            } catch(e) { return dateStr; }
        }
    }
});

verifyApp.mount('#verifyApp');
