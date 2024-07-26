import React, { useEffect } from 'react';
import SQLEditor from '../../components/sql_editor';

const Editor = () => {
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

  useEffect(() => {
    const createDatabase = async () => {
      try {
        const response = await fetch(apiInitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({ dbname: "Artist" })
        });

        if (!response.ok) {
          throw new Error('Database creation failed');
        }

        console.log('Database created successfully');
      } catch (error) {
        console.error('Error creating database:', error);
      }
    };

    createDatabase();
  }, [apiInitUrl]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-5">
      <SQLEditor initialValue="SELECT * FROM Artist;" />
    </div>
  );
}

export default Editor;
