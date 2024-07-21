// components/Toast.js
import React from 'react';

const Toast = ({ message, visible, type }) => {
    const baseClass = 'fixed top-32 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded transition-opacity duration-300';
    const visibleClass = visible ? 'block' : 'hidden';

    let typeClass;
    switch (type) {
        case 'success':
            typeClass = 'bg-green-500 bg-opacity-85 text-slate-50';
            break;
        case 'error':
            typeClass = 'bg-red-500 bg-opacity-85 text-slate-50';
            break;
        case 'info':
            typeClass = 'bg-blue-500 bg-opacity-85 text-slate-50';
            break;
        default:
            typeClass = 'bg-gray-500 bg-opacity-85 text-slate-50';
    }

    const toastClass = `${baseClass} ${visibleClass} ${typeClass}`;

    return (
        <div className={toastClass}>
            {message}
        </div>
    );
};

export default Toast;
