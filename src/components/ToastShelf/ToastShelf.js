import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} dismiss={() => dismissToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
