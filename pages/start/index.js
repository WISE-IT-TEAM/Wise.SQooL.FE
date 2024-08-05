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
    <div className="w-full h-screen flex">
      <div className={`p-4 ${isEditorOpen ? 'w-1/6' : 'w-1/5'}`}>
        <CategoryList onSelectCategory={handleSelectCategory} />
      </div>
      <div className={`transition-all duration-300 p-4 ${isEditorOpen ? 'w-2/5' : 'w-4/5'}`}>
        {selectedCategoryId && <Content documentId={selectedCategoryId} />}
      </div>
      {isEditorOpen && (
        <div className="w-2/5 p-4 bg-gray-100 fixed right-0 top-0 h-full overflow-y-auto">
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
