const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffc100});
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

scene.background = new THREE.Color(0x10041c);

window.addEventListener('click', (event) => {

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;


raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObject(cone);

if (intersects.length > 0) {

    cone.position.x = (Math.random() - 0.5) * 10;
    cone.position.y = (Math.random() - 0.5) * 5;
    cone.position.z = (Math.random() - 0.5) * 5;
}
});

function animate() {
requestAnimationFrame(animate);
cone.rotation.x += 0.01; 
renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});


