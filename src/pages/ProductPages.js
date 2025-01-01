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

  // Create a grid container for the products
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

    // Dynamically render each product
    products.forEach((product) => {
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
            <div class="flex text-yellow-400 text-sm">
              ${getStarsHTML(product.rating)} <!-- Helper function to render stars -->
            </div>
            <span class="text-gray-500 text-sm ml-2">(${product.rating_count || 0} reviews)</span>
          </div>
          <div class="mt-4 flex justify-between">
            <button class="btn bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">Quick View</button>
            <button class="btn bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      `;

      gridContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching category products:", error);
    gridContainer.innerHTML = `<p class="text-red-500 text-center col-span-full">Failed to load products. Please try again later.</p>`;
  }

  productPageContainer.appendChild(gridContainer);
  return productPageContainer;
}

// Helper function to render stars dynamically
function getStarsHTML(rating) {
  const fullStars = Math.floor(rating || 0);
  const halfStar = (rating || 0) % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="fas fa-star"></i>`;
  }
  if (halfStar) {
    starsHTML += `<i class="fas fa-star-half-alt"></i>`;
  }
  while (starsHTML.length < 5) {
    starsHTML += `<i class="far fa-star"></i>`;
  }
  return starsHTML;
}

// Helper function to capitalize the first letter of the category name
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




  