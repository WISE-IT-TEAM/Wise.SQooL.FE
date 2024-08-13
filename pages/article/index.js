// pages/article/index.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '../../components/article/ArticleList';
import CategoryList from '../../components/article/CategoryList';
import { getArticleList } from '../../components/article/Api';
import useStore from '../../store/useStore';

/**
 * ArticlePage 컴포넌트
 * - 카테고리별로 게시물을 표시하는 페이지입니다.
 * - 사용자가 카테고리를 선택하고, 게시물 목록을 조회할 수 있습니다.
 *
 * @returns {JSX.Element} 카테고리와 게시물 목록을 렌더링하는 컴포넌트
 */
const ArticlePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('공지사항');
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const perPage = 10;
    const router = useRouter();
    const isFullWidth = useStore((state) => state.isFullWidth); // Zustand에서 전체 너비 상태 가져오기

    // 컨테이너 클래스 정의
    const container = `flex flex-col gap-6 ${isFullWidth ? 'w-full' : 'max-w-content-full mx-auto'} min-h-screen`;

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
        <section className={container}>
            <CategoryList onSelectCategory={handleSelectCategory} />
            <ArticleList 
                articles={articles} 
                onSelectArticle={handleSelectArticle} 
                isLoading={isLoading}
                page={page}
                perPage={perPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default ArticlePage;
