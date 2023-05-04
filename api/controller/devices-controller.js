const i18n = require("../config/i18next.init");
const { faker } = require("@faker-js/faker");
const { productCharacteristics} = require("./data");

const SUCCESS_CODE = 200;
const ERROR_CODE = 500;
const LANGUAGE_HEADER = "accept-language";
const ENGLISH_CODE = "en";
const FRENCH_CODE = "fr";
const SCHEMA_LOCATION = "https://www.tmforum.org/resources";

const showAll = async(req, res) => {
    try {
        const lang = req.get(LANGUAGE_HEADER);
        const finalLang = !lang ? ENGLISH_CODE : lang;
        i18n.changeLanguage(!lang ? ENGLISH_CODE : lang);
        faker.setLocale(finalLang == FRENCH_CODE ? "fr_CA" : "en_CA");
        
        const response = {
            id: faker.datatype.uuid(),
            href: `devices/`,
            isBundle: false,
            isCustomerVisible: true,
            name: faker.datatype.string,
            status: 'active',
            "@baseType": "sm_data_instance",
            "@schemaLocation": SCHEMA_LOCATION,
            "@type": "sm_devices",
            "relatedParty": [
                {
                    name: "x123456",
                    role: "creator"
                }
            ],
            productCharacteristic: productCharacteristics
        }
        return res.status(SUCCESS_CODE).send(response);
    } catch(error){
        return res.status(ERROR_CODE).send(error.message);
    }
}

const newDevice = async(req, res) => {
    try {
        const lang = req.get(LANGUAGE_HEADER);
        const finalLang = !lang ? ENGLISH_CODE : lang;
        i18n.changeLanguage(!lang ? ENGLISH_CODE : lang);
        faker.setLocale(finalLang == FRENCH_CODE ? "fr_CA" : "en_CA");
        //TODO Create message error in case body does not exist.
        if(req?.body?.product){
            const response = {
                eventId: faker.datatype.uuid(),
                eventTime: faker.date.past(),
                eventType: "ProductCreateEvent",
                event: {
                    product: req?.body?.product
                }
            }
            return res.status(SUCCESS_CODE).send(response);    
        }
        return res.status(ERROR_CODE).send({ error: i18n.t("error_message_add_device") });
    } catch(error) {
        return res.status(ERROR_CODE).send(error.message);
    }
}

module.exports = {
    showAll,
    newDevice
}