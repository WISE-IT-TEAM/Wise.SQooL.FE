// components/article/CategoryList.js

import React, { useEffect, useState } from 'react';
import useStore from '../../store/useStore';

/**
 * 
 * CategoryList 컴포넌트
 * - 카테고리 목록을 렌더링하고, 선택된 카테고리를 강조합니다.
 * - 라이트 모드와 다크 모드를 지원하며, 사용자가 카테고리를 선택할 수 있습니다.
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
  const { isDarkMode } = useStore();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].Id);

  useEffect(() => {
    onSelectCategory(selectedCategory);
  }, [selectedCategory, onSelectCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const container = `w-full pt-nav flex justify-center items-center rounded-lg`;
  const categoryWrap = `flex gap-4`;

  const getCategoryItemStyle = (isSelected) => {
    const baseStyle = `px-4 py-2 border rounded-full duration-500 font-bold`;
    const textColor = isDarkMode ? "text-slate-900" : "text-slate-50";
    const borderColor = isSelected ? "border-transparent" : "border-slate-200 border-1";
    const bgColor = isSelected 
      ? (isDarkMode ? "bg-primaryDark" : "bg-primaryLight") 
      : "";
    const hoverStyle = !isSelected 
      ? `hover:${isDarkMode ? "bg-secondaryDark" : "bg-secondaryLight"} hover:border-transparent hover:${textColor}d`
      : "";
    
    return `${baseStyle} ${borderColor} ${bgColor} ${hoverStyle} ${isSelected ? textColor : ""}`;
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
