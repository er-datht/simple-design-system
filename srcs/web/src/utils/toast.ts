import { toast as baseToast, type ToastOptions, type Id } from "react-toastify";

export const TOAST_DEFAULTS: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

// Do NOT mutate baseToast; provide non-recursive wrappers
export const toast = {
  success: (message: string, options?: ToastOptions): Id =>
    baseToast.success(message, { ...TOAST_DEFAULTS, ...options }),
  error: (message: string, options?: ToastOptions): Id =>
    baseToast.error(message, { ...TOAST_DEFAULTS, ...options }),
  info: (message: string, options?: ToastOptions): Id =>
    baseToast.info(message, { ...TOAST_DEFAULTS, ...options }),
  warn: (message: string, options?: ToastOptions): Id =>
    baseToast.warn(message, { ...TOAST_DEFAULTS, ...options }),
  dismiss: baseToast.dismiss,
  update: baseToast.update,
};

export type { ToastOptions };
