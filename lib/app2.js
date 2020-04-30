cam.position.z += 5; //melihat ke 0,0,0
cam.position.y += 1;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

let pGeo = new THREE.BoxGeometry(15,0.1,15);
let pMat = new THREE.MeshLambertMaterial({
    color:0xaaaaaa
});

//tanah
let pMesh = new THREE.Mesh(pGeo, pMat);
pMesh.receiveShadow = true;
pMesh.position.set(0,-0.5,0);
scene.add(pMesh);

let cGeo = new THREE.BoxGeometry(1, 1, 1);
let loader = new THREE.TextureLoader().load('texture/2.png', (berhasil) => {
    console.log("berhasil")
}, undefined, (e) => {
    console.log(e);
    });
let disp = new THREE.TextureLoader().load('texture/disp.jpg');

let cMat = new THREE.MeshPhongMaterial(
    {
        color: 0xffffff,
        map : loader,
        transparent : true,
        side : THREE.DoubleSide,
        bumpMap : disp,
        bumpScale :0.2
    }
);
let cMesh = new THREE.Mesh(cGeo, cMat);

cMesh.castShadow = true;
cMesh.position.set(0,1,0);
scene.add(cMesh);

//lighting rata ke semua
let ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

let plight = new THREE.PointLight(0xffffff,1);
plight.position.set(0,4,3);
plight.castShadow = true;
scene.add(plight);

function draw() {
    cMesh.rotation.y += 0.01;
    renderer.render(scene, cam);
    requestAnimationFrame(draw);
}
draw();


