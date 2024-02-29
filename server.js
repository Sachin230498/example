// app.js

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route for home page
app.get("/", (req, res) => {
  res.send("Welcome to the Review App!"); // Add your welcome message here
});

// Route for home page
app.get("/hh", (req, res) => {
  res.send("Welcome!"); // Add your welcome message here
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
