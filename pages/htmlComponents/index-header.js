const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `

<header
	id="navbar-component"
	class="w-full bg-black"
	style="position: fixed; z-index: 100"
>
	<div class="mx-auto py-2">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center">
				<a href="/">
					<div class="flex flex-col justify-start content-start">
						<img
							src="./assets/svg/quae_logo_white_no_background.svg"
							class="w-8 h-8 md:m-2"
							alt="quae logo"
						/>
					</div>
				</a>
				<div class="flex justify-end">
					<div class="block">
						<a class="mx-2 hidden md:inline" href="../">
							<span
								class="hoboken-link-nav text-montserrat-400 text-white text-md"
								id="politics-link-nav"
							>
								Politics
							</span>
						</a>
						<a class="mx-2 hidden md:inline" href="./pages/groups.html">
							<span
								class="pricing-link-nav text-montserrat-400 text-white text-md"
								id="groups-link-nav"
							>
								Groups
							</span>
						</a>

						<a
							class="mx-2 hidden md:inline"
							target="_blank"
							href="https://medium.com/quae-app"
							rel="noopener"
						>
							<span class="text-montserrat-400 text-white text-md"> Blog </span>
						</a>

						<a class="mx-2 hidden md:inline" href="./pages/about_us.html">
							<span
								class="about-us-link-nav text-montserrat-400 text-white text-md"
							>
								About Us
							</span>
						</a>
						<a class="mx-2 navlink" href="#sign-up">
							<span
								class="
									bg-white
									text-md text-montserrat-600
									px-3
									py-2
									rounded-md
								"
							>
								Sign Up
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<button
	id="drawer-open-btn"
	aria-label="open navigation drawer"
	class="z-100"
	onclick="openNav()"
>
	<div
		class="
			fixed
			w-16
			h-16
			bottom-0
			right-0
			m-2
			shadow-xl
			bg-black
			border-2 border-purple-light
			md:hidden
		"
		style="border-radius: 100%"
	>
		<div class="flex flex-col h-full place-content-center">
			<img
				src="./assets/svg/menu.svg"
				class="w-1/2 h-1/2 mx-auto"
				alt="menu toggle"
			/>
		</div>
	</div>
</button>

<div class="md:hidden">
	<a
		href="javascript:void(0)"
		class="closebtn"
		aria-label="close navigation drawer button"
		onclick="closeNav()"
	>
		<div class="backdrop-container" id="backdrop"></div>
	</a>
	<div id="mySidenav" class="sidenav-container">
		<div class="side-nav-content">
			<a href="../" onclick="closeNav()" id="politics-drawer-link">Politics</a>
			<a href="./pages/groups.html" onclick="closeNav()" id="groups-drawer-link"
				>Private&nbspGroups</a
			>
			<!-- <a
						href="./pages/pricing.html"
						onclick="closeNav()"
						id="pricing-drawer-link"
						>Pricing</a
					> -->
			<a
				href="./pages/about_us.html"
				onclick="closeNav()"
				id="about-us-drawer-link"
				>About&nbspUs</a
			>

			<a
				target="_blank"
				href="https://medium.com/quae-app"
				rel="noopener"
				onclick="closeNav()"
				id="blog-drawer-link"
				>Blog</a
			>
			<a class="mx-2 navlink" onClick="closeNav()" href="#sign-up">
				<span
					class="
						bg-white
						text-md text-black text-montserrat-600
						px-3
						py-2
						rounded-md
					"
				>
					Sign&nbspUp
				</span>
			</a>
			<span class="drawer-close-button">
				<a
					href="javascript:void(0)"
					class="closebtn"
					id="close navigation drawer button"
					onclick="closeNav()"
					>&times;</a
				>
			</span>
		</div>
	</div>
</div>
<script>
	let URL = window.location.href;
	console.log(URL);
	if (URL.includes("groups")) {
		document.getElementById("groups-drawer-link").style.opacity = "0.5";
		document.getElementById("groups-link-nav").style.opacity = "0.5";
	}
	if (URL.includes("pricing")) {
		document.getElementById("pricing-drawer-link").style.opacity = "0.5";
		document.getElementById("pricing-link-nav").style.opacity = "0.5";
	}
	if (URL.includes("about_us")) {
		document.getElementById("about-us-drawer-link").style.opacity = "0.5";
		document.getElementById("about-us-link-nav").style.opacity = "0.5";
	} else {
		document.getElementById("politics-drawer-link").style.opacity = "0.5";
		document.getElementById("politics-link-nav").style.opacity = "0.5";
	}
	// if (URL.includes("blog")) {
	// 	document.getElementById("blog-drawer-link").style.opacity = "0.5";
	// 	document.getElementById("blog-link-nav").style.opacity = "0.5";
	// }
	// else {
	// 	document.getElementById("home-drawer-link").style.display = "none";
	// }
</script>
`;

class Header extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define("index-header", Header);
