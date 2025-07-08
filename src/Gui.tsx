import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Pigment = { name: string; value: string };
interface PigmentSelectorProps {
  test: string;
  pigments: Pigment[];
  currentColor: string;
  onSelect: (color: string) => void;
  onReset: () => void;
  onBack: () => void;
  //onSymbolChange: (symbol: string) => void;
  showInfo: boolean;
  setShowInfo: (visible: boolean) => void;
}

export function PigmentSelector({ test, pigments, currentColor, onSelect, onReset, onBack }: PigmentSelectorProps) {
  const { t, i18n } = useTranslation();
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="flex flex-col grid-cols-2 gap-4 relative h-full w-full pointer-events-none">
      
        <div className="absolute top-0 left-0 m-4 p-4 shadow-lg rounded-sm backdrop-blur-sm pointer-events-autoz-50" style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
          
          <h2 className="text-lg font-bold text-white/90 mb-2">{t('info.title')}</h2>
          <span className="text-sm text-white/90">{t('info.text')}</span>
        </div>
      

      <div>
        <div className="absolute top-0 right-0 m-4 p-4 shadow-lg rounded-3xl shadow-lg backdrop-blur-sm pointer-events-auto z-50" style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <h2 className="text-lg font-bold text-white/90 mb-2">{t('Scegli il pigmento:')}</h2>
          <div className="flex flex-col space-y-2">
            {pigments.map((p) => (
              <div key={p.value} className="flex items-center space-x-2">
                <button
                  onClick={() => onSelect(p.value)}
                  className="w-24 h-8 rounded-md border pointer-events-auto"
                  style={{ backgroundColor: p.value }}
                />
                <button
                  onClick={() => setActiveInfo(p.name)}
                  className="w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center pointer-events-auto"
                >
                  i
                </button>
              </div>
            ))}
            <button
              onClick={onReset}
              className="text-white/90 bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
            <button
              onClick={onBack}
              className="text-white/90 bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            >
              Indietro
            </button>
          </div>
        </div>
      </div>
      {activeInfo && (
         <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-8 pointer-events-auto">
          <div className="relative  p-8 rounded-sm w-full max-w-7xl h-full flex flex-col justify-center items-center overflow-auto text-white" style={{
    backgroundImage: "url('/Rectangle 1.png')",
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
            <button
              onClick={() => setActiveInfo(null)}
              className="absolute top-8 right-12 text-white text-2xl font-bold"
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