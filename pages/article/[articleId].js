import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleDetail from '../../components/article/ArticleDetail';
import { getArticleDetail } from '../../components/article/Api';

const ArticleDetailPage = () => {
    const router = useRouter();
    const { articleId } = router.query;
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (articleId) {
            const fetchArticle = async () => {
                try {
                    const data = await getArticleDetail(articleId);
                    setArticle(data);
                } catch (error) {
                    console.error('Error fetching article detail:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchArticle();
        }
    }, [articleId]);

    const handleBack = () => {
        router.push('/article');
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Error loading article</div>;
    }

    return (
        <div className="w-full h-screen flex flex-col items-center p-4">
            <ArticleDetail article={article} onBack={handleBack} />
        </div>
    );
};

export default ArticleDetailPage;
