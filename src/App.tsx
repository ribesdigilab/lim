import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PigmentSelector } from './Gui';
import { DrawingCanvas, DrawingCanvasHandle } from './DrawingCanvas';

export default function App() {
  const { t } = useTranslation();
  const [color, setColor] = useState<string>('#000000');

  // Riferimento al canvas
  const canvasRef = useRef<DrawingCanvasHandle>(null);

  // Funzione di reset
  const handleReset = () => {
    canvasRef.current?.resetCanvas();
  };


  const pigments = [
    { name: 'Rosso Scuro', value: '#8b0000' },
    { name: 'Marrone', value: '#a0522d' },
    { name: 'Sabbia', value: '#cd853f' },
    { name: 'Verde Oliva', value: '#556b2f' },
    { name: 'Nero', value: '#000000' }
  ];

  return (
    <>
      <PigmentSelector test={t('language')} pigments={pigments} currentColor={color} onSelect={setColor} onReset={handleReset} />
      <DrawingCanvas ref={canvasRef} test="/roccia.glb" currentColor={color} pngImage="/simbolo0.png" />
    </>
  );
}
