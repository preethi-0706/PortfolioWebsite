// Sample product data (replace with your actual product data)
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  // Add more products here
];

const cartItems = [];
let cartTotal = 0;

function displayProducts() {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productHtml = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;

    productCard.innerHTML = productHtml;
    productContainer.appendChild(productCard);
  });
}

function addToCart(event) {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      cartItems.push(selectedProduct);
      cartTotal += selectedProduct.price;

      updateCart();
    }
  }
}

function updateCart() {
  const cartItemsList = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsList.innerHTML = "";
  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("li");
    cartItemElement.textContent = item.name;
    cartItemsList.appendChild(cartItemElement);
  });

  cartTotalElement.textContent = cartTotal;
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

  const productContainer = document.querySelector(".product-list");
  productContainer.addEventListener("click", addToCart);
});
