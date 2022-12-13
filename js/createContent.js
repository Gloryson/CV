import { getRandomNum } from './helpers.js';


let imgLoader = new THREE.TextureLoader();

let	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 150);

let	scene = new THREE.Scene();

let	renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let earth;


function createContent () {

  earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 32),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/earth-map.jpg')})
  );
  earth.position.set(0, 0, -5);
  earth.rotateX(0.5);
  scene.add(earth);

  let bigTitle = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6 * 0.133),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/front-end-developer.png'), transparent: true})
  );
  bigTitle.position.set(0, 1.25, -5);
  scene.add(bigTitle);

  let bigName = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2 * 0.13333),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/name.png'), transparent: true})
  );
  bigName.position.set(0, -1.12, -4);
  scene.add(bigName);

  let about = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 3),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/about.png'), transparent: true})
  );
  about.position.set(4, 0, -1.3);
  about.rotation.y = -Math.PI * 2 / 5;
  scene.add(about);

  let projectsFirstPage = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 3),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/projects-first-page.png'), transparent: true})
  );
  projectsFirstPage.position.set(2.5, 0, 3.4);
  projectsFirstPage.rotation.y = -Math.PI * 4 / 5;
  scene.add(projectsFirstPage);

  let projectsSecondPage = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 3),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/projects-second-page.png'), transparent: true})
  );
  projectsSecondPage.position.set(-2.5, 0, 3.38);
  projectsSecondPage.rotation.y = -Math.PI * 6 / 5;
  scene.add(projectsSecondPage);

  let contacts = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 3),
    new THREE.MeshBasicMaterial({map: imgLoader.load('./img/contacts.png'), transparent: true})
  );
  contacts.position.set(-4, 0, -1.3);
  contacts.rotation.y = Math.PI * 2 / 5;
  scene.add(contacts);
  
  

  for (let i = 0; i < 750; i++) {
    let star = new THREE.Mesh(
      new THREE.SphereGeometry(getRandomNum(0.01, 0.1), 64, 32),
      new THREE.MeshBasicMaterial({color: 0xffffff})
    );
    let x = getRandomNum(-100, 100);
    let z = getRandomNum(-100, 100);
  
    while (x > -35 && x < 35 && z < 35 && z > -35) {
      x = getRandomNum(-100, 100);
      z = getRandomNum(-100, 100);
    }
    
    star.position.set(x, getRandomNum(-50, 50), z);
    scene.add(star);
  }


}



export { createContent, camera, scene, renderer, earth };