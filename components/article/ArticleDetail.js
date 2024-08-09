import React from 'react';

const ArticleDetail = ({ article, onBack }) => {
    if (!article) {
        return <div>Error loading article</div>;
    }

    const tags = Array.isArray(article.Tags) ? article.Tags : [];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mb-4">
            <h1 className="text-3xl font-bold mb-4">{article.Title}</h1>
            <div className="metadata text-gray-600 text-sm mb-4">
                <span>조회수: {article.View_count}</span>
                <span className="ml-4">{new Date(article.Created_at).toLocaleDateString()}</span>
                <span className="ml-4">{article.Category}</span>
            </div>
            <div className="tags mb-4">
                {tags.map(tag => <span key={tag} className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{tag}</span>)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.Content }} className="prose mb-4" />
            <button 
                className="p-2 bg-blue-500 text-white rounded shadow"
                onClick={onBack}
            >
                Back to List
            </button>
        </div>
    );
};

export default ArticleDetail;
