import { createContent, camera, scene, renderer, earth } from './createContent.js';
import { normalizeNum } from './helpers.js';


let direction, counterPos = 0, canMouseWheel = true, stopMovePos = 0, currCamPos, delta;

createContent();



window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});


window.addEventListener('mousewheel', (event) => {
	if (canMouseWheel) {
		direction = event.deltaY > 0 ? 1 : -1;
		counterPos -= 1 * direction;
		stopMovePos = normalizeNum(Math.PI * 2 * counterPos / 5);
		canMouseWheel = false;
	}
});


window.addEventListener("keydown", (event) => {
	switch (event.code) {    
		case 'KeyG': window.open('https://github.com/gloryson'); break;
		case 'KeyL': window.open('https://www.linkedin.com/in/gloryson/'); break;
		case 'KeyC': window.open('https://www.codewars.com/users/W%C5%82adek'); break;
	} 
});

window.addEventListener('load', () => {
	document.querySelector('.loading-screen').style.display = 'none';
});



function animate() {

	requestAnimationFrame(animate);

	currCamPos = normalizeNum(camera.rotation.y);
	delta = currCamPos - stopMovePos;

	if (currCamPos != stopMovePos) {
		camera.rotation.y -= delta / 10;
	} else {
		canMouseWheel = true;
	}

	earth.rotation.y += 0.00075;

	renderer.render(scene, camera);

}

animate();