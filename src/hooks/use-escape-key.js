import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyUp(event) {
      if (event.code === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [callback]);
}

export default useEscapeKey;
