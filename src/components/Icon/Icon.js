import React from "react";

function Icon({ type: Type, size = 24 }) {
  return <Type size={size} />;
}

export default Icon;
