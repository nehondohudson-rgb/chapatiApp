fetch("https://chapati-api.onrender.com/menu")
  .then(res => res.json())
  .then(data => {
    const menuContainer = document.getElementById("menu");

    data.forEach(item => {
      const card = document.createElement("div");

      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";

      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>Ksh ${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">
          Add to Cart
        </button>
      `;

      menuContainer.appendChild(card);
    });
  });

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart 🛒");
}
