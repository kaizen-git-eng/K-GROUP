document.addEventListener('DOMContentLoaded', () => {
    const SUPABASE_URL = 'https://ejnafjoxcihjnbirckph.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_oFGT8creC1-om81zg9pEUw_9jcNFtUc';
    const ADMIN_PASSWORD = '2010';
    const WHATSAPP_NUMBER = '201550527744';

    const STORAGE_KEYS = {
        language: 'kgroup_language',
        adminAuth: 'kgroup_admin_auth',
        customerSession: 'kgroup_customer_session'
    };

    const PRINTING_METHODS = [
        { id: 'uv', ar: 'طباعة UV', en: 'UV Printing' },
        { id: 'screen', ar: 'سيلك سكرين', en: 'Screen Printing' },
        { id: 'dtf', ar: 'DTF', en: 'DTF' },
        { id: 'dtg', ar: 'DTG', en: 'DTG' },
        { id: 'laser', ar: 'ليزر', en: 'Laser' },
        { id: 'embroidery', ar: 'تطريز', en: 'Embroidery' },
        { id: 'heat-transfer', ar: 'هوت ترانسفير', en: 'Heat Transfer' },
        { id: 'vinyl', ar: 'فينيل', en: 'Vinyl' }
    ];

    const DEFAULT_CATEGORIES = [
        { id: 'notebooks', nameAr: 'دفاتر', nameEn: 'Notebooks' },
        { id: 'mugs', nameAr: 'أكواب', nameEn: 'Mugs' },
        { id: 'business-cards', nameAr: 'كروت شخصية', nameEn: 'Business Cards' },
        { id: 'tshirts', nameAr: 'تيشيرتات', nameEn: 'T-Shirts' },
        { id: 'bags', nameAr: 'شنط', nameEn: 'Bags' },
        { id: 'pens', nameAr: 'أقلام', nameEn: 'Pens' },
        { id: 'stickers', nameAr: 'ستيكرات', nameEn: 'Stickers' },
        { id: 'other', nameAr: 'أخرى', nameEn: 'Other' }
    ];

    const DEFAULT_PRODUCTS = [
        {
            id: 'prod-1',
            categoryId: 'notebooks',
            nameAr: 'دفاتر فاخرة بغطاء كتاني',
            nameEn: 'Premium Linen Notebooks',
            shortDescAr: 'دفاتر أنيقة مناسبة للهدايا المؤسسية والعلامات التجارية الراقية.',
            shortDescEn: 'Elegant notebooks ideal for corporate gifts and refined brand identities.',
            fullDescAr: 'دفاتر بغطاء فاخر وخامة داخلية مريحة للكتابة، مناسبة لطباعة الشعار أو الهوية البصرية للشركات، مع إمكانيات تشطيب متعددة مثل UV والليزر والضغط الحراري.',
            fullDescEn: 'Luxury notebooks with a refined cover finish and smooth inner paper, perfect for logos, visual identities, and premium gifting. Suitable for UV printing, laser details, and heat transfer finishing.',
            image: 'https://images.pexels.com/photos/6786610/pexels-photo-6786610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            methods: ['uv', 'laser', 'heat-transfer'],
            projectImage: 'https://images.pexels.com/photos/360009/pexels-photo-360009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            projectDescAr: 'تنفيذ دفاتر بلون فحمي مع لمسة ذهبية لعميل مؤسسي ضمن مؤتمر سنوي.',
            projectDescEn: 'Charcoal notebooks with a subtle gold touch produced for a corporate annual event.'
        },
        {
            id: 'prod-2',
            categoryId: 'mugs',
            nameAr: 'أكواب سيراميك مطفية',
            nameEn: 'Matte Ceramic Mugs',
            shortDescAr: 'أكواب بطبعة مخصصة مناسبة للعلامات التجارية والمقاهي والهدايا.',
            shortDescEn: 'Custom printed mugs for brands, cafés, and stylish promotional gifting.',
            fullDescAr: 'أكواب سيراميك مطفية بتصميم عصري وتشطيب ناعم، قابلة للطباعة بعدة تقنيات حسب الخامة واللون المطلوب.',
            fullDescEn: 'Contemporary matte ceramic mugs with a soft finish, suitable for multiple print techniques depending on color and material needs.',
            image: 'https://images.pexels.com/photos/6312175/pexels-photo-6312175.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            methods: ['screen', 'uv', 'laser'],
            projectImage: 'https://images.pexels.com/photos/6312235/pexels-photo-6312235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            projectDescAr: 'طباعة شعار لمقهى محلي على أكواب فاتحة بطابع بسيط وراقي.',
            projectDescEn: 'Minimal café logo printing on light-toned mugs with a clean premium finish.'
        },
        {
            id: 'prod-3',
            categoryId: 'business-cards',
            nameAr: 'كروت شخصية سميكة فاخرة',
            nameEn: 'Premium Thick Business Cards',
            shortDescAr: 'كروت شخصية بخامة قوية وتشطيب أنيق يترك انطباعًا احترافيًا.',
            shortDescEn: 'Strong tactile business cards with a premium finish and polished first impression.',
            fullDescAr: 'كروت شخصية مناسبة للمكاتب والشركات والوكالات، مع خيارات تشطيب متعددة وتأثير بصري أنيق.',
            fullDescEn: 'Business cards tailored for offices, agencies, and modern companies with premium tactile finishes and visual effects.',
            image: 'https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            methods: ['uv', 'laser', 'vinyl'],
            projectImage: 'https://images.pexels.com/photos/9878733/pexels-photo-9878733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            projectDescAr: 'تصميم كروت سميكة لهوية معمارية بلمسات ذهبية وحدود دقيقة.',
            projectDescEn: 'Heavy card stock produced for an architectural brand with gold accents and crisp edges.'
        },
        {
            id: 'prod-4',
            categoryId: 'tshirts',
            nameAr: 'تيشيرتات قطنية للطباعة',
            nameEn: 'Printed Cotton T-Shirts',
            shortDescAr: 'تيشيرتات مناسبة للبراندات والفعاليات والفرق بطرق طباعة متعددة.',
            shortDescEn: 'Cotton t-shirts for brands, events, and teams with multiple print options.',
            fullDescAr: 'تيشيرتات قطنية بخامة جيدة وقصّات مناسبة للبراندات التجارية أو الفعاليات أو الموظفين.',
            fullDescEn: 'Quality cotton t-shirts suited for commercial labels, event uniforms, or team apparel.',
            image: 'https://images.pexels.com/photos/8532611/pexels-photo-8532611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            methods: ['screen', 'dtf', 'dtg', 'embroidery', 'heat-transfer'],
            projectImage: 'https://images.pexels.com/photos/9558716/pexels-photo-9558716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            projectDescAr: 'تنفيذ تيشيرتات لفريق إبداعي بطباعة صدرية واضحة ولمسة تطريز بسيطة.',
            projectDescEn: 'Team apparel produced with a clean chest print and subtle embroidery detail.'
        }
    ];

    const DEFAULT_PORTFOLIO = [
        {
            id: 'port-1',
            titleAr: 'دفاتر مؤتمر تنفيذي',
            titleEn: 'Executive Conference Notebooks',
            methodAr: 'طباعة UV و لمسة ذهبية',
            methodEn: 'UV Printing & Gold Accent',
            image: 'https://images.pexels.com/photos/360009/pexels-photo-360009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            descriptionAr: 'دفاتر بتشطيب فاخر تم تنفيذها لجهة مؤسسية ضمن فعالية رسمية.',
            descriptionEn: 'Premium notebooks executed for a formal corporate event with a refined finish.'
        },
        {
            id: 'port-2',
            titleAr: 'أكواب لمقهى محلي',
            titleEn: 'Custom Mugs for a Local Café',
            methodAr: 'ليزر / سيلك سكرين',
            methodEn: 'Laser / Screen Printing',
            image: 'https://images.pexels.com/photos/3439481/pexels-photo-3439481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            descriptionAr: 'أكواب مخصصة لبراند قهوة بطابع بصري بسيط ومريح.',
            descriptionEn: 'Branded mugs designed for a coffee brand with a clean and elegant style.'
        }
    ];

    const UI = {
        ar: {
            meta: {
                title: 'K GROUP | متجر الطباعة الاحترافي',
                description: 'K GROUP لحلول الطباعة المخصصة والمنتجات الدعائية. تصفح المنتجات واطلب مباشرة عبر واتساب مع مزامنة فورية عبر Supabase.'
            },
            nav: { home: 'الرئيسية', products: 'المنتجات', portfolio: 'أعمالنا', methods: 'طرق الطباعة', admin: 'دخول الإدارة' },
            hero: {
                badge: 'هوية مطبوعة بشكل فاخر', titleLine1: 'عندما تلتقي الحِرفة بالجمال', titleLine2: 'يولد منتجك بأفضل صورة', description: 'K GROUP يقدم حلول طباعة مخصصة للشركات والبراندات والأفراد، مع مزامنة مباشرة لكل التعديلات والطلبات عبر السحابة.', ctaPrimary: 'تصفح المنتجات', ctaSecondary: 'شاهد أعمالنا', point1: 'تحديثات فورية لكل المستخدمين', point2: 'طلبات مباشرة عبر واتساب', point3: 'حسابات مستخدمين وطلبات محفوظة', previewTitle: 'واجهة راقية لمنتجات الطباعة', previewTitleSmall: 'تجربة ثنائية اللغة', previewText: 'منتجات دعائية وتجارية بجودة تليق بعلامتك التجارية.', previewPhone: 'مزامنة فورية عبر Supabase'
            },
            feature: {
                oneTitle: 'تحديث لحظي', oneText: 'أي تعديل على المنتجات أو الحذف أو الإضافة يظهر فورًا لباقي المستخدمين.', twoTitle: 'حسابات مستخدمين', twoText: 'كل عميل يمكنه إنشاء حسابه وتسجيل الدخول من أي جهاز.', threeTitle: 'طلبات محفوظة', threeText: 'طلبات الشراء المسجلة تظهر للأدمن داخل لوحة الإدارة.'
            },
            auth: {
                signup: 'إنشاء حساب', login: 'تسجيل الدخول', logout: 'تسجيل الخروج', signupTitle: 'إنشاء حساب جديد', signupSubtitle: 'سجّل اسمك ورقم هاتفك وكلمة المرور لحفظ طلباتك ومزامنتها بين الأجهزة.', loginTitle: 'تسجيل دخول المستخدم', loginSubtitle: 'استخدم رقم الهاتف وكلمة المرور للدخول إلى حسابك من أي جهاز.', accountRequired: 'لازم يكون عندك حساب على الموقع علشان تطلب المنتج.', welcomePrefix: 'مرحبًا', accountCreated: 'تم إنشاء الحساب بنجاح.', loggedIn: 'تم تسجيل دخولك بنجاح.', loggedOut: 'تم تسجيل الخروج.', duplicatePhone: 'رقم الهاتف مسجل بالفعل.'
            },
            products: {
                eyebrow: 'المنتجات', title: 'منتجات قابلة للطباعة', subtitle: 'جميع المنتجات هنا تُدار من قاعدة البيانات وتظهر تحديثاتها مباشرة لكل الزوار.', searchPlaceholder: 'ابحث باسم المنتج...', emptyTitle: 'لا توجد منتجات متاحة.', emptyText: 'يمكنك إضافة منتجات من لوحة الإدارة لتظهر هنا.', noMatchTitle: 'لا توجد نتائج مطابقة.', noMatchText: 'جرّب تغيير كلمة البحث أو القسم المحدد.', resetFilters: 'إعادة ضبط الفلاتر', all: 'الكل', quoteTag: 'عرض سعر عند الطلب', viewDetails: 'عرض التفاصيل'
            },
            portfolio: {
                eyebrow: 'أعمالنا السابقة', title: 'نماذج من تنفيذنا', subtitle: 'كل عنصر في هذا المعرض يتم سحبه لحظيًا من Supabase ليظهر لجميع المستخدمين.', emptyTitle: 'لا توجد أعمال مضافة حاليًا.', emptyText: 'يمكنك إضافة أعمال جديدة من لوحة الإدارة.'
            },
            methods: {
                eyebrow: 'طرق الطباعة', title: 'تقنيات تناسب كل منتج', subtitle: 'اختر الطريقة المناسبة حسب نوع الخامة وشكل التنفيذ المطلوب.', uvTitle: 'طباعة UV', uvText: 'مناسبة للأسطح الصلبة مع ألوان واضحة وتشطيب أنيق.', screenTitle: 'سيلك سكرين', screenText: 'اختيار ممتاز للتيشيرتات والمنتجات الكمية بطبقات حبر قوية.', dtfTitle: 'DTF / DTG', dtfText: 'للتصاميم الملونة والتفاصيل الدقيقة على الملابس والأقمشة.', laserTitle: 'ليزر', laserText: 'نقش نظيف ودقيق على الخشب والمعادن وبعض الخامات الخاصة.', embTitle: 'تطريز', embText: 'لمسة فاخرة ومتينة تناسب الملابس والقبعات والزي الرسمي.', transferTitle: 'هوت ترانسفير / فينيل', transferText: 'ممتاز للشعارات والأرقام والتطبيقات الخاصة على الملابس.'
            },
            footer: {
                about: 'حلول طباعة وهوية بصرية مخصصة بلمسة عصرية، مناسبة للشركات والمتاجر والفعاليات.', quickLinks: 'روابط سريعة', contact: 'تواصل معنا', owner: 'الإدارة', adminEntry: 'دخول لوحة الإدارة', copyright: '© 2026 K GROUP. جميع الحقوق محفوظة.', note: 'واجهة متصلة بالسحابة مع تحديثات مباشرة وحسابات مستخدمين.'
            },
            admin: {
                backToStore: 'العودة للمتجر', logout: 'تسجيل الخروج', ownerTitle: 'مالك المتجر', ownerSubtitle: 'جلسة إدارة نشطة', productsTab: 'إدارة المنتجات', categoriesTab: 'إدارة الأقسام', portfolioTab: 'إدارة الأعمال', usersTab: 'حسابات المستخدمين', ordersTab: 'طلبات الشراء', productsTitle: 'إدارة المنتجات', productsSubtitle: 'أضف أو عدّل أو احذف المنتجات المتزامنة مع كل المستخدمين.', addProduct: 'إضافة منتج', searchProductsPlaceholder: 'ابحث عن منتج...', table: { image: 'الصورة', name: 'الاسم', category: 'القسم', methods: 'طرق الطباعة', actions: 'الإجراءات' }, emptyProductsTitle: 'لا توجد منتجات.', emptyProductsText: 'ابدأ بإضافة أول منتج ليظهر مباشرة في المتجر.', categoriesTitle: 'إدارة الأقسام', categoriesSubtitle: 'أضف أقسامًا عربية وإنجليزية لتظهر في الفلاتر والمنتجات.', addCategory: 'إضافة قسم', saveCategory: 'حفظ القسم', categoryList: 'قائمة الأقسام', portfolioTitle: 'إدارة الأعمال السابقة', portfolioSubtitle: 'أضف أو عدّل أمثلة التنفيذ التي تظهر للكل لحظيًا.', addPortfolio: 'إضافة عمل', emptyPortfolioTitle: 'لا توجد أعمال مضافة.', emptyPortfolioText: 'أضف أول عمل ليظهر ضمن قسم أعمالنا السابقة.', usersTitle: 'حسابات المستخدمين', usersSubtitle: 'كل الحسابات التي ينشئها العملاء تظهر هنا مباشرة.', usersSecurityNote: 'كل الحسابات المسجلة من الموقع تظهر هنا مع بيانات الدخول الخاصة بها كما طلبت.', usersTable: { name: 'الاسم', phone: 'رقم الهاتف', password: 'كلمة المرور', userId: 'معرف المستخدم', createdAt: 'تاريخ الإنشاء' }, emptyUsersTitle: 'لا توجد حسابات مستخدمين حتى الآن.', emptyUsersText: 'عندما يسجل المستخدمون من الموقع ستظهر بياناتهم هنا.', ordersTitle: 'طلبات الشراء والاقتباس', ordersSubtitle: 'كل طلب مسجل من المستخدمين يظهر هنا بشكل مباشر.', ordersTable: { customer: 'العميل', phone: 'الهاتف', product: 'المنتج', type: 'النوع', quantity: 'الكمية', printing: 'الطباعة', date: 'التاريخ' }, emptyOrdersTitle: 'لا توجد طلبات حالية.', emptyOrdersText: 'عند إرسال أي طلب من المستخدمين سيظهر هنا فورًا.', productFormSubtitle: 'أدخل بيانات المنتج باللغتين ليظهر بشكل احترافي لكل المستخدمين.', portfolioFormSubtitle: 'أضف مشروعًا منفذًا ليظهر في معرض الأعمال لكل المستخدمين.', filterAllCategories: 'كل الأقسام', ownerLoginTitle: 'دخول لوحة الإدارة', ownerLoginSubtitle: 'أدخل كلمة مرور الأدمن لفتح واجهة التحكم.'
            },
            forms: {
                categoryNameAr: 'اسم القسم بالعربية', categoryNameEn: 'اسم القسم بالإنجليزية', productName: 'اسم المنتج', customerName: 'اسم العميل', phone: 'رقم الهاتف', email: 'البريد الإلكتروني', quantity: 'الكمية المطلوبة', printingType: 'نوع الطباعة (اختياري)', notes: 'ملاحظات (اختياري)', productNameAr: 'اسم المنتج بالعربية', productNameEn: 'اسم المنتج بالإنجليزية', category: 'القسم', mainImage: 'رابط الصورة الرئيسية', shortDescAr: 'وصف مختصر بالعربية', shortDescEn: 'وصف مختصر بالإنجليزية', fullDescAr: 'الوصف الكامل بالعربية', fullDescEn: 'الوصف الكامل بالإنجليزية', methods: 'طرق الطباعة المتاحة', projectImage: 'رابط صورة مثال التنفيذ', projectDescAr: 'وصف مثال التنفيذ بالعربية', projectDescEn: 'وصف مثال التنفيذ بالإنجليزية', portfolioTitleAr: 'عنوان العمل بالعربية', portfolioTitleEn: 'عنوان العمل بالإنجليزية', portfolioMethodAr: 'طريقة الطباعة بالعربية', portfolioMethodEn: 'طريقة الطباعة بالإنجليزية', portfolioImage: 'رابط صورة العمل', portfolioDescAr: 'وصف العمل بالعربية', portfolioDescEn: 'وصف العمل بالإنجليزية'
            },
            details: { projectLabel: 'مثال من تنفيذ سابق', methodsTitle: 'طرق الطباعة المتاحة', requestQuote: 'اطلب عرض سعر', orderNow: 'اطلب الآن' },
            quote: { title: 'طلب عرض سعر', orderTitle: 'طلب شراء', subtitle: 'املأ البيانات التالية وسنفتح لك رسالة واتساب جاهزة.', orderSubtitle: 'سيتم حفظ الطلب في قاعدة البيانات ثم فتح رسالة واتساب جاهزة لك.', submit: 'إرسال عبر واتساب', orderSubmit: 'تسجيل الطلب وإرسال عبر واتساب', selectMethod: 'اختر طريقة الطباعة', noMethod: 'غير محدد', quoteType: 'عرض سعر', orderType: 'طلب شراء' },
            login: { password: 'كلمة المرور', error: 'كلمة المرور غير صحيحة.', enter: 'دخول' },
            common: { cancel: 'إلغاء', save: 'حفظ', confirm: 'تأكيد', edit: 'تعديل', delete: 'حذف', update: 'تحديث', close: 'إغلاق', guest: 'زائر' },
            messages: {
                formRequiredTitle: 'بيانات ناقصة', formRequiredText: 'يرجى ملء كل الحقول المطلوبة.', methodsRequiredTitle: 'حدد طرق الطباعة', methodsRequiredText: 'اختر طريقة طباعة واحدة على الأقل.', loginSuccessTitle: 'تم الدخول', loginSuccessText: 'تم فتح لوحة الإدارة بنجاح.', loginErrorTitle: 'فشل الدخول', loginErrorText: 'كلمة المرور غير صحيحة.', productAddedTitle: 'تمت الإضافة', productAddedText: 'تمت إضافة المنتج بنجاح.', productUpdatedTitle: 'تم التحديث', productUpdatedText: 'تم تحديث بيانات المنتج بنجاح.', productDeletedTitle: 'تم الحذف', productDeletedText: 'تم حذف المنتج من المتجر.', categoryAddedTitle: 'تمت الإضافة', categoryAddedText: 'تمت إضافة القسم بنجاح.', categoryDeletedTitle: 'تم الحذف', categoryDeletedText: 'تم حذف القسم ونقل المنتجات التابعة له إلى قسم أخرى.', duplicateCategoryTitle: 'القسم موجود', duplicateCategoryText: 'هذا القسم موجود بالفعل.', portfolioAddedTitle: 'تمت الإضافة', portfolioAddedText: 'تمت إضافة العمل بنجاح.', portfolioUpdatedTitle: 'تم التحديث', portfolioUpdatedText: 'تم تحديث العمل بنجاح.', portfolioDeletedTitle: 'تم الحذف', portfolioDeletedText: 'تم حذف العمل من المعرض.', orderSavedTitle: 'تم حفظ الطلب', orderSavedText: 'تم تسجيل طلبك في النظام وفتحه على واتساب.', quoteSavedTitle: 'تم حفظ الطلب', quoteSavedText: 'تم تسجيل طلبك في النظام.', openWhatsappTitle: 'فتح واتساب', openWhatsappText: 'جاري تجهيز الرسالة وفتح واتساب...', deleteProductConfirmTitle: 'حذف المنتج', deleteProductConfirmText: 'هل أنت متأكد من حذف هذا المنتج؟', deleteCategoryConfirmTitle: 'حذف القسم', deleteCategoryConfirmText: 'هل أنت متأكد من حذف هذا القسم؟', deletePortfolioConfirmTitle: 'حذف العمل', deletePortfolioConfirmText: 'هل أنت متأكد من حذف هذا العمل؟', logoutConfirmTitle: 'تسجيل الخروج', logoutConfirmText: 'هل تريد إنهاء جلسة الإدارة؟', supabaseWarningTitle: 'تنبيه Supabase', supabaseWarningText: 'تعذر تحميل بعض الجداول من Supabase. شغّل ملف الإعداد الخاص بالنظام الجديد للحسابات والطلبات.', authErrorTitle: 'تعذر تسجيل الدخول', authErrorText: 'تحقق من وجود جدول customer_accounts في Supabase وتشغيل ملف الإعداد الجديد.', genericSaveError: 'حدث خطأ أثناء الحفظ.', genericLoadError: 'حدث خطأ أثناء تحميل البيانات.', invalidPhoneTitle: 'رقم الهاتف غير صحيح', invalidPhoneText: 'اكتب رقم هاتف مصري صحيح مثل 01012345678 أو +201012345678.'
            }
        },
        en: {
            meta: {
                title: 'K GROUP | Professional Printing Store',
                description: 'K GROUP for custom printing and promotional products. Browse items and order via WhatsApp with live Supabase sync.'
            },
            nav: { home: 'Home', products: 'Products', portfolio: 'Our Work', methods: 'Printing Methods', admin: 'Admin Login' },
            hero: {
                badge: 'Luxury printed identity', titleLine1: 'Where craftsmanship meets beauty', titleLine2: 'your product is born in its best form', description: 'K GROUP delivers custom printing solutions for companies, brands, and individuals with live cloud sync for products, accounts, and requests.', ctaPrimary: 'Browse Products', ctaSecondary: 'View Our Work', point1: 'Live updates for all users', point2: 'Direct WhatsApp requests', point3: 'User accounts and saved requests', previewTitle: 'Elegant interface for printing products', previewTitleSmall: 'Bilingual experience', previewText: 'Promotional and commercial products worthy of your brand.', previewPhone: 'Instant sync via Supabase'
            },
            feature: {
                oneTitle: 'Realtime Updates', oneText: 'Any product add, edit, or delete appears instantly for all users.', twoTitle: 'User Accounts', twoText: 'Every customer can create an account and sign in from any device.', threeTitle: 'Saved Requests', threeText: 'Submitted purchase requests appear inside the admin panel.'
            },
            auth: {
                signup: 'Create Account', login: 'Login', logout: 'Logout', signupTitle: 'Create New Account', signupSubtitle: 'Register your name, phone number, and password to save requests and use your account from any device.', loginTitle: 'User Login', loginSubtitle: 'Use your phone number and password to access your account from any device.', accountRequired: 'You must have an account on the website before placing an order.', welcomePrefix: 'Hi', accountCreated: 'Account created successfully.', loggedIn: 'You are now logged in.', loggedOut: 'You have been logged out.', duplicatePhone: 'This phone number is already registered.'
            },
            products: {
                eyebrow: 'Products', title: 'Printable Products', subtitle: 'All products are managed from the database and synced instantly to every visitor.', searchPlaceholder: 'Search by product name...', emptyTitle: 'No products available.', emptyText: 'You can add products from the admin panel.', noMatchTitle: 'No matching results found.', noMatchText: 'Try changing the search keyword or selected category.', resetFilters: 'Reset Filters', all: 'All', quoteTag: 'Quote on request', viewDetails: 'View Details'
            },
            portfolio: { eyebrow: 'Previous Work', title: 'Samples from Our Execution', subtitle: 'Every item in this gallery is pulled live from Supabase for all users.', emptyTitle: 'No portfolio items available yet.', emptyText: 'You can add projects from the admin panel.' },
            methods: {
                eyebrow: 'Printing Methods', title: 'Techniques for every product', subtitle: 'Choose the right method based on the material and desired final finish.', uvTitle: 'UV Printing', uvText: 'Ideal for rigid surfaces with clean colors and refined finishing.', screenTitle: 'Screen Printing', screenText: 'A strong choice for t-shirts and quantity-based products with rich ink layers.', dtfTitle: 'DTF / DTG', dtfText: 'Perfect for colorful artwork and detailed graphics on apparel and fabric.', laserTitle: 'Laser', laserText: 'Clean and precise engraving on wood, metal, and selected specialty materials.', embTitle: 'Embroidery', embText: 'A durable premium touch for apparel, caps, and uniforms.', transferTitle: 'Heat Transfer / Vinyl', transferText: 'Excellent for logos, numbers, and special applications on garments.'
            },
            footer: {
                about: 'Custom printing and visual identity solutions with a modern premium touch for companies, stores, and events.', quickLinks: 'Quick Links', contact: 'Contact', owner: 'Administration', adminEntry: 'Open Admin Panel', copyright: '© 2026 K GROUP. All rights reserved.', note: 'Cloud-connected interface with live updates and user accounts.'
            },
            admin: {
                backToStore: 'Back to Store', logout: 'Logout', ownerTitle: 'Store Owner', ownerSubtitle: 'Active admin session', productsTab: 'Manage Products', categoriesTab: 'Manage Categories', portfolioTab: 'Manage Portfolio', usersTab: 'User Accounts', ordersTab: 'Purchase Requests', productsTitle: 'Manage Products', productsSubtitle: 'Add, edit, or delete products synced to all users.', addProduct: 'Add Product', searchProductsPlaceholder: 'Search products...', table: { image: 'Image', name: 'Name', category: 'Category', methods: 'Printing Methods', actions: 'Actions' }, emptyProductsTitle: 'No products found.', emptyProductsText: 'Start by adding your first product.', categoriesTitle: 'Manage Categories', categoriesSubtitle: 'Add Arabic and English categories to appear in filters and products.', addCategory: 'Add Category', saveCategory: 'Save Category', categoryList: 'Categories List', portfolioTitle: 'Manage Previous Work', portfolioSubtitle: 'Add or edit execution samples that appear live for everyone.', addPortfolio: 'Add Project', emptyPortfolioTitle: 'No portfolio items found.', emptyPortfolioText: 'Add your first project to show it in the portfolio section.', usersTitle: 'User Accounts', usersSubtitle: 'All customer accounts appear here instantly.', usersSecurityNote: 'All customer accounts created on the site appear here with their login information as requested.', usersTable: { name: 'Name', phone: 'Phone', password: 'Password', userId: 'User ID', createdAt: 'Created At' }, emptyUsersTitle: 'No user accounts yet.', emptyUsersText: 'When users register, their accounts will appear here.', ordersTitle: 'Purchase & Quote Requests', ordersSubtitle: 'Every saved request appears here instantly.', ordersTable: { customer: 'Customer', phone: 'Phone', product: 'Product', type: 'Type', quantity: 'Quantity', printing: 'Printing', date: 'Date' }, emptyOrdersTitle: 'No requests yet.', emptyOrdersText: 'When users submit requests, they will appear here.', productFormSubtitle: 'Enter product details in both languages so it appears professionally for all users.', portfolioFormSubtitle: 'Add a completed project so it appears in the portfolio gallery for all users.', filterAllCategories: 'All Categories', ownerLoginTitle: 'Admin Panel Login', ownerLoginSubtitle: 'Enter the admin password to open the control interface.'
            },
            forms: {
                categoryNameAr: 'Category name in Arabic', categoryNameEn: 'Category name in English', productName: 'Product Name', customerName: 'Customer Name', phone: 'Phone Number', email: 'Email', quantity: 'Required Quantity', printingType: 'Printing Type (Optional)', notes: 'Notes (Optional)', productNameAr: 'Product name in Arabic', productNameEn: 'Product name in English', category: 'Category', mainImage: 'Main image URL', shortDescAr: 'Short description in Arabic', shortDescEn: 'Short description in English', fullDescAr: 'Full description in Arabic', fullDescEn: 'Full description in English', methods: 'Available printing methods', projectImage: 'Project example image URL', projectDescAr: 'Project example description in Arabic', projectDescEn: 'Project example description in English', portfolioTitleAr: 'Project title in Arabic', portfolioTitleEn: 'Project title in English', portfolioMethodAr: 'Method in Arabic', portfolioMethodEn: 'Method in English', portfolioImage: 'Project image URL', portfolioDescAr: 'Project description in Arabic', portfolioDescEn: 'Project description in English'
            },
            details: { projectLabel: 'Previous project example', methodsTitle: 'Available printing methods', requestQuote: 'Request Quote', orderNow: 'Order Now' },
            quote: { title: 'Quote Request', orderTitle: 'Purchase Request', subtitle: 'Fill the following details and we will open a ready WhatsApp message.', orderSubtitle: 'Your request will be saved in the database and then WhatsApp will open for you.', submit: 'Send via WhatsApp', orderSubmit: 'Save Request & Send via WhatsApp', selectMethod: 'Select printing method', noMethod: 'Not specified', quoteType: 'Quote', orderType: 'Order' },
            login: { password: 'Password', error: 'Incorrect password.', enter: 'Enter' },
            common: { cancel: 'Cancel', save: 'Save', confirm: 'Confirm', edit: 'Edit', delete: 'Delete', update: 'Update', close: 'Close', guest: 'Guest' },
            messages: {
                formRequiredTitle: 'Missing fields', formRequiredText: 'Please fill all required fields.', methodsRequiredTitle: 'Select printing methods', methodsRequiredText: 'Please select at least one printing method.', loginSuccessTitle: 'Logged in', loginSuccessText: 'Admin panel opened successfully.', loginErrorTitle: 'Login failed', loginErrorText: 'Incorrect password.', productAddedTitle: 'Added successfully', productAddedText: 'The product has been added successfully.', productUpdatedTitle: 'Updated successfully', productUpdatedText: 'The product has been updated successfully.', productDeletedTitle: 'Deleted successfully', productDeletedText: 'The product has been deleted from the store.', categoryAddedTitle: 'Added successfully', categoryAddedText: 'The category has been added successfully.', categoryDeletedTitle: 'Deleted successfully', categoryDeletedText: 'The category was deleted and related products were moved to Other.', duplicateCategoryTitle: 'Category already exists', duplicateCategoryText: 'This category already exists.', portfolioAddedTitle: 'Added successfully', portfolioAddedText: 'The project has been added successfully.', portfolioUpdatedTitle: 'Updated successfully', portfolioUpdatedText: 'The project has been updated successfully.', portfolioDeletedTitle: 'Deleted successfully', portfolioDeletedText: 'The project has been removed from the gallery.', orderSavedTitle: 'Request saved', orderSavedText: 'Your request was saved and opened in WhatsApp.', quoteSavedTitle: 'Request saved', quoteSavedText: 'Your request has been saved in the system.', openWhatsappTitle: 'Opening WhatsApp', openWhatsappText: 'Preparing your message and opening WhatsApp...', deleteProductConfirmTitle: 'Delete product', deleteProductConfirmText: 'Are you sure you want to delete this product?', deleteCategoryConfirmTitle: 'Delete category', deleteCategoryConfirmText: 'Are you sure you want to delete this category?', deletePortfolioConfirmTitle: 'Delete project', deletePortfolioConfirmText: 'Are you sure you want to delete this project?', logoutConfirmTitle: 'Logout', logoutConfirmText: 'Do you want to end the admin session?', supabaseWarningTitle: 'Supabase Warning', supabaseWarningText: 'Some tables could not be loaded from Supabase. Please run the new setup script for custom accounts and orders.', authErrorTitle: 'Login error', authErrorText: 'Please make sure the customer_accounts table exists in Supabase and the new setup script has been executed.', genericSaveError: 'An error occurred while saving.', genericLoadError: 'An error occurred while loading data.', invalidPhoneTitle: 'Invalid phone number', invalidPhoneText: 'Please enter a valid Egyptian phone number like 01012345678 or +201012345678.'
            }
        }
    };

    const state = {
        language: localStorage.getItem(STORAGE_KEYS.language) || 'ar',
        selectedCategory: 'all',
        searchTerm: '',
        currentProductId: null,
        currentRequestMode: 'quote',
        adminAuthenticated: sessionStorage.getItem(STORAGE_KEYS.adminAuth) === 'true',
        activeAdminTab: 'products',
        currentCustomer: null,
        categories: [...DEFAULT_CATEGORIES],
        products: [...DEFAULT_PRODUCTS],
        portfolio: [...DEFAULT_PORTFOLIO],
        users: [],
        orders: [],
        warningShown: false,
        realtimeChannel: null,
        supabaseReady: !!(window.supabase && typeof window.supabase.createClient === 'function')
    };

    const refs = {
        storeView: document.getElementById('store-view'),
        adminView: document.getElementById('admin-view'),
        toastContainer: document.getElementById('toast-container'),
        languageToggle: document.getElementById('language-toggle'),
        languageToggleLabel: document.getElementById('language-toggle-label'),
        mobileLanguageToggle: document.getElementById('mobile-language-toggle'),
        mobileLanguageToggleLabel: document.getElementById('mobile-language-toggle-label'),
        adminLanguageToggle: document.getElementById('admin-language-toggle'),
        adminLanguageToggleLabel: document.getElementById('admin-language-toggle-label'),
        mobileMenuButton: document.getElementById('mobile-menu-button'),
        mobileMenu: document.getElementById('mobile-menu'),
        guestAuthActions: document.getElementById('guest-auth-actions'),
        userAuthActions: document.getElementById('user-auth-actions'),
        mobileGuestAuthActions: document.getElementById('mobile-guest-auth-actions'),
        mobileUserAuthActions: document.getElementById('mobile-user-auth-actions'),
        userGreeting: document.getElementById('user-greeting'),
        mobileUserGreeting: document.getElementById('mobile-user-greeting'),
        openSignupModal: document.getElementById('open-signup-modal'),
        openLoginModal: document.getElementById('open-login-modal'),
        mobileOpenSignupModal: document.getElementById('mobile-open-signup-modal'),
        mobileOpenLoginModal: document.getElementById('mobile-open-login-modal'),
        customerLogout: document.getElementById('customer-logout'),
        mobileCustomerLogout: document.getElementById('mobile-customer-logout'),
        storeAdminLogin: document.getElementById('store-admin-login'),
        mobileAdminLogin: document.getElementById('mobile-admin-login'),
        footerAdminLogin: document.getElementById('footer-admin-login'),
        backToStore: document.getElementById('back-to-store'),
        adminLogout: document.getElementById('admin-logout'),
        productSearch: document.getElementById('product-search'),
        clearSearch: document.getElementById('clear-search'),
        categoryPills: document.getElementById('category-pills'),
        categoryScrollPrev: document.getElementById('category-scroll-prev'),
        categoryScrollNext: document.getElementById('category-scroll-next'),
        resetFilters: document.getElementById('reset-filters'),
        productsGrid: document.getElementById('products-grid'),
        productsEmpty: document.getElementById('products-empty'),
        productsEmptyTitle: document.getElementById('products-empty-title'),
        productsEmptyText: document.getElementById('products-empty-text'),
        portfolioGrid: document.getElementById('portfolio-grid'),
        portfolioEmpty: document.getElementById('portfolio-empty'),
        detailsModal: document.getElementById('details-modal'),
        quoteModal: document.getElementById('quote-modal'),
        signupModal: document.getElementById('signup-modal'),
        userLoginModal: document.getElementById('user-login-modal'),
        loginModal: document.getElementById('login-modal'),
        productModal: document.getElementById('product-modal'),
        portfolioModal: document.getElementById('portfolio-modal'),
        confirmModal: document.getElementById('confirm-modal'),
        detailsImage: document.getElementById('details-image'),
        detailsProjectImage: document.getElementById('details-project-image'),
        detailsProjectDescription: document.getElementById('details-project-description'),
        detailsCategory: document.getElementById('details-category'),
        detailsTitle: document.getElementById('details-title'),
        detailsDescription: document.getElementById('details-description'),
        detailsMethods: document.getElementById('details-methods'),
        detailsRequestQuote: document.getElementById('details-request-quote'),
        detailsOrderNow: document.getElementById('details-order-now'),
        quoteForm: document.getElementById('quote-form'),
        quoteModalTitle: document.getElementById('quote-modal-title'),
        quoteModalSubtitle: document.getElementById('quote-modal-subtitle'),
        quoteSubmitLabel: document.getElementById('quote-submit-label'),
        quoteProduct: document.getElementById('quote-product'),
        quoteCustomerName: document.getElementById('quote-customer-name'),
        quotePhone: document.getElementById('quote-phone'),
        quoteEmail: document.getElementById('quote-email'),
        quoteQuantity: document.getElementById('quote-quantity'),
        quotePrintingType: document.getElementById('quote-printing-type'),
        quoteNotes: document.getElementById('quote-notes'),
        signupForm: document.getElementById('signup-form'),
        signupName: document.getElementById('signup-name'),
        signupPhone: document.getElementById('signup-phone'),
        signupPassword: document.getElementById('signup-password'),
        toggleSignupPassword: document.getElementById('toggle-signup-password'),
        userLoginForm: document.getElementById('user-login-form'),
        userLoginPhone: document.getElementById('user-login-phone'),
        userLoginPassword: document.getElementById('user-login-password'),
        toggleUserLoginPassword: document.getElementById('toggle-user-login-password'),
        loginForm: document.getElementById('login-form'),
        adminPassword: document.getElementById('admin-password'),
        togglePassword: document.getElementById('toggle-password'),
        loginError: document.getElementById('login-error'),
        adminNavBtns: document.querySelectorAll('.admin-nav-btn'),
        adminTabs: document.querySelectorAll('.admin-tab'),
        openAddProduct: document.getElementById('open-add-product'),
        adminProductSearch: document.getElementById('admin-product-search'),
        adminCategoryFilter: document.getElementById('admin-category-filter'),
        adminProductsBody: document.getElementById('admin-products-body'),
        adminProductsEmpty: document.getElementById('admin-products-empty'),
        categoryForm: document.getElementById('category-form'),
        categoryNameAr: document.getElementById('category-name-ar'),
        categoryNameEn: document.getElementById('category-name-en'),
        adminCategoriesBody: document.getElementById('admin-categories-body'),
        openAddPortfolio: document.getElementById('open-add-portfolio'),
        adminPortfolioGrid: document.getElementById('admin-portfolio-grid'),
        adminPortfolioEmpty: document.getElementById('admin-portfolio-empty'),
        adminUsersBody: document.getElementById('admin-users-body'),
        adminUsersEmpty: document.getElementById('admin-users-empty'),
        adminOrdersBody: document.getElementById('admin-orders-body'),
        adminOrdersEmpty: document.getElementById('admin-orders-empty'),
        productForm: document.getElementById('product-form'),
        productModalTitle: document.getElementById('product-modal-title'),
        productModalSubmitLabel: document.getElementById('product-modal-submit-label'),
        productId: document.getElementById('product-id'),
        productNameAr: document.getElementById('product-name-ar'),
        productNameEn: document.getElementById('product-name-en'),
        productCategory: document.getElementById('product-category'),
        productImage: document.getElementById('product-image'),
        productShortAr: document.getElementById('product-short-ar'),
        productShortEn: document.getElementById('product-short-en'),
        productFullAr: document.getElementById('product-full-ar'),
        productFullEn: document.getElementById('product-full-en'),
        productPortfolioImage: document.getElementById('product-portfolio-image'),
        productPortfolioDescAr: document.getElementById('product-portfolio-desc-ar'),
        productPortfolioDescEn: document.getElementById('product-portfolio-desc-en'),
        printingMethodCheckboxes: document.getElementById('printing-method-checkboxes'),
        portfolioForm: document.getElementById('portfolio-form'),
        portfolioModalTitle: document.getElementById('portfolio-modal-title'),
        portfolioModalSubmitLabel: document.getElementById('portfolio-modal-submit-label'),
        portfolioId: document.getElementById('portfolio-id'),
        portfolioTitleAr: document.getElementById('portfolio-title-ar'),
        portfolioTitleEn: document.getElementById('portfolio-title-en'),
        portfolioMethodAr: document.getElementById('portfolio-method-ar'),
        portfolioMethodEn: document.getElementById('portfolio-method-en'),
        portfolioImage: document.getElementById('portfolio-image'),
        portfolioDescAr: document.getElementById('portfolio-desc-ar'),
        portfolioDescEn: document.getElementById('portfolio-desc-en'),
        confirmTitle: document.getElementById('confirm-title'),
        confirmMessage: document.getElementById('confirm-message'),
        confirmCancel: document.getElementById('confirm-cancel'),
        confirmOk: document.getElementById('confirm-ok')
    };

    let confirmAction = null;

    const supabaseClient = state.supabaseReady
        ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
        : null;

    function getNestedValue(object, path) {
        return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), object);
    }

    function t(path) {
        return getNestedValue(UI[state.language], path) || path;
    }

    function escapeHtml(value = '') {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function normalize(value = '') {
        return String(value).trim().toLowerCase();
    }

    function slugify(value = '') {
        return value.toLowerCase().trim().replace(/[^a-z0-9\u0600-\u06FF]+/g, '-').replace(/^-+|-+$/g, '');
    }

    function formatDate(value) {
        if (!value) return '-';
        const date = new Date(value);
        return date.toLocaleString(state.language === 'ar' ? 'ar-EG' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    }

    function normalizePhone(input) {
        const raw = String(input || '').replace(/\s+/g, '').replace(/-/g, '');
        if (!raw) return '';
        if (raw.startsWith('+')) return raw;
        if (raw.startsWith('00')) return `+${raw.slice(2)}`;
        if (raw.startsWith('20') && raw.length >= 12) return `+${raw}`;
        if (raw.startsWith('0') && raw.length === 11) return `+20${raw.slice(1)}`;
        if (raw.startsWith('1') && raw.length === 10) return `+20${raw}`;
        return raw;
    }

    function isValidEgyptPhone(phone) {
        return /^\+201[0-2,5]\d{8}$/.test(phone);
    }

    function currentText(arValue, enValue) {
        return state.language === 'ar' ? arValue : enValue;
    }

    function getMethodLabel(methodId) {
        const method = PRINTING_METHODS.find(item => item.id === methodId);
        return method ? currentText(method.ar, method.en) : methodId;
    }

    function getCategoryById(categoryId) {
        return state.categories.find(item => item.id === categoryId) || state.categories.find(item => item.id === 'other') || null;
    }

    function getCategoryLabel(categoryId) {
        const category = getCategoryById(categoryId);
        return category ? currentText(category.nameAr, category.nameEn) : '';
    }

    function getProductName(product) {
        return currentText(product.nameAr, product.nameEn);
    }

    function getProductShort(product) {
        return currentText(product.shortDescAr, product.shortDescEn);
    }

    function getProductFull(product) {
        return currentText(product.fullDescAr, product.fullDescEn);
    }

    function getProductProjectDescription(product) {
        return currentText(product.projectDescAr, product.projectDescEn);
    }

    function getPortfolioTitle(item) {
        return currentText(item.titleAr, item.titleEn);
    }

    function getPortfolioMethod(item) {
        return currentText(item.methodAr, item.methodEn);
    }

    function getPortfolioDescription(item) {
        return currentText(item.descriptionAr, item.descriptionEn);
    }

    function showToast(type, title, message) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const iconMap = { success: 'fa-circle-check', error: 'fa-circle-exclamation', info: 'fa-circle-info' };
        toast.innerHTML = `
            <i class="fa-solid ${iconMap[type] || 'fa-circle-info'}"></i>
            <div class="toast-content">
                <strong>${escapeHtml(title)}</strong>
                <p>${escapeHtml(message)}</p>
            </div>
            <button class="toast-close" type="button"><i class="fa-solid fa-xmark"></i></button>
        `;
        refs.toastContainer.appendChild(toast);
        const remove = () => toast.remove();
        toast.querySelector('.toast-close').addEventListener('click', remove);
        setTimeout(remove, 4500);
    }

    function openModal(modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.add('hidden');
        const anyOpen = [...document.querySelectorAll('.modal')].some(item => !item.classList.contains('hidden'));
        if (!anyOpen) document.body.style.overflow = '';
    }

    function showConfirm(title, message, callback) {
        refs.confirmTitle.textContent = title;
        refs.confirmMessage.textContent = message;
        confirmAction = callback;
        openModal(refs.confirmModal);
    }

    function closeMobileMenu() {
        refs.mobileMenu.classList.remove('open');
        refs.mobileMenuButton.classList.remove('open');
    }

    function switchView(viewName) {
        refs.storeView.classList.toggle('active', viewName === 'store');
        refs.adminView.classList.toggle('active', viewName === 'admin');
        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleLanguage() {
        state.language = state.language === 'ar' ? 'en' : 'ar';
        localStorage.setItem(STORAGE_KEYS.language, state.language);
        applyTranslations();
    }

    function updateAuthUI() {
        const guestVisible = !state.currentCustomer;
        refs.guestAuthActions.classList.toggle('hidden', !guestVisible);
        refs.userAuthActions.classList.toggle('hidden', guestVisible);
        refs.mobileGuestAuthActions.classList.toggle('hidden', !guestVisible);
        refs.mobileUserAuthActions.classList.toggle('hidden', guestVisible);

        const displayName = state.currentCustomer?.full_name || state.currentCustomer?.phone || t('common.guest');
        const greeting = `${t('auth.welcomePrefix')} ${displayName}`;
        refs.userGreeting.textContent = greeting;
        refs.mobileUserGreeting.textContent = greeting;
    }

    function buildPrintingMethodCheckboxes(selectedMethods = []) {
        refs.printingMethodCheckboxes.innerHTML = PRINTING_METHODS.map(method => `
            <label class="check-item">
                <input type="checkbox" value="${method.id}" ${selectedMethods.includes(method.id) ? 'checked' : ''}>
                <span>${escapeHtml(currentText(method.ar, method.en))}</span>
            </label>
        `).join('');
    }

    function populateCategorySelects() {
        const selectedProductCategory = refs.productCategory.value;
        const selectedAdminCategory = refs.adminCategoryFilter.value || 'all';

        refs.productCategory.innerHTML = state.categories.map(category => `
            <option value="${category.id}">${escapeHtml(currentText(category.nameAr, category.nameEn))}</option>
        `).join('');

        refs.adminCategoryFilter.innerHTML = `
            <option value="all">${escapeHtml(t('admin.filterAllCategories'))}</option>
            ${state.categories.map(category => `<option value="${category.id}">${escapeHtml(currentText(category.nameAr, category.nameEn))}</option>`).join('')}
        `;

        if (selectedProductCategory && state.categories.some(category => category.id === selectedProductCategory)) {
            refs.productCategory.value = selectedProductCategory;
        }

        refs.adminCategoryFilter.value = state.categories.some(category => category.id === selectedAdminCategory) || selectedAdminCategory === 'all'
            ? selectedAdminCategory
            : 'all';
    }

    function productMatchesSearch(product, term) {
        const fields = [
            product.nameAr,
            product.nameEn,
            product.shortDescAr,
            product.shortDescEn,
            product.fullDescAr,
            product.fullDescEn,
            getCategoryLabel(product.categoryId)
        ];
        return fields.some(field => normalize(field).includes(term));
    }

    function renderCategoryPills() {
        refs.categoryPills.innerHTML = `
            <button class="category-pill ${state.selectedCategory === 'all' ? 'active' : ''}" data-category="all">${escapeHtml(t('products.all'))}</button>
            ${state.categories.map(category => `
                <button class="category-pill ${state.selectedCategory === category.id ? 'active' : ''}" data-category="${category.id}">${escapeHtml(currentText(category.nameAr, category.nameEn))}</button>
            `).join('')}
        `;

        refs.categoryPills.querySelectorAll('.category-pill').forEach(button => {
            button.addEventListener('click', () => {
                state.selectedCategory = button.dataset.category;
                renderCategoryPills();
                renderProducts();
            });
        });
    }

    function renderProducts() {
        const term = normalize(state.searchTerm);
        const filtered = state.products.filter(product => {
            const categoryMatch = state.selectedCategory === 'all' || product.categoryId === state.selectedCategory;
            const searchMatch = !term || productMatchesSearch(product, term);
            return categoryMatch && searchMatch;
        });

        if (!filtered.length) {
            refs.productsGrid.innerHTML = '';
            refs.productsEmpty.classList.remove('hidden');
            if (!state.products.length) {
                refs.productsEmptyTitle.textContent = t('products.emptyTitle');
                refs.productsEmptyText.textContent = t('products.emptyText');
            } else {
                refs.productsEmptyTitle.textContent = t('products.noMatchTitle');
                refs.productsEmptyText.textContent = t('products.noMatchText');
            }
            return;
        }

        refs.productsEmpty.classList.add('hidden');
        refs.productsGrid.innerHTML = filtered.map(product => `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-media">
                    <img src="${escapeHtml(product.image)}" alt="${escapeHtml(getProductName(product))}" loading="lazy">
                    <span class="product-badge">${escapeHtml(getCategoryLabel(product.categoryId))}</span>
                </div>
                <div class="product-body">
                    <h3>${escapeHtml(getProductName(product))}</h3>
                    <p>${escapeHtml(getProductShort(product))}</p>
                    <div class="product-footer">
                        <span class="quote-tag">${escapeHtml(t('products.quoteTag'))}</span>
                        <button class="primary-outline-btn small-btn view-product" type="button" data-product-id="${product.id}">${escapeHtml(t('products.viewDetails'))}</button>
                    </div>
                </div>
            </article>
        `).join('');

        refs.productsGrid.querySelectorAll('.product-card, .view-product').forEach(element => {
            element.addEventListener('click', event => {
                const productId = event.currentTarget.dataset.productId || event.currentTarget.closest('.product-card')?.dataset.productId;
                if (productId) openProductDetails(productId);
            });
        });
    }

    function renderPortfolio() {
        if (!state.portfolio.length) {
            refs.portfolioGrid.innerHTML = '';
            refs.portfolioEmpty.classList.remove('hidden');
            return;
        }

        refs.portfolioEmpty.classList.add('hidden');
        refs.portfolioGrid.innerHTML = state.portfolio.map(item => `
            <article class="portfolio-card">
                <div class="portfolio-media">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(getPortfolioTitle(item))}" loading="lazy">
                    <span class="portfolio-method">${escapeHtml(getPortfolioMethod(item))}</span>
                </div>
                <div class="portfolio-body">
                    <h3>${escapeHtml(getPortfolioTitle(item))}</h3>
                    <p>${escapeHtml(getPortfolioDescription(item))}</p>
                </div>
            </article>
        `).join('');
    }

    function renderAdminProducts() {
        const searchValue = normalize(refs.adminProductSearch.value);
        const categoryValue = refs.adminCategoryFilter.value || 'all';
        const filtered = state.products.filter(product => {
            const categoryMatch = categoryValue === 'all' || product.categoryId === categoryValue;
            const searchMatch = !searchValue || productMatchesSearch(product, searchValue);
            return categoryMatch && searchMatch;
        });

        if (!filtered.length) {
            refs.adminProductsBody.innerHTML = '';
            refs.adminProductsEmpty.classList.remove('hidden');
            return;
        }

        refs.adminProductsEmpty.classList.add('hidden');
        refs.adminProductsBody.innerHTML = filtered.map(product => `
            <tr>
                <td><img class="admin-thumb" src="${escapeHtml(product.image)}" alt="${escapeHtml(getProductName(product))}"></td>
                <td>${escapeHtml(getProductName(product))}</td>
                <td>${escapeHtml(getCategoryLabel(product.categoryId))}</td>
                <td><div class="admin-method-tags">${product.methods.map(method => `<span>${escapeHtml(getMethodLabel(method))}</span>`).join('')}</div></td>
                <td>
                    <div class="table-actions">
                        <button class="icon-btn edit edit-product" type="button" data-id="${product.id}"><i class="fa-solid fa-pen"></i></button>
                        <button class="icon-btn delete delete-product" type="button" data-id="${product.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');

        refs.adminProductsBody.querySelectorAll('.edit-product').forEach(button => {
            button.addEventListener('click', () => openProductModal(button.dataset.id));
        });

        refs.adminProductsBody.querySelectorAll('.delete-product').forEach(button => {
            button.addEventListener('click', () => {
                showConfirm(t('messages.deleteProductConfirmTitle'), t('messages.deleteProductConfirmText'), async () => {
                    await deleteProduct(button.dataset.id);
                });
            });
        });
    }

    function renderAdminCategories() {
        refs.adminCategoriesBody.innerHTML = state.categories.map(category => `
            <tr>
                <td>${escapeHtml(category.nameAr)} / ${escapeHtml(category.nameEn)}</td>
                <td>
                    <div class="table-actions">
                        ${category.id !== 'other' ? `<button class="icon-btn delete delete-category" type="button" data-id="${category.id}"><i class="fa-solid fa-trash"></i></button>` : ''}
                    </div>
                </td>
            </tr>
        `).join('');

        refs.adminCategoriesBody.querySelectorAll('.delete-category').forEach(button => {
            button.addEventListener('click', () => {
                showConfirm(t('messages.deleteCategoryConfirmTitle'), t('messages.deleteCategoryConfirmText'), async () => {
                    await deleteCategory(button.dataset.id);
                });
            });
        });
    }

    function renderAdminPortfolio() {
        if (!state.portfolio.length) {
            refs.adminPortfolioGrid.innerHTML = '';
            refs.adminPortfolioEmpty.classList.remove('hidden');
            return;
        }

        refs.adminPortfolioEmpty.classList.add('hidden');
        refs.adminPortfolioGrid.innerHTML = state.portfolio.map(item => `
            <article class="admin-portfolio-card">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(getPortfolioTitle(item))}">
                <div class="admin-portfolio-body">
                    <h3>${escapeHtml(getPortfolioTitle(item))}</h3>
                    <span class="admin-portfolio-meta">${escapeHtml(getPortfolioMethod(item))}</span>
                    <p>${escapeHtml(getPortfolioDescription(item))}</p>
                </div>
                <div class="admin-portfolio-actions">
                    <button class="ghost-btn small-btn edit-portfolio" type="button" data-id="${item.id}"><i class="fa-solid fa-pen"></i>${escapeHtml(t('common.edit'))}</button>
                    <button class="danger-btn small-btn delete-portfolio" type="button" data-id="${item.id}"><i class="fa-solid fa-trash"></i>${escapeHtml(t('common.delete'))}</button>
                </div>
            </article>
        `).join('');

        refs.adminPortfolioGrid.querySelectorAll('.edit-portfolio').forEach(button => {
            button.addEventListener('click', () => openPortfolioModal(button.dataset.id));
        });

        refs.adminPortfolioGrid.querySelectorAll('.delete-portfolio').forEach(button => {
            button.addEventListener('click', () => {
                showConfirm(t('messages.deletePortfolioConfirmTitle'), t('messages.deletePortfolioConfirmText'), async () => {
                    await deletePortfolio(button.dataset.id);
                });
            });
        });
    }

    function renderAdminUsers() {
        if (!state.users.length) {
            refs.adminUsersBody.innerHTML = '';
            refs.adminUsersEmpty.classList.remove('hidden');
            return;
        }

        refs.adminUsersEmpty.classList.add('hidden');
        refs.adminUsersBody.innerHTML = state.users.map(user => `
            <tr>
                <td>${escapeHtml(user.full_name || '-')}</td>
                <td>${escapeHtml(user.phone || '-')}</td>
                <td>${escapeHtml(user.password_text || '-')}</td>
                <td>${escapeHtml(user.id || '-')}</td>
                <td>${escapeHtml(formatDate(user.created_at))}</td>
            </tr>
        `).join('');
    }

    function renderAdminOrders() {
        if (!state.orders.length) {
            refs.adminOrdersBody.innerHTML = '';
            refs.adminOrdersEmpty.classList.remove('hidden');
            return;
        }

        refs.adminOrdersEmpty.classList.add('hidden');
        refs.adminOrdersBody.innerHTML = state.orders.map(order => `
            <tr>
                <td>${escapeHtml(order.customer_name || '-')}</td>
                <td>${escapeHtml(order.phone || '-')}</td>
                <td>${escapeHtml(currentText(order.product_name_ar, order.product_name_en) || '-')}</td>
                <td>${escapeHtml(order.request_type === 'order' ? t('quote.orderType') : t('quote.quoteType'))}</td>
                <td>${escapeHtml(String(order.quantity || '-'))}</td>
                <td>${escapeHtml(order.printing_type || t('quote.noMethod'))}</td>
                <td>${escapeHtml(formatDate(order.created_at))}</td>
            </tr>
        `).join('');
    }

    function openProductDetails(productId) {
        const product = state.products.find(item => item.id === productId);
        if (!product) return;
        state.currentProductId = productId;
        refs.detailsImage.src = product.image;
        refs.detailsImage.alt = getProductName(product);
        refs.detailsProjectImage.src = product.projectImage;
        refs.detailsProjectImage.alt = getProductName(product);
        refs.detailsProjectDescription.textContent = getProductProjectDescription(product);
        refs.detailsCategory.textContent = getCategoryLabel(product.categoryId);
        refs.detailsTitle.textContent = getProductName(product);
        refs.detailsDescription.textContent = getProductFull(product);
        refs.detailsMethods.innerHTML = product.methods.map(method => `<span>${escapeHtml(getMethodLabel(method))}</span>`).join('');
        openModal(refs.detailsModal);
    }

    function prepareQuoteModal(productId, mode = 'quote') {
        const product = state.products.find(item => item.id === productId);
        if (!product) return;
        state.currentProductId = productId;
        state.currentRequestMode = mode;
        refs.quoteProduct.value = getProductName(product);
        refs.quotePrintingType.innerHTML = `
            <option value="">${escapeHtml(t('quote.selectMethod'))}</option>
            ${product.methods.map(methodId => `<option value="${escapeHtml(getMethodLabel(methodId))}">${escapeHtml(getMethodLabel(methodId))}</option>`).join('')}
        `;

        const customerName = state.currentCustomer?.full_name || '';
        const customerPhone = state.currentCustomer?.phone || '';
        refs.quoteCustomerName.value = customerName;
        refs.quotePhone.value = customerPhone;

        if (mode === 'order') {
            refs.quoteModalTitle.textContent = t('quote.orderTitle');
            refs.quoteModalSubtitle.textContent = t('quote.orderSubtitle');
            refs.quoteSubmitLabel.textContent = t('quote.orderSubmit');
        } else {
            refs.quoteModalTitle.textContent = t('quote.title');
            refs.quoteModalSubtitle.textContent = t('quote.subtitle');
            refs.quoteSubmitLabel.textContent = t('quote.submit');
        }

        openModal(refs.quoteModal);
    }

    function resetProductForm() {
        refs.productForm.reset();
        refs.productId.value = '';
        refs.productImage.value = 'https://images.pexels.com/photos/6786610/pexels-photo-6786610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';
        refs.productPortfolioImage.value = 'https://images.pexels.com/photos/360009/pexels-photo-360009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';
        buildPrintingMethodCheckboxes([]);
    }

    function getSelectedMethodsFromForm() {
        return [...refs.printingMethodCheckboxes.querySelectorAll('input:checked')].map(input => input.value);
    }

    function openProductModal(productId = null) {
        resetProductForm();
        populateCategorySelects();

        if (productId) {
            const product = state.products.find(item => item.id === productId);
            if (!product) return;
            refs.productId.value = product.id;
            refs.productNameAr.value = product.nameAr;
            refs.productNameEn.value = product.nameEn;
            refs.productCategory.value = product.categoryId;
            refs.productImage.value = product.image;
            refs.productShortAr.value = product.shortDescAr;
            refs.productShortEn.value = product.shortDescEn;
            refs.productFullAr.value = product.fullDescAr;
            refs.productFullEn.value = product.fullDescEn;
            refs.productPortfolioImage.value = product.projectImage;
            refs.productPortfolioDescAr.value = product.projectDescAr;
            refs.productPortfolioDescEn.value = product.projectDescEn;
            buildPrintingMethodCheckboxes(product.methods);
            refs.productModalTitle.textContent = `${t('common.edit')} - ${getProductName(product)}`;
            refs.productModalSubmitLabel.textContent = t('common.update');
        } else {
            refs.productModalTitle.textContent = t('admin.addProduct');
            refs.productModalSubmitLabel.textContent = t('common.save');
        }

        openModal(refs.productModal);
    }

    function openPortfolioModal(portfolioId = null) {
        refs.portfolioForm.reset();
        refs.portfolioId.value = '';
        refs.portfolioImage.value = 'https://images.pexels.com/photos/3439481/pexels-photo-3439481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';

        if (portfolioId) {
            const item = state.portfolio.find(entry => entry.id === portfolioId);
            if (!item) return;
            refs.portfolioId.value = item.id;
            refs.portfolioTitleAr.value = item.titleAr;
            refs.portfolioTitleEn.value = item.titleEn;
            refs.portfolioMethodAr.value = item.methodAr;
            refs.portfolioMethodEn.value = item.methodEn;
            refs.portfolioImage.value = item.image;
            refs.portfolioDescAr.value = item.descriptionAr;
            refs.portfolioDescEn.value = item.descriptionEn;
            refs.portfolioModalTitle.textContent = `${t('common.edit')} - ${getPortfolioTitle(item)}`;
            refs.portfolioModalSubmitLabel.textContent = t('common.update');
        } else {
            refs.portfolioModalTitle.textContent = t('admin.addPortfolio');
            refs.portfolioModalSubmitLabel.textContent = t('common.save');
        }

        openModal(refs.portfolioModal);
    }

    function mapCategoryRow(row) {
        return {
            id: row.id,
            nameAr: row.name_ar,
            nameEn: row.name_en,
            createdAt: row.created_at
        };
    }

    function mapProductRow(row) {
        return {
            id: row.id,
            categoryId: row.category_id,
            nameAr: row.name_ar,
            nameEn: row.name_en,
            shortDescAr: row.short_desc_ar,
            shortDescEn: row.short_desc_en,
            fullDescAr: row.full_desc_ar,
            fullDescEn: row.full_desc_en,
            image: row.image,
            methods: Array.isArray(row.methods) ? row.methods : [],
            projectImage: row.project_image,
            projectDescAr: row.project_desc_ar,
            projectDescEn: row.project_desc_en,
            createdAt: row.created_at
        };
    }

    function mapPortfolioRow(row) {
        return {
            id: row.id,
            titleAr: row.title_ar,
            titleEn: row.title_en,
            methodAr: row.method_ar,
            methodEn: row.method_en,
            image: row.image,
            descriptionAr: row.description_ar,
            descriptionEn: row.description_en,
            createdAt: row.created_at
        };
    }

    function showSupabaseWarning(error) {
        if (state.warningShown) return;
        state.warningShown = true;
        showToast('error', t('messages.supabaseWarningTitle'), t('messages.supabaseWarningText'));
        console.error(error);
    }

    async function safeSelect(tableName, mapper, fallbackData = []) {
        if (!supabaseClient) return fallbackData;
        const { data, error } = await supabaseClient.from(tableName).select('*');
        if (error) {
            showSupabaseWarning(error);
            return fallbackData;
        }
        return Array.isArray(data) ? data.map(mapper) : fallbackData;
    }

    async function loadPublicCollections() {
        const [categories, products, portfolio] = await Promise.all([
            safeSelect('categories', mapCategoryRow, DEFAULT_CATEGORIES),
            safeSelect('products', mapProductRow, DEFAULT_PRODUCTS),
            safeSelect('portfolio_items', mapPortfolioRow, DEFAULT_PORTFOLIO)
        ]);

        state.categories = categories.length ? categories : DEFAULT_CATEGORIES;
        if (!state.categories.some(item => item.id === 'other')) {
            state.categories.push({ id: 'other', nameAr: 'أخرى', nameEn: 'Other' });
        }
        state.products = products;
        state.portfolio = portfolio;

        populateCategorySelects();
        renderCategoryPills();
        renderProducts();
        renderPortfolio();
        renderAdminProducts();
        renderAdminCategories();
        renderAdminPortfolio();
    }

    async function loadUsersAndOrders() {
        if (!supabaseClient) return;
        const [usersResponse, ordersResponse] = await Promise.all([
            supabaseClient.from('customer_accounts').select('*').order('created_at', { ascending: false }),
            supabaseClient.from('orders').select('*').order('created_at', { ascending: false })
        ]);

        if (!usersResponse.error) {
            state.users = usersResponse.data || [];
        } else {
            showSupabaseWarning(usersResponse.error);
            state.users = [];
        }

        if (!ordersResponse.error) {
            state.orders = ordersResponse.data || [];
        } else {
            showSupabaseWarning(ordersResponse.error);
            state.orders = [];
        }

        renderAdminUsers();
        renderAdminOrders();
    }

    function saveCustomerSession(customer) {
        state.currentCustomer = customer;
        localStorage.setItem(STORAGE_KEYS.customerSession, JSON.stringify(customer));
        updateAuthUI();
    }

    function clearCustomerSession() {
        state.currentCustomer = null;
        localStorage.removeItem(STORAGE_KEYS.customerSession);
        updateAuthUI();
    }

    async function initializeCustomerSession() {
        const raw = localStorage.getItem(STORAGE_KEYS.customerSession);
        if (!raw) {
            updateAuthUI();
            return;
        }

        try {
            const session = JSON.parse(raw);
            if (!session?.id || !supabaseClient) {
                clearCustomerSession();
                return;
            }

            const { data, error } = await supabaseClient.from('customer_accounts').select('*').eq('id', session.id).maybeSingle();
            if (error || !data) {
                clearCustomerSession();
                return;
            }

            state.currentCustomer = data;
            updateAuthUI();
        } catch (error) {
            clearCustomerSession();
        }
    }

    async function initializeRealtime() {
        if (!supabaseClient) return;
        if (state.realtimeChannel) {
            await supabaseClient.removeChannel(state.realtimeChannel);
        }

        state.realtimeChannel = supabaseClient
            .channel('kgroup-live-sync')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'categories' }, async () => {
                const categories = await safeSelect('categories', mapCategoryRow, state.categories);
                state.categories = categories.length ? categories : state.categories;
                if (!state.categories.some(item => item.id === 'other')) state.categories.push({ id: 'other', nameAr: 'أخرى', nameEn: 'Other' });
                populateCategorySelects();
                renderCategoryPills();
                renderProducts();
                renderAdminCategories();
                renderAdminProducts();
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, async () => {
                state.products = await safeSelect('products', mapProductRow, state.products);
                renderProducts();
                renderAdminProducts();
                if (!refs.detailsModal.classList.contains('hidden') && state.currentProductId) openProductDetails(state.currentProductId);
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio_items' }, async () => {
                state.portfolio = await safeSelect('portfolio_items', mapPortfolioRow, state.portfolio);
                renderPortfolio();
                renderAdminPortfolio();
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'customer_accounts' }, async () => {
                await loadUsersAndOrders();
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, async () => {
                await loadUsersAndOrders();
            })
            .subscribe();
    }

    async function signUpUser(name, phone, password) {
        if (!supabaseClient) return;
        const normalizedPhone = normalizePhone(phone);

        if (!isValidEgyptPhone(normalizedPhone)) {
            showToast('error', t('messages.invalidPhoneTitle'), t('messages.invalidPhoneText'));
            return;
        }

        const { data: existing, error: existingError } = await supabaseClient
            .from('customer_accounts')
            .select('*')
            .eq('phone', normalizedPhone)
            .maybeSingle();

        if (existingError) {
            showToast('error', t('messages.authErrorTitle'), existingError.message || t('messages.authErrorText'));
            return;
        }

        if (existing) {
            showToast('error', t('auth.signup'), t('auth.duplicatePhone'));
            return;
        }

        const newCustomer = {
            id: crypto.randomUUID(),
            full_name: name,
            phone: normalizedPhone,
            password_text: password
        };

        const { data, error } = await supabaseClient
            .from('customer_accounts')
            .insert(newCustomer)
            .select()
            .single();

        if (error) {
            showToast('error', t('messages.authErrorTitle'), error.message || t('messages.authErrorText'));
            return;
        }

        saveCustomerSession(data);
        refs.signupForm.reset();
        closeModal(refs.signupModal);
        await loadUsersAndOrders();
        showToast('success', t('auth.signup'), t('auth.accountCreated'));
    }

    async function signInUser(phone, password) {
        if (!supabaseClient) return;
        const normalizedPhone = normalizePhone(phone);

        if (!isValidEgyptPhone(normalizedPhone)) {
            showToast('error', t('messages.invalidPhoneTitle'), t('messages.invalidPhoneText'));
            return;
        }

        const { data, error } = await supabaseClient
            .from('customer_accounts')
            .select('*')
            .eq('phone', normalizedPhone)
            .eq('password_text', password)
            .maybeSingle();

        if (error) {
            showToast('error', t('messages.authErrorTitle'), error.message || t('messages.authErrorText'));
            return;
        }

        if (!data) {
            showToast('error', t('messages.authErrorTitle'), t('login.error'));
            return;
        }

        saveCustomerSession(data);
        refs.userLoginForm.reset();
        closeModal(refs.userLoginModal);
        showToast('success', t('auth.login'), t('auth.loggedIn'));
    }

    function signOutCustomer() {
        clearCustomerSession();
        showToast('info', t('auth.logout'), t('auth.loggedOut'));
    }

    async function deleteProduct(productId) {
        if (!supabaseClient) return;
        const { error } = await supabaseClient.from('products').delete().eq('id', productId);
        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }
        state.products = state.products.filter(item => item.id !== productId);
        renderProducts();
        renderAdminProducts();
        showToast('success', t('messages.productDeletedTitle'), t('messages.productDeletedText'));
    }

    async function deleteCategory(categoryId) {
        if (!supabaseClient) return;

        state.products = state.products.map(product => product.categoryId === categoryId ? { ...product, categoryId: 'other' } : product);
        for (const product of state.products.filter(item => item.categoryId === 'other')) {
            await supabaseClient.from('products').upsert({
                id: product.id,
                category_id: product.categoryId,
                name_ar: product.nameAr,
                name_en: product.nameEn,
                short_desc_ar: product.shortDescAr,
                short_desc_en: product.shortDescEn,
                full_desc_ar: product.fullDescAr,
                full_desc_en: product.fullDescEn,
                image: product.image,
                methods: product.methods,
                project_image: product.projectImage,
                project_desc_ar: product.projectDescAr,
                project_desc_en: product.projectDescEn
            }, { onConflict: 'id' });
        }

        const { error } = await supabaseClient.from('categories').delete().eq('id', categoryId);
        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }

        state.categories = state.categories.filter(item => item.id !== categoryId);
        if (!state.categories.some(item => item.id === 'other')) state.categories.push({ id: 'other', nameAr: 'أخرى', nameEn: 'Other' });
        if (state.selectedCategory === categoryId) state.selectedCategory = 'all';
        populateCategorySelects();
        renderCategoryPills();
        renderProducts();
        renderAdminProducts();
        renderAdminCategories();
        showToast('success', t('messages.categoryDeletedTitle'), t('messages.categoryDeletedText'));
    }

    async function deletePortfolio(portfolioId) {
        if (!supabaseClient) return;
        const { error } = await supabaseClient.from('portfolio_items').delete().eq('id', portfolioId);
        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }
        state.portfolio = state.portfolio.filter(item => item.id !== portfolioId);
        renderPortfolio();
        renderAdminPortfolio();
        showToast('success', t('messages.portfolioDeletedTitle'), t('messages.portfolioDeletedText'));
    }

    async function saveProductFromForm() {
        const methods = getSelectedMethodsFromForm();
        if (!methods.length) {
            showToast('error', t('messages.methodsRequiredTitle'), t('messages.methodsRequiredText'));
            return;
        }

        const payload = {
            id: refs.productId.value || `prod-${Date.now()}`,
            categoryId: refs.productCategory.value,
            nameAr: refs.productNameAr.value.trim(),
            nameEn: refs.productNameEn.value.trim(),
            shortDescAr: refs.productShortAr.value.trim(),
            shortDescEn: refs.productShortEn.value.trim(),
            fullDescAr: refs.productFullAr.value.trim(),
            fullDescEn: refs.productFullEn.value.trim(),
            image: refs.productImage.value.trim(),
            methods,
            projectImage: refs.productPortfolioImage.value.trim(),
            projectDescAr: refs.productPortfolioDescAr.value.trim(),
            projectDescEn: refs.productPortfolioDescEn.value.trim()
        };

        if (!payload.nameAr || !payload.nameEn || !payload.categoryId || !payload.image) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }

        const { error } = await supabaseClient.from('products').upsert({
            id: payload.id,
            category_id: payload.categoryId,
            name_ar: payload.nameAr,
            name_en: payload.nameEn,
            short_desc_ar: payload.shortDescAr,
            short_desc_en: payload.shortDescEn,
            full_desc_ar: payload.fullDescAr,
            full_desc_en: payload.fullDescEn,
            image: payload.image,
            methods: payload.methods,
            project_image: payload.projectImage,
            project_desc_ar: payload.projectDescAr,
            project_desc_en: payload.projectDescEn
        }, { onConflict: 'id' });

        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }

        const isEditing = Boolean(refs.productId.value);
        const existingIndex = state.products.findIndex(item => item.id === payload.id);
        if (existingIndex >= 0) state.products[existingIndex] = payload;
        else state.products.push(payload);

        closeModal(refs.productModal);
        renderProducts();
        renderAdminProducts();
        showToast('success', isEditing ? t('messages.productUpdatedTitle') : t('messages.productAddedTitle'), isEditing ? t('messages.productUpdatedText') : t('messages.productAddedText'));
    }

    async function saveCategoryFromForm() {
        const nameAr = refs.categoryNameAr.value.trim();
        const nameEn = refs.categoryNameEn.value.trim();

        if (!nameAr || !nameEn) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }

        const exists = state.categories.some(category => normalize(category.nameAr) === normalize(nameAr) || normalize(category.nameEn) === normalize(nameEn));
        if (exists) {
            showToast('info', t('messages.duplicateCategoryTitle'), t('messages.duplicateCategoryText'));
            return;
        }

        const payload = { id: `${slugify(nameEn)}-${Date.now()}`, nameAr, nameEn };
        const { error } = await supabaseClient.from('categories').upsert({
            id: payload.id,
            name_ar: payload.nameAr,
            name_en: payload.nameEn
        }, { onConflict: 'id' });

        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }

        state.categories.push(payload);
        refs.categoryForm.reset();
        populateCategorySelects();
        renderCategoryPills();
        renderAdminCategories();
        renderAdminProducts();
        showToast('success', t('messages.categoryAddedTitle'), t('messages.categoryAddedText'));
    }

    async function savePortfolioFromForm() {
        const payload = {
            id: refs.portfolioId.value || `port-${Date.now()}`,
            titleAr: refs.portfolioTitleAr.value.trim(),
            titleEn: refs.portfolioTitleEn.value.trim(),
            methodAr: refs.portfolioMethodAr.value.trim(),
            methodEn: refs.portfolioMethodEn.value.trim(),
            image: refs.portfolioImage.value.trim(),
            descriptionAr: refs.portfolioDescAr.value.trim(),
            descriptionEn: refs.portfolioDescEn.value.trim()
        };

        if (!payload.titleAr || !payload.titleEn || !payload.methodAr || !payload.methodEn || !payload.image || !payload.descriptionAr || !payload.descriptionEn) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }

        const { error } = await supabaseClient.from('portfolio_items').upsert({
            id: payload.id,
            title_ar: payload.titleAr,
            title_en: payload.titleEn,
            method_ar: payload.methodAr,
            method_en: payload.methodEn,
            image: payload.image,
            description_ar: payload.descriptionAr,
            description_en: payload.descriptionEn
        }, { onConflict: 'id' });

        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }

        const isEditing = Boolean(refs.portfolioId.value);
        const existingIndex = state.portfolio.findIndex(item => item.id === payload.id);
        if (existingIndex >= 0) state.portfolio[existingIndex] = payload;
        else state.portfolio.push(payload);

        closeModal(refs.portfolioModal);
        renderPortfolio();
        renderAdminPortfolio();
        showToast('success', isEditing ? t('messages.portfolioUpdatedTitle') : t('messages.portfolioAddedTitle'), isEditing ? t('messages.portfolioUpdatedText') : t('messages.portfolioAddedText'));
    }

    async function saveRequestFromForm() {
        const product = state.products.find(item => item.id === state.currentProductId);
        const customerName = refs.quoteCustomerName.value.trim();
        const phone = normalizePhone(refs.quotePhone.value.trim());
        const email = refs.quoteEmail.value.trim();
        const quantity = refs.quoteQuantity.value.trim();
        const printingType = refs.quotePrintingType.value || t('quote.noMethod');
        const notes = refs.quoteNotes.value.trim() || '-';
        const requestType = state.currentRequestMode;

        if (!product || !customerName || !phone || !quantity) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }

        if (!isValidEgyptPhone(phone)) {
            showToast('error', t('messages.invalidPhoneTitle'), t('messages.invalidPhoneText'));
            return;
        }

        if (requestType === 'order' && !state.currentCustomer) {
            closeModal(refs.quoteModal);
            openModal(refs.userLoginModal);
            showToast('error', t('auth.login'), t('auth.accountRequired'));
            return;
        }

        const insertPayload = {
            id: crypto.randomUUID(),
            account_id: state.currentCustomer?.id || null,
            user_id: null,
            product_id: product.id,
            product_name_ar: product.nameAr,
            product_name_en: product.nameEn,
            customer_name: customerName,
            phone,
            email: email || null,
            quantity: Number(quantity),
            printing_type: printingType,
            notes,
            request_type: requestType,
            status: 'new'
        };

        const { error } = await supabaseClient.from('orders').insert(insertPayload);
        if (error) {
            showToast('error', t('messages.genericSaveError'), error.message || t('messages.genericSaveError'));
            return;
        }

        const message = [
            '*K GROUP Request*',
            '',
            `*Type | النوع:* ${requestType === 'order' ? t('quote.orderType') : t('quote.quoteType')}`,
            `*Product | المنتج:* ${getProductName(product)}`,
            `*Customer | العميل:* ${customerName}`,
            `*Phone | الهاتف:* ${phone}`,
            `*Email | البريد:* ${email || '-'}`,
            `*Quantity | الكمية:* ${quantity}`,
            `*Printing Type | نوع الطباعة:* ${printingType}`,
            `*Notes | الملاحظات:* ${notes}`,
            '',
            '_Generated from K GROUP_'
        ].join('\n');

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        closeModal(refs.quoteModal);
        refs.quoteForm.reset();
        await loadUsersAndOrders();
        showToast('info', t('messages.openWhatsappTitle'), t('messages.openWhatsappText'));
        showToast('success', t('messages.orderSavedTitle'), requestType === 'order' ? t('messages.orderSavedText') : t('messages.quoteSavedText'));
        setTimeout(() => window.open(whatsappUrl, '_blank'), 300);
    }

    function togglePasswordField(input, button) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        button.innerHTML = `<i class="fa-solid ${isPassword ? 'fa-eye-slash' : 'fa-eye'}"></i>`;
    }

    function applyTranslations() {
        document.documentElement.lang = state.language;
        document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
        document.title = t('meta.title');

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));

        document.querySelectorAll('[data-i18n]').forEach(element => {
            element.textContent = t(element.dataset.i18n);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
        });

        const switchLabel = state.language === 'ar' ? 'EN' : 'عربي';
        refs.languageToggleLabel.textContent = switchLabel;
        refs.mobileLanguageToggleLabel.textContent = switchLabel;
        refs.adminLanguageToggleLabel.textContent = switchLabel;

        updateAuthUI();
        populateCategorySelects();
        buildPrintingMethodCheckboxes(getSelectedMethodsFromForm());
        renderCategoryPills();
        renderProducts();
        renderPortfolio();
        renderAdminProducts();
        renderAdminCategories();
        renderAdminPortfolio();
        renderAdminUsers();
        renderAdminOrders();

        if (!refs.detailsModal.classList.contains('hidden') && state.currentProductId) {
            openProductDetails(state.currentProductId);
        }

        if (!refs.quoteModal.classList.contains('hidden') && state.currentProductId) {
            prepareQuoteModal(state.currentProductId, state.currentRequestMode);
        }
    }

    refs.languageToggle.addEventListener('click', toggleLanguage);
    refs.mobileLanguageToggle.addEventListener('click', toggleLanguage);
    refs.adminLanguageToggle.addEventListener('click', toggleLanguage);

    refs.mobileMenuButton.addEventListener('click', () => {
        refs.mobileMenuButton.classList.toggle('open');
        refs.mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    [refs.openSignupModal, refs.mobileOpenSignupModal].forEach(button => {
        button.addEventListener('click', () => {
            closeMobileMenu();
            openModal(refs.signupModal);
        });
    });

    [refs.openLoginModal, refs.mobileOpenLoginModal].forEach(button => {
        button.addEventListener('click', () => {
            closeMobileMenu();
            openModal(refs.userLoginModal);
        });
    });

    [refs.storeAdminLogin, refs.mobileAdminLogin, refs.footerAdminLogin].forEach(button => {
        button.addEventListener('click', () => {
            closeMobileMenu();
            openModal(refs.loginModal);
        });
    });

    refs.customerLogout.addEventListener('click', signOutCustomer);
    refs.mobileCustomerLogout.addEventListener('click', () => {
        closeMobileMenu();
        signOutCustomer();
    });

    refs.backToStore.addEventListener('click', () => switchView('store'));

    refs.adminLogout.addEventListener('click', () => {
        showConfirm(t('messages.logoutConfirmTitle'), t('messages.logoutConfirmText'), () => {
            state.adminAuthenticated = false;
            sessionStorage.removeItem(STORAGE_KEYS.adminAuth);
            switchView('store');
        });
    });

    refs.productSearch.addEventListener('input', event => {
        state.searchTerm = event.target.value;
        refs.clearSearch.classList.toggle('hidden', !state.searchTerm.trim());
        renderProducts();
    });

    refs.clearSearch.addEventListener('click', () => {
        state.searchTerm = '';
        refs.productSearch.value = '';
        refs.clearSearch.classList.add('hidden');
        renderProducts();
    });

    refs.resetFilters.addEventListener('click', () => {
        state.searchTerm = '';
        state.selectedCategory = 'all';
        refs.productSearch.value = '';
        refs.clearSearch.classList.add('hidden');
        renderCategoryPills();
        renderProducts();
    });

    refs.categoryScrollPrev.addEventListener('click', () => {
        refs.categoryPills.scrollBy({ left: document.documentElement.dir === 'rtl' ? 220 : -220, behavior: 'smooth' });
    });

    refs.categoryScrollNext.addEventListener('click', () => {
        refs.categoryPills.scrollBy({ left: document.documentElement.dir === 'rtl' ? -220 : 220, behavior: 'smooth' });
    });

    refs.detailsRequestQuote.addEventListener('click', () => {
        closeModal(refs.detailsModal);
        prepareQuoteModal(state.currentProductId, 'quote');
    });

    refs.detailsOrderNow.addEventListener('click', () => {
        closeModal(refs.detailsModal);
        if (!state.currentCustomer) {
            showToast('error', t('auth.login'), t('auth.accountRequired'));
            openModal(refs.userLoginModal);
            return;
        }
        prepareQuoteModal(state.currentProductId, 'order');
    });

    refs.signupForm.addEventListener('submit', async event => {
        event.preventDefault();
        const name = refs.signupName.value.trim();
        const phone = refs.signupPhone.value.trim();
        const password = refs.signupPassword.value.trim();
        if (!name || !phone || !password) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }
        await signUpUser(name, phone, password);
    });

    refs.userLoginForm.addEventListener('submit', async event => {
        event.preventDefault();
        const phone = refs.userLoginPhone.value.trim();
        const password = refs.userLoginPassword.value.trim();
        if (!phone || !password) {
            showToast('error', t('messages.formRequiredTitle'), t('messages.formRequiredText'));
            return;
        }
        await signInUser(phone, password);
    });

    refs.quoteForm.addEventListener('submit', async event => {
        event.preventDefault();
        await saveRequestFromForm();
    });

    refs.toggleSignupPassword.addEventListener('click', () => togglePasswordField(refs.signupPassword, refs.toggleSignupPassword));
    refs.toggleUserLoginPassword.addEventListener('click', () => togglePasswordField(refs.userLoginPassword, refs.toggleUserLoginPassword));
    refs.togglePassword.addEventListener('click', () => togglePasswordField(refs.adminPassword, refs.togglePassword));

    refs.loginForm.addEventListener('submit', event => {
        event.preventDefault();
        if (refs.adminPassword.value === ADMIN_PASSWORD) {
            state.adminAuthenticated = true;
            sessionStorage.setItem(STORAGE_KEYS.adminAuth, 'true');
            refs.loginError.classList.add('hidden');
            refs.loginForm.reset();
            closeModal(refs.loginModal);
            switchView('admin');
            loadUsersAndOrders();
            showToast('success', t('messages.loginSuccessTitle'), t('messages.loginSuccessText'));
        } else {
            refs.loginError.classList.remove('hidden');
            const card = refs.loginModal.querySelector('.modal-card');
            card.classList.add('shake');
            setTimeout(() => card.classList.remove('shake'), 400);
            showToast('error', t('messages.loginErrorTitle'), t('messages.loginErrorText'));
        }
    });

    refs.adminNavBtns.forEach(button => {
        button.addEventListener('click', () => {
            state.activeAdminTab = button.dataset.tab;
            refs.adminNavBtns.forEach(item => item.classList.toggle('active', item === button));
            refs.adminTabs.forEach(tab => tab.classList.toggle('active', tab.id === `admin-tab-${state.activeAdminTab}`));
            if (state.activeAdminTab === 'users' || state.activeAdminTab === 'orders') {
                loadUsersAndOrders();
            }
        });
    });

    refs.openAddProduct.addEventListener('click', () => openProductModal());
    refs.openAddPortfolio.addEventListener('click', () => openPortfolioModal());
    refs.adminProductSearch.addEventListener('input', renderAdminProducts);
    refs.adminCategoryFilter.addEventListener('change', renderAdminProducts);

    refs.categoryForm.addEventListener('submit', async event => {
        event.preventDefault();
        await saveCategoryFromForm();
    });

    refs.productForm.addEventListener('submit', async event => {
        event.preventDefault();
        await saveProductFromForm();
    });

    refs.portfolioForm.addEventListener('submit', async event => {
        event.preventDefault();
        await savePortfolioFromForm();
    });

    refs.confirmCancel.addEventListener('click', () => {
        confirmAction = null;
        closeModal(refs.confirmModal);
    });

    refs.confirmOk.addEventListener('click', () => {
        if (typeof confirmAction === 'function') confirmAction();
        confirmAction = null;
        closeModal(refs.confirmModal);
    });

    document.querySelectorAll('[data-close]').forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.dataset.close);
            if (modal) closeModal(modal);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal(modal);
        });
    });

    async function initialize() {
        refs.clearSearch.classList.toggle('hidden', !refs.productSearch.value.trim());
        buildPrintingMethodCheckboxes([]);
        applyTranslations();

        if (!supabaseClient) {
            showToast('error', t('messages.supabaseWarningTitle'), t('messages.supabaseWarningText'));
            switchView(state.adminAuthenticated ? 'admin' : 'store');
            return;
        }

        await initializeCustomerSession();
        await loadPublicCollections();
        await loadUsersAndOrders();
        await initializeRealtime();
        switchView(state.adminAuthenticated ? 'admin' : 'store');
    }

    initialize();
});