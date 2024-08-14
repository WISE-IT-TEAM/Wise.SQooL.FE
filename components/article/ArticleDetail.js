import React from "react";
import useStore from "../../store/useStore";
import DOMPurify from "dompurify";

const ArticleDetail = ({ article, onBack }) => {
  const { isDarkMode } = useStore();

  if (!article) {
    return <div>Error loading article</div>;
  }

  const tags = Array.isArray(article.Tags) ? article.Tags : [];

  const container = `w-full mx-auto p-6 flex flex-col gap-4 shadow-lg rounded-lg mb-4 ${
    isDarkMode ? "bg-slate-900 text-slate-50" : "bg-slate-50 text-slate-900"
  }`;
  const metadata = `metadata flex gap-4 text-sm mb-4 ${
    isDarkMode ? "text-slate-400" : "text-slate-500"
  }`;
  const tagClass = `tag px-4 py-2 rounded-full mr-2 ${
    isDarkMode ? "bg-slate-700 text-slate-200" : "bg-gray-200 text-gray-800"
  }`;
  const content = `prose w-full max-w-none mb-4 ${isDarkMode ? "prose-invert" : ""}`;

  const cleanContent = DOMPurify.sanitize(article.Content);

  return (
    <div className={container}>
      <h1 className="text-3xl font-bold">{article.Title}</h1>
      <div className={metadata}>
        <span>조회수: {article.View_count}</span>
        <span>{new Date(article.Created_at).toLocaleDateString()}</span>
        <span>{article.Category}</span>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: cleanContent }}
        className={content}
      />
    </div>
  );
};

export default ArticleDetail;
