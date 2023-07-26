
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
// cube.position.x=4
// cube.rotation.x=1 // rn this is taking value in radian
// to use degree we have a formula
// cube.rotation.x=Math.PI * (45/180.0)
// renderer.render(scene,camera)
// now implementing animation using function


let flag=true;

function animate()
{

    if(cube.position.x>5) flag=false;
    else if(cube.position.x< -5) flag=true

    if(flag)cube.position.x+=0.1
    else cube.position.x-=0.1
    // to give rotation to cube
    cube.rotation.x+=0.05
    cube.rotation.y+=0.05
    cube.rotation.z+=0.05
    // cube.position.y+=0.1
    // cube.position.z+=0.1
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
}
// for safety purpose  because sometimes any system is not capable for much smothness
 
animate()
// setInterval(animate,100)

