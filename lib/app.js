let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight, //aspek ratio 16/9 4/3
    1,
    1000
);
let renderer = new THREE.WebGLRenderer();
cam.position.z += 5; //melihat ke 0,0,0
scene.background = new THREE.Color(0xfafafa);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let cGeo = new THREE.Geometry();
cGeo.vertices.push(
    new THREE.Vector3(-1, -1, 0), //0
    new THREE.Vector3(-1, 1, 0),  //1
    new THREE.Vector3(1, -1, 0), //2
    new THREE.Vector3(1, 1, 0), //3
);
cGeo.faces.push(
    new THREE.Face3(0, 2, 1), //segitiga pertama
    new THREE.Face3(2, 3, 1), //segitiga kedua
);
//segitiga pertama
let uv1 = [
    new THREE.Vector2(0.2, 0.2), // untuk vertex 0
    new THREE.Vector2(0.8, 0.2), // untuk vertex 2
    new THREE.Vector2(0.2, 0.8), // untuk vertex 1
];
//segitiga kedua
let uv2 = [
    new THREE.Vector2(0.8, 0.2), // 2
    new THREE.Vector2(0.8, 0.8), // 3
    new THREE.Vector2(0.2, 0.8), // 1
];
//si 0 yang pertama itu UV layer jadi gak usah diotak atik
cGeo.faceVertexUvs[0].push(uv1);//segitiga pertama
cGeo.faceVertexUvs[0].push(uv2); // segitiga kedua

let ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

let plight = new THREE.PointLight(0xffffff, 1);
plight.position.set(0, 4, 3);
scene.add(plight);


let texture = new THREE.TextureLoader().load('texture/logo.jpg', undefined, undefined, (e) => {
    console.log(e);
});
let cMat = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: texture
});
let cMesh = new THREE.Mesh(cGeo, cMat);
scene.add(cMesh);

addEventListener('mousemove', (e) =>{

});

function draw() {
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();


