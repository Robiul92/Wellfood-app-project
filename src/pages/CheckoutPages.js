import { calculateCartSubtotal, generateCartItemsHTML } from "../component/updateCartDrawer";

export function CheckoutPage(){
    const checkoutPageContiner = document.getElementById('checkout-page-continer')

    const cartItemsHTML = generateCartItemsHTML();
    const subtotal = calculateCartSubtotal();
  
    checkoutPageContiner.innerHTML = `
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Checkout</h1>
        <ul class="space-y-4">${cartItemsHTML}</ul>
        <div class="mt-6">
          <p class="text-lg font-semibold">Subtotal: ৳${subtotal}</p>
          <form id="checkout-form" class="mt-4">
            <label class="block text-sm font-medium mb-2">Shipping Address</label>
            <input type="text" class="input input-bordered w-full mb-4" placeholder="Enter your address" />
            <button type="submit" class="btn btn-primary w-full">Place Order</button>
          </form>
        </div>
      </div>
    `;
  }
