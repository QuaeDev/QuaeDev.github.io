const proposals = [
	{
		profilePic: "/assets/img/people/noProfilePic.png",
		name: "Madhava Rakshit",
		username: "@madhava",
		title: "Are you interested in  having table tennis tables on campus?",
		description:
			"The tables can be used for general recreation or even a table tennis club!",
		options: ["yes", "no"],
	},
	{
		profilePic: "/assets/img/people/noProfilePic.png",
		name: "Jonah Kramer",
		username: "@jonah",
		title: "Should attendance be a factor in your grade for class?",
		options: ["yes", "no"],
	},
	{
		profilePic: "/assets/img/people/noProfilePic.png",
		name: "Jon Melamed",
		username: "@jon",
		title: "n",
		options: ["yes", "no"],
	},
];
console.log("here");

const container = document.getElementsByClassName("slides");
for (let proposal of proposals) {
	let slide = document.createElement("div");
	slide.classList.add("slide");
	slide.innerHTML = /* html */ `
        <div class="proposal-card">
            <div class="header">
                <div class="user">
                    <img src="${proposal.profilePic}" alt="picture of ${proposal.name}">
                    <div class="text">
                        <h5>${proposal.name}</h5>
                        <p class="secondary">${proposal.username}</p>
                    </div>
                </div>
                
            </div>
            <div class="body">
                <h4 class="title">${proposal.title}</h4>
                <p class="description">
                   ${proposal.description}
                </p>
            </div>
            <div class="poll">
                <div class="option-container">
                    <p class="option-text">
                        Yes
                    </p>
                </div>
                <div class="option-container">
                    <p class="option-text">
                        No
                    </p>
                </div>
            </div>
        </div>`;
	container.appendChild(slide);
}
