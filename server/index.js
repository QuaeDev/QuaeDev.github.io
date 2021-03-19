require("dotenv").config();
const path = require("path");
const express = require("express");
const http = require("http");
const { config, engine } = require("express-edge");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const InitiateMongoServer = require("./config/db");
const BlogPost = require("./database/models/BlogPost");
const { Router } = require("express");

const createBlogPostController = require("./controllers/createBlogPost");
const blogController = require("./controllers/blog");
const storeBlogPostController = require("./controllers/storeBlogPost");
const getBlogPostController = require("./controllers/getBlogPost");

const PORT = process.env.PORT || 4000;
// Configure express-Edge
config({ cache: process.env.NODE_ENV === "production" });

const app = new express();
InitiateMongoServer();
app.use(fileUpload());
app.use(engine);
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.set("pages", __dirname + "/pages");
app.use("/assets", express.static(__dirname + "/public/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const storeBlogPost = require("./middleware/storeBlogPost");
app.use("/blogposts/store", storeBlogPost);
app.get("/", (req, res) => {
	// const posts = await Post.find({});
	res.render("home");
	// , { posts }
});
app.get("/about_us", (req, res) => {
	res.render("about_us");
});
app.get("/pricing", (req, res) => {
	res.render("pricing");
});
app.get("/blog", blogController);
// app.get("/blogposts/new", createBlogPostController);
app.post("/blogposts/store", storeBlogPostController);

app.get("/blogpost_:id", getBlogPostController);
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
