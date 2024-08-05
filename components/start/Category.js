import React, { useEffect, useState } from 'react';
import { getCategoryList } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryList();
        console.log('카테고리 데이터:', data);

        if (data && Array.isArray(data.categories)) {
          setCategories(data.categories);
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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`w-full max-w-5xl flex flex-col ${isDarkMode ? 'dark-mode' : ''}`}>
      <ul>
        {categories.map(category => (
          <li 
            key={category.Id} 
            className={`p-2 border-b border-gray-300 ${category.Tree === 'doc' ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'}`}
            onClick={() => category.Tree === 'doc' && onSelectCategory(category.Id)}
          >
            {category.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
