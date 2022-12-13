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
		direction = event.deltaY / 125;
		counterPos -= 1 * direction;
		stopMovePos = normalizeNum(Math.PI * 2 * counterPos / 5);
		canMouseWheel = false;
	}
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