const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/marcin", (request, response) => {
  const { email } = request.body;
  console.log("Odebrałem email:", email);
  response.send("Email został odebrany!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
