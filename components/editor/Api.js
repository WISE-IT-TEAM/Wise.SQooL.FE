// component/editor/Api.js
export const createDatabase = async () => {
  try {
    const response = await fetch('https://be.wiseit.kr/api/sqool/init', {
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

export const executeQuery = async (query, setQueryResult) => {
  console.log('Executing query:', query);

  try {
    const response = await fetch('https://be.wiseit.kr/api/sqool/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ query }),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error response text:', errorText);
      throw new Error('Query execution failed');
    }

    const result = await response.json();
    setQueryResult({ columns: result.columns, rows: result.result });
  } catch (error) {
    console.error('쿼리 실행 중 오류:', error);
    setQueryResult({ columns: [], rows: [] });
  }
};
