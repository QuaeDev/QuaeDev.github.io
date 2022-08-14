const header = /*html*/ `<header id="header">
			<div class="header-content">
				<div id="behind-navigation-links" onclick="toggleNav()"></div>
				<a href="/" class="logo-link">
					<img
						src="/assets/img/quae_logo_color_transparent.png"
						alt="Quae Logo"
						class="logo"
						id="logo-color"
					/>
					<img
						src="/assets/img/quae_logo_white.png"
						alt="Quae Logo"
						class="logo"
						id="logo-white"
					/>
				</a>
				<div id="navigation-links">
				<a href="/about_us/">
					<p>About</p>
				</a>
				<a href="/mission/">
					<p>Mission</p>
				</a>
				<div class="dropdown-container" onmouseenter="onHover('communities-drop-down', 'enter')" onmouseleave="onHover('communities-drop-down', 'leave')" onClick="onHover('communities-drop-down', 'enter')"> 
					<p>Communities </p>
					<div class="drop-down-content" id="communities-drop-down">
						<a href="/communities/">	
							<p>
							Communities
							</p>
						</a>
						<a href="/communities/stevens">
							<p>Stevens</p>	
						</a>
						<a href="/communities/hoboken">
							<p>Hoboken</p>
						</a>
					</div>
				</div>
				<a href="https://docs.quae.app/">
					<p>Docs</p>
				</a>
				<a href="https://medium.com/quae-app">
					<p>Blog</p>
				</a>
				<a href="/pages/faq">
					<p>FAQ</p>
				</a>
				</div>
				<button class="menu" id="menu-btn" onclick="toggleNav()">
					<i class="material-icons">menu</i>
				</button>
				<div class="buttons">
					<a href="https://web.quae.app/auth/signup">
						<button class="primary sm">Sign Up</button>
					</a>
					<a href="https://web.quae.app/auth">
						<button class="secondary sm">Log In</button>
					</a>
				</div>
			</div>
		</header>
		`;

function renderHeader() {
	const placeholder = document.querySelector("#header-placeholder");
	placeholder.innerHTML = header;
}
renderHeader();
document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > 490) {
		document.querySelector("#header").classList.add("scrolled");
	}
	if (scroll < 490) {
		document.querySelector("#header").classList.remove("scrolled");
	}
};
function onHover(contentId, state) {
	let navLinks = document.getElementById("navigation-links");
	let element = document.getElementById(contentId);
	if (state === "enter") {
		// element.classList.remove("hidden");
		element.classList.add("visible");
		navLinks.classList.add("drop-down-visible");
	} else {
		element.classList.remove("visible");
		navLinks.classList.remove("drop-down-visible");
		// element.classList.add("hidden");
	}
}
var navVisible = false;
function toggleNav() {
	if (navVisible) {
		closeNav();
	} else showNav();
}
function showNav() {
	navVisible = true;
	document.getElementById("navigation-links").style.display = "block";
	document.getElementById("behind-navigation-links").style.display = "block";
}
function closeNav() {
	navVisible = false;
	document.getElementById("behind-navigation-links").style.display = "none";
	document.getElementById("navigation-links").style.display = "none";
}
