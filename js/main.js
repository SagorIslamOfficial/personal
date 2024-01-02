// Text typing animation
new TypeIt("#aa-qsdd", {
	// strings: "This is a simple string.",
	loop: true,
	speed: 100,
	waitUntilVisible: true,
}).go();

//Installing Tooltip globally
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Installing Particles JS
let particles = Particles.init({
	selector: ".background",
	color: "#ffc107",
	maxParticles: 100,
	sizeVariations: 1.5,
});

//Installing Image pop-up for showing certificate
function showImage() {
	document.getElementById("popup").style.display = "flex";
	setTimeout(function () {
		document.getElementById("popup").style.opacity = 1;
	}, 5); // Add a slight delay to allow the display property to take effect
	document.body.classList.add("popup-opened");
}

function hideImage() {
	document.getElementById("popup").style.opacity = 0;
	setTimeout(function () {
		document.getElementById("popup").style.display = "none";
	}, 300); // Set the delay to match the transition duration
	document.body.classList.remove("popup-opened");
}
