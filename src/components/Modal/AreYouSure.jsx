import { useRouter } from "next/navigation";
import Modal from "./layout";
import "./modal.css";

function AreYouSure({ isOpen, onClose, btntitle }) {
  const router = useRouter();
  return (
    <>
      {/* Passing AddNewProduct as children to Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="aus_dialog">
          <h3 className="px-4 pb-4">Are You sure you want to logout?</h3>
          <div className="aus_btns d-flex align-items-center justify-content-center gap-3">
            <button
              className="themebtn4 red btn"
              onClick={onClose}
            >Cancel</button>
            <button className="themebtn4 green btn" onClick={() => {
              router.push("/")
            }}>Logout</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AreYouSure;
