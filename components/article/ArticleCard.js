import React from 'react';

const ArticleCard = ({ article, onSelectArticle }) => {
    const tags = Array.isArray(article.Tags) ? article.Tags : [];
    return (
        <div 
            className="article-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200" 
            onClick={() => onSelectArticle(article.Id)}
        >
            <h2 className="text-xl font-bold mb-2">{article.Title}</h2>
            <div className="metadata text-gray-600 text-sm mb-2">
                <span>{new Date(article.Created_at).toLocaleDateString()}</span>
            </div>
            <div className="tags mb-2">
                {tags.map(tag => <span key={tag} className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{tag}</span>)}
            </div>
        </div>
    );
};

export default ArticleCard;
