import React, { useEffect, useRef } from "react";
import * as THREE from "three";


interface TextSpriteParameters {
  fontsize: number;
  textColor: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

const ThreeJsScene: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
    }

    // Append the renderer's DOM element to the div with the ref
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Handling window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);


    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      500,
    );
    camera.position.set(0, 2, 14);


    // Scene
    const scene = new THREE.Scene();
    const city = new THREE.Object3D();
    const smoke = new THREE.Object3D();
    const town = new THREE.Object3D();

    let createCarPos = true;
    const uSpeed = 0.001;

    const setcolor = 0xf02050;
    
    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 10, 16);

    function mathRandom(num = 8) {
      const numValue = -Math.random() * num + Math.random() * num;
      return numValue;
    }

    function setTintColor() {
      return 0x000000;
    }

    const list1 = [
      "Resilience", "Compassion", "Integrity", "Courage", "Empathy", 
      "Visionary", "Adaptability", "Humility", "Confidence", "Optimism", 
      "Perseverance", "Decisiveness", "Initiative", "Innovation", "Empowerment", 
      "Accountability", "Collaboration", "Inspiration", "Authenticity", "Wisdom", 
      "Fairness", "Trustworthiness", "Determination", "Assertiveness", "Humor", 
      "Calmness", "Patience", "Open-mindedness", "Strategic", "Self-awareness", 
      "Empowering", "Creativity", "Curiosity", "Influence", "Charisma", 
      "Independence", "Gratitude", "Generosity", "Sensitivity", "Tolerance", 
      "Responsibility", "Caring", "Respect", "Kindness", "Generosity", 
      "Self-discipline", "Ambition", "Resourcefulness", "Inclusivity", "Tenacity", 
      "Dedication", "Adventurous", "Inspiring", "Persuasive", "Mentorship", 
      "Inspirational", "Empathetic", "Innovative", "Pioneering", "Strategic", 
      "Collaborative", "Motivational", "Forward-thinking", "Diplomatic", 
      "Sociable", "Inspirational", "Tough-minded", "Champion", "Perceptive", 
      "Problem-solver", "Team-player", "Goal-oriented"
    ];

    const list2 = [
      "MC", "Nathan", "Xian", "Sophia", "William", 
      "Weiguo", "Wellesley", "Sean", "Matteo", "Chris", 
      "Florian", "Mia", "Charlotte", "Ethan", 
      "Jenna", "Daniel", "Matthew",  
       "David", "Emily", "Olivia",
      "Elizabeth", "Logan", "Johnny", "Roger", "Youssef"
    ];

    function getRandomWordAndColor() {
      const isList1 = Math.random() < 0.5;
      const list = isList1 ? list1 : list2;
      const color = isList1 ? { r: 255, g: 255, b: 255, a: 1.0 } : { r: 255, g: 255, b: 0, a: 1.0 };
      const word = list[Math.floor(Math.random() * list.length)];
      return { word, color };
    }

    function makeTextSprite(message: string, parameters: TextSpriteParameters): THREE.Sprite | null {
      const canvas = document.createElement('canvas');
   const context = canvas.getContext('2d');
    if (!context) return null; 

      context.font = `${parameters.fontsize}px Arial`;
      context.fillStyle = `rgba(${parameters.textColor.r}, ${parameters.textColor.g}, ${parameters.textColor.b}, ${parameters.textColor.a})`;
      context.fillText(message, 0, parameters.fontsize);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.5 * parameters.fontsize, 0.25 * parameters.fontsize, 0.75 * parameters.fontsize);
      return sprite;
    }

    function init() {
      let textSpriteCount = 0;
      for (let i = 1; i < 100; i++) {
        const boxHeight = Math.random() * 0.5 + 0.1;
        const geometry = new THREE.BoxGeometry(1, Math.random(), 1);
        const material = new THREE.MeshStandardMaterial({
          color: setTintColor(),
          wireframe: false,
          side: THREE.DoubleSide,
        });
        const wmaterial = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
          side: THREE.DoubleSide,
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.castShadow = true;
        cube.receiveShadow = true;
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());
        cube.position.y = boxHeight / 2;
        town.add(cube);

        // const wire = new THREE.Mesh(geometry, wmaterial);
        const floor = new THREE.Mesh(geometry, material);
        const wfloor = new THREE.Mesh(geometry, wmaterial);

        cube.add(wfloor);
        if (textSpriteCount < 50) {
          const { word, color } = getRandomWordAndColor();
          const sprite = makeTextSprite(word, { fontsize: 10, textColor: color });
          if (sprite) { // Check if sprite is not null
            sprite.position.set(cube.position.x, cube.position.y + 1, cube.position.z);
            town.add(sprite);
            textSpriteCount++;
          }
        }
        

        // cube.rotationValue = 0.1 + Math.abs(mathRandom(8));

        floor.scale.y = 0.05;
        
        const cubeWidth = 0.9;
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);

        floor.position.set(cube.position.x, 0, cube.position.z);

        town.add(floor);
        
      }

      const gmaterial = new THREE.MeshToonMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
      });
      const gparticular = new THREE.CircleGeometry(0.01, 3);
      const aparticular = 5;

      for (let h = 1; h < 300; h++) {
        const particular = new THREE.Mesh(gparticular, gmaterial);
        particular.position.set(
          mathRandom(aparticular),
          mathRandom(aparticular),
          mathRandom(aparticular),
        );
        particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
        smoke.add(particular);
      }

      const pmaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        roughness: 10,
        metalness: 0.6,
        opacity: 0.9,
        transparent: true,
      });
      const pgeometry = new THREE.PlaneGeometry(60, 60);
      const pelement = new THREE.Mesh(pgeometry, pmaterial);
      pelement.rotation.x = (-90 * Math.PI) / 180;
      pelement.position.y = -0.001;
      pelement.receiveShadow = true;

      city.add(pelement);
    }

    // const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    // let intersected: THREE.Object3D | null = null;

    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onDocumentTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouse.x = event.touches[0].pageX - window.innerWidth / 2;
        mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      }
    };

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouse.x = event.touches[0].pageX - window.innerWidth / 2;
        mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      }
    };

    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("touchstart", onDocumentTouchStart, false);
    window.addEventListener("touchmove", onDocumentTouchMove, false);

    // Ambient and spot lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    const lightFront = new THREE.SpotLight(0xffffff, 20, 10);
    const lightBack = new THREE.PointLight(0xffffff, 0.5);

    // const spotLightHelper = new THREE.SpotLightHelper(lightFront);

    lightFront.rotation.x = (45 * Math.PI) / 180;
    lightFront.rotation.z = (-45 * Math.PI) / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    smoke.position.y = 2;

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(smoke);
    city.add(town);

    const gridHelper = new THREE.GridHelper(60, 120, 0xff0000, 0x000000);
    city.add(gridHelper);

    const createCars = function (cScale = 2, cPos = 20, cColor = 0xffff00) {
      const cMat = new THREE.MeshToonMaterial({
        color: cColor,
        side: THREE.DoubleSide,
      });
      const cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40);
      const cElem = new THREE.Mesh(cGeo, cMat);
      const cAmp = 3;

      if (createCarPos) {
        createCarPos = false;
        cElem.position.x = -cPos;
        cElem.position.z = mathRandom(cAmp);
      } else {
        createCarPos = true;
        cElem.position.x = mathRandom(cAmp);
        cElem.position.z = -cPos;
        cElem.rotation.y = (90 * Math.PI) / 180;
      }
      cElem.receiveShadow = true;
      cElem.castShadow = true;
      cElem.position.y = Math.abs(mathRandom(5));
      city.add(cElem);
    };

    const generateLines = function () {
      for (let i = 0; i < 60; i++) {
        createCars(0.1, 20);
      }
    };

    // const cameraSet = function () {
    //   createCars(0.1, 20, 0xffffff);
    // };

    const animate = function () {
      // const time = Date.now() * 0.00005;
      requestAnimationFrame(animate);

      city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed;
      city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
      if (city.rotation.x < -0.05) city.rotation.x = -0.05;
      else if (city.rotation.x > 1) city.rotation.x = 1;
      // const cityRotation = Math.sin(Date.now() / 5000) * 13;

      // for (let i = 0, l = town.children.length; i < l; i++) {
      //   const object = town.children[i];
      // }

      smoke.rotation.y += 0.01;
      smoke.rotation.x += 0.01;

      camera.lookAt(city.position);
      renderer.render(scene, camera);
    };

    generateLines();
    init();
    animate();
    // ads
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onDocumentTouchStart);
      window.removeEventListener("touchmove", onDocumentTouchMove);

      // Clean up the scene and dispose of resources
      scene.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material instanceof THREE.Material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      if (renderer) {
        renderer.dispose(); // Dispose of the renderer itself
        if (canvasRef.current) {
          canvasRef.current.removeChild(renderer.domElement); // Remove the renderer’s DOM element from the div
        }
      }
    };
      }, []); // Dependency array
    
      return <div ref={canvasRef} />;
  };

export default ThreeJsScene;
