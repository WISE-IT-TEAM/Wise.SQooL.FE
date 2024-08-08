// components/editor/Api.js
const categoryUrl = process.env.NEXT_PUBLIC_API_CATEGORY_URL;
const contentUrl = process.env.NEXT_PUBLIC_API_CONTENTS_URL;
const queryUrl = process.env.NEXT_PUBLIC_API_QUERY_URL;
const initUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

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

export const executeQuery = async (query, setQueryResult) => {
  console.log('Executing query:', query);

  try {
    const response = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ query }),
      credentials: 'include',
    });

    const result = await response.json();

    if (!response.ok) {
      console.log('Error response text:', result.message);
      setQueryResult({
        message: result.message,
        columns: [],
        rows: [],
        error: result.status
      });
      return { success: false };
    }

    setQueryResult({
      message: result.message,
      columns: result.columns || [],
      rows: result.result || [],
      error: null
    });

    return { success: true };
  } catch (error) {
    console.error('쿼리 실행 중 오류:', error);
    setQueryResult({
      message: error.message,
      columns: [],
      rows: [],
      error: error.message
    });
    return { success: false };
  }
};

export const createDatabase = async () => {
  try {
    const response = await fetch(initUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ dbname: "Artist" }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Database creation failed');
    }

    const data = await response.json();
    console.log('Database created successfully', data);
  } catch (error) {
    console.error('Error creating database:', error);
  }
};
