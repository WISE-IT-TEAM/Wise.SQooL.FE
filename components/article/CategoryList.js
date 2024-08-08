import React, { useEffect, useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

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

    return (
        <div className={`w-full min-w-fit h-full flex flex-col rounded-lg border overflow-y-scroll ${isDarkMode ? "border-slate-800 bg-gray-900 text-white" : "border-slate-200 bg-white text-gray-900"}`}>
            <ul>
                {categories.map(category => (
                    <li 
                        key={category.Id} 
                        className={`p-2 border-b border-slate-400 ${category.Tree === 'doc' ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'}`}
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
