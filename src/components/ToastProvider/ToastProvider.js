import React from "react";

import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

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
