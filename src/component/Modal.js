import { addToCart } from "./updateCartDrawer";
export function Modal(product) {
  if (!product) {
    console.error("No product data provided.");
    return;
  }

  const imageUrl = product.storage_files?.[0]?.image_url;

  const cartDrawerComponent = document.getElementById("modal-container");
  cartDrawerComponent.className = ""; // Reset modal container class

  const cartDrawer = document.createElement("div");
  cartDrawer.innerHTML = `
    <dialog id="my_modal_3" class="modal">
      <div 
        class="modal-box max-w-[800px] w-full max-h-[450px] h-auto flex flex-col lg:flex-row gap-6 p-8 overflow-hidden box-border border border-gray-300 rounded-lg"
      >
        <!-- Close Button -->
        <form method="dialog">
          <button 
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border border-gray-300 rounded-full"
          >
            ✕
          </button>
        </form>

        <!-- Modal Content -->
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- Product Image -->
          <div class="border border-gray-300 rounded-md p-2">
            <img  
              src="${imageUrl}" 
              alt="${product.name}" 
              class="rounded-md border object-cover w-[333px] h-[333px] lg:w-[333px] lg:h-[250px]" 
            />
          </div>

          <!-- Product Details -->
          <div class="w-full lg:w-2/3">
            <h3 class="text-2xl font-bold text-gray-800">${product.name}</h3>
            <p class="text-lg text-red-600 font-semibold mt-2">৳ ${product.price}.00</p>
            <p class="text-sm text-gray-600 mt-1">${product.weight} gm</p>
            <p class="text-gray-500 text-sm mt-2">${product.name} weight ${product.weight} price ${product.price}</p>
            
            <!-- Quantity Selector -->
            <div class="flex items-center gap-4 mt-4">
              <div class="flex items-center gap-2">
                <button id="decrease-btn" class="btn btn-outline btn-sm px-4">-</button>
                <input 
                  id="quantity-input" 
                  type="number" 
                  value="1" 
                  min="1" 
                  class="input input-bordered w-24 text-center px-4" 
                />
                <button id="increase-btn" class="btn btn-outline btn-sm px-4">+</button>
              </div>
              <button 
                id="add-to-cart-btn" 
                class="btn bg-red-500 flex-grow lg:flex-grow-0 lg:w-auto px-6 py-2"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  `;

  // Append the modal to the container
  cartDrawerComponent.appendChild(cartDrawer);

  // Get the modal element after appending
  const modal = document.getElementById("my_modal_3");
  if (modal) {
    modal.showModal(); 
  } else {
    console.error("Modal element not found after appending to DOM.");
  }

  
  const quantityInput = document.getElementById("quantity-input");
  document.getElementById("decrease-btn").addEventListener("click", () => {
    const value = Math.max(1, parseInt(quantityInput.value) - 1);
    quantityInput.value = value;
  });

  document.getElementById("increase-btn").addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);

   
    addToCart(product, quantity, product.weight);

    const drawerInput = document.getElementById("my-drawer-4");
        if (drawerInput) {
          drawerInput.checked = true;
        } else {
          console.error("Drawer input element not found.");
        };
      

   
    modal.close();
  });
}
