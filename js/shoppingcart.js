import { movies } from "./movies.js";



let cart = [];

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.title} x ${item.quantity}</p>
        <p>${item.price * item.quantity}kr</p>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      </div>
    `;
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total;

  document.querySelectorAll(".remove-item").forEach((button) =>
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      removeFromCart(id);
    })
  );
}

function addToBasket(movieId) {
  const movie = movies.find((m) => m.id === movieId);
  const existingItem = cart.find((item) => item.id === movieId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...movie, quantity: 1 });
  }

  updateCartUI();
}

function removeFromCart(movieId) {
  cart = cart.filter((item) => item.id !== movieId);
  updateCartUI();
}

// Event Listeners
document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.add("open");
});

document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.remove("open");
});

document.querySelectorAll(".add-to-basket-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const movieId = event.target.getAttribute("data-id");
    addToBasket(movieId);
  });
});

document.getElementById("purchase-btn").addEventListener("click", () => {
  alert("Redirecting to purchase page...");
  // Implement redirection logic here
});
