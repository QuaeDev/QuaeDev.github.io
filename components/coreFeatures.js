let coreFeatures = [
	{
		img: "/assets/img/coreFeatures/propose.jpg",
		imgAlt: "icon of a proposal",
		imgClass: "propose",
		title: "Propose",
		body: "Get involved in the democratic process and write a proposal to address an issue you see.",
		buttonText: "See More",
		link: "https://web.quae.app/post/629112d290661d001669d8b5",
	},
	{
		img: "/assets/img/coreFeatures/vote.jpg",
		imgAlt: "icon of someone voting",
		imgClass: "vote",
		title: "Vote",
		body: "Vote every day on the most pressing matters in your community. Make your voice heard where it counts.",
		buttonText: "See More",
		link: "https://web.quae.app/post/629112d290661d001669d8b5",
	},
	{
		img: "/assets/img/coreFeatures/act.jpg",
		imgAlt: "icon of city",
		imgClass: "act",
		title: "Act",
		body: "With Quae, you can create real change when it matters. No more waiting 4 years to make a difference.",
		buttonText: "See More",
		link: "https://thestute.com/2021/11/12/student-initiative-to-extend-library-hours-comes-to-fruition-after-quae-poll/",
	},
];

let coreFeatureContainer = document.getElementById("core-features-container");
for (let feature of coreFeatures) {
	let card = document.createElement("div");
	card.classList.add("feature");
	card.innerHTML = /*html*/ `
    <div class="img-wrapper">
        <img
            src=${feature.img}
            alt=${feature.imgAlt}
            class=${feature.imgClass}
			loading="lazy"
        />
	</div>
	<div class="body">
		<h3>${feature.title}</h3>
		<p>
			${feature.body}
		</p>
		<a href="${feature.link}" target="_blank">${feature.buttonText}</a>
    </div>  
    `;
	coreFeatureContainer.appendChild(card);
}
