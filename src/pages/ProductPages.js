import { Modal } from "../component/Modal";
import { addToCart } from "../component/updateCartDrawer";

export function getProductName(product){
  location.hash = `/products/${product}`;
}

export async function ProductPage(categoryName) {
  console.log("Category Name is:", categoryName);

  // Create the main container for the product page
  const productPageContainer = document.createElement("div");
  productPageContainer.classList = "p-4";

  // Add breadcrumbs
  const breadcrumb = document.createElement("nav");
  breadcrumb.classList = "text-gray-600 text-sm mb-4";
  breadcrumb.innerHTML = `
    <ul class="flex items-center space-x-2">
      <li class="text-gray-800 font-semibold">
        Home
      </li>
      <li>/</li>
      <li class="text-gray-800 font-semibold">
        Products
      </li>
      <li>/</li>
      <li class="text-gray-800 font-semibold">${capitalizeFirstLetter(categoryName)}</li>
    </ul>
  `;

  productPageContainer.appendChild(breadcrumb);

  
  const gridContainer = document.createElement("div");
  gridContainer.classList = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6";

  try {
    // Fetch category-wise products
    const response = await fetch(
      `https://bakery-backend.fly.dev/api/products?per_page=16&category=${categoryName}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products for the category");
    }

    const productData = await response.json();
    const products = productData.data || []; // Assuming the API returns products in the `data` array

    if (products.length === 0) {
      gridContainer.innerHTML = `<p class="text-red-500 text-center col-span-full">No products found for this category.</p>`;
      productPageContainer.appendChild(gridContainer);
      return productPageContainer;
    }

    
    products.forEach((product) => {
      const productId = product.id;
      const productCard = document.createElement("div");
      productCard.classList =
        "border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden";

      productCard.innerHTML = `
        <div class="relative">
          <img 
            src="${product.storage_files[0]?.image_url || 'placeholder.jpg'}" 
            alt="${product.name}" 
            class="w-full h-56 object-cover"
          />
          <span class="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">New</span>
        </div>
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800 truncate">${product.name}</h2>
          <p class="text-red-500 font-bold mt-1">৳${product.price}</p>
          <div class="flex items-center mt-2">
            <div class="flex items-center p-2">
<svg class="w-4 h-4 text-yellow-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 ms-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
</div>
           
          </div>
          <div class="mt-4 flex justify-between">
            <button id= "buy-now-${productId}" class="btn bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded">Quick View</button>
            <div 
    id="add-to-cart-${productId}" 
   class="flex items-center justify-center border border-yellow-400 
    p-2 hover:bg-yellow-500" > 
   <svg class="w-6 h-6 text-yellow-500 hover:bg-yellow-500 hover:text-black" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1h2l.545 1.091L4.005 8h8.971l1.46-5.909A1 1 0 0013.485 1H4.285L3.72.447A.5.5 0 003.285 0H0v1zm4.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
</svg> </div>
          </div>
        </div>
      `;

       const buyButton = productCard.querySelector(`#buy-now-${productId}`);
            buyButton.addEventListener("click", () => {
              Modal(product);
              console.log(product)
              localStorage.setItem("selectedProduct", JSON.stringify(product));
            });
      
            const cartIcon = productCard.querySelector(`#add-to-cart-${productId}`);
          cartIcon.addEventListener("click", () => {
            addToCart(product, 1, null);
            const cartDrawerToggle = document.getElementById("my-drawer-4");
            if (cartDrawerToggle) {
              cartDrawerToggle.checked = true; 
            }
          });

      gridContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching category products:", error);
    gridContainer.innerHTML = `<p class="text-red-500 text-center col-span-full">Failed to load products. Please try again later.</p>`;
  }

  productPageContainer.appendChild(gridContainer);
  return productPageContainer;
}



// Helper function to capitalize the first letter of the category name
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




  