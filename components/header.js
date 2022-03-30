const header = /*html*/ `<header id="header">
			<div class="header-content">
				<div onclick="closeNav()" id="behind-navigation-links"></div>
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
					<a href="https://docs.quae.app/">
						<p>Docs</p>
					</a>
					<a href="https://medium.com/quae-app">
						<p>Blog</p>
					</a>
					
					<a href="/about_us/">
						<p>About Us</p>
					</a>
				</div>
				<button class="menu" id="menu-btn" onclick="showNav()">
					<i class="material-icons">menu</i>
				</button>
				<div class="buttons">
					<a href="https://beta.quae.app/account/signup">
						<button class="primary"><p>Sign Up</p></button>
					</a>
					<a href="https://beta.quae.app/account/login">
						<button class="secondary"><p>Log In</p></button>
					</a>
				</div>
			</div>
		</header>`;

function renderHeader() {
	console.log("inside header render function");
	const placeholder = document.querySelector("#header-placeholder");
	placeholder.innerHTML = header;
}
renderHeader();
document.onscroll = function () {
	let scroll = window.scrollY;
	if (scroll > 40) {
		document.querySelector("#header").classList.add("scrolled");
	}
	if (scroll < 40) {
		document.querySelector("#header").classList.remove("scrolled");
	}
};
function showNav() {
	console.log("clicked");
	document.getElementById("navigation-links").style.display = "block";
	document.getElementById("behind-navigation-links").style.display = "block";
}
function closeNav() {
	console.log("clicked");
	document.getElementById("behind-navigation-links").style.display = "none";
	document.getElementById("navigation-links").style.display = "none";
}