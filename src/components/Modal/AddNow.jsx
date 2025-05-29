import { AddNewProduct } from "../AddNewProduct/page";
import Modal from "./layout";
import "./modal.css";

function AddNow({ isOpen, onClose, btntitle }) {
  return (
    <>
      {/* Passing AddNewProduct as children to Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <AddNewProduct title="22" btntitle={btntitle} />
        <button
          onClick={() =>
            onClose()
          }
          className="btn-sm"
          style={{top:"15px", right:"15px"}}
        >
          X
        </button>
      </Modal>
    </>
  );
}

export default AddNow;
