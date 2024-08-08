const articleListUrl = process.env.NEXT_PUBLIC_API_ARTICLE_LIST_URL;
const articleDetailUrl = process.env.NEXT_PUBLIC_API_ARTICLE_DETAIL_URL;

const adjustImagePaths = (htmlContent) => {
    const serverBaseUrl = process.env.NEXT_PUBLIC_API_CONTENTS_URL.replace('/api/sqldoc/document/', '');

    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const images = div.getElementsByTagName('img');

    for (let img of images) {
        const originalSrc = img.getAttribute('src');
        if (originalSrc && originalSrc.startsWith('/static/Uploads')) {
            const newSrc = `${serverBaseUrl}${originalSrc}`;
            img.setAttribute('src', newSrc);
        }
    }

    return div.innerHTML;
};

const extractThumbnail = (content) => {
    const adjustedContent = adjustImagePaths(content);
    const div = document.createElement('div');
    div.innerHTML = adjustedContent;
    const img = div.querySelector('img');
    return img ? img.src : '';
};

const extractDescription = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const firstParagraph = div.querySelector('p');
    return firstParagraph ? firstParagraph.innerText : '';
};

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
        return Promise.all(articleList.map(async article => {
            const articleDetail = await getArticleDetail(article.Id);
            return {
                ...article,
                Tags: typeof article.Tags === 'string' ? article.Tags.split(',') : [],
                Thumbnail: extractThumbnail(articleDetail.Content),
                Description: article.Description || extractDescription(articleDetail.Content),
                Content: articleDetail.Content // 상세 내용을 추가로 포함
            };
        }));
    } catch (error) {
        console.error('Error fetching article list:', error);
        throw error;
    }
};

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

        return {
            ...articleInfo,
            Tags: typeof articleInfo.Tags === 'string' ? articleInfo.Tags.split(',') : [],
            View_count: parseInt(articleInfo.View_count, 10) || 0,
            Created_at: new Date(articleInfo.Created_at),
            Content: adjustImagePaths(articleInfo.Content) // Ensure the content is adjusted here as well
        };
    } catch (error) {
        console.error('Error fetching article detail:', error);
        throw error;
    }
};
