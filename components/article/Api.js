const articleListUrl = process.env.NEXT_PUBLIC_API_ARTICLE_LIST_URL;
const articleDetailUrl = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_URL;

export const getArticleList = async (page, perPage, category) => {
    try {
        const response = await fetch(`${articleListUrl}?page=${page}&perpage=${perPage}&category=${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched article list:', data);
        return data.articlelist || []; // articlelist 배열 반환
    } catch (error) {
        console.error('Error fetching article list:', error);
        throw error;
    }
};

export const getArticleDetail = async (articleId) => {
    try {
        const response = await fetch(`${articleDetailUrl}/${articleId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch article detail: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching article detail:', error);
        throw error;
    }
};
