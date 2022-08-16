let procedureBullets = [
	{
		img: "/assets/img/advanceFeatures/process.svg",
		imgAlt: "start button icon",
		title: "Procedures",
		body: "Start a procedure to request specific change in your community",
	},
	{
		img: "/assets/img/advanceFeatures/group.svg",
		imgAlt: "group of people icons",
		title: "Coordinate",
		body: "Quae will poll the necessary people and leaders in your community.",
	},
	{
		img: "/assets/img/advanceFeatures/goal.svg",
		imgAlt: "city icon",
		title: "Progress",
		body: "Your procedure will create change, once the required votes are received",
	},
];

let idBullets = [
	{
		img: "/assets/img/advanceFeatures/verified.svg",
		imgAlt: "security badge",
		title: "ID Secure",
		body: "ID Verification authenticates votes and protects results.",
	},
	{
		img: "/assets/img/advanceFeatures/condo.svg",
		imgAlt: "id card",
		title: "Communities",
		body: "Get Verified with any ID to join your city’s Quae Community",
	},
	{
		img: "/assets/img/advanceFeatures/bot.svg",
		imgAlt: "robot with an red x on top",
		title: "Thrive",
		body: "Never worry about bots or trolls interfering with your community",
	},
];
function renderBullet(card, feature) {
	card.innerHTML = /*html*/ `
		<div class="header">
				<img
				src=${feature.img}
				alt=${feature.imgAlt}
				loading="lazy"
				/>
				<h3>${feature.title}</h3>
		</div>
		<div class="text">
			<p>${feature.body}</p>
		</div>
		`;
}

let procedureContainer = document.getElementById("procedure-bullets");
let idContainer = document.getElementById("id-bullets");
for (let feature of procedureBullets) {
	let card = document.createElement("li");
	renderBullet(card, feature);
	procedureContainer.appendChild(card);
}
for (let feature of idBullets) {
	let card = document.createElement("li");
	renderBullet(card, feature);
	idContainer.appendChild(card);
}
