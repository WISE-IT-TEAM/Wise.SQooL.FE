import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/start/Category';
import Content from '../../components/start/Content';
import SQLEditor from '../../components/editor/SqlEditor';

const StartPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const toggleEditor = () => {
    setIsEditorOpen(!isEditorOpen);
  };

  useEffect(() => {
    const createDatabase = async () => {
      try {
        const response = await fetch(apiInitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({ dbname: "Artist" })
        });

        if (!response.ok) {
          throw new Error('Database creation failed');
        }

        console.log('Database created successfully');
      } catch (error) {
        console.error('Error creating database:', error);
      }
    };

    createDatabase();
  }, [apiInitUrl]);

  return (
    <div className="max-w-content-full mb-10 flex mx-auto relative mt-20">
      <div className="w-1/3 p-4">
        <CategoryList onSelectCategory={handleSelectCategory} />
      </div>
      <div className={`transition-all duration-300 ${isEditorOpen ? 'w-1/2' : 'w-2/3'} p-4`}>
        {selectedCategoryId && <Content documentId={selectedCategoryId} />}
      </div>
      {isEditorOpen && (
        <div className="w-1/2 p-4 bg-gray-100 fixed right-0 top-20 bottom-0 overflow-y-auto">
          <SQLEditor initialValue="SELECT * FROM Artist;" />
        </div>
      )}
      <button
        onClick={toggleEditor}
        className="fixed right-4 bottom-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        {isEditorOpen ? 'Close Editor' : 'Open Editor'}
      </button>
    </div>
  );
}

export default StartPage;
