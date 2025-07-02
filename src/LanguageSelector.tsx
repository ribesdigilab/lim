// LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="absolute bottom-0 right-0 m-4 p-4 bg-black/20 shadow-lg rounded-xl shadow-lg backdrop-blur-sm pointer-events-auto z-50">
      <div className="flex space-x-4 ">
            <button onClick={() => i18n.changeLanguage('sc')} title="Sardu">
              <svg className="w-6 h-4" viewBox="0 0 4 3">
                <rect width="4" height="3" fill="#fff" />
                <path d="M0 1.5h4M2 0v3" stroke="#cf142b" strokeWidth="0.5" />
                <circle cx="0.5" cy="0.5" r="0.30" fill="black" />
                <circle cx="3.5" cy="0.5" r="0.30" fill="black" />
                <circle cx="0.5" cy="2.5" r="0.30" fill="black" />
                <circle cx="3.5" cy="2.5" r="0.30" fill="black" />
              </svg>
            </button>
            <button onClick={() => i18n.changeLanguage('it')} title="Italiano">
              <svg className="w-6 h-4" viewBox="0 0 3 2">
                <rect width="1" height="2" fill="#009246" />
                <rect width="1" height="2" x="1" fill="#FFF" />
                <rect width="1" height="2" x="2" fill="#CE2B37" />
              </svg>
            </button>
            <button onClick={() => i18n.changeLanguage('en')} title="English">
              <svg className="w-6 h-4" viewBox="0 0 60 30">
                <rect width="60" height="30" fill="#00247d" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="4" />
                <rect x="25" width="10" height="30" fill="#fff" />
                <rect y="10" width="60" height="10" fill="#fff" />
                <rect x="26.5" width="7" height="30" fill="#cf142b" />
                <rect y="11.5" width="60" height="7" fill="#cf142b" />
              </svg>
            </button>
          </div>
    </div>
  );
}