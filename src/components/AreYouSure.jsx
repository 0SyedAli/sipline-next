import { useRouter } from "next/navigation";

function AreYouSure() {
  const router = useRouter();


  return (
    <div
      class="modal fade"
      id="areyousure"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog aus_dialog h-100 d-flex align-items-center">
        <div class="modal-content">
          <div class="modal-body">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreYouSure;
