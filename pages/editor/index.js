import React, { useEffect } from 'react';
import SQLEditor from '../../components/editor/SqlEditor';

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
  
  const editorWrap = `max-w-content-full mb-10 flex mx-auto pt-14 relative`

  return (
    <section className={editorWrap}>
      <SQLEditor initialValue="SELECT * FROM Artist;" />
    </section>
  );
}

export default Editor;