// components/Toast.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useStore from '../store/useStore';

const Toast = () => {
  const { toastMessage, toastType, hideToast } = useStore((state) => ({
    toastMessage: state.toastMessage,
    toastType: state.toastType,
    hideToast: state.hideToast,
  }));

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, hideToast]);

  if (!toastMessage) return null;

  const baseClass = 'fixed top-32 left-1/2 transform -translate-x-1/2 py-4 px-8 rounded transition-opacity duration-500';
  const typeClass = toastType === 'success' ? 'bg-green-500 bg-opacity-85 text-slate-50' : 'bg-red-500 bg-opacity-85 text-slate-50';
  const toastClass = `${baseClass} ${typeClass}`;

  return (
    <div className={toastClass}>
      {toastMessage}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
};

export default Toast;