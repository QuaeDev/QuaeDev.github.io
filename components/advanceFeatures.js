let procedureBullets = [
	{
		img: "/assets/img/advanceFeatures/start.png",
		imgAlt: "start button icon",
		title: "Procedures",
		body: "Start a procedure to request specific change in your community",
	},
	{
		img: "/assets/img/advanceFeatures/people.png",
		imgAlt: "group of people icons",
		title: "Coordinate",
		body: "Start a procedure to request specific change in your community",
	},
	{
		img: "/assets/img/advanceFeatures/city.png",
		imgAlt: "city icon",
		title: "Progress",
		body: "Your procedure will create change, once the required votes are received",
	},
];

let idBullets = [
	{
		img: "/assets/img/advanceFeatures/secure.png",
		imgAlt: "security badge",
		title: "ID Secure",
		body: "ID Verification authenticates votes and protects results.",
	},
	{
		img: "/assets/img/advanceFeatures/id.png",
		imgAlt: "id card",
		title: "Communities",
		body: "Get Verified with any ID to join your city’s Quae Community",
	},
	{
		img: "/assets/img/advanceFeatures/noBots.png",
		imgAlt: "robot with an red x on top",
		title: "Thrive",
		body: "Never worry about bots or trolls interfering with your community",
	},
];
function renderBullet(card, feature) {
	card.innerHTML = /*html*/ `
<div class="icon">
        <img
        src=${feature.img}
        alt=${feature.imgAlt}
        />
</div>
<div class="text">
    <h3>${feature.title}</h3>
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
