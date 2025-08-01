import React, { useRef, useState , useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './LanguageSelector';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPanel } from './MapPanel';
import { SymbolPanel } from './Symbol';
import { PanelInfo } from './PanelInfo';

const allTemples = [
  'mandras','monte_siseri','mesu_e_montes','sos_forrighesos','santandrea_priu','montessu','istevéne','puttu_codinu',
  'su_crucifissu_mannu', 'orto_beneficio','roccia_elefante', 'parco_petroglifi','sa_pala_larga', 'iloi_ispiluncas','brodu', 'anghelu_ruju','pranu_mutteddu'
];

const symbolsByTemple: Record<string, string[]> = {
  istevéne: [],
  montessu: ['montessu1'],
  anghelu_ruju: [],
  puttu_codinu: [],
  monte_siseri: ['sincantu1'],
  brodu: [],
  iloi_ispiluncas: [],
  mandras: ['mandras1'],
  mesu_e_montes: ['mesu1'],
  orto_beneficio: [],
  parco_petroglifi: [],
  pranu_mutteddu: [],
  roccia_elefante: [],
  sa_pala_larga: [],
  santandrea_priu: [],
  sos_forrighesos: ['forrighesos1', 'forrighesos2'],
  su_crucifissu_mannu: [],
};

export default function App() {
  const { t } = useTranslation();
  const canvasRef = useRef<DrawingCanvasHandle>(null);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [color, setColor] = useState<string>('');
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(allTemples.length / itemsPerPage);
  const currentPageTemples = allTemples.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const prevPage = () => setPage(p => Math.max(0, p - 1));
  const nextPage = () => setPage(p => Math.min(totalPages - 1, p + 1));

  const pigmentsByTemple: Record<string, { name: string; value: string; desc: string }[]> = {
    mandras: [
      { name: 'Rosso Scuro', value: '#8b0000', desc: t('anghelu_ruju.rosso.pigmentDescTitle') },
      
    ],
    monte_siseri: [
      { name: 'Rosso Scuro', value: '#ff0000',  desc: t('monte_siseri.rosso.pigmentDescTitle') },
      { name: 'Blu', value: '#0000ff',  desc: t('monte_siseri.blu.pigmentDescTitle') },
    ],
     mesu_e_montes: [
      { name: 'Rosso Scuro', value: '#8b0000', desc: t('mesu_e_montes.rosso.pigmentDescTitle') },
      
    ],
    sos_forrighesos: [
      { name: 'Rosso Scuro', value: '#8b0000',  desc: t('sos_forrighesos.rosso.pigmentDescTitle') },
      { name: 'Rosso Scuro', value: '#8b0000',  desc: t('sos_forrighesos.rosso.pigmentDescTitle') },
    ],
    montessu: [
      { name: 'Rosso Scuro', value: '#8b0000', desc: t('montessu.rosso.pigmentDescTitle') },
    ],

  };


  const layersBySymbolAndColor: Record<string, Record<string, string>> = {
    // simbolo -> colore -> path immagine
    forrighesos1: {
      '#8b0000': '/simboli/sos_forrighesos/forrighesos11.png'
    },
    forrighesos2: {
      '#8b0000': '/simboli/sos_forrighesos/forrighesos21.png',

    },
    mandras1: {
      '#8b0000': '/simboli/mandras/mandras11.png'
    },
    mesu1: {
      '#8b0000': '/simboli/mesu_e_montes/mesu11.png'
    },
    sincantu1: {
      '#ff0000': '/simboli/monte_siseri/sincantu12.png',
      '#0000ff': '/simboli/monte_siseri/sincantu11.png'
    },
    montessu1: {
      '#8b0000': '/simboli/montessu/montessu11.png'
    },

  };

  const [layerTop, setLayerTop] = useState<string | undefined>(undefined);
  const rawPigments = selectedTemple ? pigmentsByTemple[selectedTemple] ?? [] : [];

  const pigments = rawPigments.filter(
  (p, index, self) =>
    index === self.findIndex(
      other => other.value === p.value && other.name === p.name && other.desc === p.desc
    )
);

const currentLayer = selectedSymbol && color
  ? layersBySymbolAndColor[selectedSymbol]?.[color]
  : undefined;

useEffect(() => {
  setColor('');
  setLayerTop(undefined); 
}, [selectedTemple]);

useEffect(() => {
  setLayerTop(undefined); // resetta il layer top quando cambi simbolo
}, [selectedSymbol]);

useEffect(() => {
  setLayerTop(undefined); // Rimuove il layer top quando cambi colore
}, [color]);


  const handleReset = () => {
  setColor(''); // deseleziona il colore
  setLayerTop(undefined); // nasconde il top layer
  canvasRef.current?.resetCanvas(); // aggiorna il canvas
};
  const handleTempleBack = () => {
    setSelectedTemple(null);
    setSelectedSymbol(null);
  };

  if (showStartScreen) {
    return (
      <div className="w-screen h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(/screensaver.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <button
          onClick={() => setShowStartScreen(false)}
          className="text-white w-auto h-[15rem] pt-12 px-14 py-6 text-3xl transition uppercase"
          style={{ backgroundImage: "url('/Rectangle 1.png')", backgroundSize: '100% 100%' }}
        >
          {t('Il muro dei pigmenti')}<br />
          <div className="text-sm mt-12">{t('Tocca per continuare')}</div>
          <img
          src="/arrow_back.svg"
          alt="Freccia"
          className="mt-4 w-8 h-8 mx-auto"
        />
        </button>

      </div>
    );
  }

  if (!selectedTemple) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center space-y-6 relative"
        style={{ backgroundImage: `url(/screensaver2.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <LanguageSelector />
        <div className="relative p-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4  backdrop-blur-sm">
            <button onClick={prevPage} disabled={page === 0} className="w-[5rem] h-[5rem]"
              style={{ backgroundImage: "url('/back.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: page === 0 ? 0.3 : 1 }} />
            <div style={{ backgroundImage: "url('/Rectangle 1.png')", backgroundSize: '100% 100%' }}>
              <h1 className="text-white text-4xl pt-4 mt-8 uppercase text-center">{t('Scegli la Domus')}</h1>
              <div className="grid grid-cols-3 p-4 gap-4 ml-10 mr-10">
                {currentPageTemples.map(slug => (
                  <button key={slug} className="relative w-[12rem] hover:border-2 h-24 bg-cover bg-center text-white italic rounded-2xl shadow-md uppercase"
                    style={{ backgroundImage: `url('/bottoni/${slug}.webp')` }}
                    onClick={() => setSelectedTemple(slug)}>
                    <div className="absolute inset-0 opacity-50 rounded-2xl"
                      style={{ background: "linear-gradient(0deg, #BA3B00 5%, #000000 50%)" }} />
                    <span className="relative z-10">{t(`${slug}.cardTitle`)}</span>
                  </button>
                ))}
              </div>
              <div className="text-white flex item-center justify-center mb-8">{page + 1} / {totalPages}</div>
            </div>
            <button onClick={nextPage} disabled={page === totalPages - 1} className="w-[5rem] h-[5rem]"
              style={{ backgroundImage: "url('/forward.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: page === totalPages - 1 ? 0.3 : 1 }} />
          </div>
        </div>
        <button onClick={() => setShowStartScreen(true)} className="absolute left-8 bottom-6 w-[5rem] h-[5rem] z-50"
          style={{ backgroundImage: "url('/back.svg')", backgroundSize: '100% 100%' }} />
      </div>
    );
  }

  if (selectedTemple && !selectedSymbol) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center relative"
        style={{ backgroundImage: `url(/landing_page/${selectedTemple}.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <LanguageSelector />
       

        <SymbolPanel
          symbols={symbolsByTemple[selectedTemple] || []}
          onSelect={sym => setSelectedSymbol(sym)}
        />
        <MapPanel selectedTemple={selectedTemple!} />
        <button onClick={handleTempleBack} className="absolute left-6 bottom-6 w-[5rem] h-[5rem] z-50"
          style={{ backgroundImage: "url('/back.svg')", backgroundSize: '100% 100%' }} />
        <PanelInfo selectedTemple={selectedTemple!} allTemples={allTemples}/>
      </div>
    );
  }

  return (
    <>
      <SymbolPanel
        symbols={symbolsByTemple[selectedTemple!] || []}
        onSelect={sym => setSelectedSymbol(sym)}
      />
      <button onClick={() => setSelectedSymbol(null)} className="absolute left-8 bottom-6 w-[5rem] h-[5rem] z-50"
        style={{ backgroundImage: "url('/back.svg')", backgroundSize: '100% 100%' }} />
      <LanguageSelector />
      <MapPanel selectedTemple={selectedTemple!} selectedSymbol={selectedSymbol ?? undefined} />
      <PigmentSelector
        test={t('language')}
        pigments={pigments}
        currentColor={color}
        onSelect={setColor}
        onReset={handleReset}
        onLayerTop={() => {
          if (selectedTemple && selectedSymbol) {
            setLayerTop(`/simboli/${selectedTemple}/${selectedSymbol}_top.png`);
          }
        }}
      />
      <AnimatePresence>
        {selectedSymbol && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full pointer-events-auto">
            


            <DrawingCanvas
              ref={canvasRef}
              basePath={`/simboli/${selectedTemple}`}
              selectedSymbol={selectedSymbol!}
              layerSrc={currentLayer!}
              layerTop={layerTop}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!selectedSymbol && <div className="absolute inset-0 bg-black" />}
    </>
  );
}
