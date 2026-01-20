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

const USERS_FILE = path.join(__dirname, "users.json");

async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, { encoding: "utf8" });
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}
async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), {
    encoding: "utf8",
  });
}
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
    const users = await readUsers();

    if (users.some((u) => u.email === email)) {
      return response.status(400).json({ error: "Email already registered" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const userID = uuidv4();

    const newUser = {
      id: userID,
      email,
      passwordHash,
      nick: "",
      firstName: "",
      lastName: "",
      avatarUrl: "https://picsum.photos/300",
      city: "",
      phone: "",
      description: "",
    };

    users.push(newUser);
    await writeUsers(users);

    response.status(200).send("Registration successful");
  } catch (err) {
    console.error(err);
    response.status(500).send("Error saving data");
  }
});
app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const users = await readUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
      return response.status(401).send("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return response.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    response.status(200).json({ token });
  } catch (err) {
    console.error(err);
    response.status(500).send("Error reading data");
  }
});
app.get("/me", verifyUser, async (request, response) => {
  try {
    const users = await readUsers();
    const user = users.find((u) => u.id === request.userId);

    if (!user) return response.status(404).send("No User found");

    return response.status(200).json({ id: user.id, email: user.email });
  } catch (err) {
    console.error(err);
    return response.status(500).send("Error reading data");
  }
});
app.get("/getData", verifyUser, async (request, response) => {
  try {
    const users = await readUsers();
    const user = users.find((u) => u.id === request.userId);

    if (!user) return response.status(404).send("User not found");

    const {
      id,
      email,
      nick,
      firstName,
      lastName,
      avatarUrl,
      city,
      phone,
      description,
    } = user;
    return response.status(200).json({
      id,
      email,
      nick,
      firstName,
      lastName,
      avatarUrl,
      city,
      phone,
      description,
    });
  } catch (err) {
    console.error(err);
    return response.status(500).send("Error reading data");
  }
});
app.put("/updateUser", verifyUser, async (request, response) => {
  const userId = request.userId;
  const {
    email,
    nick,
    firstName,
    lastName,
    avatarUrl,
    city,
    phone,
    description,
  } = request.body;

  try {
    const users = await readUsers();
    const idx = users.findIndex((u) => u.id === userId);

    if (idx === -1) {
      return response.status(404).json({ error: "User not found" });
    }

    const existing = users[idx];

    users[idx] = {
      ...existing,
      email: email ?? existing.email,
      nick: nick ?? existing.nick,
      firstName: firstName ?? existing.firstName,
      lastName: lastName ?? existing.lastName,
      avatarUrl: avatarUrl ?? existing.avatarUrl,
      city: city ?? existing.city,
      phone: phone ?? existing.phone,
      description: description ?? existing.description,
    };

    await writeUsers(users);
    return response.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return response.status(500).json({ error: "Error updating user" });
  }
});
app.get("/readUserData", verifyUser, async (request, response) => {
  try {
    const users = await readUsers();
    const user = users.find((u) => u.id === request.userId);

    if (!user) return response.status(404).send("No User found");

    const {
      id,
      email,
      nick,
      firstName,
      lastName,
      avatarUrl,
      city,
      phone,
      description,
    } = user;
    return response.status(200).json({
      id,
      email,
      nick,
      firstName,
      lastName,
      avatarUrl,
      city,
      phone,
      description,
    });
  } catch (err) {
    console.error(err);
    return response.status(500).send("Error reading data");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
