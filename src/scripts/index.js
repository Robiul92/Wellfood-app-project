import '../styles/styles.css';
import { NavBar } from '../component/NavBar';
import { Footer } from '../component/Footer';
import { Carousel } from '../component/Carousel';
import { Hero } from '../component/Hero';


document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.appendChild(NavBar());
  } else {
    console.error('Navbar container not found');
  }

  const carouselContainer = document.getElementById('carousel');
  if (carouselContainer) {
    carouselContainer.appendChild(Carousel());
  } else {
    console.error('Carousel container not found');
  }
  const HeroContiner = document.getElementById('hero');
  HeroContiner.appendChild(Hero());

  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.appendChild(Footer());
  } else {
    console.error('Footer container not found');
  }
});
