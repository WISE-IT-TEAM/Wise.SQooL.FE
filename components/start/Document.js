// components/start/Document.js
import React, { useState } from 'react';
import CategoryList from './Category';
import Content from './Content';
import ResizeHandler from '../ResizeHandler';

const Document = ({ onSelectCategory, selectedCategoryId }) => {
  const [categoryWidth, setCategoryWidth] = useState(240);
  const minCategoryWidth = 240;
  const minContentWidth = 320;

  return (
    <section className="flex flex-grow w-full h-full gap-4 mb-10">
      <div style={{ width: categoryWidth, minWidth: minCategoryWidth }}>
        <CategoryList onSelectCategory={onSelectCategory} />
      </div>
      {/* <ResizeHandler
        onResize={setCategoryWidth}
        startWidth={categoryWidth}
        minWidth={minCategoryWidth}
        direction="vertical"
        title="드래그로 카테고리 창 크기를 조절해보세요"
      /> */}
      <div style={{ flex: 1, minWidth: minContentWidth, overflow: 'hidden' }}>
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
