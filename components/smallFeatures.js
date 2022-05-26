let smallFeatures = [
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
	{
		img: "/assets/img/mission/ballot.png",
		imgAlt: "blah",
		text: "blah bah",
	},
];
let smallFeatureContainer = document.getElementById("small-features-container");
for (let feature of smallFeatures) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = /*html*/ `
    <div class="img-container">
        <img src="${feature.img}" alt="${feature.imgAlt}" />
    </div>
    <div class="content">
        <h4>${feature.text}</h4>
    </div>
    `;
	smallFeatureContainer.appendChild(card);
}
