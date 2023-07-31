import * as THREE from 'three';
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=50;

const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry=new THREE.PlaneGeometry(30,30,30)
const material=new THREE.MeshBasicMaterial({color:0x00ff00})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)


function animate()
{
    requestAnimationFrame(animate)
    mesh.rotation.x+=0.02;
    mesh.rotation.y+=0.02;
    mesh.rotation.z+=0.02;
    renderer.render(scene,camera);
}
animate();