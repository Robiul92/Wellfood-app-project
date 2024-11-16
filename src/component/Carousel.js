import carusel1 from '../images/carousel.png';

export function Carousel() {
  const carousel = document.createElement('div');
  carousel.innerHTML = `
<div
  id="carouselExampleSlidesOnly"
  class="relative"
  data-twe-carousel-init
  data-twe-ride="carousel">
  <!--Carousel items-->
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <!--First item-->
    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src="${carusel1}"  // Use Webpack-imported image
        class="block w-full"
        alt="Image 1" />
    </div>
    <!--Second item-->
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Image 2" />
    </div>
    <!--Third item-->
    <div
      class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Image 3" />
    </div>
  </div>
</div>
  `;
  return carousel;
}
