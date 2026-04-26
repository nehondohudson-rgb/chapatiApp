let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadMenu() {
  const res = await fetch("https://chapati-api.onrender.com/menu");
  const data = await res.json();

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  data.forEach(item => {

    let image = "";

    if (item.name === "Chapati")
      image = "https://images.unsplash.com/photo-1604908176997-431e87c1c77b";

    if (item.name === "Beef Chapati")
      image = "https://images.unsplash.com/photo-1601050690597-df0568f70950";

    if (item.name === "Egg Chapati")
      image = "https://images.unsplash.com/photo-1585238342028-4d3bfe59d7cb";

    if (item.name === "Chicken Chapati")
      image = "https://images.unsplash.com/photo-1604909053193-9c47c7d59c6e";

    menu.innerHTML += `
      <div class="card">
        <img src="${image}" />
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
  alert(name + " added 🛒");
}

loadMenu();