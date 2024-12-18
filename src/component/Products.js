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
  <figure class="px-4 pt-4  border-gray-300 border-b-2 pb-2 ">
    <img
      src=${imageUrl}
      alt="Foods"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${product.name}</h2>
    <p>${product.price}</p>
    <div class="card-actions">
      <a href="#/product/${productId}" class="btn btn-primary" id="buy-now-${productId}">Buy Now</a>
    </div>
  </div>
</div>
      `;

      const buyButton = productDiv.querySelector(`#buy-now-${productId}`);
      buyButton.addEventListener("click", () => {
       
        sessionStorage.setItem("selectedProduct", JSON.stringify(product));
      });

      
      products.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching product data:", error);

    
    products.innerHTML = `<p class="text-red-500">Failed to load products. Please try again later.</p>`;
  }

  return products;
}
