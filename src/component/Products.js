import { Modal } from "./Modal";
import { addToCart } from "./updateCartDrawer";
export async function Products(categoryId = "sweets") {
  console.log(categoryId);
  // Create a container for all products
  const products = document.createElement("div");
  products.className = "grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"; // Add a class for styling

  try {
    // Fetch product data from the API
    const response = await fetch(
      `https://bakery-backend.fly.dev/api/products?per_page=16&category=${categoryId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const productData = await response.json();

    const productArray = productData.data;

    productArray.map((product, id) => {
      const productId = product.id;

      const imageUrl = product.storage_files?.[0]?.image_url;

      const productDiv = document.createElement("div");
      productDiv.className =
        "card bg-base-100 shadow-xl border border-gray-300 rounded-xl";

      productDiv.innerHTML = `
       <div class="md">
  <figure class="px-4 pt-4  border-gray-300 border-b-2 pb-2  ">
    <img
      src=${imageUrl}
      alt="Foods"
      class=" h-[283px] rounded-xl" />
  </figure>
  <div class="card-body ">
    <div class = "flex justify-between p-1">
   <div class="font-bold">  <h4 >${product.name}</h4> </div>
    <div class="bg-red-500 ps-2 pe-2"> <p>৳ ${product.price} .00</p></div>
    </div>



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

    <div class="flex justify-between items-center">
    <div class="card-actions">
      <button class="btn bg-red-500" id="buy-now-${productId}">Quick View</button>
    
    
    </div>
   <div 
    id="add-to-cart-${productId}" 
   class="flex items-center justify-center border border-yellow-400 
    p-2 hover:bg-yellow-500" > 
   <svg class="w-6 h-6 text-yellow-500 hover:bg-yellow-500 hover:text-black" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1h2l.545 1.091L4.005 8h8.971l1.46-5.909A1 1 0 0013.485 1H4.285L3.72.447A.5.5 0 003.285 0H0v1zm4.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
</svg> </div>
  </div> </div>
</div>
      `;

      const buyButton = productDiv.querySelector(`#buy-now-${productId}`);
      buyButton.addEventListener("click", () => {
        Modal(product);
        localStorage.setItem("selectedProduct", JSON.stringify(product));
      });

      const cartIcon = productDiv.querySelector(`#add-to-cart-${productId}`);
    cartIcon.addEventListener("click", () => {
      addToCart(product, 1, null);
      const cartDrawerToggle = document.getElementById("my-drawer-4");
      if (cartDrawerToggle) {
        cartDrawerToggle.checked = true; 
      }
    });

      products.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching product data:", error);

    products.innerHTML = `<p class="text-red-500">Failed to load products. Please try again later.</p>`;
  }

  return products;
}
