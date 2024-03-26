const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/newsletter", (request, response) => {
  const { email } = request.body;
  response.status(200).send(email);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
