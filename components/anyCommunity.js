let communities = [
	{
		img: "/assets/img/city2.jpeg",
		imgAlt: "busy city street",
		header: "Your City",
		description:
			"Verify your ID and revolutionize the way you interact with city politics.",
	},
	{
		img: "/assets/img/communities/college.jpeg",
		imgAlt: "college campus",
		header: "Your University",
		description:
			"Add your school's email domain so students can participate to make your university a better place.",
	},
	{
		img: "/assets/img/communities/company.jpeg",
		imgAlt: "office space",
		header: "Your Company",
		description:
			"Employees of any institution can propose novel ideas and solutions to their corporate leaders",
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
