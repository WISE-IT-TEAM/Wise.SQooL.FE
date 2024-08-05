const categoryUrl = process.env.NEXT_PUBLIC_API_CATEGORY_URL;
const contentUrl = process.env.NEXT_PUBLIC_API_CONTENTS_URL;

export const getCategoryList = async () => {
    try {
        const response = await fetch(categoryUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch categories: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching category list:', error);
        throw error;
    }
};

export const getContent = async (documentId) => {
    try {
        const response = await fetch(`${contentUrl}${documentId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};
