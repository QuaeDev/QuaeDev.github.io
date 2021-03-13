const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
	title: String,
	description: String,
	content: String,
	username: String,
	image: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
