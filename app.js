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