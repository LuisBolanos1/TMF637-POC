const i18n = require("i18next");
const Backend = require("i18next-xhr-backend");
const fallbackLng = ["en"];
const availableLenguages = ["en", "fr"];
const translationEN = require("./locales/en/translations.json");
const translationFR = require("./locales/fr/translations.json");


const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n.use(Backend).init({
    resources,
    fallbackLng,
    detection: {
        checkWhitelist: true
    },
    debug: false,
    whitelist: availableLenguages,
    interpolation: {
        escapeValue: false
    }
});

module.exports = i18n;