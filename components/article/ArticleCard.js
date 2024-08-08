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
                <span>{article.Category}</span>
                <span className="ml-4">{new Date(article.Created_at).toLocaleDateString()}</span>
                <span className="ml-4">조회수: {article.View_count}</span>
            </div>
            {article.Thumbnail && <img src={article.Thumbnail} alt={article.Title} className="mb-4 w-full h-auto rounded object-cover" style={{ maxHeight: '200px' }} />}
            <p className="mb-2">{article.Description}</p>
            <div className="tags mb-2">
                {tags.map(tag => <span key={tag} className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">{tag}</span>)}
            </div>
        </div>
    );
};

export default ArticleCard;
