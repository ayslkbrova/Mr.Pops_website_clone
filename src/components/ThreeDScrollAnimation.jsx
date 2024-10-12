  import React, { useEffect, useRef } from 'react';
  import * as THREE from 'three';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';


  gsap.registerPlugin(ScrollTrigger);

  const ThreeDScrollAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      // Temel Three.js sahnesi
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Işıklandırma
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(10, 10, 10).normalize();
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Arka planı şeffaf yapıyoruz
      scene.background = null;

      // '0' rakamını oluşturmak için FontLoader kullanıyoruz
      const loader = new FontLoader();
      loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new TextGeometry('0', {
          font: font,
          size: 250,
          height: 40,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 4,
          bevelSize: 5,
          bevelSegments: 10,
        });

        // Gradient benzeri bir parlaklık için MeshPhongMaterial
        const material = new THREE.MeshPhongMaterial({
          color: 0xff3366, // Ana renk
          shininess: 200, // Parlama
          specular: 0xffffff, // Işık vurduğu zaman parlama efekti
          reflectivity: 1, // Yansıma seviyesi
          flatShading: false, // Pürüzsüz gölgeleme
        });

        const textMesh = new THREE.Mesh(textGeometry, material);

        // Pozisyonu ortalamak ve döndürme merkezini değiştirmek için bounding box kullanıyoruz
        textGeometry.computeBoundingBox();
        textGeometry.center();

        // Başlangıç pozisyonunu ayarla (ortada)
        textMesh.position.set(0, 200, 0); // Y ekseni: 200, kamera açısından daha yukarıda başlayacak

        // Sahneye ekleme
        scene.add(textMesh);

        // GSAP ScrollTrigger ile obje scroll yapıldıkça yukarı/aşağı ve yavaş dönecek
        ScrollTrigger.create({
          trigger: "#animation_section",
          start: 'top top+=100',
          onUpdate: (self) => {
            if (self.direction === 1) {
              gsap.to(textMesh.position, { y: textMesh.position.y - 10, duration: 2, ease: 'power2.out' });
              gsap.to(textMesh.rotation, {
                y: textMesh.rotation.y + Math.PI / 6, // Küçük adımlarla dönsün (30 derece)
                duration: 2,
                ease: 'power2.out',
              });
            } else if (self.direction === -1) {
              gsap.to(textMesh.position, { y: textMesh.position.y + 10, duration: 2, ease: 'power2.out' });
              gsap.to(textMesh.rotation, {
                y: textMesh.rotation.y - Math.PI / 6, // Ters yöne küçük adımlarla döner
                duration: 2,
                ease: 'power2.out',
              });
            }
          },
        });

        // Render döngüsü
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      });

      // Kamera pozisyonu
      camera.position.set(0, 145, 400); // Kamerayı daha merkezi bir konuma yerleştirdim
      camera.updateProjectionMatrix(); // Kamera parametrelerini güncelle

      // Kamera FOV ayarını değiştirme
      camera.fov = 55;
      camera.updateProjectionMatrix();

      // Pencere boyutlandırma
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div id='animation_section'>
        <div className="text-container">
          <div className="data">
            <h1>We Have Several Conditions</h1>
            <p>
              Do you want to become our partner? We are open to cooperation, but first, we always get acquainted with the
              location to find "our own". So no offense - there are also cases when we are destined to grow separately.
            </p>
            <p style={{ marginTop: '450px' }}>
              After filling out the questionnaire, our manager will process it and send you detailed information about
              cooperation. This includes prices, equipment rental conditions, and recommended retail price.
            </p>
          </div>
          <div className="canvas-container">
            <canvas ref={canvasRef} id="myCanvas"></canvas>
          </div>
          <div className="data" style={{ marginTop: '250px' }}>
            <h1>DEAL? THEN FILL OUT THE FORM</h1>
            <p>Just 10 basic questions that will take 10 minutes at most. But these 10 minutes can be the start of our joint flight.</p>
          </div>
        </div>
      </div>
    );
  };

  export default ThreeDScrollAnimation;
