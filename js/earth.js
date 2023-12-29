import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const loader = new GLTFLoader();
let object;

loader.load(
    "./model/scene.gltf",
    function (gltf) {
        object = gltf.scene;
        object.scale.set(0.009, 0.009, 0.009);
        scene.add(object);
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
updateRendererSize();
document.getElementById("container3D").appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 2;

const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040, 1);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(15, 15, 15).normalize();
scene.add(directionalLight);

function updateRendererSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", updateRendererSize);

function animate() {
    requestAnimationFrame(animate);

    if (object) {
        object.rotation.y += 0.0055;
    }

    renderer.render(scene, camera);
}

animate();
