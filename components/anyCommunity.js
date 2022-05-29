let communities = [
	{
		img: "/assets/img/city2.jpeg",
		imgAlt: "blah",
		header: "Your City",
		description: "cities have people that need representation",
	},
	{
		img: "/assets/img/communities/college.jpeg",
		imgAlt: "blah",
		header: "Your University",
		description: "Universities have people that need representation",
	},
	{
		img: "/assets/img/communities/company.jpeg",
		imgAlt: "blah",
		header: "Your Company",
		description: "companies have people that need representation",
	},
];
let communityContainer = document.getElementById("any-community-container");
for (let community of communities) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = /*html*/ `
    <div class="img-container"> 
        <img src="${community.img}" alt="${community.imgAlt}" />
        <div class="title-container">
            <h4>${community.header}</h4>
        </div>
    </div>
    <div class="content">
    <p>${community.description}</p>
    <button class="primary">
    Learn More
    </button>
    </div>
    `;
	communityContainer.appendChild(card);
}
