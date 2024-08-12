// utils/layoutConditions.js
const layoutConditions = (pathname) => {
  const isEditorPage = pathname === "/editor";
  const isStartPage = pathname === "/start";

  const shouldShowFooter = !isStartPage; // 스타트 페이지에서는 푸터를 표시하지 않음
  const useFullHeight = isStartPage || isEditorPage; // 스타트 페이지와 에디터 페이지에서만 전체 화면 높이 적용
  let totalOffset = 59 + 32; // 네비게이션 바(59px) + 간격(32px)

  if (isEditorPage) {
    totalOffset += 64; // 에디터 페이지는 푸터(64px)를 추가
  }

  return {
    shouldShowFooter,
    useFullHeight,
    totalOffset, // 필요할 경우 totalOffset 값을 반환
  };
};

export default layoutConditions;