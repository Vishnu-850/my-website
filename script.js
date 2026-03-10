// script.js - basic user interactions

const translations = {
    en: {
        welcome: "WELCOME TO SURYA KIRANAM",
        aboutBtn: "about the store",
        licenseBtn: "license",
        shopTimings: "SHOP TIMINGS",
        timingsDesc: "this shop will be open on the below following timings",
        monday: "Monday:8:00 AM - 9:00 PM",
        tuesday: "TUESADAY:8:00 AM - 9:00 PM",
        wednesday: "WEDENSDAY:8:00 AM - 9:00 PM",
        thursday: "THURSDAY:8:00 AM - 9:00 PM",
        friday: "FRIDAY:8:00 AM - 9:00 PM",
        saturday: "SATURDAY :8:00 AM - 9:00 PM",
        sunday: "SUNDAY:8:00 AM - 9:00 PM",
        itemsTitle: "ITEMS AVAILABLE IN THE STORE",
        itemsDesc: "we have the following items available in our store",
        softDrinks: "soft drinks",
        snacks: "snacks",
        electronics: "electronics",
        books: "books",
        pensPencils: "pens and pencils",
        footwear: "footwear",
        accessories: "accessories",
        homeDecor: "home decor",
        beautyProducts: "beauty products",
        paymentTitle: "Accepted Payment Methods",
        paymentInquiry: "For payment inquiries, call:",
        aboutAlert: "Welcome to Surya Kiranam! We are a friendly local store offering a variety of goods.",
        licenseAlert: "All products are sold under the standard store license. Contact us for details.",
        clickAlert: "You clicked on:"
    },
    te: {
        welcome: "సూర్య కిరణం కు స్వాగతం",
        aboutBtn: "స్టోర్ గురించి",
        licenseBtn: "లైసెన్స్",
        shopTimings: "షాప్ టైమింగ్స్",
        timingsDesc: "ఈ షాప్ క్రింది టైమింగ్స్ లో తెరిచి ఉంటుంది",
        monday: "సోమవారం:8:00 AM - 9:00 PM",
        tuesday: "మంగళవారం:8:00 AM - 9:00 PM",
        wednesday: "బుధవారం:8:00 AM - 9:00 PM",
        thursday: "గురువారం:8:00 AM - 9:00 PM",
        friday: "శుక్రవారం:8:00 AM - 9:00 PM",
        saturday: "శనివారం:8:00 AM - 9:00 PM",
        sunday: "ఆదివారం:8:00 AM - 9:00 PM",
        itemsTitle: "స్టోర్ లో అందుబాటులో ఉన్న వస్తువులు",
        itemsDesc: "మా స్టోర్ లో క్రింది వస్తువులు అందుబాటులో ఉన్నాయి",
        softDrinks: "సాఫ్ట్ డ్రింక్స్",
        snacks: "స్నాక్స్",
        electronics: "ఎలక్ట్రానిక్స్",
        books: "పుస్తకాలు",
        pensPencils: "పెన్స్ మరియు పెన్సిల్స్",
        footwear: "ఫుట్‌వేర్",
        accessories: "ఆక్సెసరీస్",
        homeDecor: "హోమ్ డెకార్",
        beautyProducts: "బ్యూటీ ప్రాడక్ట్స్",
        paymentTitle: "అంగీకరించిన చెల్లింపు పద్ధతులు",
        paymentInquiry: "చెల్లింపు విచారణల కోసం, కాల్ చేయండి:",
        aboutAlert: "సూర్య కిరణం కు స్వాగతం! మేము వివిధ వస్తువులను అందించే స్నేహపూర్వక స్థానిక స్టోర్.",
        licenseAlert: "అన్ని ఉత్పత్తులు ప్రామాణిక స్టోర్ లైసెన్స్ క్రింద విక్రయించబడతాయి. వివరాల కోసం మమ్మల్ని సంప్రదించండి.",
        clickAlert: "మీరు క్లిక్ చేసారు:"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.getElementById('aboutBtn');
    const licenseBtn = document.getElementById('licenseBtn');
    const languageSelect = document.getElementById('languageSelect');
    const items = document.querySelectorAll('main ol li');

    // Load saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    languageSelect.value = savedLang;
    setLanguage(savedLang);

    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('language', lang);
        setLanguage(lang);
    });

    aboutBtn.addEventListener('click', () => {
        alert(translations[currentLang].aboutAlert);
    });

    licenseBtn.addEventListener('click', () => {
        alert(translations[currentLang].licenseAlert);
    });

    items.forEach(li => {
        li.addEventListener('click', () => {
            const name = li.textContent.trim();
            alert(`${translations[currentLang].clickAlert} ${name}`);
            li.classList.toggle('highlight');
        });
    });

    // optional: show current time in the header
    const header = document.querySelector('header');
    const timeDiv = document.createElement('div');
    timeDiv.id = 'clock';
    header.appendChild(timeDiv);

    function updateClock() {
        const now = new Date();
        timeDiv.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
});

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update texts
    document.querySelector('h1').textContent = translations[lang].welcome;
    document.getElementById('aboutBtn').textContent = translations[lang].aboutBtn;
    document.getElementById('licenseBtn').textContent = translations[lang].licenseBtn;
    document.querySelector('main h2:first-of-type').textContent = translations[lang].shopTimings;
    document.querySelector('main p:first-of-type').textContent = translations[lang].timingsDesc;

    // Update timings
    const ul = document.querySelector('main ul');
    const lis = ul.querySelectorAll('li');
    lis[0].textContent = translations[lang].monday;
    lis[1].textContent = translations[lang].tuesday;
    lis[2].textContent = translations[lang].wednesday;
    lis[3].textContent = translations[lang].thursday;
    lis[4].textContent = translations[lang].friday;
    lis[5].textContent = translations[lang].saturday;
    lis[6].textContent = translations[lang].sunday;

    // Items
    document.querySelector('main h2:nth-of-type(2)').textContent = translations[lang].itemsTitle;
    document.querySelector('main p:nth-of-type(2)').textContent = translations[lang].itemsDesc;

    const ol = document.querySelector('main ol');
    const olLis = ol.querySelectorAll('li');
    olLis[0].querySelector('span').textContent = translations[lang].softDrinks;
    olLis[1].querySelector('span').textContent = translations[lang].snacks;
    olLis[2].querySelector('span').textContent = translations[lang].electronics;
    olLis[3].querySelector('span').textContent = translations[lang].books;
    olLis[4].querySelector('span').textContent = translations[lang].pensPencils;
    olLis[5].querySelector('span').textContent = translations[lang].footwear;
    olLis[6].querySelector('span').textContent = translations[lang].accessories;
    olLis[7].querySelector('span').textContent = translations[lang].homeDecor;
    olLis[8].querySelector('span').textContent = translations[lang].beautyProducts;

    // Payment
    document.querySelector('.payment-methods h2').textContent = translations[lang].paymentTitle;
    document.querySelector('.payment-contact').innerHTML = `${translations[lang].paymentInquiry} <strong>8096697266</strong>`;
}