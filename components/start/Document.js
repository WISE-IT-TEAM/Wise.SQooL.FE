// components/start/Document.js
import React, { useEffect, useState } from 'react';
import CategoryList from './Category';
import Content from './Content';
import { getCategoryList, getContent } from './Api';

const Document = ({ categories, selectedCategoryId, content, onSelectCategory }) => {

  useEffect(() => {
    if (categories.length > 0 && !selectedCategoryId) {
      const firstDocCategory = categories.find(category => category.Tree === 'doc');
      if (firstDocCategory) {
        onSelectCategory(firstDocCategory.Id);
      }
    }
  }, [categories, selectedCategoryId, onSelectCategory]);

  return (
    <section className="w-full h-full flex gap-4 mb-10 overflow-hidden">
      <CategoryList 
        categories={categories} 
        onSelectCategory={onSelectCategory} 
        selectedCategoryId={selectedCategoryId} 
      />
      {selectedCategoryId ? (
        <Content content={content} />
      ) : (
        <div className='w-full h-full flex justify-center items-center'>카테고리를 선택해주세요</div>
      )}
    </section>
  );
};

export default Document;
