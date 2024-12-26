export function Modal(product) {
    const modalContainer = document.getElementById("modal-container");
    if (!modalContainer) {
      console.error("Modal container not found!");
      return;
    }
  console.log(product)
    modalContainer.innerHTML = `
      <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 class="text-lg font-bold"></h3>
          <p class="py-4"> </p>
        </div>
      </dialog>
    `;
  
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found!");
    }
  }
  