import React, { useEffect } from 'react';
import styles from './index.module.css';
import SQLEditor from '../../components/sql_editor';

const Editor = () => {
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

  useEffect(() => {
    const createDatabase = async () => {
      try {
        const response = await fetch('https://1e44-121-131-9-81.ngrok-free.app/api/sqool/', {
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
    <div className={styles.container}>
      <SQLEditor initialValue="SELECT * FROM Artist;" />
    </div>
  );
}

export default Editor;
