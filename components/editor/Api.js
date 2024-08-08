// component/editor/Api.js
const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;
const apiQueryUrl = process.env.NEXT_PUBLIC_API_QUERY_URL;

export const createDatabase = async () => {
  try {
    const response = await fetch(apiInitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ dbname: 'Artist' }),
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

export const resetDatabase = async () => {
  try {
    const response = await fetch(apiInitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ dbname: 'Artist', reset: true }), // Assuming the API accepts a reset flag
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Database reset failed');
    }

    const data = await response.json();
    console.log('Database reset successfully', data);
  } catch (error) {
    console.error('Error resetting database:', error);
  }
};

export const executeQuery = async (query, setQueryResult) => {
  console.log('Executing query:', query);

  try {
    const response = await fetch(apiQueryUrl, {
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
      return;
    }

    setQueryResult({
      message: result.message,
      columns: result.columns || [],
      rows: result.result || [],
      error: null
    });
  } catch (error) {
    console.error('쿼리 실행 중 오류:', error);
    setQueryResult({
      message: error.message,
      columns: [],
      rows: [],
      error: error.message
    });
  }
};
