// components/start/Document.js
import React, { useState } from 'react';
import CategoryList from './Category';
import Content from './Content';

const Document = ({ onSelectCategory, selectedCategoryId }) => {

  return (
    <section className="w-full h-full flex gap-4 mb-10 overflow-hidden">
      <CategoryList onSelectCategory={onSelectCategory} />
      {selectedCategoryId ? (
        <Content documentId={selectedCategoryId} />
      ) : (
        <div className='w-full h-full flex justify-center items-center'>카테고리를 선택해주세요</div>
      )}
    </section>
  );
};

export default Document;