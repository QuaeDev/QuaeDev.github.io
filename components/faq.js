const faqs = [
	{
		question: "What does voting on Quae do?",
		answer: "Voting on Quae. ",
		footer: "",
	},
	{
		question: "How Are ID's Verified?",
		answer:
			"Quae verifies ID's in two ways: online and in person. For online verification we use a trusted 3rd party provider. In person, a member of the Quae team will manually verify your id.",
		footer: "",
	},
	{
		question: "What if I don't have an ID?",
		answer:
			"Valid government mail can also be accepted to verify your residence. Accessibility is a core part of our mission, we don't want to prevent anyone from participating. Please reach out if you're unable to get verified at info@quae.app.",
		footer: "",
	},
	{
		question:
			"What's the difference between Quae and something like Change.org?",
		answer: "Change.org sucks",
		footer: "",
	},
	{
		question: "How do I start a new Quae community?",
		answer:
			"Send us an email and we're happy to help! Our mission is to improve representation in all communities.",
		footer: `<a href="mailto:info@quae.app">Get In Touch</a>`,
	},
	{
		question: "What is Quae?",
		answer: "",
		footer: "",
	},

	{
		question: "",
		answer: "",
		footer: "",
	},
	{
		question: "",
		answer: "",
		footer: "",
	},
];

function renderFAQ() {
	const container = document.getElementById("faq-container");
	for (let i = 0; i < faqs.length; i++) {
		let card = document.createElement("div");
		card.classList.add("faq-card");
		card.classList.add(i % 2 ? "even" : "odd");
		card.innerHTML = /* html */ `
        <h5 class="question">${faqs[i].question}</h5>
        <p class="answer">${faqs[i].answer}</p>
        <p>
        ${faqs[i].footer}
        </p>
        `;
		container.appendChild(card);
	}
}
renderFAQ();
