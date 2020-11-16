import React from 'react';
import { toast } from 'react-toastify';

export const toastify = {
  success: (msg: string) => {
    return toast.success(msg);
  },
  error: (msg: string) => {
    return toast.error(msg);
  },
  warning: (msg: string) => {
    return toast.warning(msg);
  },
  info: (msg: string) => {
    return toast.info(msg, { autoClose: 500000 }); // Never =)
  },
  clear: () => toast.dismiss(),
};
