// app.js

const express = require("express");




const app = express();



app.use(express.json());

// Route for home page
app.get('/', (req, res) => {
  res.send('Welcome to the Review App!'); // Add your welcome message here
});



const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

