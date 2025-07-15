import React from 'react';

interface SymbolProps {
  symbols: string[];
  onSelect: (symbol: string) => void;
}

export function SymbolPanel({ symbols, onSelect }: SymbolProps) {
  return (
    <div className="absolute top-0 left-0 m-4 p-4 z-50">
      <div
        className="shadow-lg rounded-md p-4 backdrop-blur-sm h-[20rem] w-[6rem]"
        style={{
          backgroundImage: "url('/Rectangle vert.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-row flex-wrap justify-center space-x-2 rounded-lg mt-2 overflow-auto h-full">
          {symbols.map((sym, idx) => {
            const baseName = sym.replace(/^\/+|\.png$/g, '');
            return (
              <button
                key={idx}
                onClick={() => onSelect(sym)}
                className="w-10 h-10 rounded"
                title={`Symbol ${idx}`}
              >
                <img
                  src={`/${baseName}.svg`}
                  alt={`Symbol ${idx}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
