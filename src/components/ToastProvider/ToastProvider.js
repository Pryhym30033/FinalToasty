import React from 'react';
import Listener from '../../Hooks/Listener';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
const [toasts, setToasts] = React.useState([]);

const handleClear = React.useCallback(() =>{
  setToasts([]);
}, []);

Listener(handleClear);

function CreateToast(message, variant){
  const newToast = [
    ...toasts, {
      id: crypto.randomUUID(),
      message,
      variant,
    }
  ];

  if (message === ''){
    return
  }

  setToasts(newToast);
}

function RemoveToast(id){
  const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
  })
  setToasts(newToasts)
}

  return (
  <ToastContext.Provider value={{ CreateToast, toasts, RemoveToast }}>
    {children}
  </ToastContext.Provider>
  )
}

export default ToastProvider;
