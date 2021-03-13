const BlogPost = require("../database/models/BlogPost");

module.exports = async (req, res) => {
	const blogposts = await BlogPost.find({});
	res.render("blog", { blogposts });
};
