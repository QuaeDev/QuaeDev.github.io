var footer = /*html*/ `
<footer>
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
		<p>
			Contact us at
			<span
				><a
					href="mailto:info@quae.app"
					id="email-link"
					class="link"
					aria-label="link to send us an email"
					>info@quae.app</a
				></span
			>
		</p>
		<a href="mailto:info@quae.app" id="contact-us-button">
			<button class="primary icon">
				<i class="material-icons">mail</i>
				<p class="white">Send Us A Message</p>
			</button>
		</a>
	</div>
	<div id="footer-navigation">
		<a href="/communities" class="communities">
			<p>Communities</p>
		</a>
		<a href="https://medium.com/quae-app" rel="noopener" class="blog">
			<p>Blog</p>
		</a>
		<a href="https://docs.quae.app/" rel="noopener" class="docs">
			<p>Docs</p>
		</a>
		<a href="/about_us" class="about-us">
			<p>About Us</p>
		</a>
		<a href="/eula" class="eula">
			<p>EULA Agreement</p>
		</a>
		<a href="/privacy_agreement" class="privacy-policy">
			<p>Privacy Policy</p>
		</a>
		<p class="copyright">Quae &copy; 2021 All Rights Reserved</p>
	</div>
</footer>
`;

function renderFooter() {
	const placeholder = document.querySelector("#footer-placeholder");
	placeholder.innerHTML = footer;
}
renderFooter();
