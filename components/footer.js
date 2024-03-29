var footer = /*html*/ `

<footer id="footer">
	<div class="footer-content">
		<div id="footer-contact">
			<h6>Find Us Online</h6>
			<ul class="social-icons">
				<li>
					<a
						class="facebook"
						href="https://www.facebook.com/quaeapp"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="visit quae's facebook account"
						><i class="fa fa-facebook"></i
					></a>
				</li> 
				<li>
					<a
						aria-label="visit quae's linkedin account"
						class="linkedin"
						href="https://www.linkedin.com/company/quae/ "
						target="_blank"
						rel="noopener noreferrer"
						><i class="fa fa-linkedin"></i
					></a>
				</li>
				<li>
					<a
						aria-label="visit quae's twitter account"
						class="twitter"
						href="https://twitter.com/Quae_App"
						target="_blank"
						rel="noopener noreferrer"
						><i class="fa fa-twitter"></i
					></a>
				</li>
				<li>
					<a
						aria-label="visit quae's instagram account"
						class="instagram"
						href="https://www.instagram.com/quaeapp/"
						target="_blank"
						rel="noopener noreferrer"
						><i class="fa fa-instagram"></i
					></a>
				</li>
				<li>
					<a
						aria-label="visit quae's youtube account"
						class="youtube"
						href="https://www.youtube.com/channel/UC8Mkk0uEYtbCs0TPk1ix94g"
						target="_blank"
						rel="noopener noreferrer"
						><i class="fa fa-youtube"></i
					></a>
				</li>
			</ul>
			
			<a href="mailto:info@quae.app" id="contact-us-button">
				<button class="white icon">
					<i class="material-icons">mail</i>
					Send Us A Message
				</button>
			</a>
		</div>
		<div class="footer-navigation">
			<div class="nav-links">
				<a href="/" class = "home">
					<p>Home</p>
				</a>
				<a href="https://medium.com/quae-app" rel="noopener" class="blog">
					<p>Blog</p>
				</a>
				<a href="https://docs.quae.app/" rel="noopener" class="docs">
					<p>Docs</p>
				</a>
				<a href="/communities" class="communities">
					<p>Communities</p>
				</a>
				<a href="/communities/hoboken" class="communities sub">
					<p>Hoboken</p>
				</a>
				<a href="/communities/stevens" class="communities sub">
					<p>Stevens</p>
				</a>
				<a href="/about_us/" class="about-us">
					<p>About</p>
				</a>
				<a href="/mission/" class="mission">
					<p>Mission</p>
				</a>
				<a href="/pages/faq" class="mission">
					<p>FAQ</p>
				</a>
			</div>
			
		</div>
	</div>
	<div class="sub-footer">
		<div class="content">
			<p class="copyright">Quae &copy; 2021 All Rights Reserved</p>
		</div>
		<div class="footer-legal footer-navigation">
				<a href="/pages/eula" class="eula">
					<p>EULA Agreement</p>
				</a>
				<a href="/pages/privacy_agreement" class="privacy-policy">
					<p>Privacy Policy</p>
				</a>
				
			</div>
	</div>
</footer>
<div id="floating-buttons">
	<a href="/pages/join_verification" id="get-verified" class="floating-button">
		<i class="material-icons">verified</i>
		<p>Get Verified</p>
	</a>
	<a href="mailto:info@quae.app" id="contact-us"  class="floating-button"  aria-label="get in touch with the quae team" >
		<i class="material-icons">mail</i>
		<p>Get In Touch</p>
	</a>
</div>
`;

function renderFooter() {
	const placeholder = document.querySelector("#footer-placeholder");
	placeholder.innerHTML = footer;
}
document.onscroll = function () {
	let contact = document.getElementById("floating-buttons");
	let footer = document.getElementById("footer");
	let footerHeight = footer.clientHeight;
	let docHeight = document.body.clientHeight;
	let windowHeight = window.innerHeight;
	let scroll = window.scrollY;
	if (docHeight - footerHeight < windowHeight + scroll) {
		contact.className = "hidden";
	} else {
		contact.className = "";
	}
};
renderFooter();
