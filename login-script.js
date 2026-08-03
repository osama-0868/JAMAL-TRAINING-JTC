// =========================================================
// ملف الترجمة الخاص بصفحة تسجيل الدخول
// =========================================================
const loginTranslations = {
    ar: {
        institute_name: 'معهد جمال للغات',
        tagline: 'نظام إدارة الشهادات الرقمي',
        admin_login: 'تسجيل دخول المدير',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        login: 'تسجيل الدخول',
        checking: 'جاري التحقق...',
        default_credentials: 'المستخدم: admin | كلمة المرور: admin123',
        invalid_credentials: 'اسم المستخدم أو كلمة المرور غير صحيحة',
        login_success: 'تم تسجيل الدخول بنجاح',
        copyright: '© معهد جمال للغات — جميع الحقوق محفوظة'
    },
    en: {
        institute_name: 'Jamal Language Institute',
        tagline: 'Digital Certificate Management System',
        admin_login: 'Admin Login',
        username: 'Username',
        password: 'Password',
        login: 'Login',
        checking: 'Checking...',
        default_credentials: 'Username: admin | Password: admin123',
        invalid_credentials: 'Invalid username or password',
        login_success: 'Login successful',
        copyright: '© Jamal Language Institute — All rights reserved'
    }
};

// =========================================================
// تطبيق Vue الخاص بصفحة الدخول
// =========================================================
const loginApp = Vue.createApp({
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            currentLang: 'ar',
            translations: loginTranslations,
            showPass: false,
            loading: false,
            shakeUser: false
        }
    },
    mounted() {
        // التحقق من وجود جلسة نشطة مسبقاً
        if (sessionStorage.getItem('adminLoggedIn') === 'true') {
            window.location.href = 'index.html';
            return;
        }

        // تحميل اللغة المحفوظة
        const savedLang = localStorage.getItem('jtcLang');
        if (savedLang) {
            this.currentLang = savedLang;
        }
        this.applyLanguage();
    },
    computed: {
        t() {
            return (key) => this.translations[this.currentLang][key] || key;
        }
    },
    watch: {
        currentLang() {
            this.applyLanguage();
            localStorage.setItem('jtcLang', this.currentLang);
        }
    },
    methods: {
        applyLanguage() {
            const dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', dir);
            document.body.setAttribute('dir', dir);
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

        login() {
            // بيانات الدخول الافتراضية (يمكن تغييرها من هنا)
            const validUsername = 'admin';
            const validPassword = 'admin123';

            this.errorMessage = '';
            this.loading = true;

            // محاكاة تحقق بسيطة لتحسين تجربة الاستخدام
            setTimeout(() => {
                if (this.username === validUsername && this.password === validPassword) {
                    // ملاحظة: نستخدم sessionStorage بدلاً من localStorage
                    // بحيث تنتهي الجلسة تلقائياً عند إغلاق المتصفح لأمان أفضل
                    sessionStorage.setItem('adminLoggedIn', 'true');
                    window.location.href = 'index.html';
                } else {
                    this.loading = false;
                    this.errorMessage = this.t('invalid_credentials');
                    this.password = '';
                    this.shakeUser = true;
                    setTimeout(() => { this.shakeUser = false; }, 500);
                }
            }, 400);
        }
    }
});

loginApp.mount('#loginApp');
