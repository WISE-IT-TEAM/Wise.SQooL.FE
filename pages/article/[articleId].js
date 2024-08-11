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
                    const data = await getArticleDetail(articleId); // 이 시점에만 조회수 증가
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
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full flex flex-col items-center p-4" style={{ marginTop: '40px' }}>
                <ArticleDetail article={article} />
                <div className="w-full flex justify-end">
                    <button 
                        onClick={handleBack} 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back To List
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ArticleDetailPage;
