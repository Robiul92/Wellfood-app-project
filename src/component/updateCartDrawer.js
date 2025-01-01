import { cartPage } from "../pages/cartPage";

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

export function deleteCartItem(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1); // Remove the item from the cart array
    saveCartToLocalStorage(); // Save the updated cart to localStorage
    updateCartDrawer(); // Update the cart drawer UI
  }
}

export function generateCartItemsHTML() {
  if (cart.length === 0) {
    return `<p class="text-gray-500 text-center">Your cart is empty!</p>`;
  }

  return cart
    .map(
      (item, index) => `
     <div class=" flex items-center border-b pb-2 gap-4">
  <!-- Image -->
  <div class="flex-shrink-0 border border-gray-300 rounded-md p-1">
    <img 
      src="${item.image}" 
      alt="${item.name}" 
      class="w-16 h-16 object-cover rounded-md" 
    />
  </div>

  <!-- Title and Details -->
  <div class="flex-1">
    <p class="text-sm font-semibold text-gray-800">${item.name}</p>
    <div class="flex items-center">
      <p class="text-sm text-gray-500">${item.quantity} x <span class="text-red-700">৳${item.price.toFixed(2)}</span> =</p>
      <p class="text-sm text-red-700 ml-1">৳${item.totalPrice.toFixed(2)}</p>
    </div>
  </div>

  <!-- Cross Button -->
  <div class="flex-shrink-0 border border-gray-300  p-2">
    <button 
      class="text-gray-500 hover:text-red-500 text-xl font-bold remove-item"
      "
    >
      &times;
    </button>
  </div>
</div>


`
    )
    .join("");
}

export function calculateCartSubtotal() {
  return cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
}

export function updateCartDrawer() {
  const cartDrawerComponent = document.getElementById("cart-drawer-container");

  if (!cartDrawerComponent) {
    console.error("Cart drawer container not found.");
    return;
  }

  const cartItemsHTML = generateCartItemsHTML();
  const subtotal = calculateCartSubtotal();

  cartDrawerComponent.innerHTML = `
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-4" class="drawer-button btn btn-primary hidden">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <div class="menu bg-white shadow-lg w-96 max-w-full h-full p-6 flex flex-col">
          <!-- Header -->
          <div class="flex justify-between items-center border-b pb-4">
            <h3 class="text-lg font-bold">Shopping Cart</h3>
            <label for="my-drawer-4" class="cursor-pointer text-gray-500 text-2xl font-bold">&times;</label>
          </div>
          
          <!-- Cart Items -->
          <ul class="space-y-4 mt-4 overflow-y-auto flex-1 max-h-[60vh]">
            ${cartItemsHTML}
          </ul>

          <!-- Subtotal and Buttons -->
          <div class="mt-4 border-t pt-4">
            <div class="flex justify-between items-center">
              <p class="text-lg font-semibold">SUBTOTAL:</p>
              <p class="text-lg font-semibold text-red-600">৳ ${subtotal}</p>
            </div>
            <div class="mt-4 flex flex-col space-y-2">
              <button id="cart-page-btn" class="btn bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
                View Cart
              </button>
              <button id="checkout-btn" class="btn bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const removeItemButtons = document.querySelectorAll(".remove-item");

  removeItemButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove item from the cart
      saveCartToLocalStorage();
      updateCartDrawer();
    });
  });

  // Add event listeners for buttons
  const viewCartButton = document.getElementById("cart-page-btn");
  const drawerToggle = document.getElementById("my-drawer-4");
  if (viewCartButton) {
    viewCartButton.addEventListener("click", () => {
      window.location.hash = "#/cart";
      if (drawerToggle) drawerToggle.checked = false;
    });
  }

  const checkoutButton = document.getElementById("checkout-btn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      window.location.hash = "#/checkout";
      if (drawerToggle) drawerToggle.checked = false;
    });
  }
}



export function addToCart(product, quantity, weight) {
  const price = parseFloat(product.price.replace(/[^\d.-]/g, ""));

  if (isNaN(price) || isNaN(quantity) || quantity <= 0) {
    console.error("Invalid price or quantity.");
    return;
  }

  const totalPrice = price * quantity;
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice += totalPrice;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.storage_files[0].image_url,
      price,
      quantity,
      weight,
      totalPrice,
    });
  }

  saveCartToLocalStorage(); // Save cart to localStorage
  updateCartDrawer(); // Update cart drawer UI
}
