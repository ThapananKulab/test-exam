const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors"); // Import the 'cors' package
app.get("/", (request, response) => {
  response.send(`
<!doctype html>
<html>
<head>
<title>Express.js</title>
</head>
<body>
<h3>Welcome to Express.js</h3>
<b>Express.js Fast, unopinionated, minimalist <br>
web framework for Node.js</b>
</body>
</html>
`);
});

app.use(cors());
app.use(express.json());

app.post("/submit-data", (req, res) => {
  console.log(req.body);
  res.send({ status: "Data received" });
});

app.post("/multi", (req, res) => {
  console.log(req.body);
  res.send({ status: "Data received", data: req.body });
});

app.post("/check-selection", (req, res) => {
  const { number, selection } = req.body;

  const isEven = selection === "even" && number % 2 === 0;
  const isOdd = selection === "odd" && number % 2 !== 0;

  // Respond with the result
  if (isEven || isOdd) {
    res.json({ valid: true, message: `${number} is ${selection}` });
  } else {
    res.json({ valid: false, message: `${number} is not ${selection}` });
  }
});

app.listen(port, () => console.log("Server listening on port " + port));
