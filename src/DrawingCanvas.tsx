// DrawingCanvas.tsx
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export type DrawingCanvasHandle = {
  resetCanvas: () => void;
};

interface DrawingCanvasProps {
  test: string;
  currentColor: string;
  pngImage: string;
}
export const DrawingCanvas = forwardRef<DrawingCanvasHandle, DrawingCanvasProps>(
function DrawingCanvas({ test, currentColor, pngImage }: DrawingCanvasProps, ref) {
  const mountRef = useRef<HTMLDivElement>(null);
  const offCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const currentColorRef = useRef<string>(currentColor);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const drawMeshRef = useRef<THREE.Mesh | null>(null);

  useImperativeHandle(ref, () => ({
      resetCanvas: () => {
        if (offCanvasRef.current && drawCtxRef.current && drawTextureRef.current) {
          drawCtxRef.current.clearRect(0, 0, offCanvasRef.current.width, offCanvasRef.current.height);
          drawTextureRef.current.needsUpdate = true;
        }
      },
    }));

  useEffect(() => {
    currentColorRef.current = currentColor;
  }, [currentColor]);

  useEffect(() => {
    if (!mountRef.current) return;

    // cleanup previous offCanvas if still present
    if (offCanvasRef.current && document.body.contains(offCanvasRef.current)) {
      document.body.removeChild(offCanvasRef.current);
      offCanvasRef.current = null;
      drawCtxRef.current = null;
      drawTextureRef.current = null;
    }
    // clear mount container
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
    }

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // offscreen canvas for drawing
    const offCanvas = document.createElement('canvas');
    offCanvas.width = offCanvas.height = 4096;
    offCanvas.style.display = 'none';
    document.body.appendChild(offCanvas);
    offCanvasRef.current = offCanvas;
    const ctx = offCanvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, offCanvas.width, offCanvas.height);
    drawCtxRef.current = ctx;

    const drawTexture = new THREE.CanvasTexture(offCanvas);
    drawTexture.minFilter = THREE.LinearFilter;
    drawTexture.magFilter = THREE.LinearFilter;
    drawTextureRef.current = drawTexture;

    // png overlay material
    const pngTex = new THREE.TextureLoader().load(pngImage);
    pngTex.minFilter = THREE.LinearFilter;
    pngTex.magFilter = THREE.LinearFilter;
    pngTex.wrapS = pngTex.wrapT = THREE.RepeatWrapping;
    const pngMat = new THREE.MeshStandardMaterial({
      map: pngTex,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    // load GLB
    const loader = new GLTFLoader();
    loader.load(test, (gltf) => {
      const mesh = gltf.scene.children.find(c => c instanceof THREE.Mesh) as THREE.Mesh;
      if (!mesh) return;
      const origMat = mesh.material as THREE.MeshStandardMaterial;
      const drawMat = new THREE.MeshStandardMaterial({
        map: drawTexture,
        normalMap: origMat.normalMap,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      mesh.material = [origMat, pngMat, drawMat];
      mesh.geometry.clearGroups();
      mesh.geometry.addGroup(0, mesh.geometry.index!.count, 0);
      mesh.geometry.addGroup(0, mesh.geometry.index!.count, 1);
      mesh.geometry.addGroup(0, mesh.geometry.index!.count, 2);
      drawMeshRef.current = mesh;
      scene.add(mesh);
    });

    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
    const dl = new THREE.DirectionalLight(0xffffff, 0.8);
    dl.position.set(2, 4, 5);
    scene.add(dl);

    let drawing = false;
    const onDown = () => (drawing = true);
    const onUp = () => (drawing = false);
    const onLeave = () => (drawing = false);
    const onMove = (e: PointerEvent) => {
      if (!drawing || !drawCtxRef.current || !drawTextureRef.current || !drawMeshRef.current) return;
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const intersect = raycaster.intersectObject(drawMeshRef.current, true);
      if (intersect.length) {
        const uv = intersect[0].uv!;
        const x = uv.x * offCanvas.width;
        const y = (1 - uv.y) * offCanvas.height;
        const grad = drawCtxRef.current!.createRadialGradient(x, y, 0, x, y, 40);
        grad.addColorStop(0, currentColorRef.current);
        grad.addColorStop(1, `${currentColorRef.current}00`);
        drawCtxRef.current!.fillStyle = grad;
        drawCtxRef.current!.beginPath();
        drawCtxRef.current!.arc(x, y, 40, 0, Math.PI * 2);
        drawCtxRef.current!.fill();
        drawTextureRef.current.needsUpdate = true;
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onDown);
    dom.addEventListener('pointerup', onUp);
    dom.addEventListener('pointerleave', onLeave);
    dom.addEventListener('pointermove', onMove);

    (function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    })();

    return () => {
      dom.removeEventListener('pointerdown', onDown);
      dom.removeEventListener('pointerup', onUp);
      dom.removeEventListener('pointerleave', onLeave);
      dom.removeEventListener('pointermove', onMove);
      if (mountRef.current) mountRef.current.innerHTML = '';
      if (offCanvasRef.current && document.body.contains(offCanvasRef.current)) {
        document.body.removeChild(offCanvasRef.current);
      }
    };
  }, [test, pngImage]);

  return <div ref={mountRef} className="w-full h-full fixed top-0 left-0 -z-10" />;
});
