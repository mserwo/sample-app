const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.json());

app.post("/newsletter", (request, response) => {
  const { email } = request.body;
  response.status(200).send(email);
});

app.post("/register", (request, response) => {
  const { email, password } = request.body;

  const content = `Email: ${email}, Password: ${password}\n`;

  fs.appendFile("users.txt", content, (err) => {
    if (err) {
      console.error(err);
      return response.status(500).send("Error saving data");
    }
    response.status(200).send("Registration successful");
  });
});

app.post("/login", (request, response) => {
  const { email, password } = request.body;
  response.status(200).send("Login successful");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
