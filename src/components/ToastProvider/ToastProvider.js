import React from "react";

export const ToastContext = React.createContext();

export function useEscapeKey(callback) {
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

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const clearToastCallback = React.useCallback(() => setToasts([]), []);
  useEscapeKey(clearToastCallback);

  function createToast({ variant, message }) {
    const id = Date.now() + Math.random();
    const newToast = { id, message, variant };
    setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
