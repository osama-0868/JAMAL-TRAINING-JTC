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

const loginApp = Vue.createApp({
    data() {
        return {
            username: '',
            password: '',
            errorMessage: '',
            currentLang: JTCShared.getSavedLang('ar'),
            translations: loginTranslations,
            showPass: false,
            loading: false,
            shakeUser: false
        };
    },
    mounted() {
        if (JTCShared.isLoggedIn()) {
            window.location.href = 'index.html';
            return;
        }

        this.applyLanguage();
    },
    computed: {
        t() {
            return JTCShared.createTranslator(this.translations[this.currentLang]);
        }
    },
    watch: {
        currentLang() {
            this.applyLanguage();
            JTCShared.saveLang(this.currentLang);
        }
    },
    methods: {
        applyLanguage() {
            JTCShared.applyLanguage(this.currentLang, this.translations);
        },
        toggleLanguage() {
            this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        },
        login() {
            const validUsername = 'admin';
            const validPassword = 'admin123';

            this.errorMessage = '';
            this.loading = true;

            setTimeout(() => {
                if (this.username === validUsername && this.password === validPassword) {
                    JTCShared.setLoggedIn(true);
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