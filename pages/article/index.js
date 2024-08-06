import React, { useState } from 'react';
import ArticleList from '../../components/article/ArticleList';
import ArticleDetail from '../../components/article/ArticleDetail';

const ArticlePage = () => {
    const [selectedArticleId, setSelectedArticleId] = useState(null);

    const handleSelectArticle = (articleId) => {
        setSelectedArticleId(articleId);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
            {!selectedArticleId && (
                <div className="w-full">
                    <ArticleList onSelectArticle={handleSelectArticle} />
                </div>
            )}
            {selectedArticleId && (
                <div className="w-full">
                    <button 
                        className="mb-4 p-2 bg-blue-500 text-white rounded"
                        onClick={() => setSelectedArticleId(null)}
                    >
                        Back to List
                    </button>
                    <ArticleDetail articleId={selectedArticleId} />
                </div>
            )}
        </div>
    );
};

export default ArticlePage;
