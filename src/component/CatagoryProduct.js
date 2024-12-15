export async function CatagoryProduct() {
  const CatagoryProduct = document.createElement("div");
  CatagoryProduct.className = "flex flex-wrap gap-4 text-center";

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
    

    CatagoryProductArray.map((productCatagory, id)=>{
       const CatagoryProductid = productCatagory.id;
      

       const catagoryDiv = document.createElement("div");
       catagoryDiv.className = "flex flex-col items-center justify-center p-4 border rounded shadow-md w-40";

       catagoryDiv.innerHTML = `
       <div class="flex flex-col items-center text-center"> 
      <img src = ${productCatagory.storage_file.image_url} class="object-cover rounded-full mb-2" />
       <p>${productCatagory.name}
       </p> </div>`
       

       CatagoryProduct.appendChild(catagoryDiv);

    })
  } catch (error) {
    console.error("Error fetching product data:", error);

   
    CatagoryProduct.innerHTML = `<p class="text-red-500">Failed to load products. Please try again later.</p>`;
  }
  return CatagoryProduct;
}
