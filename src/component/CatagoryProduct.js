import { Products } from "./Products";

export async function CatagoryProduct() {
  const CatagoryProduct = document.createElement("div");
  CatagoryProduct.className = "w-full";

  // Title Section
  const title = document.createElement("h1");
  title.className =
    "text-2xl font-bold text-red-600 border-b-2 border-gray-200 pb-4 mb-4 text-center";
  title.textContent = "Bakery Products & Categories";
  CatagoryProduct.appendChild(title);

  // Category Container
  const categoryContainer = document.createElement("div");
  categoryContainer.className =
    "flex flex-wrap gap-4 text-center justify-center";

  const categoryMapping = {
    Buiscuits: "biscuits",
    "Bread/Bun": "bread_bun",
  };

  let selectedCategory = null; // Declare a variable to track the selected category

  try {
    // Fetch product data from the API
    const response = await fetch(
      "https://bakery-backend.fly.dev/api/categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const CatogeryProductData = await response.json();
    const CatagoryProductArray = CatogeryProductData.data;

    CatagoryProductArray.map((productCatagory) => {
      const CatagoryProductid = productCatagory.id;
      const categoryName = productCatagory.name;
      const normalizedCategoryName =
        categoryMapping[categoryName] || categoryName.toLowerCase();

      // Create individual category div
      const catagoryDiv = document.createElement("div");
      catagoryDiv.className =
        "flex flex-col items-center justify-center p-4 border rounded w-40 uppercase cursor-pointer hover:text-red-600";

      catagoryDiv.innerHTML = `
        <div class="flex flex-col items-center"> 
          <img src="${productCatagory.storage_file.image_url}" class="object-cover rounded-full mb-2" />
          <p>${categoryName}</p>
        </div>`;

      // Add click event listener for category selection
      catagoryDiv.addEventListener("click", async () => {
        console.log(
          `Category clicked: ${categoryName} (ID: ${CatagoryProductid})`
        );

        // Remove underline and red text from the previously selected category
        if (selectedCategory) {
          selectedCategory.classList.remove(
            "underline",
            "underline-offset-4",
            "decoration-2",
            "text-red-600"
          );
        }

        // Add underline and red text to the clicked category
        catagoryDiv.classList.add(
          "underline",
          "underline-offset-4",
          "decoration-2",
          "text-red-600"
        );
        selectedCategory = catagoryDiv;

        // Fetch and display products for this category
        const productsContainer = document.getElementById("products");
        if (productsContainer) {
          productsContainer.innerHTML = "";
          const productsElement = await Products(normalizedCategoryName); // Fetch products
          productsContainer.appendChild(productsElement);
        } else {
          console.error("Products container not found");
        }
      });

      // Append each category div to the container
      categoryContainer.appendChild(catagoryDiv);
    });

    // Append category container to the main component
    CatagoryProduct.appendChild(categoryContainer);
  } catch (error) {
    console.error("Error fetching product data:", error);

    // Display error message
    CatagoryProduct.innerHTML = `<p class="text-red-500 text-center">Failed to load products. Please try again later.</p>`;
  }

  return CatagoryProduct;
}
