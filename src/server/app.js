const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("node:fs/promises");
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

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const userCredentials = `Email: ${email}, Password: ${password}`;

  try {
    const data = await fs.readFile("users.txt", { encoding: "utf8" });

    if (data.includes(userCredentials)) {
      response.status(200).send("Login successful");
      console.log("znaleziono login");
    } else {
      response.status(401).send("Invalid credentials");
      console.log("nie znaleziono loginu");
    }
  } catch (err) {
    console.error(err);
    response.status(500).send("Error reading data");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
