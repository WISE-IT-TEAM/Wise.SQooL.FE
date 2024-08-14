import React from 'react';
import ArticleCard from './ArticleCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const ArticleList = ({ articles, onSelectArticle, isLoading, page, perPage, onPageChange }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (articles.length === 0) {
      return <div>No articles found</div>;
  }

  // 페이지 수 계산
  const totalPages = Math.max(Math.ceil(articles.length / perPage), 1);
  const container = `flex flex-col gap-6`
  const articleListItem = `flex flex gap-6`
  const pagination = `pagination mt-4 flex justify-center`

  return (
    <section className={container}>
      <div className={articleListItem}>
        {articles.map(article => (
          <ArticleCard 
            key={article.Id} 
            article={article} 
            onSelectArticle={onSelectArticle} 
          />
        ))}
      </div>
      {/* 페이지네이션 표시 */}
      <div className={pagination}>
        {page > 1 && (
          <button 
            onClick={() => onPageChange(page - 1)} 
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-full"
          >
            이전
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-4 py-2 mx-1 ${pageNum === page ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-full`}
          >
              {pageNum}
          </button>
        ))}
        {page < totalPages && (
          <button 
            onClick={() => onPageChange(page + 1)} 
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-full"
          >
            다음
          </button>
        )}
      </div>
    </section>
  );
};

export default ArticleList;
