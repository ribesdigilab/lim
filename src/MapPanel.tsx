// MapPanel.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface MapPanelProps {
  selectedTemple: string;
  selectedSymbol?: string;
}

export function MapPanel({ selectedTemple, selectedSymbol }: MapPanelProps) {
  const { t } = useTranslation();

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

  const symbolPositions: Record<string, { x: number; y: number }> = {
    mandras1: { x: 30, y: 60 },
    forrighesos1: { x: 50, y: 40 },
    forrighesos2: { x: 70, y: 27 },
    sincantu1: { x: 40, y: 50 },
    mesu1: { x: 55, y: 45 },
  };

  const imageSrc = mapImages[selectedTemple] || '/map-placeholder.svg';
  const point = selectedSymbol ? symbolPositions[selectedSymbol] : null;

  return (
    <div
      className="absolute top-[33.5rem] right-0 m-4 pb-8 w-[14rem] h-[14rem] z-50 shadow-lg rounded-sm backdrop-blur-sm"
      style={{
        backgroundImage: "url('/Rectangle 1.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-top justify-center h-full relative" style={{ filter: "brightness(0) invert(1)" }}>
        <img src={imageSrc} alt={`Mappa di ${selectedTemple}`} className="w-full h-full object-contain" />
        {point && (
          <div
            className="absolute w-3 h-3 rounded-full bg-red-200 shadow-md"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </div>

      {/* ✅ Titolo simbolo se in modalità disegno */}
      {selectedSymbol && (
        <div className="mb-4 text-white text-md text-center italic font-semibold truncate">
          {t(selectedSymbol)}
        </div>
      )}
    </div>
  );
}