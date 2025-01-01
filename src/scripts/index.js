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
import { Modal } from '../component/Modal';
import { signInPage } from '../pages/signInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { ProductPage } from '../pages/ProductPages';

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
  Modal();

  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
});


function handleRouteChange() {
  const { hash } = window.location;
  const mainContent = document.getElementById("hide-content");
  const appContainer = document.getElementById("app");
  const signInContent = document.getElementById("signIN");
  const signUpContent = document.getElementById("signUp");


  if (hash.startsWith("#/products/")) {
    const productName = decodeURIComponent(hash.split("#/products/")[1]); // Extract product name
    if (mainContent) mainContent.style.display = "none";
    ProductPage(productName).then((productPage) => {
      if (appContainer) {
        appContainer.innerHTML = ""; // Clear previous content
        appContainer.appendChild(productPage); // Render product page
      } else {
        console.error("App container not found");
      }
    });
    return;
  }

  // Hide main content for certain routes
  if (hash === "#/cart" || hash === "#/checkout" || hash === "#/signin" || hash === "#/signup") {
    if (mainContent) mainContent.style.display = "none";
  } else {
    if (mainContent) mainContent.style.display = "block";
  }

  // Cart Page
  if (hash === "#/cart") {
    cartPage();
  }

  // Checkout Page
  if (hash === "#/checkout") {
    const hideCart = document.getElementById("cartPage");
    if (hideCart) hideCart.style.display = "none";
    CheckoutPage();
  }

  // Sign In Page
  if (hash === "#/signin") {
    if (signInContent) {
      signInContent.style.display = "block";
      signInPage(); // Render the sign-in page
    }
    if (signUpContent) signUpContent.style.display = "none"; // Hide sign-up content
  } else {
    if (signInContent) signInContent.style.display = "none";
  }

  // Sign Up Page
  if (hash === "#/signup") {
    if (signUpContent) {
      signUpContent.style.display = "block";
      SignUpPage(); // Render the sign-up page
    }
    if (signInContent) signInContent.style.display = "none"; // Hide sign-in content
  } else {
    if (signUpContent) signUpContent.style.display = "none";
  }
}




