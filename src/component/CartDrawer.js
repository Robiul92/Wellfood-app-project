let cart = [];

// Function to update the cart drawer UI
export function updateCartDrawer() {
  const cartDrawerComponent = document.getElementById("cart-drawer-container");

  if (!cartDrawerComponent) {
    console.error("Cart drawer container not found.");
    return;
  }

  // Render the updated cart items
  const cartItemsHTML = cart
    .map(
      (item) => `
      <li>
        <p>${item.name} - ${item.quantity} x ${item.weight} (${item.totalPrice.toFixed(
        2
      )})</p>
      </li>`
    )
    .join("");

  cartDrawerComponent.innerHTML = `
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer-4" class="drawer-button btn btn-primary hidden">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          ${cartItemsHTML}
        </ul>
      </div>
    </div>
  `;
}

// Function to add a product to the cart
export function addToCart(product, quantity, weight) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice += product.price * quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      weight,
      totalPrice: product.price * quantity,
    });
  }

  updateCartDrawer();
}
