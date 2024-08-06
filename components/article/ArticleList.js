import React, { useEffect, useState } from 'react';
import { getArticleList } from './Api';
import useDarkMode from '../../hooks/useDarkMode';

const ArticleList = ({ onSelectArticle }) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticleList(1, 10); // 예시로 페이지 1, 페이지당 10개 아티클을 가져옴
                setArticles(data.articles || []); // articles 속성이 없을 경우 빈 배열로 설정
            } catch (error) {
                console.error('아티클 가져오는 중 오류 발생:', error);
                setArticles([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`w-full max-w-5xl flex flex-wrap ${isDarkMode ? 'dark-mode' : ''}`}>
            {articles.map(article => (
                <div 
                    key={article.Id} 
                    className="p-4 w-1/3 cursor-pointer border m-2 rounded shadow"
                    onClick={() => onSelectArticle(article.Id)}
                >
                    <h2 className="text-lg font-bold">{article.Title}</h2>
                    <p>{article.Snippet}</p>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
