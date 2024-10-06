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
    if (!decoded) return response.status(401).send("User Unauthorized");

    request.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    response.status(401).send(error.message);
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
    const passwordHash = await bcrypt.hash(password, salt);
    const userID = uuidv4();
    const content = `${userID},${email},${passwordHash}\n`;

    await fs.appendFile("users.txt", content);
    response.status(200).send("Registration successful");
  } catch (err) {
    console.error(err);
    response.status(500).send("Error saving data");
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const data = await fs.readFile("users.txt", { encoding: "utf8" });
    const users = data.split("\n").filter((line) => line);

    for (let user of users) {
      const [userId, dbEmail, passwordHash] = user.split(",");

      if (dbEmail === email) {
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

app.get("/me", verifyUser, async (request, response) => {
  const data = await fs.readFile("users.txt", { encoding: "utf8" });
  const users = data.split("\n").filter((line) => line);

  for (let user of users) {
    const [id, email] = user.split(",");
    console.log(id, email);

    if (request.userId === id)
      return response.status(200).json({ id: id, email: email });
  }
  return response.status(500).send("No User found");
});

app.get("/getData", verifyUser, async (request, response) => {
  const userId = request.userId;

  try {
    const data = await fs.readFile("users.txt", { encoding: "utf8" });
    const users = data.split("\n").filter((line) => line);

    for (let user of users) {
      const [id, email, passwordHash, nick, firstName, lastName] =
        user.split(",");

      if (userId === id) {
        return response
          .status(200)
          .json({ id, email, nick, firstName, lastName }); // Zwróć dodatkowe dane
      }
    }

    return response.status(404).send("User not found");
  } catch (err) {
    console.error(err);
    response.status(500).send("Error reading data");
  }
});

app.put("/updateUser", verifyUser, async (request, response) => {
  const userId = request.userId;
  const { email, nick, firstName, lastName } = request.body;

  try {
    const data = await fs.readFile("users.txt", { encoding: "utf8" });
    const users = data.split("\n").filter((line) => line);

    let userUpdated = false;
    const updatedUsers = users.map((user) => {
      const [id, dbEmail, passwordHash] = user.split(",");
      if (id === userId) {
        userUpdated = true;

        return `${id},${email},${passwordHash},${nick},${firstName},${lastName}`;
      }
      return user;
    });

    if (userUpdated) {
      await fs.writeFile("users.txt", updatedUsers.join("\n"), {
        encoding: "utf8",
      });
      return response
        .status(200)
        .json({ message: "User updated successfully" }); // Zwróć jako JSON
    } else {
      return response.status(404).json({ error: "User not found" }); // Zwróć jako JSON
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return response.status(500).json({ error: "Error updating user" }); // Zwróć jako JSON
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
