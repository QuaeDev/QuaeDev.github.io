// FADE
$(document).ready(function () {
	$(window).on("load", function () {
		function fade() {
			var animation_height = $(window).innerHeight() * 0.25;
			var ratio = Math.round((1 / animation_height) * 10000) / 10000;

			$(".fade").each(function () {
				var objectTop = $(this).offset().top;
				var windowBottom = $(window).scrollTop() + $(window).innerHeight();

				if (objectTop < windowBottom) {
					if (objectTop < windowBottom - animation_height) {
						// $(this).html("fully visible");
						$(this).css({
							transition: "opacity 0.75s linear",
							opacity: 1,
						});
						// $(this).css({
						// 	transition: translateY(window.innerHeight()),
						// });
					} else {
						$(this).css({
							transition: "opacity 0.25s linear",
							opacity: (windowBottom - objectTop) * ratio,
						});
					}
				} else {
					$(this).css("opacity", 0);
				}
			});
		}
		$(".fade").css("opacity", 0);
		fade();
		$(window).scroll(function () {
			fade();
		});
	});
});
function openNav() {
	//opens side navbar by 70 percent

	document.getElementById("mySidenav").style.width = "175px";

	//opens overlay display
	document.getElementById("backdrop").style.display = "block";
}

function closeNav() {
	//closes side navbar totally
	document.getElementById("mySidenav").style.width = "0";

	//removes overlay display
	document.getElementById("backdrop").style.display = "none";
}
function showMore() {
	//opens side navbar by 70 percent

	// document.getElementById("more-drop-down").style.width = "175px";

	//opens overlay display
	document.getElementById("more-drop-down").classList.remove = "hidden";
}
function hideMore() {
	//closes side navbar totally
	// document.getElementById("more-drop-down").style.width = "0";

	//removes overlay display
	document.getElementById("more-drop-down").classList.add = "hidden";
}

// SPLASH SCREEN

let intro = document.querySelector(".intro");
let load = document.querySelector(".load-header");
let loadSpan = document.querySelectorAll(".load");
let loadLogo = document.querySelectorAll(".loadLogo");

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		loadSpan.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add("active");
			}, (idx + 1) * 100);
		});
		setTimeout(() => {
			loadSpan.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove("active");
					span.classList.add("fade");
				}, (idx + 1) * 100);
			});
		}, 2000);
		setTimeout(() => {
			intro.style.top = "-100vh";
		}, 2300);
	});
});

var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName("typewrite");
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute("data-type");
		var period = elements[i].getAttribute("data-period");
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slide-show-card");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 5000); // Change image every 2 seconds
}

showSlidesManual(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlidesManual((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlidesManual((slideIndex = n));
}

function showSlidesManual(n) {
	var i;
	var slides = document.getElementsByClassName("slide-show-card");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
