import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const ArticleList = ({ articles, onSelectArticle, isLoading, page, perPage, onPageChange }) => {
    const { isDarkMode } = useDarkMode();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const totalPages = Math.ceil(articles.length / perPage);
    const displayedArticles = articles.slice((page - 1) * perPage, page * perPage);

    return (
        <div className={`w-full p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="grid grid-cols-1 gap-8">
                {displayedArticles.map(article => (
                    <div 
                        key={article.Id} 
                        className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                        onClick={() => onSelectArticle(article.Id)}
                    >
                        <h2 className="text-2xl font-bold mb-4">{article.Title}</h2>
                        <p className="text-lg">{article.Description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index + 1)}
                        className={`mx-1 px-4 py-2 border rounded-lg ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
