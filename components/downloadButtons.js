var buttons = /*html*/ `
<div class="download-buttons">
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
					<button
						class="primary icon web-app-link"
						href="https://dev.quae.app"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="visit the google play store to download quae"
					>
						<img src="/assets/img/quae_logo_white.png" alt="quae-logo" />
						<p class="white">Try The Web App</p>
						<i class="material-icons">chevron_right</i>
					</button>
				</div>`;
//

function readerButtons() {
	const placeholder = document.querySelector("#download-button-placeholder");
	const placeholder1 = document.querySelector("#download-button-placeholder1");
	placeholder.innerHTML = buttons;
	placeholder1.innerHTML = buttons;
}
readerButtons();
