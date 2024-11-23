import productData from "../products.json";

export function Products() {
  // Create a container for all products
  const products = document.createElement("div");
  products.className = "grid md:grid-cols-3 gap-4 p-4"; // Add a class for styling

  // Iterate through the product data array
  productData.forEach((product, index) => {
    // Use `index` as the fallback id if `product.id` is not defined
    const productId = product.id || index;

    // Create a div for each product
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // Set the innerHTML for each product
    productDiv.innerHTML = `
      <div class="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="${product.name}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${product.name}</h2>
          <p>${product.price}</p>
          <div class="card-actions">
            <a href="#/product/${productId}" class="btn btn-primary" id="buy-now-${productId}">Buy Now</a>
          </div>
        </div>
      </div>
    `;

    // Add event listener to "Buy Now" button
    const buyButton = productDiv.querySelector(`#buy-now-${productId}`);
    buyButton.addEventListener("click", () => {
      // Save product data to sessionStorage
      sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    });

    // Append the product div to the container
    products.appendChild(productDiv);
  });

  // Return the container with all products
  return products;
}
