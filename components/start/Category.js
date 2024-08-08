// components/start/Category.js
import React, { useEffect, useState } from 'react';
import { getCategoryList } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // 선택된 카테고리 상태 추가
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryList();
        console.log('카테고리 데이터:', data);

        if (data && Array.isArray(data.categories)) {
          setCategories(data.categories);
          const firstDocCategory = data.categories.find(category => category.Tree === 'doc');
          if (firstDocCategory) {
            onSelectCategory(firstDocCategory.Id); // 첫 번째 "doc" 카테고리 선택
            setSelectedCategoryId(firstDocCategory.Id); // 선택된 카테고리 설정
          }
        } else {
          console.error('Unexpected response format:', data);
          setCategories([]);  // 기본값을 빈 배열로 설정
        }
      } catch (error) {
        console.error('카테고리 가져오는 중 오류 발생:', error);
        setCategories([]);  // 에러 발생 시 빈 배열로 설정
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []); // 빈 의존성 배열로 한 번만 호출되도록 설정

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId); // 선택된 카테고리 업데이트
    onSelectCategory(categoryId); // 상위 컴포넌트에 선택된 카테고리 전달
  };

  if (isLoading) {
    return <div className='w-full h-full flex justify-center items-center'>로딩 증 입니다</div>;
  }

  const container = `min-w-60 h-full flex flex-col rounded-lg border-1 overflow-y-scroll ${isDarkMode ? "border-slate-800" : "border-slate-200"}`
  const catagoryItem = `p-4 border-b-1 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`

  return (
    <div className={container}>
      <ul>
        {categories.map(category => (
          <li 
            key={category.Id} 
            className={`${catagoryItem} ${category.Tree === 'doc' ? 'cursor-pointer indent-2' : 'cursor-default text-slate-400'} ${selectedCategoryId === category.Id ? (isDarkMode ? 'bg-primaryDark text-slate-900 font-bold' : 'bg-primaryLight text-slate-50 font-bold') : 'duration-300'}`}
            onClick={() => category.Tree === 'doc' && handleCategoryClick(category.Id)}
          >
            {category.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
