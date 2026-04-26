const express = require("express");
const cors = require("cors");

const app = express();app.get("/", (req, res) => {
  res.send("🍛 Chapati API is running successfully 🚀");
});

app.use(cors());
app.use(express.json());

// In-memory orders
let orders = [];

// MENU
app.get("/menu", (req, res) => {
  res.json([
    { id: 1, name: "Chapati", price: 20 },
    { id: 2, name: "Beef Chapati", price: 50 },
    { id: 3, name: "Egg Chapati", price: 40 },
    { id: 4, name: "Chicken Chapati", price: 80 }
  ]);
});

// CREATE ORDER
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

// UPDATE ORDER STATUS
app.patch("/order/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  let order = orders.find(o => o.id == id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = status;

  res.json({ message: "Status updated 🚀", order });
});

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Chapati API is running 🚀");
});