const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("node:fs/promises");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

const verifyUser = (request, response, next) => {
  const authHeader = request.header("Authorization");
  if (!authHeader) return response.status(400).json({ error: "Token needed" });

  const token = authHeader.split(" ").pop();

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    request.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    response.status(401).send("User invalid");
  }
};

app.post("/newsletter", (request, response) => {
  const { email } = request.body;
  response.status(200).send(email);
});

app.post("/register", async (request, response) => {
  const { email, password } = request.body;
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const emailHash = await bcrypt.hash(email, salt);
    const passwordHash = await bcrypt.hash(password, salt);
    const userID = uuidv4();
    const content = `${userID},${emailHash},${passwordHash}\n`;

    await fs.appendFile("users.txt", content);
    response.status(200).send("Registration successful");
  } catch (err) {
    console.error(err);
    response.status(500).send("Error saving data");
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const userCredentials = `Email: ${email}, Password: ${password}`;

  try {
    const data = await fs.readFile("users.txt", { encoding: "utf8" });
    const users = data.split("\n").filter((line) => line);

    for (let user of users) {
      const [userId, emailHash, passwordHash] = user.split(",");

      const emailMatch = await bcrypt.compare(email, emailHash);
      if (emailMatch) {
        const passwordMatch = await bcrypt.compare(password, passwordHash);
        if (passwordMatch) {
          const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          response.status(200).json({ token });
          return;
        }
      }
    }

    response.status(401).send("Invalid credentials");
    console.log("Login not found");
  } catch (err) {
    console.error(err);
    response.status(500).send("Error reading data");
  }
});

app.get("/me", verifyUser, (request, response) => {
  response.status(200).send(request.userId);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
