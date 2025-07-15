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

  const currentIndex = pigments.findIndex(p => p.name === activeInfo);
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveInfo(pigments[currentIndex - 1].name);
    }
  };
  const goToNext = () => {
    if (currentIndex < pigments.length - 1) {
      setActiveInfo(pigments[currentIndex + 1].name);
    }
  };

  return (
    <div className="flex flex-col relative h-full w-full pointer-events-none">
      {/* Pigment selection panel */}
      <div
        className="absolute top-0 mt-[12rem] right-0 m-4 p-4 shadow-lg backdrop-blur-sm pointer-events-auto z-50"
        style={{
          backgroundImage: "url('/Rectangle vert.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="flex flex-col space-y-2">
          {pigments.map((p, idx) => (
            <div
              key={p.value}
              className="flex items-center rounded-2xl border border-white/40 px-[1px] py-[1px] pointer-events-auto">
              <button
                onClick={() => onSelect(p.value)}
                className="w-24 h-10 rounded-xl pointer-events-auto"
                style={{
                  backgroundImage: `linear-gradient(${p.value}, ${p.value}), url('/textr.png')`,
                  backgroundBlendMode: 'multiply',
                  backgroundSize: `${120 + idx * 10}%`,
                  backgroundPosition: `${(idx * -40) % 100}% ${(idx * 70) % 100}%`,
                }}
              />
              <button
                onClick={() => setActiveInfo(p.name)}
                className="w-6 h-6 m-2 rounded-full border border-white/40 text-white text-xs font-bold flex items-center justify-center pointer-events-auto"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                i
              </button>
            </div>
          ))}

          <button
            onClick={onReset}
            className="text-white/90 bg-red-600 font-bold py-2 px-4 rounded-xl mt-2 pointer-events-auto">
            {t('actions.reset')}
          </button>
        </div>
      </div>

      {/* Info popup */}
      {activeInfo && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-8 pointer-events-auto">
          {/* Navigation buttons */}
          <button
            className="absolute left-16 top-1/2 w-[5rem] h-[5rem] pointer-events-auto"
            onClick={goToPrevious}
            style={{
            backgroundImage: "url('/back.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
            >
            
          </button>

          <div
            className="relative p-2 rounded-sm w-full max-w-7xl max-h-[44rem] h-full flex flex-col justify-center items-center overflow-auto text-white"
            style={{
              backgroundImage: "url('/Rectangle 1.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}>
            <h2 className="text-3xl font-bold mb-4 text-center">{t(`pigments.${activeInfo}`)}</h2>
            <p className="text-lg text-center">{t(`pigments.${activeInfo}`)}</p>
          </div>

          <button
            className="absolute right-16 top-1/2 w-[5rem] h-[5rem] pointer-events-auto"
            onClick={goToNext}
            style={{
            backgroundImage: "url('/forward.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
            >
            
          </button>

          <button
            className="absolute bottom-4 w-[5rem] h-[5rem] pointer-events-auto"
            onClick={() => setActiveInfo(null)}
            style={{
              backgroundImage: "url('/close.svg')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
            }}>
          </button>
        </div>
      )}
    </div>
  );
}
