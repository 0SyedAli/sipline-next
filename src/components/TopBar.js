"use client";
import Link from "next/link";
import NotificationModal from "./notificationModalCont/NotificationModal";
import Image from "next/image";

const TopBar = () => {
  return (
    <>
      <div className="topbar_container">
        <div>
          <h2 className="mb-1">
            Welcome Back, Travis
            <span>
              <Image src="/images/greeting.png" width={25} height={25} alt="greeting" />
            </span>
          </h2>
          <p>Are you thirsty? Would you like something?</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            className="noti_btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Image width={20} height={20} src="/images/notification.png" alt="notification icon" />
          </button>
          {/* <Link href="/dashboard/addcategory" className="btn btntheme3">
            Add Category
          </Link> */}
          <Link href="/dashboard/addproduct" className="btn btntheme3">
            Add Product
          </Link>
        </div>
      </div>

      <NotificationModal />
    </>
  );
};

export default TopBar;
