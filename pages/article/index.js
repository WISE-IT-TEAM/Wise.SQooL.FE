import React, { useState, useEffect } from 'react';
import ArticleList from '../../components/article/ArticleList';
import ArticleDetail from '../../components/article/ArticleDetail';
import CategoryList from '../../components/article/CategoryList';
import { getArticleList } from '../../components/article/Api';

const ArticlePage = () => {
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('공지사항'); // 초기값을 "공지사항"으로 설정
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const perPage = 10;

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);  // 데이터를 가져오기 시작할 때 로딩 상태로 설정
            try {
                const data = await getArticleList(page, perPage, selectedCategory);
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setArticles([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [page, selectedCategory]);

    const handleSelectArticle = (articleId) => {
        setSelectedArticleId(articleId);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setSelectedArticleId(null); // Reset selected article when category changes
        setPage(1); // Reset page to 1 when category changes
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
            {!selectedArticleId && (
                <div className="flex w-full">
                    <div className="w-1/4">
                        <CategoryList onSelectCategory={handleSelectCategory} />
                    </div>
                    <div className="w-3/4">
                        <ArticleList 
                            articles={articles} 
                            onSelectArticle={handleSelectArticle} 
                            isLoading={isLoading}
                            page={page}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
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
