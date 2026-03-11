import githubPagesBase from '@/assets/CONSTANTS';
import { IRootState } from '@/store';
import { toggleColorScheme } from '@Store/themeConfigSlice';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as THREE from 'three';

const SphericalScene: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const mesh2Ref = useRef<THREE.Mesh | null>(null);

  const { colorScheme } = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);
  // @ts-ignore
  const changeColorScheme = (newColorScheme: string) => {
    dispatch(toggleColorScheme(newColorScheme));
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
    renderer.setPixelRatio(2);
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);
    cameraRef.current = camera;

    setIsInitialized(true);

    // Cleanup function
    return () => {
      renderer.dispose();
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const updateTextures = () => {
      const themedImg1 = `/${githubPagesBase}spheric/${colorScheme}1.png`;
      const themedImg2 = `/${githubPagesBase}spheric/${colorScheme}2.png`;

      const textureLoader = new THREE.TextureLoader();

      textureLoader.load(
        themedImg1,
        (texture1) => {
          if (meshRef.current) {
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.map = texture1;
            material.needsUpdate = true;
          }
        },
        undefined,
        (err) => console.error('Error loading texture 1:', err),
      );

      textureLoader.load(
        themedImg2,
        (texture2) => {
          if (mesh2Ref.current) {
            const material = mesh2Ref.current.material as THREE.MeshBasicMaterial;
            material.map = texture2;
            material.needsUpdate = true;
          }
        },
        undefined,
        (err) => console.error('Error loading texture 2:', err),
      );
    };

    const createMeshes = () => {
      // Recreate the mesh objects with the updated textures
      if (meshRef.current) {
        sceneRef.current?.remove(meshRef.current);
        meshRef.current = null;
      }
      if (mesh2Ref.current) {
        sceneRef.current?.remove(mesh2Ref.current);
        mesh2Ref.current = null;
      }

      // Create new mesh objects with the updated textures
      const material1 = new THREE.MeshBasicMaterial({ transparent: true });
      const material2 = new THREE.MeshBasicMaterial({ transparent: true });
      const geometry1 = new THREE.SphereGeometry(9.98, 50, 50);
      const geometry2 = new THREE.SphereGeometry(10, 50, 50);
      const mesh1 = new THREE.Mesh(geometry1, material1);
      const mesh2 = new THREE.Mesh(geometry2, material2);

      mesh1.rotation.y = -Math.PI / 2;
      mesh2.rotation.y = -Math.PI / 2;

      meshRef.current = mesh1;
      mesh2Ref.current = mesh2;

      sceneRef.current?.add(mesh1);
      sceneRef.current?.add(mesh2);

      updateTextures();
    };

    createMeshes();
  }, [colorScheme, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!meshRef.current || !mesh2Ref.current) return;

      const pos = (((360 * (event.pageX - window.innerWidth / 2)) / window.innerWidth) * Math.PI) / 180 / 2 - Math.PI / 2;
      const pos2 = (((360 * (event.pageY - window.innerHeight / 8)) / window.innerHeight) * Math.PI) / 180 - Math.PI / 2;

      mesh2Ref.current.rotation.y = -pos - Math.PI;
      meshRef.current.rotation.y = pos;

      mesh2Ref.current.rotation.x = pos2 / 10;
      meshRef.current.rotation.x = pos2 / 10;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!meshRef.current || !mesh2Ref.current) return;

      const touch = event.touches[0];
      const pos = (((360 * (touch.pageX - window.innerWidth / 2)) / window.innerWidth) * Math.PI) / 180 / 2 - Math.PI / 2;
      const pos2 = (((360 * (touch.pageY - window.innerHeight / 8)) / window.innerHeight) * Math.PI) / 180 - Math.PI / 2;

      mesh2Ref.current.rotation.y = -pos - Math.PI;
      meshRef.current.rotation.y = pos;

      mesh2Ref.current.rotation.x = pos2 / 10;
      meshRef.current.rotation.x = pos2 / 10;
    };

    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      requestAnimationFrame(animate);

      if (meshRef.current && mesh2Ref.current) {
        mesh2Ref.current.rotation.y -= 0.0009;
        meshRef.current.rotation.y += 0.0009;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    animate();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isInitialized]);

  return <div ref={canvasRef} className="flex justify-center items-center size-full" />;
};

export default SphericalScene;
