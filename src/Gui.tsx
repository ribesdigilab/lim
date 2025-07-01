import React from 'react';

type Pigment = { name: string; value: string };
interface PigmentSelectorProps {
  test: string;
  pigments: Pigment[];
  currentColor: string;
  onSelect: (color: string) => void;
}

export function PigmentSelector({ test, pigments, currentColor, onSelect }: PigmentSelectorProps) {
  return (
    <div className="absolute top-0 right-0 m-4 p-4 bg-black/70 rounded shadow-lg backdrop-blur-md pointer-events-auto">
      <h2 className="text-lg font-bold text-white mb-2">{test}</h2>
      <div className="flex flex-col space-y-2">
        {pigments.map((p) => (
          <button
            key={p.value}
            onClick={() => onSelect(p.value)}
            className="flex items-center space-x-2"
          >
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: p.value }}
            />
            <span className="text-sm text-white">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
