import productData from '../products.json';
console.log(productData[0].name);


export function Products() {
    // Create a container for all products
    const products = document.createElement('div');
    products.className = 'grid md:grid-cols-4 gap-4 p-4'; // Add a class for styling

    // Iterate through the product data array
    productData.map((product) => {
        // Create a div for each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Set the innerHTML for each product
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <a href="${product.link}" target="_blank">View Details</a>
        `;

        // Append the product div to the container
        products.appendChild(productDiv);
    });

    // Return the container with all products
    return products;
}
