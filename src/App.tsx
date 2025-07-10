import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './LanguageSelector';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';

// Mappa simboli per ogni tempio (espandibile)
const symbolsByTemple: Record<string, string[]> = {
  Istevéne: ['/simbolo0.png'],
  Montessu: ['/simbolo1.png'],
  domus3: [],
  domus4: [],
};

export default function App() {
  const { t } = useTranslation();
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const [showStartScreen, setShowStartScreen] = useState(true);
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



   if (showStartScreen) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <button
          onClick={() => setShowStartScreen(false)}
          className=" text-white px-8 py-4 text-2xl rounded  transition"style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}}
        >
          {t('Il muro dei pigmenti')}
          <br/>
          <div className="text-sm mt-6">{t('Tocca per continuare')}</div>
        </button>
      </div>
    );
  }
  // Schermata iniziale
  if (!selectedTemple) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center space-y-6"> 
        <LanguageSelector />
        <div className="p-8 flex flex-col items-center space-y-6" style={{
          backgroundImage: "url('/Rectangle 1.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <h1 className="text-white text-4xl font-bold">{t('Scegli la Domus')}</h1>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded" onClick={() => setSelectedTemple('Istevéne')}>Istevéne</button>
            <button className="bg-gray-700 text-white px-6 py-3" onClick={() => setSelectedTemple('Montessu')}>Montessu</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 3</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 4</button>
          </div>
        </div>
        <button
        onClick={() => setShowStartScreen(true)} // Torna alla schermata "Start"
        className="absolute top-50% left-14 px-4 py-2 z-50 w-[5rem] h-[5rem]" style={{
            backgroundImage: "url('/back.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}}
      >
        
      </button>
      </div>
    );
  }

  // Simboli per tempio selezionato
  const availableSymbols = symbolsByTemple[selectedTemple] || [];
  const firstSymbol = symbolsByTemple[selectedTemple]?.[0] ?? null;
  return (
    <>
      <div className="absolute top-0 left-0 m-4 p-4 z-50">
        <div className="shadow-lg rounded-sm p-4 backdrop-blur-sm"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <h2 className="text-white/90 text-lg font-bold text-center mb-2">{t('Scegli il simbolo')}</h2>
          <div className="flex space-x-2 justify-center">
            {availableSymbols.map((sym, idx) => {
              const baseName = sym.replace(/^\/|\.png$/g, ''); // rimuove slash iniziale e .png
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSymbol(sym)}
                  className="w-10 h-10 bg-white/20 rounded hover:bg-white/30"
                  title={`Simbolo ${idx}`}
                >
                  <img
                    src={`/${baseName}.svg`}
                    alt={`Simbolo ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}

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
        pngImage={selectedSymbol ?? firstSymbol}
      />
    </>
  );
}