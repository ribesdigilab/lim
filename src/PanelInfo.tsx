// PanelInfo.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PanelInfoProps {
  selectedTemple: string;
}

export function PanelInfo({ selectedTemple }: PanelInfoProps) {
  const { t } = useTranslation();

  const description = t(`${selectedTemple}.description`)|| 'Informazioni non disponibili per questa Domus.';



  return (
    <div
      className="absolute top-[15rem] right-0 m-4 w-[14rem] h-[30rem] z-50 shadow-lg p-4 backdrop-blur-sm"
      style={{
        backgroundImage: "url('/Rectangle vert.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-white m-2 text-sm leading-relaxed whitespace-pre-wrap">
        {description}
      </div>
    </div>
  );
}
