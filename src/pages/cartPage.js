import { cart } from "../component/updateCartDrawer";

export function cartPage() {
    const cartPage = document.getElementById('cartPage');

    if (!cartPage){
      console.error("App container not found.");
      return;
    }

    let cartItemsHTML = "";

    if (cart.length === 0) {
      cartPage.innerHTML = `
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
          <p class="text-gray-500 text-center">Your cart is empty!</p>
          <a href="#" class="btn btn-primary mt-6 block text-center">Go Shopping</a>
        </div>
      `;
      return;
    }

    cartItemsHTML = cart
    .map(
      (item) => `
      <div class="flex items-center justify-between p-4 border rounded-md shadow-sm mb-4">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-md" />
        <div class="flex-1 ml-4">
          <p class="text-lg font-medium">${item.name}</p>
          <p class="text-sm text-gray-500">৳${item.price.toFixed(2)} x ${item.quantity}</p>
        </div>
        <p class="text-lg font-bold">৳${item.totalPrice.toFixed(2)}</p>
      </div>
    `
    )
    .join("");

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);

    cartPage.innerHTML = `
      <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
      ${cartItemsHTML}
      <div class="mt-6 border-t pt-4">
        <div class="flex justify-between items-center mb-4">
          <p class="text-xl font-semibold">Subtotal:</p>
          <p class="text-xl font-bold">৳${subtotal}</p>
        </div>
        <button id="checkout-button" class="btn btn-primary w-full">Proceed to Checkout</button>
      </div>
    </div>
      
    `;

    const checkoutButton = document.getElementById("checkout-button")
    if (checkoutButton) {
      checkoutButton.addEventListener("click", () => {
        window.location.hash = "#/checkout"; // 
        console.log('checkout page')
      });
    }
  }