const BlogPost = require("../database/models/BlogPost");

module.exports = async (req, res) => {
	const blogpost = await BlogPost.findById(req.params.id);
	res.render("blogpost", {
		blogpost,
	});
};
