let smallFeatures = [
	{
		img: "/assets/img/smallFeatures/security.png",
		imgAlt: "icon of a lock",
		text: "Secure Data",
	},
	{
		img: "/assets/img/smallFeatures/supporters.png",
		imgAlt: "icon of a follow request",
		text: "Build Support",
	},
	{
		img: "/assets/img/smallFeatures/analytics.png",
		imgAlt: "icon of analytics",
		text: "See Analytics",
	},
	{
		img: "/assets/img/smallFeatures/emailDomain.png",
		imgAlt: "icon of email",
		text: "Email Domains",
	},
	{
		img: "/assets/img/smallFeatures/accessible.png",
		imgAlt: "icon of computer, tablet, and phone",
		text: "Accessible",
	},
	{
		img: "/assets/img/smallFeatures/storage.png",
		imgAlt: "icon of folder",
		text: "Record Keeping",
	},
];
let smallFeatureContainer = document.getElementById("small-features-container");
for (let feature of smallFeatures) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("small-feature");
	card.innerHTML = /*html*/ `
    <div class="img-container">
        <img src="${feature.img}" alt="${feature.imgAlt}" />
    </div>
    <div class="content">
        <h5>${feature.text}</h5>
    </div>
    `;
	smallFeatureContainer.appendChild(card);
}
