import React from 'react';
import { useRouter } from 'next/router';
import ArticleDetail from '../../components/article/ArticleDetail';

const ArticleDetailPage = () => {
    const router = useRouter();
    const { articleId } = router.query;
    const article = router.query.article ? JSON.parse(router.query.article) : null;

    if (!article) {
        return <div>Error loading article</div>;
    }

    const handleBack = () => {
        router.push('/article');
    };

    return (
        <div className="w-full h-screen flex flex-col items-center p-4" style={{ marginTop: '40px' }}>
            <ArticleDetail article={article} onBack={handleBack} />
        </div>
    );
};

export default ArticleDetailPage;
