// MapPanel.tsx
import React from 'react';

interface MapPanelProps {
  selectedTemple: string;
}

export function MapPanel({ selectedTemple }: MapPanelProps) {
  // Mappa temporanea delle immagini
  const mapImages: Record<string, string> = {
    istevéne: '/map-istevene.png',
    montessu: '/map-montessu.png',
    anghelu_ruju: '/map-angelu_ruju.png',
    puttu_codinu: '/map-puttu_codinu.png',
    monte_siseri: '/monte_siseri.png',
    brodu: '/map-brodu.png',
    iloi_ispiluncas: '/map-iloi_ispiluncas.png',
    mandras: '/map-mandras.png',
    mesu_e_montes: '/map-mesu_e_montes.png',
    orto_beneficio: '/map-orto_beneficio.png',
    parco_petroglifi: '/map-parco_petroglifi.png',
    pranu_mutteddu: '/map-pranu_mutteddu.png',
    roccia_elefante: '/map-roccia_elefante.png',
    sa_pala_larga: '/map-sa_pala_larga.png',
    santandrea_priu: '/map-santandrea_priu.png',
    sos_forrighesos: '/map-sos_furrighesos.png',
    su_crucifissu_mannu: '/map-su_crucifissu_mannu.png',
    

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
      
      <div className="flex items-center justify-center h-full" style={{ filter: "brightness(0) invert(1)" }}>
        <img src={imageSrc} alt={`Mappa di ${selectedTemple}`} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
