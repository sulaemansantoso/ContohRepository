let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight, //aspek ratio 16/9 4/3
    1,
    1000
);
let renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xfafafa);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);