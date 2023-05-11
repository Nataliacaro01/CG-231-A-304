var size = 30;
var arrowSize = 10;
var divisions = 100;
var origin = new THREE.Vector3(0, 0, 0);
var x = new THREE.Vector3(1, 0, 0);
var y = new THREE.Vector3(0, 1, 0);
var z = new THREE.Vector3(0, 0, 1);
var color2 = new THREE.Color(0x333333);
var colorR = new THREE.Color(0xAA0000);
var colorG = new THREE.Color(0x00AA00);
var colorB = new THREE.Color(0x0000AA);

// Configuración de la escena y el renderizador
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

function CrearPoligono(n, r) {
  const vertices=[];
  const a = 2 * Math.PI / n;

  for (let i = 0; i <= n; i++) {
    const x = r * Math.cos(i * a);
    const y = r * Math.sin(i * a);
    vertices.push([x,y]);
  }
  return vertices;
}

function Poliedro(n,r,h){
  const vertices=[];
  


  return vertices;
  
}

const Figura = (CrearPoligono);
scene.add(Figura);




// Configuración de la cámara y los controles
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Renderizamos la escena
renderer.render(scene, camera);
