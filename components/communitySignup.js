const view = /*html*/ `
    <div class="container">
	
        <div class="download">
            <div class="buttons">
                <div id="download-button-placeholder"></div>
            </div>
          
        </div>
		<div class="form-wrapper">
        <form id="my-form" action="https://formspree.io/f/mqknnbky" method="POST">
		<div class="form-title">
		<h4>Looking to democratize your community?</h4>
		<h6>Get in touch, We'd love to help</h6>
		</div>
		<label for="email">Email</label>
		<input type="email" title="email" name="email" placeholder="johndoe@gmail.com" />
		<label for="community-type">Where are you looking to use Quae?</label>
		<input type="text" title="community-type"name="community" placeholder="My town, company, university"/>
		<label for="message">Anything you'd like us to know</label>
		<textarea rows="5" cols="60" name="message" title="message"placeholder="We have a huge problem with the way out schools are managed"></textarea>
		<button class="primary" id="my-form-button" type="">Submit</button>
			<p id="my-form-status"></p>
        </form>
		</div>
    </div>
`;
const container = document.getElementById("community-sign-up-section");
container.innerHTML = view;
var form = document.getElementById("my-form");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("my-form-status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				status.innerHTML = "Thanks for your submission!";
				form.reset();
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						status.innerHTML = data["errors"]
							.map((error) => error["message"])
							.join(", ");
					} else {
						status.innerHTML = "Oops! There was a problem submitting your form";
					}
				});
			}
		})
		.catch((error) => {
			status.innerHTML = "Oops! There was a problem submitting your form";
		});
}
form.addEventListener("submit", handleSubmit);
