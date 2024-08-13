import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const ArticleDetail = ({ article, onBack }) => {
    const { isDarkMode } = useDarkMode();

    if (!article) {
        return <div>Error loading article</div>;
    }

    const tags = Array.isArray(article.Tags) ? article.Tags : [];

    const container = `w-full mx-auto p-6 shadow-md rounded-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`;
    const metadataClass = `metadata text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`;
    const tagClass = `tag px-2 py-1 rounded mr-2 ${isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800"}`;
    const contentClass = `prose prose-lg w-full max-w-none mb-4 ${isDarkMode ? "prose-invert" : ""}`;

    return (
        <div className={container}>
            <h1 className="text-3xl font-bold mb-4">{article.Title}</h1>
            <div className={metadataClass}>
                <span>조회수: {article.View_count}</span>
                <span className="ml-4">{new Date(article.Created_at).toLocaleDateString()}</span>
                <span className="ml-4">{article.Category}</span>
            </div>
            <div className="tags mb-4">
                {tags.map(tag => <span key={tag} className={tagClass}>{tag}</span>)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.Content }} className={contentClass} />
        </div>
    );
};

export default ArticleDetail;
