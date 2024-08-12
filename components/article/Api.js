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
