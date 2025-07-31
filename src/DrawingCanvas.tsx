import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

export type DrawingCanvasHandle = {
  resetCanvas: () => void;
};

interface DrawingCanvasProps {
  layerSrc: string;
  basePath: string;
  selectedSymbol: string;
  layerTop?: string;
}

export const DrawingCanvas = forwardRef<DrawingCanvasHandle, DrawingCanvasProps>(
  function DrawingCanvas({ layerSrc, basePath, selectedSymbol, layerTop }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const baseImageRef = useRef<HTMLImageElement | null>(null);
    const pigmentImageRef = useRef<HTMLImageElement | null>(null);
    const layerTopImageRef = useRef<HTMLImageElement | null>(null);

    useImperativeHandle(ref, () => ({
      resetCanvas: () => {
        render();
      },
    }));

    useEffect(() => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      canvasRef.current = canvas;

      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(canvas);
      }

      loadImages();
    }, [basePath, selectedSymbol, layerSrc, layerTop]);

    const loadImages = () => {
      const base = new Image();
      base.src = `${basePath}/${selectedSymbol}.png`;
      base.onload = () => {
        baseImageRef.current = base;
        render();
      };

      if (layerSrc) {
        const pigment = new Image();
        pigment.src = layerSrc;
        pigment.onload = () => {
          pigmentImageRef.current = pigment;
          render();
        };
      } else {
        pigmentImageRef.current = null;
      }

      if (layerTop) {
        const top = new Image();
        top.src = layerTop;
        top.onload = () => {
          layerTopImageRef.current = top;
          render();
        };
      } else {
        layerTopImageRef.current = null;
      }
    };

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !baseImageRef.current) return;

      ctx.clearRect(0, 0, 1024, 1024);
      ctx.drawImage(baseImageRef.current, 0, 0, 1024, 1024);

      if (pigmentImageRef.current) {
        ctx.drawImage(pigmentImageRef.current, 0, 0, 1024, 1024);
      }

      if (layerTopImageRef.current) {
        ctx.drawImage(layerTopImageRef.current, 0, 0, 1024, 1024);
      }
    };

    return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />;
  }
);
