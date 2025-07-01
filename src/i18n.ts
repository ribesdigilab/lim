import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      info: {
        title: 'Informazioni',
        text: 'Esempio testo informazioni',
      },
      pigments: {
        'Rosso Scuro': 'Rosso Scuro',
        'Marrone': 'Marrone',
        'Sabbia': 'Sabbia',
        'Verde Oliva': 'Verde Oliva',
        'Nero': 'Nero',
      },
      language: 'Lingua',
    },
  },
  en: {
    translation: {
      info: {
        title: 'Information',
        text: 'Example info text',
      },
      pigments: {
        'Rosso Scuro': 'Dark Red',
        'Marrone': 'Brown',
        'Sabbia': 'Sand',
        'Verde Oliva': 'Olive Green',
        'Nero': 'Black',
      },
      language: 'Language',
    },
  },
  sc: {
    translation: {
      info: {
        title: 'Informatziones',
        text: 'Esempiu testu informatziones',
      },
      pigments: {
        'Rosso Scuro': 'Arrùbiu scuru',
        'Marrone': 'Brunu',
        'Sabbia': 'Arena',
        'Verde Oliva': 'Bidre Oliva',
        'Nero': 'Neru',
      },
      language: 'Limba',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sc', // lingua iniziale
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
