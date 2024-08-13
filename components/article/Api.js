// API URL 정의
const articleListUrl = process.env.NEXT_PUBLIC_API_ARTICLE_LIST_URL;
const articleDetailUrl = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_URL;
const contentsBaseUrl = process.env.NEXT_PUBLIC_BASE_URL; // 이미지가 호스팅되는 서버의 기본 URL

// adjustImagePaths 함수 정의
const adjustImagePaths = (htmlContent) => {
    const contentsBaseUrl = 'https://be.wiseit.kr'; // 이미지가 호스팅되는 서버의 기본 URL

    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const images = div.getElementsByTagName('img');

    for (let img of images) {
        const originalSrc = img.getAttribute('src');
        if (originalSrc && originalSrc.startsWith('/static/Uploads')) {
            const newSrc = `${contentsBaseUrl}${originalSrc}`;
            img.setAttribute('src', newSrc);
        }
    }

    return div.innerHTML;
};

// getArticleList 함수 정의
export const getArticleList = async (page, perPage, category) => {
    try {
        console.log('Fetching articles from:', `${articleListUrl}?page=${page}&perpage=${perPage}&category=${category}`);
        const response = await fetch(`${articleListUrl}?page=${page}&perpage=${perPage}&category=${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched article list data:', data);
        const articleList = data.articlelist || [];
        return articleList.map(article => ({
            ...article,
            Tags: typeof article.Tags === 'string' ? article.Tags.split(',') : [],
            Thumbnail: article.Thumbnail ? `${contentsBaseUrl}${article.Thumbnail}` : null, // 썸네일 경로 조정
            Description: article.Description
        }));
    } catch (error) {
        console.error('Error fetching article list:', error);
        throw error;
    }
};

// getArticleDetail 함수 정의
export const getArticleDetail = async (articleId) => {
    try {
        console.log(`Fetching article detail for ID: ${articleId}`);
        const response = await fetch(`${articleDetailUrl}/${articleId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch article detail: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched article detail data:', data);
        const articleInfo = data.article || {};

        // adjustImagePaths 함수 호출
        return {
            ...articleInfo,
            Tags: typeof articleInfo.Tags === 'string' ? articleInfo.Tags.split(',') : [],
            View_count: parseInt(articleInfo.View_count, 10) || 0,
            Created_at: new Date(articleInfo.Created_at),
            Content: adjustImagePaths(articleInfo.Content) // 이미지 경로 조정
        };
    } catch (error) {
        console.error('Error fetching article detail:', error);
        throw error;
    }
};

// 댓글 관련 함수 정의
export const getArticleComments = async (articleId) => {
    try {
        const response = await fetch(`${articleDetailUrl}/${articleId}/comments`);
        if (!response.ok) {
            throw new Error(`댓글을 불러오는 데 실패했습니다: ${response.statusText}`);
        }
        const data = await response.json();
        return data.comments || [];
    } catch (error) {
        console.error('댓글을 불러오는 중 오류 발생:', error);
        throw error;
    }
};

export const postArticleComment = async (articleId, nickname, password, content) => {
    try {
        const response = await fetch(`${articleDetailUrl}/${articleId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname,
                password,
                content,
            }),
        });
        if (!response.ok) {
            throw new Error(`댓글 작성에 실패했습니다: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('댓글 작성 중 오류 발생:', error);
        throw error;
    }
};

export const updateArticleComment = async (articleId, commentId, password, content) => {
    try {
        const response = await fetch(`${articleDetailUrl}/comments/${commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment_id: commentId,
                password,
                content,
            }),
        });
        if (!response.ok) {
            throw new Error(`댓글 수정에 실패했습니다: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('댓글 수정 중 오류 발생:', error);
        throw error;
    }
};

export const deleteArticleComment = async (commentId, password) => {
    try {
        const response = await fetch(`${articleDetailUrl}/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password, // 요청 본문에 비밀번호 포함
            }),
        });
        if (!response.ok) {
            throw new Error(`댓글 삭제에 실패했습니다: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('댓글 삭제 중 오류 발생:', error);
        throw error;
    }
};
