cam.position.z += 15; //melihat ke 0,0,0
cam.position.y += 1;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

let pGeo = new THREE.BoxGeometry(15, 0.1, 15);
let pMat = new THREE.MeshLambertMaterial({
  color: 0xaaaaaa,
});

//tanah
let pMesh = new THREE.Mesh(pGeo, pMat);
pMesh.receiveShadow = true;
pMesh.position.set(0, -0.5, 0);
scene.add(pMesh);

let cGeo = new THREE.BoxGeometry(1, 1, 1);

let cMat = new THREE.MeshPhongMaterial({
  color: 0xff00ff,
});
let cMesh = new THREE.Mesh(cGeo, cMat);

cMesh.castShadow = true;
cMesh.position.set(0, 1, 0);
cMesh.matrixAutoUpdate = false;
scene.add(cMesh);

//lighting rata ke semua
let ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

let plight = new THREE.PointLight(0xffffff, 1);
plight.position.set(0, 3, 3);

plight.castShadow = true;
scene.add(plight);
scene.add(new THREE.PointLightHelper(plight, 0.2, 0x000000));

let controls = new THREE.OrbitControls(cam, renderer.domElement);

let rotationMatrix = new THREE.Matrix4().makeRotationY(Math.PI /2);
//anggap cMesh itu awalnya identity

function draw() {
  cMesh.matrix.fromArray(rotationMatrix.toArray());
  renderer.render(scene, cam);
  requestAnimationFrame(draw);
}
draw();
