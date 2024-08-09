// components/editor/Api.js
const queryUrl = process.env.NEXT_PUBLIC_API_QUERY_URL;
const initUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

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
