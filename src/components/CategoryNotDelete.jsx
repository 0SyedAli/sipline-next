function CategoryNotDelete() {
  return (
    <div
      class="modal fade"
      id="categorynotdelete"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog aus_dialog cd_dialog h-100 d-flex align-items-center">
        <div class="modal-content">
          <div class="modal-body pt-5 pb-4 px-3">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >X</button>
            <h3>
              This category cannot be deleted due to used in the particular
              product.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryNotDelete;
