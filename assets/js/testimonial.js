(function () {
	const usedBy = [
		{
			picture: "/assets/img/logos/stevens_circle.png",
			text: "Stevens",
		},
		{
			picture: "/assets/img/logos/hoboken_circle.png",
			text: "City of Hoboken",
		},
		{
			picture: "/assets/img/logos/sga_circle.png",
			text: "Stevens SGA",
		},
	];
	let usedByContainer = document.getElementById("social-proof");
	for (let item of usedBy) {
		let card = document.createElement("div");
		card.innerHTML =
			/*html*/
			`
            <img src="${item.picture}" alt="${item.text}" />
        `;
		if (item.picture !== null) {
			usedByContainer.appendChild(card);
		}
	}
	// const testimonials = [
	// 	{
	// 		picture: null,
	// 		name: "person",
	// 		subTitle: "role",
	// 		body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nemo laboriosam libero sequi tempore laborum fugit, alias ex quae ipsum nostrum quidem nam numquam ipsa eaque delectus, ducimus aliquid! Maiores.",
	// 		footer: "examplefooter",
	// 	},

	// 	{
	// 		picture: null,
	// 		name: "person",
	// 		subTitle: "role",
	// 		body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nemo laboriosam libero sequi tempore laborum fugit, alias ex quae ipsum nostrum quidem nam numquam ipsa eaque delectus, ducimus aliquid! Maiores.",
	// 		footer: "footer",
	// 	},
	// 	{
	// 		picture: null,
	// 		name: "person",
	// 		subTitle: "role",
	// 		body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nemo laboriosam libero sequi tempore laborum fugit, alias ex quae ipsum nostrum quidem nam numquam ipsa eaque delectus, ducimus aliquid! Maiores.",

	// 		footer: "footer",
	// 	},
	// 	{
	// 		picture: null,
	// 		name: "person",
	// 		subTitle: "role",
	// 		body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nemo laboriosam libero sequi tempore laborum fugit, alias ex quae ipsum nostrum quidem nam numquam ipsa eaque delectus, ducimus aliquid! Maiores.",

	// 		footer: "footer",
	// 	},
	// ];
	// const container = document.getElementById("carousel");
	// for (let testimonial of testimonials) {
	// 	let slide = document.createElement("div");
	// 	slide.className = "slide";
	// 	slide.innerHTML = /* html */ `
	//         <div class="testimonial">
	//             <div class="header">
	//                 <div class="picture" alt="picture of person"></div>
	//                 <div class="text">
	//                     <h5 class="name">${testimonial.name}</h5>
	//                     <p class="position secondary">${testimonial.subTitle}</p>
	//                 </div>
	//             </div>
	//             <p class="body">
	//                 ${testimonial.body}
	//             </p>
	//             <p class="footer"><i>${testimonial.footer}</i></p>
	//         </div>
	//         `;
	// 	container.appendChild(slide);
	// }
})();
