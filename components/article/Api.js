const articleListUrl = process.env.NEXT_PUBLIC_API_ARTICLE_LIST_URL;
const articleDetailUrl = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_URL;

export const getArticleList = async (page, perPage, category) => {
    try {
        const response = await fetch(`${articleListUrl}?page=${page}&perpage=${perPage}&category=${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const data = await response.json();
        return data.articlelist.map(article => ({
            ...article,
            Tags: typeof article.Tags === 'string' ? article.Tags.split(',') : []
        }));
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
        console.log('Fetched article detail:', data); // 로그 추가
        const articleInfo = data.article || {};  // article 속성을 추출

        // 각 필드를 적절하게 변환
        return {
            ...articleInfo,
            Tags: typeof articleInfo.Tags === 'string' ? articleInfo.Tags.split(',') : [],
            View_count: parseInt(articleInfo.View_count, 10) || 0,
            Created_at: new Date(articleInfo.Created_at)
        };
    } catch (error) {
        console.error('Error fetching article detail:', error);
        throw error;
    }
};
