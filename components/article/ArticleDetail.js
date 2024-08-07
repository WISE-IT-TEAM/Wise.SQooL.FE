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
        <div className={`w-full max-w-5xl mx-auto p-8 border rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h1 className="text-3xl font-bold mb-6">{article.Title}</h1>
            <div className="mb-4">
                <span className="text-gray-500">Category: </span>
                <span className="font-semibold">{article.Category}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-500">Created at: </span>
                <span className="font-semibold">{new Date(article.Created_at).toLocaleString()}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-500">Views: </span>
                <span className="font-semibold">{article.View_count}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-500">Comments: </span>
                <span className="font-semibold">{article.Comment_count}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-500">Tags: </span>
                {article.Tags.split(',').map(tag => (
                    <span key={tag} className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: article.Content }} />
        </div>
    );
};

export default ArticleDetail;
