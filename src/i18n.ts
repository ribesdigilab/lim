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
      'Scegli il pigmento:': 'Scegli il pigmento',
      'Scegli il simbolo': 'Scegli il simbolo',
      'Scegli la Domus': 'Scegli la Domus',
      'Il muro dei pigmenti': 'Il muro dei pigmenti',
      'Tocca per continuare': 'Tocca per continuare',
      'Indietro': 'Indietro',
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
      'Scegli il pigmento:': 'Choose the pigment',
      'Scegli il simbolo': 'Choose the symbol',
      'Scegli la Domus': 'Choose the Domus',
      'Il muro dei pigmenti': 'The Wall of Pigments',
      'Tocca per continuare': 'Tap to continue',
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
      'Scegli il pigmento:': 'Scegli il pigmento',
      'Scegli il simbolo': 'Scegli su simbulu',
      'Scegli la Domus': 'Scegli sa Domus',
      'Il muro dei pigmenti': 'Su muru de is pigmentos',
      'Tocca per continuare': 'Toca pro cuntinuare',
      'Indietro': 'Indietru',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sc',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;