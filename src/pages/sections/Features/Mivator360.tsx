import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

const ThreeJSCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const outerMeshRef = useRef<THREE.Mesh | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);

  const calculateRotation = useCallback((clientX: number, clientY: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const pos = (((360 * (clientX - width / 2)) / width) * Math.PI) / 180 / 2 - Math.PI / 2;
    const pos2 = (((360 * (clientY - height / 8)) / height) * Math.PI) / 180 - Math.PI / 2;

    return { pos, pos2 };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
    renderer.setPixelRatio(window.devicePixelRatio || 2);
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);
    camera.position.z = 5;

    // Textures
    const outerTexture = new THREE.TextureLoader().load('https://s33.postimg.cc/zaty10vot/out.png');
    const innerTexture = new THREE.TextureLoader().load('https://s33.postimg.cc/x69kzy9hp/middle.png');

    // Materials with precise transparency
    const outerMaterial = new THREE.MeshBasicMaterial({
      map: outerTexture,
      transparent: true,
      opacity: 1, // Full opacity for outer layer
    });

    const innerMaterial = new THREE.MeshBasicMaterial({
      map: innerTexture,
      transparent: true,
      opacity: 0.9, // Slightly reduced opacity for inner layer
    });

    // Geometries with precise sizing
    const outerGeometry = new THREE.SphereGeometry(10, 50, 50);
    const innerGeometry = new THREE.SphereGeometry(9.9, 50, 50);

    // Meshes
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);

    // Initial rotations
    outerMesh.rotation.y = -Math.PI / 2;
    innerMesh.rotation.y = -Math.PI / 2;

    // Add to scene
    scene.add(outerMesh);
    scene.add(innerMesh);

    // Store references
    outerMeshRef.current = outerMesh;
    innerMeshRef.current = innerMesh;

    // Animation loop
    const animate = () => {
      if (outerMesh && innerMesh && renderer) {
        outerMesh.rotation.y -= 0.0009;
        innerMesh.rotation.y += 0.0009;
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!outerMesh || !innerMesh) return;

      const { pos, pos2 } = calculateRotation(event.clientX, event.clientY);

      // Rotation logic
      outerMesh.rotation.y = -pos - Math.PI;
      innerMesh.rotation.y = pos;

      // X and Z rotation with reduced intensity
      outerMesh.rotation.x = pos2 / 10;
      innerMesh.rotation.x = pos2 / 10;
      outerMesh.rotation.z = pos2 / 10;
      innerMesh.rotation.z = pos2 / 10;
    };

    // Touch move handler
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length > 0 && outerMesh && innerMesh) {
        const touch = event.touches[0];
        const { pos, pos2 } = calculateRotation(touch.clientX, touch.clientY);

        outerMesh.rotation.y = -pos - Math.PI;
        innerMesh.rotation.y = pos;

        outerMesh.rotation.x = pos2 / 10;
        innerMesh.rotation.x = pos2 / 10;
        outerMesh.rotation.z = pos2 / 10;
        innerMesh.rotation.z = pos2 / 10;
      }
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);

      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
      scene.clear();
    };
  }, [calculateRotation]);

  return <div ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeJSCanvas;

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeJSCanvas: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let camera: THREE.OrthographicCamera;
//     let scene: THREE.Scene;
//     let renderer: THREE.WebGLRenderer;
//     let mesh: THREE.Mesh;
//     let mesh2: THREE.Mesh;

//     const init = () => {
//       renderer = new THREE.WebGLRenderer({ alpha: true });
//       renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
//       renderer.setPixelRatio(2);
//       if (containerRef.current) {
//         containerRef.current.appendChild(renderer.domElement);
//       }

//       scene = new THREE.Scene();
//       camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);
//       camera.position.z = 10;
//       camera.lookAt(0, 0, 0);

//       const texture = new THREE.TextureLoader().load('https://s33.postimg.cc/zaty10vot/out.png');
//       const texture2 = new THREE.TextureLoader().load('https://s33.postimg.cc/x69kzy9hp/middle.png');

//       const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//       const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });

//       const geometry = new THREE.SphereGeometry(9.98, 50, 50);
//       const geometry2 = new THREE.SphereGeometry(10, 50, 50);

//       mesh = new THREE.Mesh(geometry, material);
//       mesh2 = new THREE.Mesh(geometry2, material2);

//       mesh.rotation.y = -Math.PI / 2;
//       mesh2.rotation.y = -Math.PI / 2;

//       scene.add(mesh);
//       scene.add(mesh2);
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     const render = () => {
//       renderer.render(scene, camera);
//       mesh2.rotation.y -= 0.0009;
//       mesh.rotation.y += 0.0009;
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       const xRatio = (event.clientX / window.innerWidth) * 2 - 1;
//       const yRatio = (event.clientY / window.innerHeight) * 2 - 1;

//       const pos = (xRatio * Math.PI) / 4;
//       const pos2 = -(yRatio * Math.PI) / 4;

//       mesh.rotation.y = pos;
//       mesh2.rotation.y = -pos;
//       mesh.rotation.x = pos2 / 2;
//       mesh2.rotation.x = pos2 / 2;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     init();
//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (containerRef.current) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default ThreeJSCanvas;

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeJSCanvas: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let camera: THREE.OrthographicCamera;
//     let scene: THREE.Scene;
//     let renderer: THREE.WebGLRenderer;
//     let mesh: THREE.Mesh;
//     let mesh2: THREE.Mesh;

//     const init = () => {
//       renderer = new THREE.WebGLRenderer({ alpha: true });
//       renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
//       renderer.setPixelRatio(2);
//       if (containerRef.current) {
//         containerRef.current.appendChild(renderer.domElement);
//       }

//       scene = new THREE.Scene();
//       camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);
//       camera.position.z = 10;
//       camera.lookAt(0, 0, 0);

//       // Inline SVG as a string
//       const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.41 933.15">
//                       <path d="m78.26,867.42c-3.83-244.89-8.94-489.77-12.77-734.66h-14.05c-7.66,1.29-15.32-3.87-15.32-12.89,0-24.49-1.28-48.98-1.28-73.47,0-11.6,5.11-24.49,14.05-32.22C57.83,5.16,71.88,0,84.65,0h53.64c43.42,0,74.07,20.62,72.79,67.02-7.66,266.8-14.05,534.88-20.43,801.68-1.28,34.8-16.6,64.44-56.19,64.44s-56.19-30.93-56.19-65.73Z"/>
//                       <path d="m443.29,132.75c-11.49,0-21.71,9.02-21.71,20.62,0,117.29,1.28,235.87,2.55,353.15h53.64c60.02,0,109.82,54.13,105.99,114.71-3.83,68.31-6.38,135.33-10.22,203.64-1.28,54.13-43.42,108.27-98.33,108.27h-62.57c-57.47,0-99.61-54.13-100.89-108.27-1.28-25.78-2.55-50.27-3.83-76.04-2.55-39.96,15.32-68.31,57.47-68.31h14.05c31.93-2.58,45.97,19.33,45.97,48.98v50.27c0,10.31,6.39,21.91,17.88,21.91s17.88-10.31,16.6-21.91c0-39.96,1.28-79.91,1.28-118.58,0-11.6-6.39-23.2-17.88-21.91-22.99,0-47.25,0-70.24,1.29-48.53,1.29-72.79-27.07-74.07-74.75-7.66-158.53-15.32-317.06-22.99-475.6C272.17,28.36,310.48,1.29,367.95,1.29c49.8-1.29,99.61-1.29,149.41,0,57.47,0,95.78,27.07,91.95,88.93-5.11,100.53-8.94,201.06-14.05,300.31-1.28,42.53-25.54,67.02-67.68,64.44-43.42,0-66.41-25.78-65.13-68.31,1.28-77.33,1.28-154.67,1.28-233.29,0-11.6-10.22-20.62-20.43-20.62Z"/>
//                     </svg>`;

//       // Create an image from the SVG data
//       const img = new Image();
//       const svgBlob = new Blob([svg1], { type: 'image/svg+xml' });
//       const url = URL.createObjectURL(svgBlob);
//       img.src = url;

//       img.onload = () => {
//         const texture = new THREE.Texture(img);
//         texture.needsUpdate = true;

//         const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//         const geometry = new THREE.SphereGeometry(9.98, 50, 50);
//         mesh = new THREE.Mesh(geometry, material);
//         mesh.rotation.y = -Math.PI / 2;

//         scene.add(mesh);

//         // Create another mesh with a different texture
//         const texture2 = new THREE.Texture(img);  // Same texture for simplicity
//         texture2.needsUpdate = true;

//         const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });
//         const geometry2 = new THREE.SphereGeometry(10, 50, 50);
//         mesh2 = new THREE.Mesh(geometry2, material2);
//         mesh2.rotation.y = -Math.PI / 2;

//         scene.add(mesh2);
//       };
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     const render = () => {
//       renderer.render(scene, camera);
//       if (mesh2) mesh2.rotation.y -= 0.0009;
//       if (mesh) mesh.rotation.y += 0.0009;
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       const xRatio = (event.clientX / window.innerWidth) * 2 - 1;
//       const yRatio = (event.clientY / window.innerHeight) * 2 - 1;

//       const pos = (xRatio * Math.PI) / 4;
//       const pos2 = -(yRatio * Math.PI) / 4;

//       if (mesh) mesh.rotation.y = pos;
//       if (mesh2) mesh2.rotation.y = -pos;
//       if (mesh) mesh.rotation.x = pos2 / 2;
//       if (mesh2) mesh2.rotation.x = pos2 / 2;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     init();
//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (containerRef.current) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default ThreeJSCanvas;
