// App.tsx
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './LanguageSelector';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPanel } from './MapPanel';

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
  const pigments = [
    { name: 'Rosso Scuro', value: '#8b0000' },
    { name: 'Marrone', value: '#a0522d' },
    { name: 'Sabbia', value: '#cd853f' },
    { name: 'Verde Oliva', value: '#556b2f' },
    { name: 'Nero', value: '#000000' }
  ];
  const handleReset = () => canvasRef.current?.resetCanvas();
  const handleBack = () => {
    setSelectedSymbol(null);
  };
  const handleTempleBack = () => {
    setSelectedTemple(null);
    setSelectedSymbol(null);
  };

  // Schermata iniziale Start
  if (showStartScreen) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <button
          onClick={() => setShowStartScreen(false)}
          className="text-white px-8 py-4 text-2xl rounded transition"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {t('Il muro dei pigmenti')}<br/>
          <div className="text-sm mt-6">{t('Tocca per continuare')}</div>
        </button>
      </div>
    );
  }

  // Schermata selezione Domus
  if (!selectedTemple) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center space-y-6">
        <LanguageSelector />
        <div
          className="p-8 flex flex-col items-center space-y-6"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-white text-4xl font-bold text-center">{t('Scegli la Domus')}</h1>
          <div className="flex space-x-4">
            <button
              className="bg-white text-black px-6 py-3 rounded"
              onClick={() => setSelectedTemple('Istevéne')}
            >Istevéne</button>
            <button
              className="bg-white text-black px-6 py-3 rounded"
              onClick={() => setSelectedTemple('Montessu')}
            >Montessu</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 3</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">Domus 4</button>
          </div>
        </div>
        {/* Back to Start */}
        <button
          onClick={() => setShowStartScreen(true)}
          className="absolute left-6 bottom-10 w-[5rem] h-[5rem] z-50"
          style={{
            backgroundImage: "url('/back.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    );
  }

  // Schermata selezione Simbolo
  if (selectedTemple && !selectedSymbol) {
    const availableSymbols = symbolsByTemple[selectedTemple] || [];
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center space-y-6">
        <LanguageSelector />
        {/* Symbol panel */}
        <div className="absolute top-0 left-0 m-4 p-4 z-50 h-[16rem] w-[8rem]">
        <div
          className="shadow-lg rounded-md p-4 backdrop-blur-sm"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/*<h2 className="text-white/90 text-lg font-bold text-center mb-2">{t('Scegli il simbolo')}</h2>*/}
          <div className="flex space-x-2 justify-center rounded-lg mt-2 h-[30rem] w-auto">
            {availableSymbols.map((sym, idx) => {
              const base = sym.replace(/^\/+|\.png$/g, '');
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSymbol(sym)}
                  className="w-10 h-10 rounded hover:bg-white/30"
                >
                  <img src={`/${base}.svg`} alt={`Symbol ${idx}`} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <MapPanel selectedTemple={selectedTemple!} />
        {/* Back to Domus */}
        <button
          onClick={handleTempleBack}
          className="absolute left-6 bottom-6 w-[5rem] h-[5rem] z-50"
          style={{
            backgroundImage: "url('/back.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
         <PigmentSelector
        test={t('language')}
        pigments={pigments}
        currentColor={color}
        onSelect={setColor}
        onReset={handleReset}
      />
      </div>
    );
  }

  // Canvas + GUI
  const availableSymbols = symbolsByTemple[selectedTemple] || [];
  const firstSymbol = availableSymbols[0] ?? null;

  return (
    <>
      {/* Symbol panel persistent */}
      <div className="absolute top-0 left-0 m-4 p-4 z-50 h-[16rem] w-[8rem]">
        <div
          className="shadow-lg rounded-md p-4 backdrop-blur-sm"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/*<h2 className="text-white/90 text-lg font-bold text-center mb-2">{t('Scegli il simbolo')}</h2>*/}
          <div className="flex space-x-2 justify-center rounded-lg mt-2 h-[30rem] w-auto">
            {availableSymbols.map((sym, idx) => {
              const base = sym.replace(/^\/+|\.png$/g, '');
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSymbol(sym)}
                  className="w-10 h-10 rounded hover:bg-white/30"
                >
                  <img src={`/${base}.svg`} alt={`Symbol ${idx}`} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Back to Symbol selection */}
      <button
        onClick={() => setSelectedSymbol(null)}
        className="absolute left-6 bottom-6 w-[5rem] h-[5rem] z-50"
        style={{
          backgroundImage: "url('/back.svg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <LanguageSelector />
      <MapPanel selectedTemple={selectedTemple!} />
      <PigmentSelector
        test={t('language')}
        pigments={pigments}
        currentColor={color}
        onSelect={setColor}
        onReset={handleReset}
      />

      {/* Canvas fade-in */}
      <AnimatePresence>
        {selectedSymbol && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full pointer-events-auto"
          >
            <DrawingCanvas
              ref={canvasRef}
              test="/roccia.glb"
              currentColor={color}
              pngImage={selectedSymbol ?? firstSymbol!}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sfondo nero quando il canvas è assente */}
      {!selectedSymbol && <div className="absolute inset-0 bg-black" />}
    </>
  );
}
