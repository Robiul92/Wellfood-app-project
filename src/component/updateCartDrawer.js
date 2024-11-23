let cart = [];

// Function to update the cart drawer UI
export function updateCartDrawer() {
  const cartDrawerComponent = document.getElementById("cart-drawer-container");

  if (!cartDrawerComponent) {
    console.error("Cart drawer container not found.");
    return;
  }

  // Check if cart is empty
  if (cart.length === 0) {
    cartDrawerComponent.innerHTML = `
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer-4" class="drawer-button hidden"></label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div class="menu bg-white shadow-lg w-80 p-4">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="text-lg font-bold">Shopping Cart</h3>
              <label for="my-drawer-4" class="cursor-pointer text-gray-500 text-xl font-bold">&times;</label>
            </div>
            <p class="text-center text-gray-500 mt-4">Your cart is empty!</p>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Render the updated cart items
  const cartItemsHTML = cart
    .map(
      (item) => `
      <li class="flex items-center justify-between border-b py-2">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-md" />
        <div class="flex-1 ml-4">
          <p class="text-sm font-medium">${item.name}</p>
          <p class="text-sm text-gray-500">${item.quantity} x ৳${item.price.toFixed(2)}</p>
        </div>
        <p class="text-sm font-medium">৳${item.totalPrice.toFixed(2)}</p>
      </li>`
    )
    .join("");

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);

  cartDrawerComponent.innerHTML = `
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-4" class="drawer-button btn btn-primary hidden">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <div class="menu bg-white shadow-lg w-80 p-4 flex flex-col justify-between">
          <!-- Header with Title and Exit Button -->
          <div class="flex justify-between items-center border-b pb-2">
            <h3 class="text-lg font-bold">Shopping Cart</h3>
            <label for="my-drawer-4" class="cursor-pointer text-gray-500 text-xl font-bold">&times;</label>
          </div>
          <!-- Cart Items -->
          <ul class="space-y-2 mt-4">
            ${cartItemsHTML}
          </ul>
          <!-- Footer with Subtotal and Actions -->
          <div class="mt-4 border-t pt-4">
            <div class="flex justify-between items-center">
              <p class="text-lg font-semibold">Subtotal:</p>
              <p class="text-lg font-semibold">৳${subtotal}</p>
            </div>
            <div class="mt-4 flex flex-col space-y-2">
              <button class="btn btn-primary w-full">View Cart</button>
              <button class="btn btn-secondary w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to add a product to the cart
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
      image: product.image, // Ensure your product object contains an image property
      price,
      quantity,
      weight,
      totalPrice,
    });
  }

  updateCartDrawer();
}
