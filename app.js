let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function renderCart() {
  let cartDiv = document.getElementById("cart");
  let total = 0;

  cartDiv.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    cartDiv.innerHTML += `
      <p>${item.name} - KSh ${item.price}</p>
    `;
  });

  cartDiv.innerHTML += `<h3>Total: KSh ${total}</h3>`;
}

function showTotal() {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total").innerText = "KSh " + total;
}

function placeOrder() {
  alert("Order placed successfully 🚀");
  localStorage.removeItem("cart");
  window.location.href = "menu.html";
}
fetch("https://chapati-api.onrender.com/menu")
  .then(res => res.json())
  .then(data => {
    const menuContainer = document.getElementById("menu");

    data.forEach(item => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Ksh ${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">
          Add to Cart
        </button>
      `;

      menuContainer.appendChild(div);
    });
  });

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");
}
