
import styles from "./AuthBtn.module.css";
export const AuthBtn = ({ title, type, onClick, locationBtn }) => {
  return (
    <button
      className={`${styles.btntheme1} ${locationBtn ? locationBtn : ""}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
