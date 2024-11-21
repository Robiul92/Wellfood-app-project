import '../styles/styles.css';
import { NavBar } from '../component/NavBar';
import { Footer } from '../component/Footer';
import { Carousel } from '../component/Carousel';
import { Hero } from '../component/Hero';
import { Products } from '../component/Products';
import { SingleProduct } from '../component/SingleProduct';


document.addEventListener('DOMContentLoaded', () => {
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

  // Initialize Products
  const productsContainer = document.getElementById('products');
  productsContainer.appendChild(Products());
 

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

  SingleProduct();
  window.addEventListener('hashchange', SingleProduct); // Call Router on hash change
});


