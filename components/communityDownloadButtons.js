var buttons = /*html*/ `
<div class="download-buttons community">	
<a class="button primary lg join-link" href="https://web.quae.app/auth/signup">Join Today</a>
	<div class="app-stores">
		<a
			href="https://apps.apple.com/us/app/quae/id1555653993"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="visit the app store to download quae"
			class="GA-app-store-link app-store-link"
		>
			<img
				src="/assets/img/download/appStore.png"
				class="app-store-btn"
				alt="download on the app store"
			/>
		</a>
		<a
			href="https://play.google.com/store/apps/details?id=com.quae.quaeapp&hl=en_US&gl=US"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="visit the google play store to download quae"
			class="GA-play-store-link app-store-link"
		>
			<img
				src="/assets/img/download/googlePlay.png"
				class="app-store-btn"
				alt="download on the google play store"
			/>
		</a>
	</div>
</div>`;
//

function readerButtons() {
	const placeholder = document.querySelector(
		"#community-download-button-placeholder"
	);
	placeholder.innerHTML = buttons;
}
readerButtons();
