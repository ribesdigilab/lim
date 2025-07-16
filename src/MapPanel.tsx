// MapPanel.tsx
import React from 'react';

interface MapPanelProps {
  selectedTemple: string;
}

export function MapPanel({ selectedTemple }: MapPanelProps) {
  // Mappa temporanea delle immagini
  const mapImages: Record<string, string> = {
    Istevéne: '/map-istevene.png',
    Montessu: '/map-montessu.png',
  };

  const imageSrc = mapImages[selectedTemple] || '/map-placeholder.svg';

  return (
    <div
      className="absolute top-0 right-0 m-4 p-6 w-[14rem] h-[14rem] z-50 shadow-lg rounded-sm backdrop-blur-sm"
      style={{
        backgroundImage: "url('/Rectangle 1.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      <div className="flex items-center justify-center h-full">
        <img src={imageSrc} alt={`Mappa di ${selectedTemple}`} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
