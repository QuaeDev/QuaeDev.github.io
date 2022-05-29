let coreFeatures = [
	{
		img: "/assets/img/coreFeatures/propose.png",
		imgAlt: "icon of a proposal",
		imgClass: "propose",
		title: "Propose",
		body: "Get involved in the democratic process and write a proposal to address an issue you see.",
		buttonText: "See More",
		buttonHandler: "proposeHandler()",
	},
	{
		img: "/assets/img/coreFeatures/vote.png",
		imgAlt: "icon of someone voting",
		imgClass: "vote",
		title: "Vote",
		body: "Represent your beliefs by voting on proposals in your community",
		buttonText: "See More",
		buttonHandler: "voteHandler()",
	},
	{
		img: "/assets/img/coreFeatures/act.png",
		imgAlt: "icon of city",
		imgClass: "act",
		title: "Act",
		body: "Verified voters give Quae proposals real power",
		buttonText: "See More",
		buttonHandler: "actHandler()",
	},
];
function voteHandler() {
	// console.log("wow, i pressed a button");
}
function proposeHandler() {
	// console.log("wow, i pressed a button");
	window.open("https://dev.quae.app/post/629112d290661d001669d8b5", "_blank");
}
function actHandler() {
	window.open(
		"https://thestute.com/2021/11/12/student-initiative-to-extend-library-hours-comes-to-fruition-after-quae-poll/",
		"_blank"
	);
	// console.log("wow, i pressed a button");
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
