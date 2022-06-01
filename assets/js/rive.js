const rive = require("@rive-app/canvas");
new rive.Rive({
	src: "/assets/animations/city.riv",
	canvas: document.getElementById("rive-canvas"),
	autoplay: true,
});
