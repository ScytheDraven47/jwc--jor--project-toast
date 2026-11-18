import React from "react";

import styles from "./InputWrapper.module.css";

function InputWrapper({ id, label, children, style }) {
  return (
    <>
      <label htmlFor={id} className={styles.label} style={style}>
        {label}
      </label>
      <div className={styles.inputWrapper}>{children}</div>
    </>
  );
}

export default InputWrapper;
