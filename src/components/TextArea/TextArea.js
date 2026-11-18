import React from "react";

import InputWrapper from "../InputWrapper";

import styles from "./TextArea.module.css";

function TextArea({ label, stateValue, setStateValue }) {
  const id = React.useState("message");

  function handleMessageChange(event) {
    setStateValue(event.target.value);
  }

  return (
    <InputWrapper label={label} style={{ alignSelf: "baseline" }}>
      <textarea
        id={id}
        className={styles.messageInput}
        onChange={handleMessageChange}
        value={stateValue}
      ></textarea>
    </InputWrapper>
  );
}

export default TextArea;
