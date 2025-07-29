import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';

export type DrawingCanvasHandle = {
  resetCanvas: () => void;
};

interface DrawingCanvasProps {
  layerSrc: string;
  basePath: string;
  selectedSymbol: string;
}

export const DrawingCanvas = forwardRef<DrawingCanvasHandle, DrawingCanvasProps>(
  function DrawingCanvas({ layerSrc, basePath, selectedSymbol }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const displayCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const drawing = useRef(false);

    const baseImageRef = useRef<HTMLImageElement | null>(null);
    const pigmentImagesRef = useRef<Record<string, HTMLImageElement>>({});
    const maskCanvasesRef = useRef<Record<string, HTMLCanvasElement>>({});
    const imagesLoaded = useRef<{ base: boolean; pigments: Record<string, boolean> }>({ base: false, pigments: {} });

    useImperativeHandle(ref, () => ({
      resetCanvas: () => {
        // clear all mask canvases
        Object.values(maskCanvasesRef.current).forEach(mc => {
          const ctx = mc.getContext('2d');
          if (ctx) ctx.clearRect(0, 0, mc.width, mc.height);
        });
        // re-render everything
        render();
      }
    }));

    const render = () => {
      const base = baseImageRef.current;
      const display = displayCanvasRef.current;
      if (!base || !display || !imagesLoaded.current.base) return;
      const ctx = display.getContext('2d');
      if (!ctx) return;

      // draw base layer
      ctx.clearRect(0, 0, display.width, display.height);
      ctx.drawImage(base, 0, 0, display.width, display.height);

      // draw each pigment layer using its mask
      Object.keys(maskCanvasesRef.current).forEach(src => {
        if (!imagesLoaded.current.pigments[src]) return;
        const pigment = pigmentImagesRef.current[src];
        const mask = maskCanvasesRef.current[src];
        if (!pigment || !mask) return;

        // create temporary canvas for masked pigment
        const tmp = document.createElement('canvas');
        tmp.width = display.width;
        tmp.height = display.height;
        const tctx = tmp.getContext('2d')!;
        // copy mask
        tctx.drawImage(mask, 0, 0, tmp.width, tmp.height);
        // apply pigment only where mask
        tctx.globalCompositeOperation = 'source-in';
        tctx.drawImage(pigment, 0, 0, tmp.width, tmp.height);
        // composite over base
        ctx.drawImage(tmp, 0, 0);
      });
    };

    const handleDraw = (e: PointerEvent) => {
      if (!drawing.current || !layerSrc) return;
      const mask = maskCanvasesRef.current[layerSrc];
      const display = displayCanvasRef.current;
      if (!mask || !display) return;
      const mctx = mask.getContext('2d');
      if (!mctx) return;

      const rect = display.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * mask.width;
      const y = ((e.clientY - rect.top) / rect.height) * mask.height;

      mctx.fillStyle = 'white';
      mctx.beginPath();
      mctx.arc(x, y, 30, 0, Math.PI * 2);
      mctx.fill();

      render();
    };

    // initialize base canvas and base image
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
      container.innerHTML = '';

      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      displayCanvasRef.current = canvas;
      container.appendChild(canvas);

      imagesLoaded.current = { base: false, pigments: {} };
      maskCanvasesRef.current = {};
      pigmentImagesRef.current = {};

      const base = new Image();
      base.src = `${basePath}/${selectedSymbol}.png`;
      base.onload = () => {
        imagesLoaded.current.base = true;
        render();
      };
      baseImageRef.current = base;
    }, [basePath, selectedSymbol]);

    // update mask & pigment on layerSrc change
    useEffect(() => {
      if (!layerSrc) return;
      // ensure mask canvas exists
      if (!maskCanvasesRef.current[layerSrc]) {
        const mc = document.createElement('canvas');
        mc.width = 1024;
        mc.height = 1024;
        maskCanvasesRef.current[layerSrc] = mc;
      }
      // load pigment image fresh
      const pigment = new Image();
      pigment.src = layerSrc;
      pigment.onload = () => {
        imagesLoaded.current.pigments[layerSrc] = true;
        pigmentImagesRef.current[layerSrc] = pigment;
        render();
      };
    }, [layerSrc]);

    // pointer events
    useEffect(() => {
      const canvas = displayCanvasRef.current;
      if (!canvas) return;
      const down = () => (drawing.current = true);
      const up = () => (drawing.current = false);
      const leave = () => (drawing.current = false);
      canvas.addEventListener('pointerdown', down);
      canvas.addEventListener('pointerup', up);
      canvas.addEventListener('pointerleave', leave);
      canvas.addEventListener('pointermove', handleDraw);
      return () => {
        canvas.removeEventListener('pointerdown', down);
        canvas.removeEventListener('pointerup', up);
        canvas.removeEventListener('pointerleave', leave);
        canvas.removeEventListener('pointermove', handleDraw);
      };
    }, [layerSrc]);

    return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />;
  }
);
