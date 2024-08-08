import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, onSelectArticle, isLoading, page, perPage, onPageChange }) => {
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 상태 표시
    }

    if (articles.length === 0) {
        return <div>No articles found</div>;
    }

    const totalPages = Math.ceil(articles.length / perPage);

    return (
        <div>
            <div className="flex flex-col">
                {articles.map(article => (
                    <ArticleCard 
                        key={article.Id} 
                        article={article} 
                        onSelectArticle={onSelectArticle} 
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination mt-4 flex justify-center">
                    {page > 1 && (
                        <button 
                            onClick={() => onPageChange(page - 1)} 
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
                        >
                            Previous
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={`px-4 py-2 mx-1 ${pageNum === page ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded`}
                        >
                            {pageNum}
                        </button>
                    ))}
                    {page < totalPages && (
                        <button 
                            onClick={() => onPageChange(page + 1)} 
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ArticleList;
