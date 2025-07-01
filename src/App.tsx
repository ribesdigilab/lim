import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PigmentSelector } from './Gui';
import { DrawingCanvas } from './DrawingCanvas';

export default function App() {
  const { t } = useTranslation();
  const [color, setColor] = useState<string>('#000000');
  const pigments = [
    { name: 'Rosso Scuro', value: '#8b0000' },
    { name: 'Marrone', value: '#a0522d' },
    { name: 'Sabbia', value: '#cd853f' },
    { name: 'Verde Oliva', value: '#556b2f' },
    { name: 'Nero', value: '#000000' }
  ];

  return (
    <>
      <PigmentSelector test={t('language')} pigments={pigments} currentColor={color} onSelect={setColor} />
      <DrawingCanvas test="/roccia.glb" currentColor={color} pngImage="/simbolo0.png" />
    </>
  );
}
