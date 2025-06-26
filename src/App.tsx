import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";





export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentColor, setCurrentColor] = useState("#8b0000");
  const colors = useRef([
    "#8b0000",
    "#a0522d",
    "#cd853f",
    "#556b2f",
    "#000000",
  ]);

  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const currentColorRef = useRef<string>(currentColor);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const drawMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    currentColorRef.current = currentColor;
  }, [currentColor]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5); // Davanti al piano
    camera.lookAt(0, 0, 0);
if (mountRef.current.hasChildNodes()) {
  console.warn("Canvas già montato, salto.");
  return;
}
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee);
   mountRef.current.appendChild(renderer.domElement);


   



    const drawCanvas = document.createElement("canvas");
    drawCanvas.width = 4096;
    drawCanvas.height = 4096;
    //drawCanvas.style.display = "none";
    //document.body.appendChild(drawCanvas);
    drawCanvasRef.current = drawCanvas;
    const drawCtx = drawCanvas.getContext("2d");
    if (!drawCtx) return;
    drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    drawCtxRef.current = drawCtx;

    const drawTexture = new THREE.CanvasTexture(drawCanvas);
    drawTexture.minFilter = THREE.LinearFilter;
    drawTexture.magFilter = THREE.LinearFilter;
    drawTextureRef.current = drawTexture;

    const loader = new GLTFLoader();
   loader.load(
  "/roccia.glb",
  (gltf) => {
    const model = gltf.scene;

    model.traverse((child) => {
  if ((child as THREE.Mesh).isMesh && !drawMeshRef.current) {
    const mesh = child as THREE.Mesh;
    const originalMaterial = mesh.material as THREE.MeshStandardMaterial;

    // Mesh con texture originale
    const baseMesh = mesh.clone();
    baseMesh.material = originalMaterial;
    baseMesh.rotation.x = Math.PI / 2;
    baseMesh.position.set(0, 0, 0);
    scene.add(baseMesh);

    // Mesh disegnabile
    const drawMaterial = new THREE.MeshBasicMaterial({
      map: drawTexture,
      transparent: true,
      depthWrite: false,
    });

    const drawMesh = new THREE.Mesh(mesh.geometry, drawMaterial);
    drawMesh.position.copy(baseMesh.position);
    drawMesh.rotation.copy(baseMesh.rotation);
    drawMesh.scale.copy(baseMesh.scale);

    drawMeshRef.current = drawMesh;
    scene.add(drawMesh); // Mesh disegnabile sopra
  }
});
  },
  undefined,
  (error) => {
    console.error("Errore caricamento modello:", error);
  }
);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 4, 5);
    scene.add(directionalLight);

    let drawing = false;

    function handleDraw(e: PointerEvent) {
      if (!drawing || !drawCtxRef.current || !drawTextureRef.current || !drawMeshRef.current) return;
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(drawMeshRef.current);
      if (intersects.length > 0) {
        const uv = intersects[0].uv;
        if (!uv) return;

        const x = uv.x * drawCanvasRef.current!.width;
        const y = (1 - uv.y) * drawCanvasRef.current!.height;

        const ctx = drawCtxRef.current;
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = currentColorRef.current;
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        drawTextureRef.current.needsUpdate = true;
      }
    }

    const canvas = renderer.domElement;
    const onDown = () => (drawing = true);
    const onUp = () => (drawing = false);
    const onLeave = () => (drawing = false);

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointermove", handleDraw);
if (drawCanvas && document.body.contains(drawCanvas)) {
  document.body.removeChild(drawCanvas);
}
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointermove", handleDraw);
      mountRef.current?.removeChild(renderer.domElement);

      if (drawCanvas && document.body.contains(drawCanvas)) {
        document.body.removeChild(drawCanvas);
      }
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          display: "flex",
          gap: 8,
        }}
      >
        {colors.current.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            style={{
              width: 32,
              height: 32,
              backgroundColor: color,
              border: "2px solid #fff",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <div ref={mountRef} />
    </>
  );
}
