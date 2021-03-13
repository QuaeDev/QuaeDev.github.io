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
						// $(this).html("fading in/out");
						$(this).css({
							transition: "opacity 0.25s linear",
							opacity: (windowBottom - objectTop) * ratio,
						});
					}
				} else {
					// $(this).html("not visible");
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
	var screenWidth = $(window).innerWidth();

	if (screenWidth <= 768) {
		document.getElementById("mySidenav").style.width = "175px";
	}

	//opens overlay display
	document.getElementById("backdrop").style.display = "block";
}

function closeNav() {
	//closes side navbar totally
	document.getElementById("mySidenav").style.width = "0";

	//removes overlay display
	document.getElementById("backdrop").style.display = "none";
}
