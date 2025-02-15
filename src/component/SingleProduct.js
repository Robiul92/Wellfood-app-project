import { addToCart } from "./updateCartDrawer";

export function SingleProduct() {
  const singleProductContainer = document.getElementById("single-product");
  const productsContainer = document.getElementById("products");

  const url = new URL(window.location.href);
  const productId =
    url.hash.split("/").pop() === ""
      ? 0
      : parseInt(url.hash.split("/").pop(), 10); // Check for empty hash

  if (!productsContainer || !singleProductContainer) {
    console.error("Product containers not found.");
    return;
  }

  if (productId) {
    
const product = JSON.parse(localStorage.getItem("selectedProduct"));
  console.log(product);

    if (product && product.id === productId) {
      // Hide the products list
      productsContainer.style.display = "none";

      const imageUrl = product.storage_files[0].image_url;



      // Show the single product view
      singleProductContainer.style.display = "block";
      singleProductContainer.innerHTML = `
        <div class="flex flex-col md:flex-row items-center md:items-start p-6 bg-gray-100 rounded-lg shadow-lg">
          <div class="w-full md:w-1/2">
            <img src=${imageUrl} alt="${
              product.name
            }" class="w-full h-auto rounded-lg shadow-md"/>
          </div>
          <div class="w-full md:w-1/2 md:pl-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">${
              product.name
            }</h1>
            <p class="text-2xl text-green-600 font-semibold mb-4">Price: ${
              product.price
            } / unit</p>
            <p class="text-gray-600 mb-4">
              <strong>Description:</strong> ${
                product.description || "No description available."
              }
            </p>
            <div class="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <label for="product-quantity" class="text-gray-700 font-medium mb-2 md:mb-0">Quantity:</label>
              <input id="product-quantity" type="number" min="1" value="1" class="w-16 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
              <label for="product-weight" class="text-gray-700 font-medium mb-2 md:mb-0">Weight:</label>
              <select id="product-weight" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                
                <option value="1kg">1kg</option>
                
              </select>
            </div>
            <button id="add-to-cart" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Add to Cart</button>
            <button id="back-to-products" class="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition">Back to Products</button>
          </div>
        </div>
      `;

      document.getElementById("add-to-cart").addEventListener("click", () => {
        const quantity = parseInt(
          document.getElementById("product-quantity").value,
          10
        );
        const weight = document.getElementById("product-weight").value;

        addToCart(product, quantity, weight);

        const drawerInput = document.getElementById("my-drawer-4");
        if (drawerInput) {
          drawerInput.checked = true;
        } else {
          console.error("Drawer input element not found.");
        }
      });

      document
        .getElementById("back-to-products")
        .addEventListener("click", () => {
          window.location.hash = "";
          productsContainer.style.display = "block";
          singleProductContainer.style.display = "none";
        });
    } else {
      singleProductContainer.innerHTML = "<p>Product not found!</p>";
    }
  } else {
    productsContainer.style.display = "block";
    singleProductContainer.style.display = "none";
  }
}
