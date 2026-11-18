import React from "react";

import Button from "../Button";
import InputWrapper from "../InputWrapper";
import Radio from "../Radio";
import TextArea from "../TextArea";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { createToast } = React.useContext(ToastContext);

  function handlePop(event) {
    event.preventDefault();
    setMessage("");
    setVariant("notice");
    createToast({ message, variant });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handlePop} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <TextArea
            label="Message"
            stateValue={message}
            setStateValue={setMessage}
          />
        </div>

        <div className={styles.row}>
          <Radio
            label="Variant"
            group="variant"
            options={VARIANT_OPTIONS.map((option) => ({
              label: option.toLocaleUpperCase(),
              value: option,
            }))}
            stateValue={variant}
            setStateValue={setVariant}
          />
        </div>

        <div className={styles.row}>
          <InputWrapper>
            <Button>Pop Toast!</Button>
          </InputWrapper>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
