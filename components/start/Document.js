import React, { useState, useEffect } from 'react';
import CategoryList from './Category';
import Content from './Content';
import ResizeHandler from '../ResizeHandler';

const Document = ({ onSelectCategory, selectedCategoryId }) => {
  const [categoryWidth, setCategoryWidth] = useState(240);
  const minCategoryWidth = 240;
  const minContentWidth = 320;

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById('content');
      const category = document.getElementById('category');
      const editor = document.getElementById('editor');

      if (content && category && editor) {
        const scrollTop = content.scrollTop;
        category.style.transform = `translateY(-${scrollTop}px)`;
        editor.style.transform = `translateY(-${scrollTop}px)`;
      }
    };

    const content = document.getElementById('content');
    if (content) {
      content.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="flex flex-grow w-full h-full gap-4 mb-10 overflow-hidden">
      <div id="category" style={{ width: categoryWidth, minWidth: minCategoryWidth, position: 'sticky', top: 0 }}>
        <CategoryList onSelectCategory={onSelectCategory} />
      </div>
      <div id="content" style={{ flex: 1, minWidth: minContentWidth, overflowY: 'scroll', height: '100vh' }}>
        {selectedCategoryId ? (
          <Content documentId={selectedCategoryId} key={selectedCategoryId} />
        ) : (
          <p>카테고리를 선택해주세요.</p>
        )}
      </div>
    </section>
  );
};

export default Document;
