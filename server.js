
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => {
  res.send("Chapati API is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
app.get("/menu", (req, res) => {
  res.json([
    { id: 1, name: "Chapati", price: 20 },
    { id: 2, name: "Beef Chapati", price: 50 },
    { id: 3, name: "Egg Chapati", price: 40 },
    { id: 4, name: "Chicken Chapati", price: 80 }
  ]);
});
