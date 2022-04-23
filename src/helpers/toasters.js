import { toast } from 'react-toastify';

const baseToaster = (message, type) =>
  toast(message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type,
  });

export const successToaster = (message) => baseToaster(message, 'success');

export const infoToaster = (message) => baseToaster(message, 'info');

export const warningToaster = (message) => baseToaster(message, 'warning');

export const errorToaster = (message) => baseToaster(message, 'error');
