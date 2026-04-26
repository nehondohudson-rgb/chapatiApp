const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let orders = [];

// MENU ROUTE
app.get("/menu", (req, res) => {
  res.json([
    { id: 1, name: "Chapati", price: 20 },
    { id: 2, name: "Beef Chapati", price: 50 },
    { id: 3, name: "Egg Chapati", price: 40 },
    { id: 4, name: "Chicken Chapati", price: 80 }
  ]);
});

// ORDER ROUTE
app.post("/order", (req, res) => {
  const order = req.body;

  orders.push({
    id: Date.now(),
    items: order.items,
    total: order.total,
    status: "pending"
  });

  res.json({ message: "Order received 🚀" });
});

// GET ORDERS
app.get("/orders", (req, res) => {
  res.json(orders);
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Chapati API is running 🚀");
});