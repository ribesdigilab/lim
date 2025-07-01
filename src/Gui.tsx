import React from 'react';
import { useTranslation } from 'react-i18next';

type Pigment = { name: string; value: string };
interface PigmentSelectorProps {
  test: string;
  pigments: Pigment[];
  currentColor: string;
  onSelect: (color: string) => void;
}

export function PigmentSelector({ test, pigments, currentColor, onSelect }: PigmentSelectorProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div>
      {/* Pannello sinistro */}
      <div className="absolute top-0 left-0 m-4 p-4 bg-black/70 rounded shadow-lg backdrop-blur-md pointer-events-auto">
         <div className="flex space-x-2 mb-4">
          <button onClick={() => changeLanguage('it')} title="Italiano">
            <svg className="w-6 h-4" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
              <rect width="1" height="2" fill="#009246" />
              <rect width="1" height="2" x="1" fill="#FFF" />
              <rect width="1" height="2" x="2" fill="#CE2B37" />
            </svg>
          </button>
          <button onClick={() => changeLanguage('en')} title="English">
            <svg className="w-6 h-4" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="30" fill="#00247d" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="4" />
              <rect x="25" width="10" height="30" fill="#fff" />
              <rect y="10" width="60" height="10" fill="#fff" />
              <rect x="26.5" width="7" height="30" fill="#cf142b" />
              <rect y="11.5" width="60" height="7" fill="#cf142b" />
            </svg>
          </button>
          <button onClick={() => changeLanguage('sc')} title="Sardu">
            <svg className="w-6 h-4" viewBox="0 0 4 3" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="3" fill="#fff" />
              <path d="M0 1.5h4M2 0v3" stroke="red" strokeWidth="0.1" />
              <circle cx="0.5" cy="0.5" r="0.25" fill="black" />
              <circle cx="3.5" cy="0.5" r="0.25" fill="black" />
              <circle cx="0.5" cy="2.5" r="0.25" fill="black" />
              <circle cx="3.5" cy="2.5" r="0.25" fill="black" />
            </svg>
          </button>
        </div>
        <h2 className="text-lg font-bold text-white mb-2">{t('info.title')}</h2>
        <span className="text-sm text-white">{t('info.text')}</span>
      </div>

      {/* Pannello destro */}
      <div className="absolute top-0 right-0 m-4 p-4 bg-black/70 rounded shadow-lg backdrop-blur-md pointer-events-auto">
        <h2 className="text-lg font-bold text-white mb-2">{test}</h2>
        <div className="flex flex-col space-y-2">
          {pigments.map((p) => (
            <button
              key={p.value}
              onClick={() => onSelect(p.value)}
              className="flex items-center space-x-2"
            >
              <div className="w-6 h-6 rounded border" style={{ backgroundColor: p.value }} />
              <span className="text-sm text-white">{t(`pigments.${p.name}`)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
