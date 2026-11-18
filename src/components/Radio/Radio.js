import React from "react";

import InputWrapper from "../InputWrapper";
import RadioButton from "../RadioButton";

import styles from "./Radio.module.css";

function Radio({ label, group, options, stateValue, setStateValue }) {
  function handleChange(event) {
    setStateValue(event.target.value);
  }

  return (
    <InputWrapper label={label}>
      <div className={`${styles.radioWrapper}`}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            group={group}
            handleChange={handleChange}
            selectedValue={stateValue}
          />
        ))}
      </div>
    </InputWrapper>
  );
}

export default Radio;
