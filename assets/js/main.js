/* ==========================================================================
   USM Interactive JS Engine - Production Robust Version
   ========================================================================== */

(() => {
    'use strict';

    // =========================================================================
    // CONFIGURATION & DATA
    // =========================================================================

    const CONFIG = {
        // Base paths
        assetsPath: 'assets/',
        imgPath: 'assets/img/',
        // Default language
        defaultLang: 'ro',
        // Supported languages
        supportedLangs: ['ro', 'ru', 'en'],
        // Animation durations
        animationDuration: 300,
        // Scroll threshold for header/back-to-top
        scrollThreshold: 100,
        // Stat counter animation duration
        statDuration: 1500,
    };

    // Faculty data for cards and calculator
    const FACULTIES_DATA = [
        {
            id: 'informatica',
            name: { ro: 'Facultatea de Informatică', ru: 'Факультет информатики', en: 'Faculty of Informatics' },
            short: { ro: 'Informatică', ru: 'Информатика', en: 'Informatics' },
            icon: 'assets/img/icon-informatica.png',
            badge: { ro: 'Tehnic', ru: 'Технический', en: 'Technical' },
            desc: {
                ro: 'Programe deLicență și Masterat în Informatică, Securitate Cibernetică, Inteligență Artificială și Tehnologii Web.',
                ru: 'Программы бакалавриата и магистратуры по информатике, кибербезопасности, ИИ и веб-технологиям.',
                en: 'Bachelor and Master programs in Informatics, Cybersecurity, AI, and Web Technologies.'
            },
            programs: [
                { ro: 'Informatică (Licență)', ru: 'Информатика (Бакалавриат)', en: 'Informatics (Bachelor)' },
                { ro: 'Securitate Cibernetică (Master)', ru: 'Кибербезопасность (Магистратура)', en: 'Cybersecurity (Master)' },
                { ro: 'Inteligență Artificială (Master)', ru: 'Искусственный интеллект (Магистратура)', en: 'AI (Master)' }
            ],
            contact: { email: 'informatica@usm.md', phone: '+373 22 244 248' },
            priceBase: 14500
        },
        {
            id: 'drept',
            name: { ro: 'Facultatea de Drept', ru: 'Юридический факультет', en: 'Faculty of Law' },
            short: { ro: 'Drept', ru: 'Право', en: 'Law' },
            icon: 'assets/img/icon-drept.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Educație juridică de elită: Drept, Drept European, Drept Internațional. Pregătire pentru carieră în justiție, avocatură, diplomatie.',
                ru: 'Элитарное юридическое образование: Право, Европейское право, Международное право. Подготовка к карьере в юстиции, адвокатуре, дипломатии.',
                en: 'Elite legal education: Law, European Law, International Law. Preparation for careers in justice, advocacy, diplomacy.'
            },
            programs: [
                { ro: 'Drept (Licență)', ru: 'Право (Бакалавриат)', en: 'Law (Bachelor)' },
                { ro: 'Drept European (Master)', ru: 'Европейское право (Магистратура)', en: 'European Law (Master)' },
                { ro: 'Drept Internațional (Master)', ru: 'Международное право (Магистратура)', en: 'International Law (Master)' }
            ],
            contact: { email: 'drept@usm.md', phone: '+373 22 244 249' },
            priceBase: 13000
        },
        {
            id: 'economic',
            name: { ro: 'Facultatea de Științe Economice', ru: 'Экономический факультет', en: 'Faculty of Economics' },
            short: { ro: 'Economic', ru: 'Экономика', en: 'Economics' },
            icon: 'assets/img/icon-economic.png',
            badge: { ro: 'Economic', ru: 'Экономический', en: 'Economic' },
            desc: {
                ro: 'Management, Marketing, Finanțe-Bănci, Contabilitate, Audit. Parteneriate cu universități din UE și USA pentru dublă diplomare.',
                ru: 'Менеджмент, Маркетинг, Финансы-Банки, Бухгалтерия, Аудит. Партнерства с ЕС и США для двойных дипломов.',
                en: 'Management, Marketing, Finance-Banking, Accounting, Audit. EU and USA partnerships for double degrees.'
            },
            programs: [
                { ro: 'Management (Licență)', ru: 'Менеджмент (Бакалавриат)', en: 'Management (Bachelor)' },
                { ro: 'Finanțe-Bănci (Licență)', ru: 'Финансы-Банки (Бакалавриат)', en: 'Finance-Banking (Bachelor)' },
                { ro: 'Contabilitate și Audit (Master)', ru: 'Бухгалтерия и Аудит (Магистратура)', en: 'Accounting & Audit (Master)' }
            ],
            contact: { email: 'economic@usm.md', phone: '+373 22 244 250' },
            priceBase: 12000
        },
        {
            id: 'litere',
            name: { ro: 'Facultatea de Litere', ru: 'Филологический факультет', en: 'Faculty of Letters' },
            short: { ro: 'Litere', ru: 'Филология', en: 'Philology' },
            icon: 'assets/img/icon-litere.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Limbi și Literaturi Română, Engleză, Franceză, Germană, Spaniolă. Traduceri, Predare, Studii Culturale.',
                ru: 'Языки и литературы: Румынский, Английский, Французский, Немецкий, Испанский. Переводы, Преподавание, Культурология.',
                en: 'Languages & Literature: Romanian, English, French, German, Spanish. Translation, Teaching, Cultural Studies.'
            },
            programs: [
                { ro: 'Limbi Moderne Aplicate (Licență)', ru: 'Прикладные языки (Бакалавриат)', en: 'Applied Modern Languages (Bachelor)' },
                { ro: 'Română - Engleză (Licență)', ru: 'Румынский - Английский (Бакалавриат)', en: 'Romanian - English (Bachelor)' },
                { ro: 'Traducere și Interpretare (Master)', ru: 'Перевод и Интерпретация (Магистратура)', en: 'Translation & Interpretation (Master)' }
            ],
            contact: { email: 'litere@usm.md', phone: '+373 22 244 251' },
            priceBase: 11000
        },
        {
            id: 'stiinte',
            name: { ro: 'Facultatea de Științe Exacte și Inginerie', ru: 'Факультет точных наук и инженерии', en: 'Faculty of Exact Sciences & Engineering' },
            short: { ro: 'Științe', ru: 'Точные науки', en: 'Sciences' },
            icon: 'assets/img/icon-stiinte.png',
            badge: { ro: 'Tehnic', ru: 'Технический', en: 'Technical' },
            desc: {
                ro: 'Matematică, Fizică, Chimie, Biologie, Inginerie Electromecanică. Laboratoare avansate și cercetare internațională.',
                ru: 'Математика, Физика, Химия, Биология, Электромеханическая инженерия. Продвинутые лаборатории и международная наука.',
                en: 'Mathematics, Physics, Chemistry, Biology, Electromechanical Engineering. Advanced labs and international research.'
            },
            programs: [
                { ro: 'Matematică (Licență)', ru: 'Математика (Бакалавриат)', en: 'Mathematics (Bachelor)' },
                { ro: 'Fizică (Licență)', ru: 'Физика (Бакалавриат)', en: 'Physics (Bachelor)' },
                { ro: 'Inginerie Electromecanică (Licență)', ru: 'Электромеханическая инженерия (Бакалавриат)', en: 'Electromechanical Engineering (Bachelor)' }
            ],
            contact: { email: 'stiinte@usm.md', phone: '+373 22 244 252' },
            priceBase: 14000
        },
        {
            id: 'medicina',
            name: { ro: 'Facultatea de Medicină și Farmacie', ru: 'Медицинско-фармацевтический факультет', en: 'Faculty of Medicine & Pharmacy' },
            short: { ro: 'Medicină', ru: 'Медицина', en: 'Medicine' },
            icon: 'assets/img/icon-medicina.png',
            badge: { ro: 'Medical', ru: 'Медицинский', en: 'Medical' },
            desc: {
                ro: 'Medicină Generală, Farmacie, Asistență Medicală Generală. Clinică universitară propriu-zisă și spitate universitare.',
                ru: 'Общая медицина, Фармация, Медсестринское дело. Собственная университетская клиника и больницы-базы.',
                en: 'General Medicine, Pharmacy, Nursing. Own university clinic and teaching hospitals.'
            },
            programs: [
                { ro: 'Medicină Generală (Licență, 6 ani)', ru: 'Общая медицина (Бакалавриат, 6 лет)', en: 'General Medicine (6 years)' },
                { ro: 'Farmacie (Licență, 5 ani)', ru: 'Фармация (Бакалавриат, 5 лет)', en: 'Pharmacy (5 years)' },
                { ro: 'Asistență Medicală (Licență)', ru: 'Медсестринское дело (Бакалавриат)', en: 'Nursing (Bachelor)' }
            ],
            contact: { email: 'medicina@usm.md', phone: '+373 22 244 253' },
            priceBase: 16000
        },
        {
            id: 'psihologie',
            name: { ro: 'Facultatea de Psihologie și Științe ale Educației', ru: 'Факультет психологии и наук об образовании', en: 'Faculty of Psychology & Education Sciences' },
            short: { ro: 'Psihologie', ru: 'Психология', en: 'Psychology' },
            icon: 'assets/img/icon-psihologie.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Psihologie, Pedagogie, Asistență Socială, Consiliere. Clinici de psihologie și centre de consiliere pentru comunitate.',
                ru: 'Психология, Педагогика, Социальная работа, Консультирование. Клиники психологии и центры консультирования.',
                en: 'Psychology, Pedagogy, Social Work, Counseling. Psychology clinics and community counseling centers.'
            },
            programs: [
                { ro: 'Psihologie (Licență)', ru: 'Психология (Бакалавриат)', en: 'Psychology (Bachelor)' },
                { ro: 'Pedagogie Preșcolară (Licență)', ru: 'Дошкольная педагогика (Бакалавриат)', en: 'Preschool Pedagogy (Bachelor)' },
                { ro: 'Consiliere Psihologică (Master)', ru: 'Психологическое консультирование (Магистратура)', en: 'Psychological Counseling (Master)' }
            ],
            contact: { email: 'psihologie@usm.md', phone: '+373 22 244 254' },
            priceBase: 11500
        },
        {
            id: 'istorie',
            name: { ro: 'Facultatea de Istorie și Filologie', ru: 'Историко-филологический факультет', en: 'Faculty of History & Philology' },
            short: { ro: 'Istorie', ru: 'История', en: 'History' },
            icon: 'assets/img/icon-istorie.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Istorie, Arheologie, Relații Internaționale, Studii Europene. Acces la arhive naționale și internaționale.',
                ru: 'История, Археология, Международные отношения, Европейские исследования. Доступ к национальным и международным архивам.',
                en: 'History, Archaeology, International Relations, European Studies. Access to national and international archives.'
            },
            programs: [
                { ro: 'Istorie (Licență)', ru: 'История (Бакалавриат)', en: 'History (Bachelor)' },
                { ro: 'Relații Internaționale (Licență)', ru: 'Международные отношения (Бакалавриат)', en: 'International Relations (Bachelor)' },
                { ro: 'Arheologie (Master)', ru: 'Археология (Магистратура)', en: 'Archaeology (Master)' }
            ],
            contact: { email: 'istorie@usm.md', phone: '+373 22 244 255' },
            priceBase: 10500
        },
        {
            id: 'sociologie',
            name: { ro: 'Facultatea de Sociologie și Asistență Socială', ru: 'Факультет социологии и социальной работы', en: 'Faculty of Sociology & Social Work' },
            short: { ro: 'Sociologie', ru: 'Социология', en: 'Sociology' },
            icon: 'assets/img/icon-sociologie.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Sociologie, Asistență Socială, Politici Publice, Studii de Gen. Practică de teren în ONG-uri și instituții publice.',
                ru: 'Социология, Социальная работа, Публичные политики, Гендерные исследования. Полевная практика в НПО и гос. учреждениях.',
                en: 'Sociology, Social Work, Public Policy, Gender Studies. Field practice in NGOs and public institutions.'
            },
            programs: [
                { ro: 'Sociologie (Licență)', ru: 'Социология (Бакалавриат)', en: 'Sociology (Bachelor)' },
                { ro: 'Asistență Socială (Licență)', ru: 'Социальная работа (Бакалавриат)', en: 'Social Work (Bachelor)' },
                { ro: 'Politici Publice (Master)', ru: 'Публичные политики (Магистратура)', en: 'Public Policy (Master)' }
            ],
            contact: { email: 'sociologie@usm.md', phone: '+373 22 244 256' },
            priceBase: 10000
        },
        {
            id: 'jurnalism',
            name: { ro: 'Facultatea de Jurnalism și Științe ale Comunicării', ru: 'Факультет журналистики и наук о коммуникации', en: 'Faculty of Journalism & Communication Sciences' },
            short: { ro: 'Jurnalism', ru: 'Журналистика', en: 'Journalism' },
            icon: 'assets/img/icon-jurnalism.png',
            badge: { ro: 'Umanist', ru: 'Гуманитарный', en: 'Humanities' },
            desc: {
                ro: 'Jurnalism, Relații Publice, Publicitate, Media Digitală. Studio-uri TV/Radio proprii și redacții practice.',
                ru: 'Журналистика, PR, Реклама, Цифровые медиа. Собственные TV/Радио студии и практические редакции.',
                en: 'Journalism, PR, Advertising, Digital Media. Own TV/Radio studios and practice newsrooms.'
            },
            programs: [
                { ro: 'Jurnalism (Licență)', ru: 'Журналистика (Бакалавриат)', en: 'Journalism (Bachelor)' },
                { ro: 'Relații Publice (Licență)', ru: 'Связи с общественностью (Бакалавриат)', en: 'Public Relations (Bachelor)' },
                { ro: 'Media Digitală (Master)', ru: 'Цифровые медиа (Магистратура)', en: 'Digital Media (Master)' }
            ],
            contact: { email: 'jurnalism@usm.md', phone: '+373 22 244 257' },
            priceBase: 11000
        },
        {
            id: 'arte',
            name: { ro: 'Facultatea de Arte Vizuale', ru: 'Факультет визуальных искусств', en: 'Faculty of Visual Arts' },
            short: { ro: 'Arte', ru: 'Искусства', en: 'Arts' },
            icon: 'assets/img/icon-arte.png',
            badge: { ro: 'Artistic', ru: 'Художественный', en: 'Artistic' },
            desc: {
                ro: 'Pictură, Sculptură, Design Grafic, Artă Monumentală. Ateliere profesionale și expoziții în galerii internaționale.',
                ru: 'Живопись, Скульптура, Графический дизайн, Монументальное искусство. Профессиональные мастерские и выставки.',
                en: 'Painting, Sculpture, Graphic Design, Monumental Art. Professional workshops and international gallery exhibitions.'
            },
            programs: [
                { ro: 'Pictură (Licență)', ru: 'Живопись (Бакалавриат)', en: 'Painting (Bachelor)' },
                { ro: 'Design Grafic (Licență)', ru: 'Графический дизайн (Бакалавриат)', en: 'Graphic Design (Bachelor)' },
                { ro: 'Artă Monumentală (Master)', ru: 'Монументальное искусство (Магистратура)', en: 'Monumental Art (Master)' }
            ],
            contact: { email: 'arte@usm.md', phone: '+373 22 244 258' },
            priceBase: 12000
        }
    ];

    // Institute data
    const INSTITUTES_DATA = [
        {
            id: 'matematica',
            name: { ro: 'Institutul de Matematică și Informatică', ru: 'Институт математики и информатики', en: 'Institute of Mathematics and Informatics' },
            icon: 'assets/img/icon-institute-mathematics.png',
            desc: { ro: 'Cercetare fundamentală și aplicată în matematică, informatică teoretică, criptografie.', ru: 'Фундаментальные и прикладные исследования в математике, теоретической информатике, криптографии.', en: 'Fundamental and applied research in mathematics, theoretical computer science, cryptography.' }
        },
        {
            id: 'fizica',
            name: { ro: 'Institutul de Fizică', ru: 'Институт физики', en: 'Institute of Physics' },
            icon: 'assets/img/icon-institute-physics.png',
            desc: { ro: 'Fizică a materiilor condensate, optică, laseri, nanotehnologii, energii regenerabile.', ru: 'Физика конденсированного состояния, оптика, лазеры, нанотехнологии, возобновляемая энергия.', en: 'Condensed matter physics, optics, lasers, nanotechnologies, renewable energy.' }
        },
        {
            id: 'chimie',
            name: { ro: 'Institutul de Chimie', ru: 'Институт химии', en: 'Institute of Chemistry' },
            icon: 'assets/img/icon-institute-chemistry.png',
            desc: { ro: 'Chimie anorganică, organică, fizică, analitică, materialelor, cataliză.', ru: 'Неорганическая, органическая, физическая, аналитическая химия, химия материалов, катализ.', en: 'Inorganic, organic, physical, analytical chemistry, materials chemistry, catalysis.' }
        },
        {
            id: 'biologie',
            name: { ro: 'Institutul de Zoologie', ru: 'Институт зоологии', en: 'Institute of Zoology' },
            icon: 'assets/img/icon-institute-zoology.png',
            desc: { ro: 'Biodiversitate, ecologie, protecția natură, faunistică, monitorizare mediului.', ru: 'Биоразнообразие, экология, охрана природы, фаунистика, мониторинг среды.', en: 'Biodiversity, ecology, nature conservation, faunistics, environmental monitoring.' }
        },
        {
            id: 'istorie-inst',
            name: { ro: 'Institutul de Istorie', ru: 'Институт истории', en: 'Institute of History' },
            icon: 'assets/img/icon-institute-history.png',
            desc: { ro: 'Istoria Moldovei, arhive, manuscrise, arheologie medievală, studii feudale.', ru: 'История Молдовы, архивы, рукописи, средневековая археология, феодальные исследования.', en: 'History of Moldova, archives, manuscripts, medieval archaeology, feudal studies.' }
        },
        {
            id: 'juridic',
            name: { ro: 'Institutul de Studii Juridice', ru: 'Институт правовых исследований', en: 'Institute of Legal Studies' },
            icon: 'assets/img/icon-institute-legal.png',
            desc: { ro: 'Drept constituțional, internațional, european, drepturile omului, armonizare legislativă.', ru: 'Конституционное, международное, европейское право, права человека, законодательная гармонизация.', en: 'Constitutional, international, European law, human rights, legislative harmonization.' }
        }
    ];

    // Student life data
    const STUDENT_LIFE_DATA = [
        {
            id: 'camine',
            title: { ro: 'Cămine Moderne', ru: 'Современные общежития', en: 'Modern Dormitories' },
            desc: { ro: '16 cămine cu Wi-Fi gigabit, săli de studiu, bucătării, spălătorii, pază 24/7. Capacitate 5000+ locuri.', ru: '16 общежитий с гигабитным Wi-Fi, учебными залами, кухнями, прачечными, охраной 24/7. Вместимость 5000+ мест.', en: '16 dorms with gigabit Wi-Fi, study halls, kitchens, laundry, 24/7 security. 5000+ capacity.' },
            img: 'assets/img/campus-dorm.jpg'
        },
        {
            id: 'sport',
            title: { ro: 'Sport & Timp Liber', ru: 'Спорт и Досуг', en: 'Sports & Recreation' },
            desc: { ro: 'Complex sportiv cu piscină, săli fitness, terenuri tenis, fotbal, baschet. Echipe USM în campionate naționale.', ru: 'Спорткомплекс с бассейном, фитнес-залами, кортами для тенниса, футбола, баскетбола. Команды УГМ в национальных лигах.', en: 'Sports complex with pool, gyms, tennis, football, basketball courts. USM teams in national leagues.' },
            img: 'assets/img/campus-sport.jpg'
        },
        {
            id: 'cultura',
            title: { ro: 'Cultură & Evenimente', ru: 'Культура и События', en: 'Culture & Events' },
            desc: { ro: 'Festivaluri studențești, serii culturale, teatru, coruri, fanfare, concursuri internaționale.', ru: 'Студенческие фестивали, культурные вечера, театр, хоры, духовой оркестр, международные конкурсы.', en: 'Student festivals, cultural evenings, theater, choirs, brass band, international competitions.' },
            img: 'assets/img/campus-culture.jpg'
        },
        {
            id: 'organizatii',
            title: { ro: 'Organizații Studențești', ru: 'Студенческие организации', en: 'Student Organizations' },
            desc: { ro: 'Liga Studenților USM, AIESEC, ELSA, BEST, organizații pe facultăți. Voluntariat, leadership, networking.', ru: 'Лига студентов УГМ, AIESEC, ELSA, BEST, факультетские организации. Волонтерство, лидерство, нетворкинг.', en: 'USM Student League, AIESEC, ELSA, BEST, faculty orgs. Volunteering, leadership, networking.' },
            img: 'assets/img/campus-org.jpg'
        }
    ];

    // News data
    const NEWS_DATA = [
        {
            id: 'news1',
            date: '2026-01-15',
            title: { ro: 'Încep înscrierile pentru Admiterea 2026', ru: 'Начался прием документов на Поступление 2026', en: 'Admissions 2026 Applications Open' },
            excerpt: { ro: 'De la 15 ianuarie pot fi depuse dosarele online pe platforma admitere.usm.md pentru toate programele de Licență și Masterat.', ru: 'С 15 января можно подавать документы онлайн на admitere.usm.md для всех программ бакалавриата и магистратуры.', en: 'From Jan 15, applications can be submitted online at admitere.usm.md for all Bachelor and Master programs.' },
            img: 'assets/img/news-admitere.jpg',
            link: 'https://admitere.usm.md'
        },
        {
            id: 'news2',
            date: '2026-02-10',
            title: { ro: 'USM — pe locul 1 în topul universităților din Moldova', ru: 'УГМ — на 1-м месте в рейтинге вузов Молдовы', en: 'USM Ranked #1 in Moldova' },
            excerpt: { ro: 'Conform ranking-ului ARACIS 2026, USM menține lideratul cu scor maxim pentru calitatea educației și cercetării.', ru: 'По рейтингу АРАЦИС 2026 УГМ сохраняет лидерство с максимальным баллом за качество образования и науки.', en: 'Per ARACIS 2026 ranking, USM maintains leadership with max score for education and research quality.' },
            img: 'assets/img/news-ranking.jpg',
            link: '#'
        },
        {
            id: 'news3',
            date: '2026-03-01',
            title: { ro: 'Nouă laborator de Inteligență Artificială la Facultatea de Informatică', ru: 'Новая лаборатория ИИ на Факультете информатики', en: 'New AI Lab at Faculty of Informatics' },
            excerpt: { ro: 'Laboratorul este echipat cu servere GPU de ultimă generație și va găzdui proiecte de cercetare în parteneriat cu companii tech globale.', ru: 'Лаборатория оснащена серверами GPU последнего поколения и будет проводить исследования в партнерстве с глобальными tech-компаниями.', en: 'The lab features latest-gen GPU servers and will host research projects with global tech partners.' },
            img: 'assets/img/news-ai-lab.jpg',
            link: '#'
        },
        {
            id: 'news4',
            date: '2026-03-20',
            title: { ro: 'Erasmus+: 50 de bursieri USM pleacă în Europa acest vară', ru: 'Erasmus+: 50 студентов УГМ едут в Европу этим летом', en: 'Erasmus+: 50 USM Students Go to Europe This Summer' },
            excerpt: { ro: 'Studenții vor face mobilități de studiu și practică în universități din Germania, Franța, Italia, Spania și Olanda.', ru: 'Студенты пройдут академическую мобильность и практику в ВУЗах Германии, Франции, Италии, Испании и Нидерландов.', en: 'Students will do study and traineeship mobilities at universities in Germany, France, Italy, Spain, Netherlands.' },
            img: 'assets/img/news-erasmus.jpg',
            link: '#'
        }
    ];

    // Timeline data
    const TIMELINE_DATA = [
        { year: '1946', title: { ro: 'Fondarea USM', ru: 'Основание УГМ', en: 'USM Founded' }, desc: { ro: 'Universitatea de Stat din Moldova este fondată prin Decretul Consiliului Miniștrilor al RSSM.', ru: 'Государственный университет Молдовы основан Указом Совета Министров МССР.', en: 'Moldova State University founded by Decree of the Council of Ministers of the MSSR.' } },
        { year: '1950', title: { ro: 'Primele Facultăți', ru: 'Первые факультеты', en: 'First Faculties' }, desc: { ro: 'Se deschid primele 5 facultăți: Fizică-Matematică, Istorie-Filologie, Biologie-Științe Agricole, Medicină, Drept.', ru: 'Открываются первые 5 факультетов: Физматех, Историко-филологический, Биолого-сельхоз, Мед, Юридический.', en: 'First 5 faculties open: Physics-Math, History-Philology, Bio-Agri, Medicine, Law.' } },
        { year: '1970', title: { ro: 'Expansiune & Cercetare', ru: 'Экспансия и Наука', en: 'Expansion & Research' }, desc: { ro: 'Se înființează institutele de cercetare: Matematică, Fizică, Chimie, Biologie, Istorie, Studii Juridice.', ru: 'Создаются НИИ: Математики, Физики, Химии, Биологии, Истории, Правовых исследований.', en: 'Research institutes established: Mathematics, Physics, Chemistry, Biology, History, Legal Studies.' } },
        { year: '1991', title: { ro: 'Independența & Reformă', ru: 'Независимость и Реформы', en: 'Independence & Reform' }, desc: { ro: 'După independența Republicii Moldova, USM trece la sistemul Bologna, introduce creditele ECTS.', ru: 'После независимости Молдовы УГМ переходит на Болонскую систему, внедряет кредиты ЕКТС.', en: 'After Moldova independence, USM adopts Bologna system, introduces ECTS credits.' } },
        { year: '2005', title: { ro: 'Acreditare ARACIS', ru: 'Аккредитация АРАЦИС', en: 'ARACIS Accreditation' }, desc: { ro: 'USM obține acreditare instituțională de la ARACIS, confirmată ulterior cu Clasa A (cel mai înalt grad).', ru: 'УГМ получает институциональную аккредитацию АРАЦИС, затем подтвержденную Классом А (высший уровень).', en: 'USM receives institutional accreditation from ARACIS, later confirmed with Class A (highest grade).' } },
        { year: '2020', title: { ro: 'Digitalizare & Pandemie', ru: 'Цифровизация и Пандемия', en: 'Digitalization & Pandemic' }, desc: { ro: 'Trecerea rapidă la educație online, platforma Microsoft 365 pentru toți studenții, examinări digitale.', ru: 'Быстрый переход на онлайн-обучение, Microsoft 365 для всех студентов, цифровые экзамены.', en: 'Rapid shift to online education, Microsoft 365 for all students, digital exams.' } },
        { year: '2026', title: { ro: '80 de Ani USM', ru: '80 лет УГМ', en: '80 Years of USM' }, desc: { ro: 'Aniversarea a 80-a: 11 facultăți, 14000+ studenți, 200+ medalii internaționale, parteneriate în 40+ țări.', ru: '80-летие: 11 факультетов, 14000+ студентов, 200+ международных медалей, партнерства в 40+ странах.', en: '80th anniversary: 11 faculties, 14000+ students, 200+ intl medals, partnerships in 40+ countries.' } }
    ];

    // Translations dictionary
    const TRANSLATIONS = {
        ro: {
            // Navigation
            'nav.subtitle': 'Universitatea de Stat din Moldova',
            'nav.history': 'Istorie',
            'nav.faculties': 'Facultăți',
            'nav.institutes': 'Institute',
            'nav.campus': 'Campus',
            'nav.tour360': 'Tur 360°',
            'nav.faq': 'FAQ',
            'nav.admission': 'Admitere 2026',
            // Hero
            'hero.badge': 'Universitate Națională de Top',
            'hero.title': 'Universitatea de Stat din Moldova',
            'hero.subtitle': 'Tradiție, Excelentă, Viitor. Învață de la cei mai buni și construiește carierea de care visezi.',
            'hero.btnFaculties': 'Explorează Facultățile',
            'hero.btnAdmission': 'Admitere 2026',
            // Stats
            'stats.students.label': 'Studenți',
            'stats.faculties.label': 'Facultăți',
            'stats.medals.label': 'Medalii',
            // History
            'history.subtitle': 'Istoric',
            'history.title': '1946 – 2026: 80 de ani de Excelentă',
            // Faculties
            'faculties.subtitle': 'Ofertă Academică',
            'faculties.title': 'Facultățile USM',
            'faculties.searchPlaceholder': 'Caută facultate, program, departament...',
            // Institutes
            'institutes.subtitle': 'Cercetare',
            'institutes.title': 'Institutele de Cercetare',
            // Campus
            'campus.subtitle': 'Viața de Student',
            'campus.title': 'Campus & Viața Studențească',
            // Map
            'map.subtitle': 'Locație',
            'map.title': 'Locația Campușilor',
            'map.infoTitle': 'Două Campuși Moderni',
            'map.infoDesc': 'USM dispune de două campuși principaluri în Chișinău, echipați cu laboratoare de ultimă generație, biblioteci, cămine și complexe sportive.',
            'map.campus1.title': 'Campusul Mateevici (Central)',
            'map.campus1.desc': 'Blocul 1, str. Alexei Mateevici 60 — Rectorat, Facultăți umaniste, Cămine',
            'map.campus2.title': 'Campusul Râșcani (Tehnic)',
            'map.campus2.desc': 'str. Alexei Mateevici 60/1 — Facultăți tehnice, Laboratoare, Centru de Calcul',
            // Tour 360
            'tour360.subtitle': 'Experiență Immersivă',
            'tour360.title': 'Tur Virtual 360°',
            'tour360.btn': 'Deschide Turul 360°',
            // Admission
            'admission.subtitle': 'Admitere 2026',
            'admission.title': 'Admitere & Calculator Taxe',
            'admission.infoTitle': 'Înscrie-te la USM în 2026',
            'admission.infoDesc': 'Universitatea de Stat din Moldova oferă programe de Licență, Masterat și Doctorat în 11 domenii fundamentale. Admiterea se desfășoară pe bază de concurs, conform calendarului aprobat de Ministerul Educației și Cercetării.',
            'admission.step1': 'Creează cont pe admitere.usm.md',
            'admission.step2': 'Completează dosarul online',
            'admission.step3': 'Depune acte la comisie',
            'admission.step4': 'Așteaptă rezultatele',
            'admission.calcTitle': 'Calculator Taxă Anuală',
            'admission.calcFaculty': 'Domeniu de Studii',
            'admission.calcCycle': 'Ciclul de Studii',
            'admission.calcForm': 'Forma de Învățământ',
            'admission.calcNote': '* Taxa orientativă. Sumă finală confirmată la înscriere.',
            'admission.faculty.informatica': 'Informatică',
            'admission.faculty.drept': 'Drept',
            'admission.faculty.economic': 'Științe Economice',
            'admission.faculty.litere': 'Litere',
            'admission.faculty.stiinte': 'Științe Exacte',
            'admission.faculty.medicina': 'Medicină',
            'admission.cycle.licenta': 'Licență (Ciclul I)',
            'admission.cycle.master': 'Masterat (Ciclul II)',
            'admission.cycle.doctorat': 'Doctorat (Ciclul III)',
            'admission.form.zi': 'Frecvență Zi',
            'admission.form.reduced': 'Frecvență Redusă',
            'admission.form.id': 'Învățământ la Distanță (ID)',
            // News
            'news.subtitle': 'Actualități',
            'news.title': 'Noutăți & Evenimente',
            // Modal
            'modal.tab.about': 'Despre',
            'modal.tab.programs': 'Programe',
            'modal.tab.contact': 'Contact',
            'modal.keyFacts': 'Informații Cheie',
            'modal.faculty': 'Facultate',
            'modal.category': 'Categorie',
            'modal.basePrice': 'Taxă de bază',
            'modal.studyPrograms': 'Programe de Studii',
            'modal.contactInfo': 'Informații de Contact',
            'modal.address': 'Adresă',
            // Faculties
            'faculties.filterAll': 'Toate',
            'faculties.viewPrograms': 'Vezi programe',
            // News
            'news.readMore': 'Citește mai mult',
            // Footer
            'footer.about': 'Despre USM',
            'footer.aboutDesc': 'Universitatea de Stat din Moldova este prima instituție de învățământ superior din republică, fondată în 1946. Acreditare ARACIS Clasa A.',
            'footer.links': 'Link-uri Utile',
            'footer.admission': 'Portal Admitere 2026',
            'footer.faculties': 'Facultățile USM',
            'footer.faq': 'Centrul de Asistență FAQ',
            'footer.microsoft': 'Microsoft 365',
            'footer.contact': 'Contacte & Adresă',
            'footer.address': 'Str. Alexei Mateevici 60, Chișinău, MD-2009<br>Republica Moldova<br>Tel: +373 22 244 248<br>Email: rectorat@usm.md',
            'footer.copyright': '© 2026 Universitatea de Stat din Moldova. Toate drepturile rezervate.',
            // Back to top
            'backToTop': 'Înapoi sus'
        },
        ru: {
            'nav.subtitle': 'Государственный университет Молдовы',
            'nav.history': 'История',
            'nav.faculties': 'Факультеты',
            'nav.institutes': 'Институты',
            'nav.campus': 'Кампус',
            'nav.tour360': 'Тур 360°',
            'nav.faq': 'FAQ',
            'nav.admission': 'Поступление 2026',
            'hero.badge': 'Национальный ТОП-университет',
            'hero.title': 'Государственный университет Молдовы',
            'hero.subtitle': 'Традиции, Совершенство, Будущее. Учись у лучших и строь карьеру своей мечты.',
            'hero.btnFaculties': 'Изучить факультеты',
            'hero.btnAdmission': 'Поступление 2026',
            'stats.students.label': 'Студенты',
            'stats.faculties.label': 'Факультеты',
            'stats.medals.label': 'Медали',
            'history.subtitle': 'История',
            'history.title': '1946 – 2026: 80 лет Совершенства',
            'faculties.subtitle': 'Академическое предложение',
            'faculties.title': 'Факультеты УГМ',
            'faculties.searchPlaceholder': 'Поиск факультета, программы, кафедры...',
            'institutes.subtitle': 'Наука',
            'institutes.title': 'Научно-исследовательские институты',
            'campus.subtitle': 'Студенческая жизнь',
            'campus.title': 'Кампус и Жизнь',
            'map.subtitle': 'Локация',
            'map.title': 'Локация кампусов',
            'map.infoTitle': 'Два современных кампуса',
            'map.infoDesc': 'УГМ располагает двумя основными кампусами в Кишиневе, оборудованными современными лабораториями, библиотеками, общежитиями и спорткомплексами.',
            'map.campus1.title': 'Кампус Матеевичи (Центральный)',
            'map.campus1.desc': 'Блок 1, ул. Алексее Матеевичи 60 — Ректорат, гуманитарные факультеты, Общежития',
            'map.campus2.title': 'Кампус Рэшканы (Технический)',
            'map.campus2.desc': 'ул. Алексее Матеевичи 60/1 — Технические факультеты, Лаборатории, Вычислительный центр',
            'tour360.subtitle': 'Иммерсивный опыт',
            'tour360.title': 'Виртуальный тур 360°',
            'tour360.btn': 'Открыть тур 360°',
            'admission.subtitle': 'Поступление 2026',
            'admission.title': 'Поступление и Калькулятор платы',
            'admission.infoTitle': 'Поступи в УГМ в 2026',
            'admission.infoDesc': 'Государственный университет Молдовы предлагает программы бакалавриата, магистратуры и докторантуры в 11 фундаментальных областях. Поступление проходит конкурсно по календарю, утвержденному Министерством образования и исследований.',
            'admission.step1': 'Создай аккаунт на admitere.usm.md',
            'admission.step2': 'Заполни заявку онлайн',
            'admission.step3': 'Сдай документы в комиссию',
            'admission.step4': 'Дождись результатов',
            'admission.calcTitle': 'Калькулятор годовой платы',
            'admission.calcFaculty': 'Область обучения',
            'admission.calcCycle': 'Цикл обучения',
            'admission.calcForm': 'Форма обучения',
            'admission.calcNote': '* Ориентировочная плата. Итоговая сумма подтверждается при зачислении.',
            'admission.faculty.informatica': 'Информатика',
            'admission.faculty.drept': 'Юриспруденция',
            'admission.faculty.economic': 'Экономические науки',
            'admission.faculty.litere': 'Филология',
            'admission.faculty.stiinte': 'Точные науки',
            'admission.faculty.medicina': 'Медицина',
            'admission.cycle.licenta': 'Бакалавриат (Цикл I)',
            'admission.cycle.master': 'Магистратура (Цикл II)',
            'admission.cycle.doctorat': 'Докторантура (Цикл III)',
            'admission.form.zi': 'Очная форма',
            'admission.form.reduced': 'Заочная форма',
            'admission.form.id': 'Дистанционное обучение (ID)',
            'news.subtitle': 'Актуальности',
            'news.title': 'Новости и События',
            'modal.tab.about': 'О факультете',
            'modal.tab.programs': 'Программы',
            'modal.tab.contact': 'Контакты',
            'modal.keyFacts': 'Ключевые факты',
            'modal.faculty': 'Факультет',
            'modal.category': 'Категория',
            'modal.basePrice': 'Базовая плата',
            'modal.studyPrograms': 'Учебные программы',
            'modal.contactInfo': 'Контактная информация',
            'modal.address': 'Адрес',
            // Faculties
            'faculties.filterAll': 'Все',
            'faculties.viewPrograms': 'Смотреть программы',
            // News
            'news.readMore': 'Читать далее',
            'footer.about': 'Об УГМ',
            'footer.aboutDesc': 'Государственный университет Молдовы — первый вуз Республики, основанный в 1946 г. Аккредитация АРАЦИС Класс А.',
            'footer.links': 'Полезные ссылки',
            'footer.admission': 'Портал Поступления 2026',
            'footer.faculties': 'Факультеты УГМ',
            'footer.faq': 'Центр помощи FAQ',
            'footer.microsoft': 'Microsoft 365',
            'footer.contact': 'Контакты и Адрес',
            'footer.address': 'ул. Алексее Матеевичи 60, Кишинёв, MD-2009<br>Республика Молдова<br>Тел: +373 22 244 248<br>Email: rectorat@usm.md',
            'footer.copyright': '© 2026 Государственный университет Молдовы. Все права защищены.',
            'backToTop': 'Наверх'
        },
        en: {
            'nav.subtitle': 'Moldova State University',
            'nav.history': 'History',
            'nav.faculties': 'Faculties',
            'nav.institutes': 'Institutes',
            'nav.campus': 'Campus',
            'nav.tour360': '360° Tour',
            'nav.faq': 'FAQ',
            'nav.admission': 'Admission 2026',
            'hero.badge': 'Top National University',
            'hero.title': 'Moldova State University',
            'hero.subtitle': 'Tradition, Excellence, Future. Learn from the best and build the career of your dreams.',
            'hero.btnFaculties': 'Explore Faculties',
            'hero.btnAdmission': 'Admission 2026',
            'stats.students.label': 'Students',
            'stats.faculties.label': 'Faculties',
            'stats.medals.label': 'Medals',
            'history.subtitle': 'History',
            'history.title': '1946 – 2026: 80 Years of Excellence',
            'faculties.subtitle': 'Academic Offer',
            'faculties.title': 'USM Faculties',
            'faculties.searchPlaceholder': 'Search faculty, program, department...',
            'institutes.subtitle': 'Research',
            'institutes.title': 'Research Institutes',
            'campus.subtitle': 'Student Life',
            'campus.title': 'Campus & Student Life',
            'map.subtitle': 'Location',
            'map.title': 'Campus Locations',
            'map.infoTitle': 'Two Modern Campuses',
            'map.infoDesc': 'USM has two main campuses in Chișinău, equipped with state-of-the-art labs, libraries, dormitories, and sports complexes.',
            'map.campus1.title': 'Mateevici Campus (Central)',
            'map.campus1.desc': 'Block 1, 60 Alexei Mateevici St — Rectorate, Humanities Faculties, Dormitories',
            'map.campus2.title': 'Râșcani Campus (Technical)',
            'map.campus2.desc': '60/1 Alexei Mateevici St — Technical Faculties, Labs, Computing Center',
            'tour360.subtitle': 'Immersive Experience',
            'tour360.title': 'Virtual 360° Tour',
            'tour360.btn': 'Open 360° Tour',
            'admission.subtitle': 'Admission 2026',
            'admission.title': 'Admission & Fee Calculator',
            'admission.infoTitle': 'Apply to USM in 2026',
            'admission.infoDesc': 'Moldova State University offers Bachelor, Master, and PhD programs in 11 fundamental fields. Admission is competitive, per the calendar approved by the Ministry of Education and Research.',
            'admission.step1': 'Create account on admitere.usm.md',
            'admission.step2': 'Complete online application',
            'admission.step3': 'Submit documents to commission',
            'admission.step4': 'Wait for results',
            'admission.calcTitle': 'Annual Fee Calculator',
            'admission.calcFaculty': 'Field of Study',
            'admission.calcCycle': 'Study Cycle',
            'admission.calcForm': 'Study Mode',
            'admission.calcNote': '* Estimated fee. Final amount confirmed at enrollment.',
            'admission.faculty.informatica': 'Informatics',
            'admission.faculty.drept': 'Law',
            'admission.faculty.economic': 'Economic Sciences',
            'admission.faculty.litere': 'Letters',
            'admission.faculty.stiinte': 'Exact Sciences',
            'admission.faculty.medicina': 'Medicine',
            'admission.cycle.licenta': 'Bachelor (Cycle I)',
            'admission.cycle.master': 'Master (Cycle II)',
            'admission.cycle.doctorat': 'PhD (Cycle III)',
            'admission.form.zi': 'Full-time',
            'admission.form.reduced': 'Part-time',
            'admission.form.id': 'Distance Learning (ID)',
            'news.subtitle': 'News',
            'news.title': 'News & Events',
            'modal.tab.about': 'About',
            'modal.tab.programs': 'Programs',
            'modal.tab.contact': 'Contact',
            'modal.keyFacts': 'Key Facts',
            'modal.faculty': 'Faculty',
            'modal.category': 'Category',
            'modal.basePrice': 'Base tuition',
            'modal.studyPrograms': 'Study Programs',
            'modal.contactInfo': 'Contact Information',
            'modal.address': 'Address',
            // Faculties
            'faculties.filterAll': 'All',
            'faculties.viewPrograms': 'View programs',
            // News
            'news.readMore': 'Read more',
            'footer.about': 'About USM',
            'footer.aboutDesc': 'Moldova State University is the first higher education institution in the country, founded in 1946. ARACIS Class A Accreditation.',
            'footer.links': 'Useful Links',
            'footer.admission': 'Admission Portal 2026',
            'footer.faculties': 'USM Faculties',
            'footer.faq': 'FAQ Support Center',
            'footer.microsoft': 'Microsoft 365',
            'footer.contact': 'Contacts & Address',
            'footer.address': '60 Alexei Mateevici St, Chișinău, MD-2009<br>Republic of Moldova<br>Tel: +373 22 244 248<br>Email: rectorat@usm.md',
            'footer.copyright': '© 2026 Moldova State University. All rights reserved.',
            'backToTop': 'Back to Top'
        }
    };

    // =========================================================================
    // UTILITY FUNCTIONS
    // =========================================================================

    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    const getLang = () => {
        try {
            return document.documentElement.lang || localStorage.getItem('usm-lang') || CONFIG.defaultLang;
        } catch (e) {
            return CONFIG.defaultLang;
        }
    };

    const setLang = (lang) => {
        try {
            if (!CONFIG.supportedLangs.includes(lang)) lang = CONFIG.defaultLang;
            document.documentElement.lang = lang;
            localStorage.setItem('usm-lang', lang);
            applyTranslations(lang);
            updateLangButtons(lang);
        } catch (e) {
            console.error('[i18n] setLang error:', e);
        }
    };

    const t = (key, lang = getLang()) => {
        try {
            return TRANSLATIONS[lang]?.[key] || TRANSLATIONS[CONFIG.defaultLang]?.[key] || key;
        } catch (e) {
            return key;
        }
    };

    const applyTranslations = (lang) => {
        try {
            // Elements with data-i18n
            $$('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translation = t(key, lang);
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('data-i18n-placeholder')) {
                        el.placeholder = translation;
                    } else {
                        el.value = translation;
                    }
                } else {
                    el.innerHTML = translation;
                }
            });

            // Elements with data-i18n-placeholder only
            $$('[data-i18n-placeholder]:not([data-i18n])').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.placeholder = t(key, lang);
            });

            // Faculty cards - update dynamic content
            updateFacultyCardsLanguage(lang);

            // Update calculator options
            updateCalculatorOptionsLanguage(lang);

            // Update filter buttons
            updateFilterButtonsLanguage(lang);

            // Update timeline
            updateTimelineLanguage(lang);

            // Update institutes
            updateInstitutesLanguage(lang);

            // Update student life
            updateStudentLifeLanguage(lang);

            // Update news
            updateNewsLanguage(lang);

            // Update modal if open
            updateModalLanguage(lang);
        } catch (e) {
            console.error('[i18n] applyTranslations error:', e);
        }
    };

    const updateLangButtons = (lang) => {
        try {
            $$('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        } catch (e) {
            console.error('[i18n] updateLangButtons error:', e);
        }
    };

    const formatNumber = (num) => {
        try {
            return new Intl.NumberFormat(getLang()).format(num);
        } catch (e) {
            return String(num);
        }
    };

    // =========================================================================
    // LANGUAGE SPECIFIC UPDATES
    // =========================================================================

    const updateFacultyCardsLanguage = (lang) => {
        try {
            FACULTIES_DATA.forEach(faculty => {
                const card = $(`[data-faculty-id="${faculty.id}"]`);
                if (!card) return;

                const titleEl = $('.faculty-title', card);
                const descEl = $('.faculty-desc', card);
                const badgeEl = $('.faculty-badge', card);
                const linkEl = $('.faculty-link', card);

                if (titleEl) titleEl.textContent = faculty.name[lang] || faculty.name.ro;
                if (descEl) descEl.textContent = faculty.desc[lang] || faculty.desc.ro;
                if (badgeEl) badgeEl.textContent = faculty.badge[lang] || faculty.badge.ro;
                if (linkEl) {
                    const linkText = { ro: 'Vezi programe', ru: 'Смотреть программы', en: 'View programs' };
                    linkEl.childNodes[0].textContent = linkText[lang] || linkText.ro;
                }
            });
        } catch (e) {
            console.error('[i18n] updateFacultyCardsLanguage error:', e);
        }
    };

    const updateCalculatorOptionsLanguage = (lang) => {
        try {
            // Faculty options
            $$('#calc-faculty option').forEach(opt => {
                const key = opt.getAttribute('data-i18n');
                if (key) opt.textContent = t(key, lang);
            });
            // Cycle options
            $$('#calc-cycle option').forEach(opt => {
                const key = opt.getAttribute('data-i18n');
                if (key) opt.textContent = t(key, lang);
            });
            // Form options
            $$('#calc-form option').forEach(opt => {
                const key = opt.getAttribute('data-i18n');
                if (key) opt.textContent = t(key, lang);
            });
        } catch (e) {
            console.error('[i18n] updateCalculatorOptionsLanguage error:', e);
        }
    };

    const updateFilterButtonsLanguage = (lang) => {
        try {
            $$('.filter-btn[data-faculty]').forEach(btn => {
                const facultyId = btn.getAttribute('data-faculty');
                if (facultyId === 'all') {
                    btn.textContent = t('faculties.filterAll', lang) || (lang === 'ro' ? 'Toate' : lang === 'ru' ? 'Все' : 'All');
                } else {
                    const faculty = FACULTIES_DATA.find(f => f.id === facultyId);
                    if (faculty) btn.textContent = faculty.short[lang] || faculty.short.ro;
                }
            });
        } catch (e) {
            console.error('[i18n] updateFilterButtonsLanguage error:', e);
        }
    };

    const updateTimelineLanguage = (lang) => {
        try {
            const container = $('#timeline-track');
            if (!container) return;
            container.innerHTML = '';
            TIMELINE_DATA.forEach((item, idx) => {
                const div = document.createElement('div');
                div.className = 'timeline-item';
                div.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-box">
                        <div class="timeline-year">${item.year}</div>
                        <div class="timeline-title">${item.title[lang] || item.title.ro}</div>
                        <div class="timeline-desc">${item.desc[lang] || item.desc.ro}</div>
                    </div>
                `;
                container.appendChild(div);
            });
        } catch (e) {
            console.error('[i18n] updateTimelineLanguage error:', e);
        }
    };

    const updateInstitutesLanguage = (lang) => {
        try {
            const container = $('#institutes-grid');
            if (!container) return;
            container.innerHTML = '';
            INSTITUTES_DATA.forEach(inst => {
                const div = document.createElement('div');
                div.className = 'institute-card';
                div.innerHTML = `
                    <img src="${inst.icon}" alt="" class="institute-icon" onerror="this.style.display='none'">
                    <h3 class="institute-title">${inst.name[lang] || inst.name.ro}</h3>
                    <p class="institute-desc">${inst.desc[lang] || inst.desc.ro}</p>
                `;
                container.appendChild(div);
            });
        } catch (e) {
            console.error('[i18n] updateInstitutesLanguage error:', e);
        }
    };

    const updateStudentLifeLanguage = (lang) => {
        try {
            const container = $('#student-grid');
            if (!container) return;
            container.innerHTML = '';
            STUDENT_LIFE_DATA.forEach(item => {
                const div = document.createElement('div');
                div.className = 'student-card';
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.title[lang] || item.title.ro}" onerror="this.style.display='none'">
                    <div class="student-overlay">
                        <h3 class="student-title">${item.title[lang] || item.title.ro}</h3>
                        <p class="student-desc">${item.desc[lang] || item.desc.ro}</p>
                    </div>
                `;
                container.appendChild(div);
            });
        } catch (e) {
            console.error('[i18n] updateStudentLifeLanguage error:', e);
        }
    };

    const updateNewsLanguage = (lang) => {
        try {
            const container = $('#news-grid');
            if (!container) return;
            container.innerHTML = '';
            NEWS_DATA.forEach(item => {
                const div = document.createElement('article');
                div.className = 'news-card';
                div.innerHTML = `
                    <div class="news-img-wrap">
                        <img src="${item.img}" alt="${item.title[lang] || item.title.ro}" onerror="this.style.display='none'">
                        <span class="news-date">${formatDate(item.date, lang)}</span>
                    </div>
                    <div class="news-content">
                        <h3 class="news-title">${item.title[lang] || item.title.ro}</h3>
                        <p class="news-excerpt">${item.excerpt[lang] || item.excerpt.ro}</p>
                        <a href="${item.link}" class="btn-secondary" target="_blank" rel="noopener">
                            ${t('news.readMore', lang) || (lang === 'ro' ? 'Citește mai mult' : lang === 'ru' ? 'Читать далее' : 'Read more')}
                        </a>
                    </div>
                `;
                container.appendChild(div);
            });
        } catch (e) {
            console.error('[i18n] updateNewsLanguage error:', e);
        }
    };

    const formatDate = (dateStr, lang) => {
        try {
            const date = new Date(dateStr + 'T00:00:00');
            return new Intl.DateTimeFormat(lang === 'ro' ? 'ro-RO' : lang === 'ru' ? 'ru-RU' : 'en-US', {
                day: 'numeric', month: 'long', year: 'numeric'
            }).format(date);
        } catch (e) {
            return dateStr;
        }
    };

    const updateModalLanguage = (lang) => {
        try {
            const modalTabs = $('#modal-tabs');
            if (modalTabs) {
                $$('.modal-tab-btn', modalTabs).forEach(btn => {
                    const key = btn.getAttribute('data-i18n');
                    if (key) btn.textContent = t(key, lang);
                });
            }
        } catch (e) {
            console.error('[i18n] updateModalLanguage error:', e);
        }
    };

    // =========================================================================
    // COMPONENT INITIALIZATION
    // =========================================================================

    const initLanguageSwitcher = () => {
        try {
            const langSwitcher = $('#lang-switcher');
            if (!langSwitcher) return;

            langSwitcher.addEventListener('click', (e) => {
                const btn = e.target.closest('.lang-btn');
                if (!btn) return;
                const lang = btn.getAttribute('data-lang');
                if (lang) setLang(lang);
            });

            // Set initial language from localStorage or default
            const savedLang = localStorage.getItem('usm-lang') || CONFIG.defaultLang;
            setLang(savedLang);
        } catch (e) {
            console.error('[init] Language switcher error:', e);
        }
    };

    const initMobileMenu = () => {
        try {
            const toggle = $('#mobile-toggle');
            const menu = $('#nav-menu');
            if (!toggle || !menu) return;

            toggle.addEventListener('click', () => {
                const isOpen = menu.classList.toggle('mobile-open');
                toggle.setAttribute('aria-expanded', isOpen);
                toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
            });

            // Close menu when clicking a link
            $$('.nav-link', menu).forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('mobile-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.innerHTML = '&#9776;';
                });
            });
        } catch (e) {
            console.error('[init] Mobile menu error:', e);
        }
    };

    const initScrollProgress = () => {
        try {
            const progressBar = $('#scroll-progress');
            const backToTop = $('#back-to-top');
            const header = $('#header');

            if (!progressBar && !backToTop && !header) return;

            const handleScroll = () => {
                try {
                    const winScroll = window.scrollY || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

                    if (progressBar) progressBar.style.width = scrolled + '%';

                    if (backToTop) {
                        if (winScroll > CONFIG.scrollThreshold) {
                            backToTop.classList.add('show');
                        } else {
                            backToTop.classList.remove('show');
                        }
                    }

                    if (header) {
                        if (winScroll > CONFIG.scrollThreshold) {
                            header.classList.add('scrolled');
                        } else {
                            header.classList.remove('scrolled');
                        }
                    }
                } catch (e) {
                    console.error('[scroll] handleScroll error:', e);
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });

            if (backToTop) {
                backToTop.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        } catch (e) {
            console.error('[init] Scroll progress error:', e);
        }
    };

    const initCustomCursor = () => {
        try {
            // Only on desktop
            if (window.matchMedia('(pointer: fine)').matches) {
                const cursor = $('#custom-cursor');
                const follower = $('#custom-cursor-follower');
                if (!cursor || !follower) return;

                let mouseX = 0, mouseY = 0;
                let cursorX = 0, cursorY = 0;
                let followerX = 0, followerY = 0;

                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });

                const animate = () => {
                    cursorX += (mouseX - cursorX) * 0.3;
                    cursorY += (mouseY - cursorY) * 0.3;
                    followerX += (mouseX - followerX) * 0.1;
                    followerY += (mouseY - followerY) * 0.1;

                    cursor.style.transform = `translate(${cursorX - 5}px, ${cursorY - 5}px)`;
                    follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;

                    requestAnimationFrame(animate);
                };
                animate();

                // Hover effects
                $$('a, button, .faculty-card, .student-card, .news-card, .filter-btn, .calc-select').forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        document.body.classList.add('cursor-active');
                    });
                    el.addEventListener('mouseleave', () => {
                        document.body.classList.remove('cursor-active');
                    });
                });
            }
        } catch (e) {
            console.error('[init] Custom cursor error:', e);
        }
    };

    const initParticles = () => {
        try {
            const canvas = $('#particle-canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationId = null;

            const resize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            const createParticles = () => {
                particles = [];
                const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        radius: Math.random() * 1.5 + 0.5,
                        opacity: Math.random() * 0.5 + 0.1
                    });
                }
            };

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
                    ctx.fill();
                });

                // Draw connections
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 120)})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                }

                animationId = requestAnimationFrame(animate);
            };

            const handleResize = () => {
                resize();
                createParticles();
            };

            window.addEventListener('resize', handleResize);
            handleResize();
            animate();

            // Cleanup on page unload
            window.addEventListener('beforeunload', () => {
                if (animationId) cancelAnimationFrame(animationId);
                window.removeEventListener('resize', handleResize);
            });
        } catch (e) {
            console.error('[init] Particles error:', e);
        }
    };

    const initFaculties = () => {
        try {
            const grid = $('#faculties-grid');
            const filterControls = $('#filter-controls');
            const searchInput = $('#faculty-search');
            if (!grid || !filterControls) return;

            let currentFilter = 'all';
            let searchQuery = '';

            // Render filter buttons
            const renderFilters = () => {
                filterControls.innerHTML = '';
                const allBtn = document.createElement('button');
                allBtn.className = 'filter-btn active';
                allBtn.setAttribute('data-faculty', 'all');
                allBtn.textContent = t('faculties.filterAll', getLang()) || (getLang() === 'ro' ? 'Toate' : getLang() === 'ru' ? 'Все' : 'All');
                filterControls.appendChild(allBtn);

                FACULTIES_DATA.forEach(faculty => {
                    const btn = document.createElement('button');
                    btn.className = 'filter-btn';
                    btn.setAttribute('data-faculty', faculty.id);
                    btn.textContent = faculty.short[getLang()] || faculty.short.ro;
                    filterControls.appendChild(btn);
                });
            };

            // Render faculty cards
            const renderCards = () => {
                grid.innerHTML = '';
                const filtered = FACULTIES_DATA.filter(f => {
                    const matchesFilter = currentFilter === 'all' || f.id === currentFilter;
                    const matchesSearch = searchQuery === '' ||
                        (f.name[getLang()] || f.name.ro).toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (f.desc[getLang()] || f.desc.ro).toLowerCase().includes(searchQuery.toLowerCase()) ||
                        f.programs.some(p => (p[getLang()] || p.ro).toLowerCase().includes(searchQuery.toLowerCase()));
                    return matchesFilter && matchesSearch;
                });

                filtered.forEach(faculty => {
                    const card = document.createElement('div');
                    card.className = 'faculty-card';
                    card.setAttribute('data-faculty-id', faculty.id);
                    card.innerHTML = `
                        <span class="faculty-badge">${faculty.badge[getLang()] || faculty.badge.ro}</span>
                        <div class="faculty-icon-wrap">
                            <img src="${faculty.icon}" alt="${faculty.short[getLang()] || faculty.short.ro}" onerror="this.style.display='none'">
                        </div>
                        <h3 class="faculty-title">${faculty.name[getLang()] || faculty.name.ro}</h3>
                        <p class="faculty-desc">${faculty.desc[getLang()] || faculty.desc.ro}</p>
                        <a href="#" class="faculty-link" data-faculty="${faculty.id}">
                            <span>${t('faculties.viewPrograms', getLang()) || (getLang() === 'ro' ? 'Vezi programe' : getLang() === 'ru' ? 'Смотреть программы' : 'View programs')}</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    `;
                    grid.appendChild(card);
                });

                // Attach click handlers for modal
                $$('.faculty-link', grid).forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const facultyId = link.getAttribute('data-faculty');
                        openFacultyModal(facultyId);
                    });
                });
            };

            // Filter click handlers
            filterControls.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;
                $$('.filter-btn', filterControls).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-faculty');
                renderCards();
            });

            // Search handler
            if (searchInput) {
                let searchTimeout;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        searchQuery = e.target.value.trim();
                        renderCards();
                    }, 200);
                });
            }

            // Initial render
            renderFilters();
            renderCards();
        } catch (e) {
            console.error('[init] Faculties error:', e);
        }
    };

    const openFacultyModal = (facultyId) => {
        try {
            const faculty = FACULTIES_DATA.find(f => f.id === facultyId);
            if (!faculty) return;

            const modal = $('#modal-overlay');
            const title = $('#modal-title');
            const tabAbout = $('#modal-tab-about');
            const tabPrograms = $('#modal-tab-programs');
            const tabContact = $('#modal-tab-contact');
            const tabBtns = $$('.modal-tab-btn');

            if (!modal || !title || !tabAbout || !tabPrograms || !tabContact) return;

            const lang = getLang();

            title.textContent = faculty.name[lang] || faculty.name.ro;

            // About tab
            tabAbout.innerHTML = `
                <img src="${faculty.icon}" alt="" style="width: 80px; height: 80px; margin-bottom: 20px; object-fit: contain;" onerror="this.style.display='none'">
                <p style="color: var(--text-muted); line-height: 1.8; margin-bottom: 20px;">${faculty.desc[lang] || faculty.desc.ro}</p>
                <h4 style="color: var(--accent); margin-bottom: 10px;">${t('modal.keyFacts', lang) || 'Key Facts'}</h4>
                <ul style="color: var(--text-muted); line-height: 2; padding-left: 20px;">
                    <li>${t('modal.faculty', lang) || 'Faculty'}: ${faculty.name[lang] || faculty.name.ro}</li>
                    <li>${t('modal.category', lang) || 'Category'}: ${faculty.badge[lang] || faculty.badge.ro}</li>
                    <li>${t('modal.basePrice', lang) || 'Base tuition'}: ${faculty.priceBase.toLocaleString()} MDL/an</li>
                </ul>
            `;

            // Programs tab
            tabPrograms.innerHTML = `
                <h4 style="color: var(--accent); margin-bottom: 15px;">${t('modal.studyPrograms', lang) || 'Study Programs'}</h4>
                <ul style="color: var(--text-muted); line-height: 2.2; padding-left: 20px;">
                    ${faculty.programs.map(p => `<li>${p[lang] || p.ro}</li>`).join('')}
                </ul>
            `;

            // Contact tab
            tabContact.innerHTML = `
                <h4 style="color: var(--accent); margin-bottom: 15px;">${t('modal.contactInfo', lang) || 'Contact Information'}</h4>
                <p style="color: var(--text-muted); line-height: 2;">
                    <strong>Email:</strong> ${faculty.contact.email}<br>
                    <strong>Phone:</strong> ${faculty.contact.phone}
                </p>
                <p style="color: var(--text-muted); margin-top: 15px;">
                    ${t('modal.address', lang) || 'Address'}: Str. Alexei Mateevici 60, Chișinău, MD-2009
                </p>
            `;

            // Reset tabs
            tabBtns.forEach(btn => btn.classList.remove('active'));
            $$('.modal-tab-content').forEach(c => c.classList.remove('active'));
            tabBtns[0]?.classList.add('active');
            tabAbout.classList.add('active');

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } catch (e) {
            console.error('[modal] openFacultyModal error:', e);
        }
    };

    const initModal = () => {
        try {
            const modal = $('#modal-overlay');
            const closeBtn = $('#modal-close');
            const tabBtns = $$('.modal-tab-btn');

            if (!modal) return;

            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tab = btn.getAttribute('data-tab');
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    $$('.modal-tab-content').forEach(c => c.classList.remove('active'));
                    const target = $(`#modal-tab-${tab}`);
                    if (target) target.classList.add('active');
                });
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });
        } catch (e) {
            console.error('[init] Modal error:', e);
        }
    };

    const closeModal = () => {
        try {
            const modal = $('#modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        } catch (e) {
            console.error('[modal] closeModal error:', e);
        }
    };

    const initCalculator = () => {
        try {
            const calcFaculty = $('#calc-faculty');
            const calcCycle = $('#calc-cycle');
            const calcForm = $('#calc-form');
            const calcPrice = $('#calc-price');

            if (!calcFaculty || !calcCycle || !calcForm || !calcPrice) return;

            const calculate = () => {
                try {
                    const facultyOpt = calcFaculty.options[calcFaculty.selectedIndex];
                    const cycleOpt = calcCycle.options[calcCycle.selectedIndex];
                    const formOpt = calcForm.options[calcForm.selectedIndex];

                    const basePrice = parseFloat(facultyOpt?.getAttribute('data-price')) || 0;
                    const cycleMultiplier = parseFloat(cycleOpt?.getAttribute('data-multiplier')) || 1;
                    const formMultiplier = parseFloat(formOpt?.getAttribute('data-multiplier')) || 1;

                    const price = Math.round(basePrice * cycleMultiplier * formMultiplier);
                    calcPrice.textContent = formatNumber(price) + ' MDL / an';
                } catch (e) {
                    console.error('[calc] calculate error:', e);
                    calcPrice.textContent = '—';
                }
            };

            [calcFaculty, calcCycle, calcForm].forEach(el => {
                el.addEventListener('change', calculate);
            });

            // Initial calculation
            calculate();
        } catch (e) {
            console.error('[init] Calculator error:', e);
        }
    };

    const initStatCounters = () => {
        try {
            const statNumbers = $$('.stat-number[data-target]');
            if (statNumbers.length === 0) return;

            let animated = false;

            const animateStats = () => {
                if (animated) return;
                const statsSection = $('#stats');
                if (!statsSection) return;

                const rect = statsSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    animated = true;
                    statNumbers.forEach(el => {
                        const target = parseInt(el.getAttribute('data-target')) || 0;
                        const duration = CONFIG.statDuration;
                        const startTime = performance.now();

                        const animate = (currentTime) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            // Easing: easeOutExpo
                            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                            const current = Math.floor(target * eased);
                            el.textContent = formatNumber(current);

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                el.textContent = formatNumber(target);
                            }
                        };

                        requestAnimationFrame(animate);
                    });
                }
            };

            window.addEventListener('scroll', animateStats, { passive: true });
            // Check on load in case already visible
            animateStats();
        } catch (e) {
            console.error('[init] Stat counters error:', e);
        }
    };

    const initFAQ = () => {
        try {
            $$('.faq-question').forEach(btn => {
                btn.addEventListener('click', () => {
                    const item = btn.closest('.faq-item');
                    if (!item) return;
                    const isActive = item.classList.toggle('active');
                    btn.setAttribute('aria-expanded', isActive);
                });
            });

            // FAQ search (on faq.html)
            const searchInput = $('#faq-search');
            if (searchInput) {
                const faqItems = $$('.faq-item');
                searchInput.addEventListener('input', (e) => {
                    const query = e.target.value.toLowerCase().trim();
                    faqItems.forEach(item => {
                        const qText = $('.faq-question', item)?.textContent.toLowerCase() || '';
                        const aText = $('.faq-answer', item)?.textContent.toLowerCase() || '';
                        item.style.display = (qText.includes(query) || aText.includes(query)) ? 'block' : 'none';
                    });
                });
            }
        } catch (e) {
            console.error('[init] FAQ error:', e);
        }
    };

    // =========================================================================
    // MAIN INITIALIZATION
    // =========================================================================

    const init = () => {
        try {
            // Core features
            initLanguageSwitcher();
            initMobileMenu();
            initScrollProgress();
            initCustomCursor();
            initParticles();

            // Content sections
            initFaculties();
            initModal();
            initCalculator();
            initStatCounters();
            initFAQ();

            console.log('[USM] Engine initialized successfully');
        } catch (e) {
            console.error('[USM] Initialization error:', e);
        }
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();