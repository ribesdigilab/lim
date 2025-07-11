// Gui.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Pigment = { name: string; value: string };
interface PigmentSelectorProps {
  test: string;
  pigments: Pigment[];
  currentColor: string;
  onSelect: (color: string) => void;
  onReset: () => void;
}

export function PigmentSelector({ test, pigments, currentColor, onSelect, onReset }: PigmentSelectorProps) {
  const { t, i18n } = useTranslation();
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="flex flex-col relative h-full w-full pointer-events-none">
      {/* Language controls moved to LanguageSelector component */}

      {/* Pigment selection panel */}
      <div className="absolute top-0 mt-[12rem] right-0 m-4 p-4 shadow-lg rounded-3xl backdrop-blur-sm pointer-events-auto z-50" style={{
          backgroundImage: "url('/Rectangle 1.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <h2 className="text-lg font-bold text-white/90 mb-2"></h2>
        <div className="flex flex-col space-y-2">
          {pigments.map((p) => (
            <div key={p.value} className="flex items-center space-x-2">
              {/* Color button */}
              <button
                onClick={() => onSelect(p.value)}
                className="w-24 h-8 rounded-md border pointer-events-auto"
                style={{ backgroundColor: p.value }}
              />
              {/* Info button */}
              <button
                onClick={() => setActiveInfo(p.name)}
                className="w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center pointer-events-auto"
              >
                i
              </button>
            </div>
          ))}
          {/* Reset button */}
          <button
            onClick={onReset}
            className="text-white/90 bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded mt-2 pointer-events-auto"
          >
            {t('actions.reset')}
          </button>
        </div>
      </div>

      {/* Info popup */}
      {activeInfo && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-8 pointer-events-auto">
          <div className="relative p-8 rounded-sm w-full max-w-7xl h-full flex flex-col justify-center items-center overflow-auto text-white" style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <button
              onClick={() => setActiveInfo(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center">{t(`pigments.${activeInfo}`)}</h2>
            <p className="text-lg text-center">{t(`pigments.${activeInfo}`)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
