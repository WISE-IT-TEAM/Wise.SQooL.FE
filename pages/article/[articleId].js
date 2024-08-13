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
        <div className="max-w-content-full mx-auto flex flex-col pt-nav min-h-screen">
            <main className="flex-grow w-full flex flex-col items-center gap-6">
                <ArticleDetail article={article} />
                <div className="w-full flex justify-center">
                    <button 
                        onClick={handleBack} 
                        className="bg-primaryLight text-slate-50 hover:bg-secondaryLight px-4 py-2 rounded duration-300"
                    >
                        Back To List
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ArticleDetailPage;
