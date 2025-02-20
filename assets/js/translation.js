const translations = {
    en: {
        intro_text: "Weld Inspect provides expert weld inspection, construction logbook and site supervision services, ensuring top quality and safety in construction and industrial projects.",
        start_date: "Since 2022."
    },
    hr: {
        intro_text: "Weld Inspect pruža stručne usluge inspekcije zavara, vođenja eGrađevinskog Dnevnika i nadzora gradilišta, osiguravajući vrhunsku kvalitetu i sigurnost u građevinskim i industrijskim projektima.",
        start_date: "Osnovano 2022."
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.getElementById("intro_text").textContent = translations[lang].intro_text;
    document.getElementById("start_date").textContent = translations[lang].start_date;
    // document.getElementById("description").textContent = translations[lang].description;
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
