const translations = {
    en: {
        intro_text: "Weld Inspect provides expert weld inspection, construction logbook and site supervision services, ensuring top quality and safety in construction and industrial projects",
        start_date: "Since 2022.",
        more_button: "Read more",
        less_button: "See less",
        about_text: "Weld Inspect is a specialized engineering company that provides quality control and supervision services in the field of welding and construction works.",
        about_title: "Info and services",
        certificates_title: "Certificates",
        certificates_text: "We possess top professional qualifications and certificates that guarantee a high level of professionalism and compliance with European and domestic standards.",
        references_title: "References and projects",
        references_text: "During many years of work, we have gained extensive experience on numerous projects in the field of supervision and inspection of welded structures.",
        contact_name: "Name",
        contact_message: "Message",
        message_button: "Send message",
        company_address: "Address",
        company_phone: "Phone",
        company_social: "Social",
    },
    hr: {
        intro_text: "Weld Inspect pruža stručne usluge inspekcije zavara, vođenja eGrađevinskog Dnevnika i nadzora gradilišta, osiguravajući vrhunsku kvalitetu i sigurnost u građevinskim i industrijskim projektima",
        start_date: "Osnovano 2022.",
        more_button: "Pročitaj više",
        less_button: "Prikaži manje",
        about_text: "Weld Inspect je specijalizirana inženjerska tvrtka koja pruža usluge nadzora i kontrole kvalitete u području zavarivanja i građevinskih radova.",
        about_title: "Informacije i usluge",
        certificates_title: "Certifikati",
        certificates_text: "Posjedujemo vrhunske stručne kvalifikacije i certifikate koji jamče visoku razinu profesionalnosti i usklađenost s europskim i domaćim standardima.",
        references_title: "Reference i projekti",
        references_text: "Tijekom dugogodišnjeg rada stečeno je bogato iskustvo na brojnim projektima u području nadzora i inspekcije zavarenih konstrukcija.",
        contact_name: "Ime",
        contact_message: "Poruka",
        message_button: "Pošalji poruku",
        company_address: "Adresa",
        company_phone: "Telefon",
        company_social: "Mreže",
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][translationKey]) {
            element.textContent = translations[lang][translationKey];
        } else {
            console.warn(`Translation key "${translationKey}" not found for language "${lang}".`);
        }
    });
    localStorage.setItem("language", lang);
}

// Prilikom učitavanja stranice, postavi spremljeni jezik
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "hr";
    document.getElementById("languageSwitcher").value = savedLang;
    setLanguage(savedLang);
});

// Dodaj event listener na selektor jezika
document.getElementById("languageSwitcher").addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("languageSwitcher");

    languageSwitcher.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});
