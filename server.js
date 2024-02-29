// app.js

const express = require("express");
 const connectDB = require("./src/config/db");
const cors = require("cors");
 const authRoutes = require("./src/routes/authroute");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Route for home page
app.get("/", (req, res) => {
  res.send("Welcome to the Review App!"); // Add your welcome message here
});

// Route for home page
app.get("/hh", (req, res) => {
  res.send("Welcome a!"); // Add your welcome message here
});

 app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5010;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
