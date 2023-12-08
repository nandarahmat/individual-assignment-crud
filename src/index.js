require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const app = express();

const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/logs");

app.use(middlewareLogRequest);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
