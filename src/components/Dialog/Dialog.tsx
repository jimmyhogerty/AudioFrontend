import React from "react";
import styles from "./Dialog.module.css";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Dialog = ({ isOpen, onClose, title, children }: DialogProps) => {
  // If the dialog is not open, return null (don't render anything)
  if (!isOpen) {
    return null;
  }

  // Handle the background click (close the dialog when clicking outside of it)
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles["dialog-background"]}
      onClick={(e) => handleBackgroundClick(e)}
    >
      <div className={styles["dialog"]}>
        <div className={styles["dialog-header"]}>
          {title && <h3 className={styles.H3}>{title}</h3>}
          <button className={styles["close-button"]} onClick={onClose}>
            Close
          </button>
        </div>
        <div className={styles["dialog-content"]}>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
