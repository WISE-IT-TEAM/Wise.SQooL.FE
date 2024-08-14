import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticleDetail from '../../components/article/ArticleDetail';
import Comment from '../../components/article/Comments';
import useStore from "../../store/useStore";
import LoadingSpinner from '../../components/LoadingSpinner';
import { getArticleDetail, getArticleComments, postArticleComment, updateArticleComment, deleteArticleComment } from '../../components/article/Api';

const ArticleDetailPage = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (articleId) {
      const fetchArticle = async () => {
        try {
          const articleData = await getArticleDetail(articleId);
          setArticle(articleData);
        } catch (error) {
          console.error('아티클 상세 정보를 불러오는 중 오류 발생:', error);
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
      return (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      );
    }

    if (!article) {
      return <div>아티클을 불러오는 중 오류 발생</div>;
    }

  const container = `max-w-content-full mx-auto flex flex-col pt-nav`;
  const backBtn = `px-6 py-3 rounded-lg duration-500 font-bold ${ isDarkMode ? "bg-primaryDark text-slate-900 hover:bg-secondaryDark" : "bg-primaryLight text-slate-50 hover:bg-secondaryLight" }`;

  return (
    <div className={container}>
      <main className="flex-grow w-full flex flex-col items-center p-4">
        <ArticleDetail article={article} />
        <Comment 
          articleId={articleId}
          getArticleComments={getArticleComments}
          postArticleComment={postArticleComment}
          updateArticleComment={updateArticleComment}
          deleteArticleComment={deleteArticleComment}
        />
      </main>
      <footer className="w-full flex justify-center p-4">
        <button 
          onClick={handleBack} 
          className={backBtn}
        >
          목록으로 돌아가기
        </button>
      </footer>
    </div>
  );
};

export default ArticleDetailPage;
