let communities = [
	{
		img: "/assets/img/city2.jpeg",
		imgAlt: "busy city street",
		header: "Your City",
		description:
			"Verify your ID and revolutionize the way you interact with city politics, vote on important issues in your neighborhood.",
		href: "/communities",
		class: "city",
	},
	{
		img: "/assets/img/communities/college.jpeg",
		imgAlt: "college campus",
		header: "Your University",
		description:
			"Add your school's email domain so students can participate to make your university a better place.",
		href: "/communities",
		class: "school",
	},
	{
		img: "/assets/img/communities/company.jpeg",
		imgAlt: "office space",
		header: "Your Company",
		description:
			"Employees of any institution can propose novel ideas and solutions to their corporate leaders",
		href: "/communities",
		class: "company",
	},
];
let communityContainer = document.getElementById("any-community-container");
for (let community of communities) {
	let card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = /*html*/ `
    <div class="img-container ${community.class}" > 
        <div class="title-container">
            <h4>${community.header}</h4>
        </div>
    </div>
    <div class="content">
    <p>${community.description}</p>
    <a class="primary button" href="${community.href}">
    	Learn More
    </a>
    </div>
    `;
	communityContainer.appendChild(card);
}
