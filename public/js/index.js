// Add and Remove class to show animation of hamburger menu
document.addEventListener('DOMContentLoaded', () => {
	let checkbox = document.querySelector('.nav-toggle');
	let checkboxLabel = document.querySelector('.nav-toggle-label');

	function removeActive() {
		checkboxLabel.classList.remove('nav-toggle-label--active');
	}

	checkbox.onclick = function() {
		if (checkbox.checked) {
			checkboxLabel.classList.add('nav-toggle-label--active');
		} else {
			removeActive();
		}
	};

	let menu = document.querySelector('.menu');
	menu.onclick = function() {
		removeActive();
		checkbox.checked = false;
	};
});
