import { cart } from "../component/updateCartDrawer";
import { saveCartToLocalStorage } from "../component/updateCartDrawer";

export function cartPage() {
  const cartPageContainer = document.getElementById("cartPage");

  if (!cartPageContainer) {
    console.error("Cart container not found.");
    return;
  }

  const flatRate = 100; // Flat rate shipping cost

  if (cart.length === 0) {
    cartPageContainer.innerHTML = `
      <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p class="text-gray-500 text-center">Your cart is empty!</p>
        <a href="#" class="btn btn-primary mt-6 block text-center">Go Shopping</a>
      </div>
    `;
    return;
  }

  // Generate product rows
  const cartItemsHTML = cart
    .map(
      (item, index) => `
      <div class="grid grid-cols-12 items-center border-b py-4">
        <!-- Styled Delete Button -->
        <div class="col-span-1 flex justify-center">
          <button class="text-red-500 hover:text-red-700 text-lg font-semibold remove-item" data-index="${index}">❌</button>
        </div>

        <!-- Product Image -->
        <div class="col-span-2 flex justify-center">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded">
        </div>

        <!-- Product Name -->
        <div class="col-span-3">
          <p class="text-lg font-semibold">${item.name}</p>
        </div>

        <!-- Price Column -->
        <div class="col-span-3 text-center">
          <p class="text-lg font-semibold text-red-500">
            ${item.quantity} x ৳${item.price.toFixed(2)} = ৳${item.totalPrice.toFixed(2)}
          </p>
        </div>

        <!-- Quantity Column -->
        <div class="col-span-3 flex justify-center items-center">
          <button class="arrow-btn decrease-quantity px-2" data-index="${index}">⬅</button>
          <input 
            type="number" 
            class="quantity-input border text-center w-12 mx-2" 
            data-index="${index}" 
            value="${item.quantity}" 
            min="1"
          />
          <button class="arrow-btn increase-quantity px-2" data-index="${index}">➡</button>
        </div>
      </div>
    `
    )
    .join("");

  // Calculate subtotal and total
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const total = subtotal + flatRate;

  cartPageContainer.innerHTML = `
  <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Left Side: Cart Items -->
    <div class="lg:col-span-2">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div class="grid grid-cols-12 font-semibold mb-4 border-b pb-2">
        <div class="col-span-1 text-center"></div> <!-- Empty title for delete -->
        <div class="col-span-2 text-center"></div> <!-- Empty title for image -->
        <div class="col-span-3 text-left">Product</div>
        <div class="col-span-3 text-center">Price</div>
        <div class="col-span-3 text-center">Quantity</div>
      </div>
      ${cartItemsHTML}
    </div>

    <!-- Right Side: Summary and Checkout -->
    <div class="border rounded-lg p-6 bg-gray-50 shadow">
      <h2 class="text-xl font-bold text-green-600 mb-4 border-b-2 border-green-600">CART TOTALS</h2>
      <div class="text-lg mb-4 space-y-4">
        <!-- Subtotal -->
        <p class="flex justify-between">
          <span>Sub total:</span>
          <span class="text-gray-700">৳${subtotal.toFixed(2)}</span>
        </p>
        <!-- Flat Rate -->
        <p class="flex justify-between">
          <span>Flat rate:</span>
          <span class="text-red-500 font-semibold">৳${flatRate.toFixed(2)}</span>
        </p>
        <!-- Shipping Info -->
        <p class="text-gray-700">
          <span class="font-semibold">Shipping:</span> <br>
          <span>Shipping to Dhaka, Dhaka, 1212.</span>
          <a href="#" class="text-red-500 font-semibold underline hover:text-red-700 block mt-2">Change Address</a>
        </p>
        <hr class="my-4">
        <!-- Total -->
        <p class="flex justify-between font-bold text-xl">
          <span>Total:</span>
          <span class="text-red-500">৳${total.toFixed(2)}</span>
        </p>
      </div>
      <!-- Checkout Button -->
      <button id="checkout-button" class="btn bg-red-500 text-white font-semibold py-2 px-4 w-full rounded hover:bg-red-600 mt-4">
        PROCEED TO CHECKOUT
      </button>
    </div>
  </div>
`;


  // Event listeners for quantity inputs
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const decreaseButtons = document.querySelectorAll(".decrease-quantity");
  const increaseButtons = document.querySelectorAll(".increase-quantity");
  const removeItemButtons = document.querySelectorAll(".remove-item");

  // Update quantity with input field
  quantityInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      const index = event.target.getAttribute("data-index");
      const newQuantity = parseInt(event.target.value, 10);

      if (newQuantity >= 1) {
        cart[index].quantity = newQuantity;
        cart[index].totalPrice = cart[index].price * newQuantity;
        saveCartToLocalStorage();
        cartPage(); 
      } else {
        event.target.value = cart[index].quantity;
      }
    });
  });

  // Decrease quantity
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
        cart[index].totalPrice = cart[index].price * cart[index].quantity;
        saveCartToLocalStorage();
        cartPage();
      }
    });
  });

  // Increase quantity
  increaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart[index].quantity++;
      cart[index].totalPrice = cart[index].price * cart[index].quantity;
      saveCartToLocalStorage();
      cartPage();
    });
  });

  // Remove item
  removeItemButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1); // Remove item from the cart
      saveCartToLocalStorage();
      cartPage();
    });
  });

  // Checkout button functionality
  const checkoutButton = document.getElementById("checkout-button");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      window.location.hash = "#/checkout";
      console.log("Checkout page");
    });
  }
}










