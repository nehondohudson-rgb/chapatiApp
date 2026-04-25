let orders = [];

app.post("/order", (req, res) => {
  const order = req.body;

  orders.push({
    id: Date.now(),
    items: order.items,
    total: order.total,
    status: "pending"
  });

  console.log("New Order:", order);

  res.json({
    message: "Order received successfully 🚀"
  });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});
