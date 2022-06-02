import rive from "@rive-app/canvas";
console.log("in the rive script");
const riveObj = new rive.Rive({
	src: "city.riv",
	canvas: document.getElementById("canvas"),
	autoplay: true,
});
