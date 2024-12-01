import { calculateCartSubtotal, generateCartItemsHTML } from "../component/updateCartDrawer";
import Joi from "joi";

export function CheckoutPage(){

  const checkoutVeledation = Joi.object({
    fullName: Joi.string().min(3).max(30).required().messages({
      "string.empty": "Full Name is required",
      "string.min": "Full Name must be at least 3 characters",
      "string.max": "Full Name must not exceed 30 characters",
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      "string.empty": "Email is required",
      "string.email": "Please provide a valid email address",
    }),
    address: Joi.string().min(5).required().messages({
      "string.empty": "Address is required",
      "string.min": "Address must be at least 5 characters long",
    }),
    cardNumber: Joi.string().min(16).required().messages({
      "string.empty": "Card Number is required",
      "string.creditCard": "Please provide a valid card number",
    }),
  });

  


    const checkoutPageContiner = document.getElementById('checkout-page-continer')

    const cartItemsHTML = generateCartItemsHTML();
    const subtotal = calculateCartSubtotal();
  
    checkoutPageContiner.innerHTML = `
       <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6 text-center">Checkout</h1>
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Customare Details Tab-->
        <div class="flex-1 bg-white p-6 shadow-md rounded-md">
          <h2 class="text-xl font-semibold mb-4">Billing Details</h2>
          <form id="checkoutForm" class="space-y-4">
            <div>
              <label for="fullName" class="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="fullName" name="fullName" class="w-full border rounded-md p-2" placeholder="John Doe" required>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full border rounded-md p-2" placeholder="example@email.com" required>
            </div>
            <div>
              <label for="address" class="block text-sm font-medium mb-1">Address</label>
              <textarea id="address" name="address" class="w-full border rounded-md p-2" rows="3" placeholder="123 Main Street" required></textarea>
            </div>
            <div>
              <label for="cardNumber" class="block text-sm font-medium mb-1">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" class="w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" required>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600">Place Order
            </button>
            <div id="errorMessages" class="text-red-500 text-sm mt-2"></div>
          </form>
        </div>

        <!-- For Price Calclution and product details -->
        <div class="flex-1 bg-white p-6 shadow-md rounded-md">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          <ul class="space-y-4 max-h-96 overflow-y-auto">${cartItemsHTML}</ul>
          <div class="mt-6">
            <p class="text-lg font-semibold">Subtotal: ৳${subtotal}</p>
            
              
          </div>
        </div>
      </div>
    </div>
    `;

    document.getElementById("checkoutForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        cardNumber: document.getElementById("cardNumber").value,
      };
  
      const { error } = checkoutVeledation.validate(formData, { abortEarly: false });
  
      if (error) {
        // Display errors
        const errorMessages = error.details.map(err => err.message);
        document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
      } else {
        // Proceed with form submission
        alert("Form is valid! Proceeding with checkout...");
      }
    });
  }
