import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '../../components/article/ArticleList';
import CategoryList from '../../components/article/CategoryList';
import { getArticleList } from '../../components/article/Api';

const ArticlePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('공지사항');
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const perPage = 10;
    const router = useRouter();

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);
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
        router.push(`/article/${articleId}`);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
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
        </div>
    );
};

export default ArticlePage;
