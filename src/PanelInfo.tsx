// PanelInfo.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PanelInfoProps {
  selectedTemple: string;
}

export function PanelInfo({ selectedTemple }: PanelInfoProps) {
  const { t } = useTranslation();

  const descriptions: Record<string, string> = {
    Istevéne:
      'Istevéne è una Domus de Janas situata nella regione sud-occidentale della Sardegna, famosa per i suoi ambienti scavati nella roccia e decorati con simboli misteriosi.',
    Montessu:
      'Montessu è uno dei più grandi complessi di Domus de Janas della Sardegna, con numerose tombe distribuite lungo un anfiteatro naturale nella roccia trachitica.',
  };

  const content = descriptions[selectedTemple] || 'Informazioni non disponibili per questa Domus.';

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
        {content}
      </div>
    </div>
  );
}
