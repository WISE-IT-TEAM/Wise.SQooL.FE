// components/start/Category.js
import React, { useEffect, useState, useRef } from 'react';
import { getCategoryList } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const CategoryList = ({ onSelectCategory, selectedCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const fetchCategories = async () => {
      if (!isInitialLoad.current) return;

      try {
        const data = await getCategoryList();
        console.log('카테고리 데이터:', data);

        if (data && Array.isArray(data.categories)) {
          setCategories(data.categories);
          if (!selectedCategoryId) {
            const firstDocCategory = data.categories.find(category => category.Tree === 'doc');
            if (firstDocCategory) {
              onSelectCategory(firstDocCategory.Id);
            }
          }
        } else {
          console.error('Unexpected response format:', data);
          setCategories([]);
        }
      } catch (error) {
        console.error('카테고리 가져오는 중 오류 발생:', error);
        setCategories([]);
      } finally {
        setIsLoading(false);
        isInitialLoad.current = false;
      }
    };

    fetchCategories();
  }, []); 

  const handleCategoryClick = (categoryId) => {
    if (categoryId !== selectedCategoryId) {
      onSelectCategory(categoryId);
    }
  };

  if (isLoading) {
    return <div className='w-full h-full flex justify-center items-center'>로딩 중 입니다</div>;
  }

  const container = `min-w-60 h-full flex flex-col rounded-lg border-1 overflow-y-scroll ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;
  const catagoryItem = `p-4 border-b-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`;

  return (
    <div className={container}>
      <ul>
        {categories.map(category => (
          <li 
            key={category.Id} 
            className={`${catagoryItem} ${category.Tree === 'doc' ? 'cursor-pointer indent-2' : 'cursor-default text-slate-400'} ${category.Id === selectedCategoryId ? (isDarkMode ? 'bg-primaryDark text-slate-900 font-bold' : 'bg-primaryLight text-slate-50 font-bold') : 'duration-300'}`}
            onClick={() => handleCategoryClick(category.Id)}
          >
            {category.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
