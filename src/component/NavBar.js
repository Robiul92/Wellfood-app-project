export function NavBar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
<nav class="bg-[#001f3f] text-white">
  <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
    <!-- Left Section: Logo and Navigation -->
    <div class="flex items-center space-x-6">
      <a href="#" class="text-2xl font-bold text-yellow-500">Wellfood</a>
      <div id="desktop-menu" class="hidden md:flex md:items-center md:space-x-8">
        <a href="#" class="hover:text-yellow-500">Home</a>
        <div class="relative group">
          <a href="#" class="flex items-center hover:text-yellow-500">
            Products
            <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <!-- Dropdown Menu -->
          <ul class="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg mt-2">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Sweets</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Snacks</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Biscuits</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Cake</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Cookies</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Bread/Bun</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">Others</a></li>
          </ul>
        </div>
        <a href="#" class="hover:text-yellow-500">About Us</a>
        <a href="#" class="hover:text-yellow-500">Contact Us</a>
      </div>
    </div>

    <!-- Right Section: Sign In/Up + Icons -->
    <div class="hidden md:flex space-x-4 items-center">
      <a href="#" class="px-3 py-2 rounded-lg hover:text-yellow-500">Sign In</a>
      <a href="#" class="px-3 py-2 rounded-lg hover:text-yellow-500">Sign Up</a>
      <a href="#" class="flex items-center justify-center w-8 h-8 text-white bg-transparent hover:text-yellow-500">
        <!-- Heart Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4.969-5.165-8.003-8.386-9.003-9.758C1.373 9.825 1.999 6.999 5.001 6.999c2.004 0 3.501 1.665 4.5 3 1-1.335 2.496-3 4.499-3 3.003 0 3.628 2.826 2.004 4.243-.999 1.372-4.032 4.593-9.002 9.758z" />
        </svg>
      </a>
      <a href="#" class="flex items-center justify-center w-8 h-8 text-white bg-transparent hover:text-yellow-500">
        <!-- Shopping Cart Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l1.553 9.66A1 1 0 007.553 14H19a1 1 0 00.985-.836L22 6H6" />
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
        </svg>
      </a>
    </div>

    <!-- Hamburger Button (For Mobile) -->
    <button id="hamburger-btn" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden flex flex-col space-y-4 px-4 py-2 bg-[#001f3f]">
    <a href="#" class="hover:text-yellow-500">Home</a>
    <div>
      <button id="mobile-products-btn" class="flex items-center hover:text-yellow-500 w-full">
        Products
        <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- Dropdown in Mobile Menu -->
      <ul id="mobile-products-dropdown" class="hidden pl-4 space-y-2">
        <li><a href="#" class="hover:text-yellow-500">Sweets</a></li>
        <li><a href="#" class="hover:text-yellow-500">Snacks</a></li>
        <li><a href="#" class="hover:text-yellow-500">Biscuits</a></li>
        <li><a href="#" class="hover:text-yellow-500">Cake</a></li>
        <li><a href="#" class="hover:text-yellow-500">Cookies</a></li>
        <li><a href="#" class="hover:text-yellow-500">Bread/Bun</a></li>
        <li><a href="#" class="hover:text-yellow-500">Others</a></li>
      </ul>
    </div>
    <a href="#" class="hover:text-yellow-500">About Us</a>
    <a href="#" class="hover:text-yellow-500">Contact Us</a>
    <a href="#" class="px-3 py-2 rounded-lg hover:text-yellow-500">Sign In</a>
    <a href="#" class="px-3 py-2 rounded-lg hover:text-yellow-500">Sign Up</a>
    <a href="#" class="flex items-center justify-center w-8 h-8 text-white bg-transparent hover:text-yellow-500">
      <!-- Heart Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4.969-5.165-8.003-8.386-9.003-9.758C1.373 9.825 1.999 6.999 5.001 6.999c2.004 0 3.501 1.665 4.5 3 1-1.335 2.496-3 4.499-3 3.003 0 3.628 2.826 2.004 4.243-.999 1.372-4.032 4.593-9.002 9.758z" />
      </svg>
    </a>
    <a href="#" class="flex items-center justify-center w-8 h-8 text-white bg-transparent hover:text-yellow-500">
      <!-- Shopping Cart Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l1.553 9.66A1 1 0 007.553 14H19a1 1 0 00.985-.836L22 6H6" />
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    </a>
  </div>
</nav>
    `;

    const hamburgerBtn = nav.querySelector("#hamburger-btn");
    const mobileMenu = nav.querySelector("#mobile-menu");

    hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    const mobileProductsBtn = nav.querySelector("#mobile-products-btn");
    const mobileProductsDropdown = nav.querySelector("#mobile-products-dropdown");

    mobileProductsBtn.addEventListener("click", () => {
        mobileProductsDropdown.classList.toggle("hidden");
    });

    return nav;
}
