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

app.post("/register", (request, response) => {
  const { email, password, repeatPassword } = request.body;
  response.status(200).send(email, password, repeatPassword);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
