let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadMenu() {
  const res = await fetch("https://chapati-api.onrender.com/menu");
  const data = await res.json();

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  data.forEach(item => {
    menu.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>KSh ${item.price}</p>
        <button onclick="add('${item.name}', ${item.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function add(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty 🛒");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);

  fetch("https://chapati-api.onrender.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      items: cart,
      total: total
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Order placed successfully 🚀");
    localStorage.removeItem("cart");
  })
  .catch(err => {
    console.error(err);
    alert("Failed to place order ❌");
  });
}

loadMenu();