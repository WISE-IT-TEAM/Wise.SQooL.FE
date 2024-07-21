// context/ToastContext.js
import React, { createContext, useState, useContext } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');

    const showToast = (msg, type = 'success') => {
        setMessage(msg);
        setType(type);
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <Toast message={message} visible={toastVisible} type={type} />
        </ToastContext.Provider>
    );
};