import React from "react";

function RadioButton({ group, label, value, selectedValue, handleChange }) {
  const id = React.useId(`variant-${value}`);

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={group}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}

export default RadioButton;
