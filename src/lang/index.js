// import { addLocaleData } from 'react-intl';
import enLang from "./entries/en-US";
import frLang from "./entries/fr-FR";
import enRtlLang from "./entries/en-US-rtl";
import esLang from "./entries/es-ES";

// import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'

// // This is optional but highly recommended
// // since it prevents memory leak
// const cache = createIntlCache()

// const intl = createIntl({
//   locale: 'fr-FR',
//   messages: {}
// }, cache)

const AppLocale = {
  en: enLang,
  es: esLang,
  fr: frLang,
  enrtl: enRtlLang,
};
// addLocaleData(AppLocale.en.data);
// addLocaleData(AppLocale.es.data);
// addLocaleData(AppLocale.enrtl.data);

export default AppLocale;
