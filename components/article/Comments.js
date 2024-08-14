import React, { useState, useEffect } from "react";
import useStore from "../../store/useStore";

const Comment = ({
  articleId,
  getArticleComments,
  postArticleComment,
  updateArticleComment,
  deleteArticleComment,
}) => {
  const [comments, setComments] = useState([]);
  const [nickname, setNickname] = useState("");
  const [passwords, setPasswords] = useState({});
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [deletingCommentId, setDeletingCommentId] = useState(null);
  const [showOptions, setShowOptions] = useState({});
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (articleId) {
      const fetchComments = async () => {
        try {
          const commentsData = await getArticleComments(articleId);
          setComments(commentsData);
        } catch (error) {
          console.error("댓글을 불러오는 중 오류 발생:", error);
        }
      };

      fetchComments();
    }
  }, [articleId, getArticleComments]);

  const handleCommentSubmit = async () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!passwords.new || !passwords.new.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!newComment.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      await postArticleComment(articleId, nickname, passwords.new, newComment);
      const updatedComments = await getArticleComments(articleId);
      setComments(updatedComments);
      setNewComment("");
      setNickname("");
      setPasswords((prev) => ({ ...prev, new: "" }));
      alert("댓글이 작성되었습니다.");
    } catch (error) {
      console.error("댓글 작성 중 오류 발생:", error);
    }
  };

  const handleCommentUpdate = async () => {
    if (!passwords[editingCommentId]) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      await updateArticleComment(
        articleId,
        editingCommentId,
        passwords[editingCommentId],
        editingContent
      );
      const updatedComments = await getArticleComments(articleId);
      setComments(updatedComments);
      setEditingCommentId(null);
      setEditingContent("");
      setPasswords((prev) => ({ ...prev, [editingCommentId]: "" }));
      setShowOptions((prev) => ({ ...prev, [editingCommentId]: false }));
      alert("댓글이 수정되었습니다.");
    } catch (error) {
      console.error("댓글 수정 중 오류 발생:", error);
    }
  };

  const handleCommentDelete = async () => {
    if (!passwords[deletingCommentId]) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      await deleteArticleComment(
        deletingCommentId,
        passwords[deletingCommentId]
      );
      const updatedComments = await getArticleComments(articleId);
      setComments(updatedComments);
      setPasswords((prev) => ({ ...prev, [deletingCommentId]: "" }));
      setShowOptions((prev) => ({ ...prev, [deletingCommentId]: false }));
      setDeletingCommentId(null);
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생:", error);
    }
  };

  const handlePasswordChange = (commentId, value) => {
    setPasswords((prev) => ({ ...prev, [commentId]: value }));
  };

  const toggleOptions = (commentId) => {
    setShowOptions((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  const container = `comments-section w-full mx-auto p-6 flex flex-col gap-4 shadow-lg rounded-lg mb-4 ${
    isDarkMode ? "bg-slate-900 text-slate-50" : "bg-slate-50 text-slate-900"
  }`;
  const inputItem = `w-full p-2 border rounded-lg mb-2`

  return (
    <div className={container}>
      <h2 className=" font-bold mb-4">댓글</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.Id}
            className="mb-4 p-6 bg-transparent shadow-md rounded-lg relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">{comment.Nickname}</p>
                <p className="text-gray-600">{comment.Content}</p>
              </div>
              <button
                onClick={() => toggleOptions(comment.Id)}
                className="text-gray-400 hover:text-gray-600 relative"
              >
                ...
              </button>
              {showOptions[comment.Id] && (
                <div className="absolute right-0 top-10 bg-transparent border border-gray-300 shadow-lg rounded-md p-2 w-24 z-10">
                  <button
                    onClick={() => {
                      setEditingCommentId(comment.Id);
                      setEditingContent(comment.Content);
                      setShowOptions((prev) => ({
                        ...prev,
                        [comment.Id]: false,
                      }));
                    }}
                    className="bg-yellow-500 text-white px-2 py-1 rounded w-full mb-1"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      setDeletingCommentId(comment.Id);
                      setShowOptions((prev) => ({
                        ...prev,
                        [comment.Id]: false,
                      }));
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded w-full"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
            {/* 수정 모드 */}
            {editingCommentId === comment.Id && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <textarea
                  className="w-full p-3 border rounded mb-2"
                  rows="5"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="w-full p-2 border rounded mb-2"
                  value={passwords[editingCommentId] || ""}
                  onChange={(e) =>
                    handlePasswordChange(editingCommentId, e.target.value)
                  }
                />
                <button
                  onClick={handleCommentUpdate}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded w-full"
                >
                  수정 완료
                </button>
                <button
                  onClick={() => setEditingCommentId(null)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full"
                >
                  취소
                </button>
              </div>
            )}
            {/* 삭제 모드 */}
            {deletingCommentId === comment.Id && (
              <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="w-full p-2 border rounded mb-2"
                  value={passwords[comment.Id] || ""}
                  onChange={(e) =>
                    handlePasswordChange(comment.Id, e.target.value)
                  }
                />
                <button
                  onClick={handleCommentDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded w-full"
                >
                  삭제 확인
                </button>
                <button
                  onClick={() => setDeletingCommentId(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded w-full mt-2"
                >
                  취소
                </button>
              </div>
            )}
            {/* 답댓글 렌더링 */}
            {/* {comment.Sub && comment.Sub.length > 0 && (
              <div className="ml-8 mt-4 bg-gray-50 p-4 rounded-lg">
                  {comment.Sub.map((subComment) => (
                      <div key={subComment.Id} className="mb-2">
                          <p className="font-bold">{subComment.Nickname}</p>
                          <p className="text-gray-600">{subComment.Content}</p>
                      </div>
                  ))}
              </div>
            )} */}
          </div>
        ))
      ) : (
        <p className="opacity-70">첫번째 댓글을 작성해보세요</p>
      )}
      <div className="flex flex-col gap-2 mt-8 p-6 bg-transparent rounded-lg">
        <h3 className="font-bold">댓글 작성</h3>
        <input
          type="text"
          placeholder="닉네임"
          className={inputItem}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={inputItem}
          value={passwords.new || ""}
          onChange={(e) => handlePasswordChange("new", e.target.value)}
        />
        <textarea
          className={inputItem}
          rows="3"
          placeholder="내용을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className="w-full py-4 font-bold duration-500 rounded-lg bg-slate-900 hover:bg-primaryDark text-slate-50"
        >
          댓글 작성
        </button>
      </div>
    </div>
  );
};

export default Comment;
