// components/article/CategoryList.js

import React, { useEffect, useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

/**
 * components/CategoryList/CategoryList.js
 * 
 * CategoryList 컴포넌트
 * - 카테고리 목록을 렌더링하고, 선택된 카테고리를 강조합니다.
 * - 라이트 모드와 다크 모드를 지원하며, 사용자가 카테고리를 선택할 수 있습니다.
 * 
 * Zustand 상태:
 * - `isDarkMode`: 다크 모드가 활성화되었는지 여부를 관리합니다.
 * 
 * 조건부 스타일 적용:
 * - 선택된 카테고리는 배경색과 텍스트 색상을 통해 강조됩니다.
 * - 선택되지 않은 카테고리들은 얇은 보더와 기본 텍스트 색상을 유지합니다.
 * - 선택된 상태에서는 호버 효과가 적용되지 않습니다.
 * 
 * @param {Function} onSelectCategory - 카테고리 선택 시 호출되는 함수
 * @returns {JSX.Element} - 카테고리 목록을 렌더링하는 JSX 요소를 반환합니다.
 */

const categories = [
  { Id: '공지사항', Title: '공지사항', Tree: 'doc' },
  { Id: '개발 팁', Title: '개발 팁', Tree: 'doc' },
  { Id: '최신이슈', Title: '최신이슈', Tree: 'doc' }
];

const CategoryList = ({ onSelectCategory }) => {
  const { isDarkMode } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].Id);

  useEffect(() => {
    onSelectCategory(selectedCategory);
  }, [selectedCategory, onSelectCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const container = `w-full pt-nav flex justify-center items-center rounded-lg ${isDarkMode ? "border-slate-800 bg-gray-900 text-white" : "border-slate-200 bg-white text-gray-900"}`;
  const categoryWrap = `flex gap-4`;

  const getCategoryItemStyle = (isSelected) => {
    const baseStyle = `px-4 py-2 border rounded-full duration-300`;
    const textColor = isDarkMode ? "text-slate-900" : "text-slate-50";
    const borderColor = isSelected ? "border-transparent" : "border-slate-200 border-1";
    const bgColor = isSelected 
      ? (isDarkMode ? "bg-primaryDark" : "bg-primaryLight") 
      : "";
    const hoverStyle = !isSelected 
      ? `hover:${isDarkMode ? "bg-secondaryDark" : "bg-secondaryLight"} hover:border-transparent hover:${textColor} hover:fond-bold`
      : "";
    
    return `${baseStyle} ${borderColor} ${bgColor} ${hoverStyle} ${isSelected ? textColor : ""} ${isSelected ? "font-bold" : ""}`;
  };

  return (
    <div className={container}>
      <ul className={categoryWrap}>
        {categories.map((category) => {
          const isSelected = category.Id === selectedCategory;
          return (
            <li 
              key={category.Id} 
              className={getCategoryItemStyle(isSelected)}
              onClick={() => category.Tree === 'doc' && handleCategoryClick(category.Id)}
            >
              {category.Title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
