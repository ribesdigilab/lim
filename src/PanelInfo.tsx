// PanelInfo.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PanelInfoProps {
  selectedTemple: string;
  allTemples: string[];
}

export function PanelInfo({ selectedTemple, allTemples}: PanelInfoProps) {
  const { t } = useTranslation();


  const index = allTemples.indexOf(selectedTemple);
  const displayIndex = index >= 0 ? String(index + 1).padStart(2, '0') : '?';
  const description = t(`${selectedTemple}.description`)|| 'Informazioni non disponibili per questa Domus.';



  return (
    <div
      className="absolute top-0 right-0 m-4 w-[14rem] h-[30rem] z-50 shadow-lg p-4 backdrop-blur-sm"
      style={{
        backgroundImage: "url('/Rectangle vert.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-white m-2 text-sm leading-relaxed whitespace-pre-wrap">
        <div className="text-6xl font-thin text-center mb-2">{displayIndex}</div>
        <div className="text-2xl uppercase flex justify-center">{t(`${selectedTemple}.cardTitle`)}</div>
        <br />
        <div className="italic">{description}</div>
      </div>
    </div>
  );
}
