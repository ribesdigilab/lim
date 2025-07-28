// App.tsx
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './LanguageSelector';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPanel } from './MapPanel';
import { SymbolPanel } from './Symbol';
import { PanelInfo } from './PanelInfo';
// Mappa simboli per ogni tempio (espandibile)
const symbolsByTemple: Record<string, string[]> = {
  istevéne: ['/simbolo0.png'],
  montessu: ['/simbolo1.png'],
  anghelu_ruju: [],
  puttu_codinu: [],
  monte_siseri: [],
  brodu: [],
  iloi_ispiluncas: [],
  mandras: [],
  mesu_e_montes: [],
  orto_beneficio: [],
  parco_petroglifi: [],
  pranu_mutteddu: [],
  roccia_elefante: [],
  sa_pala_larga: [],
  santandrea_priu: [],
  sos_forrighesos: [],
  su_crucifissu_mannu: [],
};



export default function App() {
  const { t } = useTranslation();
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [color, setColor] = useState<string>('#000000');
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);


  const pigmentsByTemple: Record<string, { name: string; value: string; desc: string }[]> = {
    anghelu_ruju: [
      { name: 'Rosso Scuro', value: '#8b0000', desc: t('anghelu_ruju.rosso.pigmentDescTitle') },
      { name: 'Marrone', value: '#a0522d', desc: t('anghelu_ruju.marrone.pigmentDescTitle') },
      { name: 'Nero', value: '#000000', desc: t('anghelu_ruju.nero.pigmentDescTitle') },
    ],
    istevéne: [
      { name: 'Rosso Scuro', value: '#8b0000', desc: t('anghelu_ruju.rosso.pigmentDescTitle') },
      { name: 'Marrone', value: '#a0522d', desc: t('anghelu_ruju.marrone.pigmentDescTitle') },
      { name: 'Nero', value: '#000000', desc: t('anghelu_ruju.nero.pigmentDescTitle') },
    ],
    montessu: [
      { name: 'Sabbia', value: '#cd853f', desc: t('montessu.sabbia.pigmentDescTitle') },
      { name: 'Verde Oliva', value: '#556b2f', desc: t('montessu.verde.pigmentDescTitle') },
      { name: 'Nero', value: '#000000', desc: t('montessu.nero.pigmentDescTitle') },
    ],
    // Aggiungi altri templi qui
  };


  const pigments = selectedTemple ? pigmentsByTemple[selectedTemple] ?? [] : [];
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
      <div className="w-screen h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(/screensaver.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <button
          onClick={() => setShowStartScreen(false)}
          className="text-white w-auto h-[15rem] px-14 py-6 text-3xl transition uppercase"
          style={{
            backgroundImage: "url('/Rectangle 1.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {t('Il muro dei pigmenti')}<br/>
          <div className="text-sm mt-12">{t('Tocca per continuare')}</div>
        </button>
      </div>
    );
  }

  // Schermata selezione Domus
  if (!selectedTemple) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center space-y-6 relative"
      style={{
        backgroundImage: `url(/screensaver2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}>
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
          <div className=" grid grid-cols-5 gap-x-4 gap-y-4 uppercase">
            
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/anghelu_ruju.webp')" }} onClick={() => setSelectedTemple('anghelu_ruju')}>Anghelu Ruju</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/puttu_codinu.webp')" }} onClick={() => setSelectedTemple('puttu_codinu')}>Puttu Codinu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/monte_siseri.webp')" }} onClick={() => setSelectedTemple('monte_siseri')}>Monte Siseri / S’Incantu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/mesu_e_montes.webp')" }} onClick={() => setSelectedTemple('mesu_e_montes')}>Mesu ’e Montes</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/su_crucifissu_mannu.webp')" }} onClick={() => setSelectedTemple('su_crucifissu_mannu')}>Su Crucifissu Mannu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/orto_beneficio.webp')" }} onClick={() => setSelectedTemple('orto_beneficio')}>Orto del Beneficio</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/roccia_elefante.webp')" }} onClick={() => setSelectedTemple('roccia_elefante')}>Roccia dell’Elefante</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/parco_petroglifi.webp')" }} onClick={() => setSelectedTemple('parco_petroglifi')}>Parco dei Petroglifi</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/santandrea_priu.webp')" }} onClick={() => setSelectedTemple('santandrea_priu')}>Sant’Andrea Priu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/sa_pala_larga.webp')" }} onClick={() => setSelectedTemple('sa_pala_larga')}>Sa Pala Larga</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/sos_furrighesos.webp')" }} onClick={() => setSelectedTemple('sos_forrighesos')}>Sos Furrighesos</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/iloi_ispiluncas.webp')" }} onClick={() => setSelectedTemple('iloi_ispiluncas')}>Iloi – Ispiluncas</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/mandras.webp')" }} onClick={() => setSelectedTemple('mandras')}>Mandras o Mrandas</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/brodu.webp')" }} onClick={() => setSelectedTemple('brodu')}>Brodu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/istevene.webp')" }} onClick={() => setSelectedTemple('istevéne')}>Istevéne</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/pranu_mutteddu.webp')" }} onClick={() => setSelectedTemple('pranu_mutteddu')}>Pranu Mutteddu</button>
            <button className="w-40 h-24 bg-cover bg-center text-white rounded shadow-md uppercase" style={{ backgroundImage: "url('/bottoni/montessu.webp')" }} onClick={() => setSelectedTemple('montessu')}>Montessu</button>
          </div>
        </div>
        
        <button
          onClick={() => setShowStartScreen(true)}
          className="absolute left-8 bottom-6 w-[5rem] h-[5rem] z-50"
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
      <div className="w-screen h-screen flex flex-col items-center justify-center relative"
       style={{
        backgroundImage: `url(/landing_page/${selectedTemple}.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <LanguageSelector />
        <SymbolPanel
  symbols={symbolsByTemple[selectedTemple] || []}
  onSelect={sym => {
    setSelectedSymbol(sym);
    
  }}
/>
      <MapPanel selectedTemple={selectedTemple!} />
        
        <button
          onClick={handleTempleBack}
          className="absolute left-8 bottom-6 w-[5rem] h-[5rem] z-50"
          style={{
            backgroundImage: "url('/back.svg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
         <PanelInfo selectedTemple={selectedTemple!} />
      </div>
    );
  }

  // Canvas + GUI
  const availableSymbols = symbolsByTemple[selectedTemple] || [];
  const firstSymbol = availableSymbols[0] ?? null;

  return (
    <>
      {/* Symbol panel persistent */}
      <SymbolPanel
    symbols={symbolsByTemple[selectedTemple] || []}
    onSelect={sym => setSelectedSymbol(sym)}
      />
      {/* Back to Symbol selection */}
      <button
        onClick={() => setSelectedSymbol(null)}
        className="absolute left-8 bottom-6 w-[5rem] h-[5rem] z-50"
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
