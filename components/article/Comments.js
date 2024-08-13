import React, { useState, useEffect } from 'react';

const Comment = ({
    articleId,
    getArticleComments,
    postArticleComment,
    updateArticleComment,
    deleteArticleComment,
}) => {
    const [comments, setComments] = useState([]);
    const [nickname, setNickname] = useState('');
    const [passwords, setPasswords] = useState({});
    const [newComment, setNewComment] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingContent, setEditingContent] = useState('');
    const [deletingCommentId, setDeletingCommentId] = useState(null);
    const [showOptions, setShowOptions] = useState({});

    useEffect(() => {
        if (articleId) {
            const fetchComments = async () => {
                try {
                    const commentsData = await getArticleComments(articleId);
                    setComments(commentsData);
                } catch (error) {
                    console.error('댓글을 불러오는 중 오류 발생:', error);
                }
            };

            fetchComments();
        }
    }, [articleId, getArticleComments]);

    const handleCommentSubmit = async () => {
        if (!passwords.new) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        try {
            await postArticleComment(articleId, nickname, passwords.new, newComment);
            const updatedComments = await getArticleComments(articleId);
            setComments(updatedComments);
            setNewComment('');
            setNickname('');
            setPasswords((prev) => ({ ...prev, new: '' }));
            alert("댓글이 작성되었습니다.");
        } catch (error) {
            console.error('댓글 작성 중 오류 발생:', error);
        }
    };

    const handleCommentUpdate = async () => {
        if (!passwords[editingCommentId]) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        try {
            await updateArticleComment(articleId, editingCommentId, passwords[editingCommentId], editingContent);
            const updatedComments = await getArticleComments(articleId);
            setComments(updatedComments);
            setEditingCommentId(null);
            setEditingContent('');
            setPasswords((prev) => ({ ...prev, [editingCommentId]: '' }));
            setShowOptions((prev) => ({ ...prev, [editingCommentId]: false }));
            alert("댓글이 수정되었습니다.");
        } catch (error) {
            console.error('댓글 수정 중 오류 발생:', error);
        }
    };

    const handleCommentDelete = async () => {
        if (!passwords[deletingCommentId]) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        try {
            await deleteArticleComment(deletingCommentId, passwords[deletingCommentId]);
            const updatedComments = await getArticleComments(articleId);
            setComments(updatedComments);
            setPasswords((prev) => ({ ...prev, [deletingCommentId]: '' }));
            setShowOptions((prev) => ({ ...prev, [deletingCommentId]: false }));
            setDeletingCommentId(null);
            alert("댓글이 삭제되었습니다.");
        } catch (error) {
            console.error('댓글 삭제 중 오류 발생:', error);
        }
    };

    const handlePasswordChange = (commentId, value) => {
        setPasswords((prev) => ({ ...prev, [commentId]: value }));
    };

    const toggleOptions = (commentId) => {
        setShowOptions((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    };

    return (
        <div className="comments-section w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">댓글</h2>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.Id} className="mb-4 p-6 bg-white shadow-md rounded-lg relative">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold">{comment.Nickname}</p>
                                <p className="text-gray-600">{comment.Content}</p>
                            </div>
                            <button 
                                onClick={() => toggleOptions(comment.Id)} 
                                className="text-gray-400 hover:text-gray-600"
                            >
                                ...
                            </button>
                        </div>
                        {showOptions[comment.Id] && (
                            <div className="mt-4">
                                {editingCommentId === comment.Id ? (
                                    <div className="mt-2">
                                        <textarea
                                            className="w-full p-2 border rounded"
                                            rows="3"
                                            value={editingContent}
                                            onChange={(e) => setEditingContent(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="비밀번호"
                                            className="w-full p-2 border rounded mb-2"
                                            value={passwords[editingCommentId] || ''}
                                            onChange={(e) => handlePasswordChange(editingCommentId, e.target.value)}
                                        />
                                        <button 
                                            onClick={handleCommentUpdate}
                                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                        >
                                            수정 완료
                                        </button>
                                        <button 
                                            onClick={() => setEditingCommentId(null)}
                                            className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            취소
                                        </button>
                                    </div>
                                ) : deletingCommentId === comment.Id ? (
                                    <>
                                        <input
                                            type="password"
                                            placeholder="비밀번호"
                                            className="w-full p-2 border rounded mb-2"
                                            value={passwords[comment.Id] || ''}
                                            onChange={(e) => handlePasswordChange(comment.Id, e.target.value)}
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
                                    </>
                                ) : (
                                    <>
                                        <button 
                                            onClick={() => {
                                                setEditingCommentId(comment.Id);
                                                setEditingContent(comment.Content);
                                            }}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
                                        >
                                            수정
                                        </button>
                                        <button 
                                            onClick={() => setDeletingCommentId(comment.Id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
                                        >
                                            삭제
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        {/* 답댓글 렌더링 */}
                        {comment.Sub && comment.Sub.length > 0 && (
                            <div className="ml-8 mt-4 bg-gray-50 p-4 rounded-lg">
                                {comment.Sub.map((subComment) => (
                                    <div key={subComment.Id} className="mb-2">
                                        <p className="font-bold">{subComment.Nickname}</p>
                                        <p className="text-gray-600">{subComment.Content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>아직 댓글이 없습니다.</p>
            )}
            <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-4">댓글 작성</h3>
                <input
                    type="text"
                    placeholder="닉네임"
                    className="w-full p-2 border rounded mb-2"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="w-full p-2 border rounded mb-2"
                    value={passwords.new || ''}
                    onChange={(e) => handlePasswordChange('new', e.target.value)}
                />
                <textarea
                    className="w-full p-2 border rounded mb-2"
                    rows="3"
                    placeholder="댓글을 입력하세요"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button 
                    onClick={handleCommentSubmit}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    댓글 작성
                </button>
            </div>
        </div>
    );
};

export default Comment;
