let smallFeatures = [
	{
		img: "/assets/img/smallFeatures/security.png",
		imgAlt: "icon of a lock",
		text: "Secure Your Votes",
		subText:
			"Industry standard encryption ensures your votes are safe and secure. Only you have access to see your decision.",
	},
	{
		img: "/assets/img/smallFeatures/accessible.png",
		imgAlt: "icon of computer, tablet, and phone",
		text: "Accessible From Anywhere",
		subText:
			"Vote on the go with your mobile device and draft detailed proposals from the comfort of a larger display.",
	},
	{
		img: "/assets/img/smallFeatures/supporters.png",
		imgAlt: "icon of a follow request",
		text: "Gather Real Support",
		subText:
			"Quae's Supporter Network shows true verifiable data about which political personalities represent the most people effectively.",
	},
	{
		img: "/assets/img/smallFeatures/analytics.png",
		imgAlt: "icon of analytics",
		text: "See Important Analytics",
		subText:
			"Our analytical data shows valuable information about specific groups of people across your community.",
	},
	{
		img: "/assets/img/smallFeatures/emailDomain.png",
		imgAlt: "icon of email",
		text: "Require Email Domains",
		subText:
			"Protect your community from anyone not within your organization with the use of private domains.",
	},

	{
		img: "/assets/img/smallFeatures/storage.png",
		imgAlt: "icon of folder",
		text: "Keep Election Records",
		subText:
			"One place to track all of your organizations' important decisions from the time their community was started.",
	},
];
let smallFeatureContainer = document.getElementById("small-features-container");
for (let feature of smallFeatures) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("small-feature");
	card.innerHTML = /*html*/ `
    <div class="header">
        <img src="${feature.img}" alt="${feature.imgAlt}" />
		<h5>${feature.text}</h5>
    </div>
    <div class="content">
		<p class='secondary'>${feature.subText}</p>
    </div>
    `;
	smallFeatureContainer.appendChild(card);
}
