import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './LanguageSelector';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';

// Mappa simboli per ogni tempio (espandibile)
const symbolsByTemple: Record<string, string[]> = {
  domus1: ['/simbolo0.png'],
  domus2: [],
  domus3: [],
  domus4: [],
};

export default function App() {
  const { t } = useTranslation();
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const [color, setColor] = useState<string>('#000000');
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const pigments = [
    { name: 'Rosso Scuro', value: '#8b0000' },
    { name: 'Marrone', value: '#a0522d' },
    { name: 'Sabbia', value: '#cd853f' },
    { name: 'Verde Oliva', value: '#556b2f' },
    { name: 'Nero', value: '#000000' }
  ];

  const handleReset = () => canvasRef.current?.resetCanvas();
  const handleBack = () => {
    setSelectedTemple(null);
    setSelectedSymbol(null);
  };

  // Schermata iniziale
  if (!selectedTemple) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center space-y-6">
        <LanguageSelector />
        <h1 className="text-white text-4xl font-bold">{t('Scegli la Domus:')}</h1>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded" onClick={() => setSelectedTemple('domus1')}>Domus 1</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 2</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 3</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 4</button>
        </div>
      </div>
    );
  }

  // Simboli per tempio selezionato
  const availableSymbols = symbolsByTemple[selectedTemple] || [];

  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-center mt-4 z-50">
        <div className="bg-black/20 shadow-lg rounded-xl p-4 backdrop-blur-sm">
          <h2 className="text-white/90 text-lg font-bold text-center mb-2">{t('Scegli il simbolo')}</h2>
          <div className="flex space-x-2 justify-center">
            {availableSymbols.map((sym, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSymbol(sym)}
                className="w-10 h-10 bg-white/20 rounded hover:bg-white/30"
                title={`Simbolo ${idx}`}
              >
                <img src={`Simbolo${idx}.svg`} alt={`Simbolo ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <LanguageSelector />
      <PigmentSelector
        test={t('language')}
        pigments={pigments}
        currentColor={color}
        onSelect={setColor}
        onReset={handleReset}
        onBack={handleBack}
        //onSymbolChange={(symbol) => setSelectedSymbol(symbol)}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />

      <DrawingCanvas
        ref={canvasRef}
        test="/roccia.glb"
        currentColor={color}
        pngImage={selectedSymbol ?? '/simbolo0.png'}
      />
    </>
  );
}