import * as THREE from 'three'
import vshader from './vshader';
import fshader from './fshader';

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z=50;

const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

const textureLoader=new THREE.TextureLoader()
const texture1=textureLoader.load('jon.jpg')
const texture2=textureLoader.load('wind.jpg')


var shaderMaterial=new THREE.ShaderMaterial({
    vertexShader:vshader,
    fragmentShader:fshader,
    uniforms:{
        parameter:{type:'f',value:0},
    
    texture1:{type:'t',value:texture1},
    texture2:{type:'t',value:texture2}
    }
})
const geometry=new THREE.PlaneGeometry(70,45,100,100)
var mesh=new THREE.Mesh(geometry,shaderMaterial)
scene.add(mesh)


animation()
function animation()
{
    
    shaderMaterial.uniforms.parameter.value+=0.01
        console.log('here')
    
   
    renderer.render(scene,camera)
    requestAnimationFrame(animation);
    
}