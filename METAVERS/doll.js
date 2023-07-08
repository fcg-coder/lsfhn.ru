import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightHelper } from 'RectAreaLightHelper'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';

function init() {
    let container = document.querySelector('.model');

    //Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("black");

    //Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight , 0.1, 100);
    camera.position.set(1, 0.1, 1)

    //render
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize( window.innerWidth, window.innerHeight,false)
    container.appendChild(renderer.domElement)



    // Получение доступа к канвасу и изменение его свойств


    const canvas = renderer.domElement;

    // Изменение размера канваса
    canvas.width = '50%';
    canvas.height = '100%';

    // Изменение стиля канваса
    // Изменение других свойств канваса
    // Другие операции с канвасом...
    let plain;
    {
        plain = new THREE.Mesh(
            new THREE.PlaneGeometry(0, 0),
            new THREE.MeshBasicMaterial({color: "#E2DFE1"})
        )
        plain.reciveShadow = true;
        plain.position.set(0, -1, 0)
        plain.rotateX(-Math.PI / 2);
        scene.add(plain)
    }

    // Model
    {
        const loader = new GLTFLoader();
        loader.load('doll.glb', glb => {
        scene.add(glb.scene);
        }, 
            function (error) {
                console.log('Error: ' + error)
            }
        )
    }
    
    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 0, 10)
        light.lookAt(0, -1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    {
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(2, 0, 5)
        light.lookAt(0, 1, 0)
        scene.add(light)

        // Helper
        // const helper = new THREE.DirectionalLightHelper(light, 5)
        // scene.add(helper)
    }

    RectAreaLightUniformsLib.init();
    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(-10,0,0)
        rectLight.rotation.y = Math.PI + Math.PI/4;
        scene.add(rectLight)
    }

    {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(10,0,0)
        rectLight.rotation.y = Math.PI - Math.PI/4;
        scene.add(rectLight)
    }
    
    //OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    controls.enableDamping = true;

    //Resize
    window.addEventListener('resize', onWindowResize, false)
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight / 1.75;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth/1.75, window.innerHeight,false)
    }

    // Animate
    function animate() {
        requestAnimationFrame(animate)
        controls.update();
        renderer.render(scene, camera)
    }
    animate()
    onWindowResize()

}

init()