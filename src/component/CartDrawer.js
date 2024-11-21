export function CartDrawer(){
    const cartDrawerComponent = document.getElementById("cart-drawer-container");
    cartDrawerComponent.innerHTML = `
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer-4" class="drawer-button btn btn-primary hidden">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><a>{quantity}</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  `;
}