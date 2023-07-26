
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;
// renderer using canvas
const renderer=new THREE.WebGLRenderer();
// size for the canvas
renderer.setSize(window.innerWidth,window.innerHeight)
// add canvas to body
document.body.appendChild(renderer.domElement)
// to create a shape
const geometry=new THREE.BoxGeometry(1,1,1)
const material=new THREE.MeshBasicMaterial({color:'red'})
const cube=new THREE.Mesh(geometry,material);

scene.add(cube);

renderer.render(scene,camera)
