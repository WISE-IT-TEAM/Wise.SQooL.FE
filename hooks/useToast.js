// hooks/useToast.js

import useStore from '../store/useStore';

/**
 * useToast 훅
 * Zustand 스토어를 사용하여 토스트 메시지 표시 함수를 반환
 * @returns {function} - showToast 함수
 */
const useToast = () => {
  const { showToast } = useStore((state) => ({
    showToast: state.showToast,
  }));
  return showToast;
};

export default useToast;