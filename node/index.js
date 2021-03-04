const express = require("express");
const cors = require("cors");
var http = require("http");

const client = require("twilio")(
	"AC4b4d6d3b12971f1068a128da95a2b11e",
	"f528e86f8e6bb19bac62b6fb59ab9d9f"
);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5003;

http.createServer(app).listen(PORT, function () {
	console.log("HTTP Server running on port ", PORT);
});

app.post("/sendapplink", function (req, res) {
	let { number } = req.body;

	client.messages
		.create({
			body: "Yo, imagine this is a download link, this is brendan btw",
			from: "+12015145619",
			to: number,
		})
		.then((message) => {
			res.send(true);
			console.log(message.sid);
		})
		.catch((e) => {
			console.error(e);
			res.send(false);
		});
});
