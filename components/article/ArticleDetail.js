import React, { useEffect, useState } from 'react';
import { getArticleDetail } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const ArticleDetail = ({ articleId }) => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const data = await getArticleDetail(articleId);
                setArticle(data.article);
            } catch (error) {
                console.error('아티클 가져오는 중 오류 발생:', error);
                setArticle(null);
            } finally {
                setIsLoading(false);
            }
        };

        if (articleId) {
            fetchArticle();
        }
    }, [articleId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Error loading article</div>;
    }

    return (
        <div className={`w-full max-w-5xl mx-auto p-4 border rounded shadow ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1 className="text-2xl font-bold mb-4">{article.Title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: article.Content }} />
        </div>
    );
};

export default ArticleDetail;
