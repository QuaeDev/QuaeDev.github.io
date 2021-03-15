const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
let MONGOURI = process.env.MONGOURI;
const InitiateMongoServer = async () => {
	console.log("mongo:", process.env.MONGOURI);
	console.log("mongo2:", MONGOURI);

	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true,
		});
		console.log("Connected to DB !!");
	} catch (e) {
		console.log(e);
		throw e;
	}
};

module.exports = InitiateMongoServer;
