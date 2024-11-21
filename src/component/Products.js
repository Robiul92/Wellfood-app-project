import productData from "../products.json";
console.log(productData[0].name);

export function Products() {
  // Create a container for all products
  const products = document.createElement("div");
  products.className = "grid md:grid-cols-3 gap-4 p-4"; // Add a class for styling

  // Iterate through the product data array
  productData.map((product, id) => {
    // Create a div for each product
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // Set the innerHTML for each product
    productDiv.innerHTML = `
            
<div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${product.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
     <p>${product.price}</p>
    <div class=" justify-end">
     <a href="#/product/${id}" class ="card-actions"> </a> 
    </div>
  </div>
</div>
        `;
    // Create the "Buy Now" button dynamically
    const buyButton = document.createElement("button");
    buyButton.className = "btn btn-primary";
    buyButton.textContent = "Buy Now";
    buyButton.id = `buy-button`;

   

    // Append the button to the card-actions div
    productDiv.querySelector(".card-actions").appendChild(buyButton);

    // Append the product div to the container
    products.appendChild(productDiv);
  });

  // Return the container with all products
  return products;
}
