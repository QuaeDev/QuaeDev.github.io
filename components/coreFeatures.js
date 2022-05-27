let coreFeatures = [
	{
		img: "/assets/img/coreFeatures/propose.png",
		imgAlt: "icon of a proposal",
		imgClass: "propose",
		title: "Propose Ideas",
		body: "this is the body text, blah blah we're gunna put stuff here",
		buttonText: "See More",
		buttonHandler: "voteHandler()",
	},
	{
		img: "/assets/img/coreFeatures/vote.png",
		imgAlt: "icon of someone voting",
		imgClass: "vote",
		title: "Vote for Solutions",
		body: "this is the body text, blah blah we're gunna put stuff here",
		buttonText: "See More",
		buttonHandler: "proposeHandler()",
	},
	{
		img: "/assets/img/coreFeatures/act.png",
		imgAlt: "icon of city",
		imgClass: "act",
		title: "Enact Change",
		body: "this is the body text, blah blah we're gunna put stuff here",
		buttonText: "See More",
		buttonHandler: "actHandler()",
	},
];
function voteHandler() {
	console.log("wow, i pressed a button");
}
function proposeHandler() {
	console.log("wow, i pressed a button");
}
function actHandler() {
	console.log("wow, i pressed a button");
}
let coreFeatureContainer = document.getElementById("core-features-container");
for (let feature of coreFeatures) {
	let card = document.createElement("div");
	card.classList.add("feature");
	card.innerHTML = /*html*/ `
    <div class="header">
        <img
            src=${feature.img}
            alt=${feature.imgAlt}
            class=${feature.imgClass}
        />
        <h3 class="text">${feature.title}</h3>
    </div>
    <div class="body">
        ${feature.body}
    </div>
    <div class="footer">
        <button class="primary"
        onClick=${feature.buttonHandler}
        >
        ${feature.buttonText}</button>
    </div>  
    `;
	coreFeatureContainer.appendChild(card);
}
