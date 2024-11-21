import products from "../products.json";

export function SingleProduct() {
  const hash = window.location.hash; // Use the correct property
  const singleProductContainer = document.getElementById("single-product");
  const productsContainer = document.getElementById("products");

  if (hash.startsWith("#/product/")) {
    const productId = parseInt(hash.split("/")[2], 10); // Extract the product index
    const product = products[productId];
    console.log(product);

    if (product) {
      // Hide the products list
      productsContainer.style.display = "none";

      // Show the single product view
      singleProductContainer.style.display = "block";
      singleProductContainer.innerHTML = `
                <div class="flex flex-col md:flex-row items-center md:items-start p-6 bg-gray-100 rounded-lg shadow-lg">
          <!-- Set the product image on the left -->
          <div class="w-full md:w-1/2">
            <img src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="${product.name}" class="w-full h-auto rounded-lg shadow-md"/>
          </div>
          <!-- Right Side: Product Details -->
          <div class="w-full md:w-1/2 md:pl-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">${product.name}</h1>
            <p class="text-2xl text-green-600 font-semibold mb-4">Price: ${product.price} / unit</p>
            <p class="text-gray-600 mb-4">
              <strong>Description:</strong> ${product.description || "No description available."}
            </p>
            <div class="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <label for="product-quantity" class="text-gray-700 font-medium mb-2 md:mb-0">Quantity:</label>
              <input id="product-quantity" type="number" min="1" value="1" class="w-16 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
              <label for="product-weight" class="text-gray-700 font-medium mb-2 md:mb-0">Weight:</label>
              <select id="product-weight" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
                <option value="5kg">5kg</option>
              </select>
            </div>
            <button id="add-to-cart" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Add to Cart</button>
            <button id="back-to-products" class="w-full mt-4 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition">Back to Products</button>
          </div>
        </div>
            `;

           

            document.getElementById("add-to-cart").addEventListener(
             "click", ()=> {
              const drawerInput = document.getElementById("my-drawer-4");
              const quantity = document.getElementById("product-quantity").value;
        const weight = document.getElementById("product-weight").value;
      
        if (drawerInput) {
          drawerInput.checked = true; // Open the drawer
        } else {
          console.error("Drawer input element not found.");
        }
      
      }
            )

            

      // Add a back button listener
      document
        .getElementById("back-to-products")
        .addEventListener("click", () => {
          window.location.hash = "#"; // Redirect to the main page
        });
    } else {
      singleProductContainer.innerHTML = "<p>Product not found!</p>";
    }
  } else {
    // Show the product list and hide the single product view
    productsContainer.style.display = "block";
    singleProductContainer.style.display = "none";
  }
}
