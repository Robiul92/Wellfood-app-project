export function Hero() {
  const hero = document.createElement('div');
  hero.class = '';
  hero.innerHTML = `
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <div class="w-full lg:w-2/3">
        <iframe
          class="w-full aspect-video rounded-lg shadow-2xl"
          src="https://www.youtube.com/embed/bWC3pS0Zmww?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <div class="lg:w-1/3">
        <h1 class="text-5xl font-bold">Box Office News!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>`;
  return hero;
}
