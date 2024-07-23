// components/Toast.js
import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, visible, type }) => {
  // 기본 클래스 정의
  const baseClass = 'fixed top-32 left-1/2 transform -translate-x-1/2 py-4 px-8 rounded transition-opacity duration-300';
  // visible 상태에 따라 클래스 변경
  const visibleClass = visible ? 'block' : 'hidden';

  // type에 따른 클래스 설정
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

  // 모든 클래스를 합침
  const toastClass = `${baseClass} ${visibleClass} ${typeClass}`;

  return (
    <div className={toastClass}>
      {message}
    </div>
  );
};

// PropTypes를 사용하여 props의 타입을 정의
Toast.propTypes = {
  message: PropTypes.string.isRequired, // message는 필수 문자열
  visible: PropTypes.bool.isRequired, // visible은 필수 부울
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']), // type은 success, error, info, warning 중 하나
};

// 기본 prop 값을 설정
Toast.defaultProps = {
  type: 'info', // 기본 type을 info로 설정
};

export default Toast;