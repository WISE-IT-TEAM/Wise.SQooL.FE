import React from 'react';
import useStore from '../../store/useStore';

const ArticleCard = ({ article, onSelectArticle }) => {
    const tags = Array.isArray(article.Tags) ? article.Tags : [];
    const { isDarkMode } = useStore();

const container =`article-card w-full flex flex-col gap-2 border-1 rounded-lg p-4 duration-500 ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200" }`;
const metaData = `metadata text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500" }`;
const tagItem = `tag text-xs px-4 py-2 rounded-full mr-2 font-bold ${isDarkMode ? "bg-slate-50 text-slate-900" : "bg-slate-900 text-slate-50" }`;
    return (
        <div className={container} onClick={() => onSelectArticle(article.Id)}>
            <h2 className="text-xl font-bold mb-2">{article.Title}</h2>
            <div className={metaData}>
                <span>{article.Category}</span>
                <span className="ml-4">{new Date(article.Created_at).toLocaleDateString()}</span>
                <span className="ml-4">조회수: {article.View_count}</span>
            </div>
            {article.Thumbnail && <img src={article.Thumbnail} alt={article.Title} className="mb-4 w-full h-auto rounded object-cover" style={{ maxHeight: '200px' }} />}
            <p className="mb-2">{article.Description}</p>
            <div className="tags">
                {tags.map(tag => <span key={tag} className={tagItem}>{tag}</span>)}
            </div>
        </div>
    );
};

export default ArticleCard;
