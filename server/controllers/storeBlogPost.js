const path = require("path");
const BlogPost = require("../database/models/BlogPost");

module.exports = (req, res) => {
	console.log(req.body);
	BlogPost.create(req.body, (error, post) => {
		res.redirect("/");
	});
	// const {
	//     image
	// } = req.files

	// image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
	//     BlogPost.create({
	//         ...req.body,
	//         image: `/posts/${image.name}`
	//     }, (error, post) => {
	//         res.redirect("/");
	//     });
	// })
};
