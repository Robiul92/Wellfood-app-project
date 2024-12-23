import '../styles/styles.css';
import { NavBar } from '../component/NavBar';
import { Footer } from '../component/Footer';
import { Carousel } from '../component/Carousel';
import { Hero } from '../component/Hero';
import { Products } from '../component/Products';
import { SingleProduct } from '../component/SingleProduct';
import { updateCartDrawer, addToCart } from '../component/updateCartDrawer'
import { cartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/CheckoutPages';
import { CatagoryProduct } from '../component/CatagoryProduct';

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize Navbar
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.appendChild(NavBar());
  } else {
    console.error('Navbar container not found');
  }

  // Initialize Carousel
  const carouselContainer = document.getElementById('carousel');
  if (carouselContainer) {
    carouselContainer.appendChild(Carousel());
  } else {
    console.error('Carousel container not found');
  }

  // Initialize Products (WAIT for Products to resolve)
  const productsContainer = document.getElementById('products');
  if (productsContainer) {
    try {
      const productsElement = await Products(); // Wait for the async function
      productsContainer.appendChild(productsElement);
    } catch (error) {
      console.error("Error initializing products:", error);
    }
  } else {
    console.error('Products container not found');
  }

  const CatogaryProductsContainer = document.getElementById('Catogaryproducts');
  if (CatogaryProductsContainer) {
    try {
      const CatogaryProductsElement = await CatagoryProduct(); 
      CatogaryProductsContainer.appendChild(CatogaryProductsElement);
    } catch (error) {
      console.error("Error initializing products:", error);
    }
  } else {
    console.error('Catogary Products container not found');
  }

  // Initialize Hero Section
  const heroContainer = document.getElementById('hero');
  if (heroContainer) {
    heroContainer.appendChild(Hero());
  } else {
    console.error('Hero container not found');
  }

  // Initialize Footer
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.appendChild(Footer());
  } else {
    console.error('Footer container not found');
  }

  // Set up route handling
  window.addEventListener('hashchange', SingleProduct); // Call Router on hash change
  SingleProduct();

  updateCartDrawer();

  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
});


function handleRouteChange() {
  const { hash } = window.location;
  const mainContent = document.getElementById("hide-content");

  if (hash === "#/cart" || hash === "#/checkout") {
    mainContent.style.display = "none"; 
  } else {
    mainContent.style.display = "block"; 
  }

  if (hash === "#/cart") {
    cartPage();
  }

  if (hash === "#/checkout") {
  
   const hideCart = document.getElementById("cartPage");
   CheckoutPage ? hideCart.style.display = "none" : hideCart.style.display = "block"
   CheckoutPage();
  }
}



