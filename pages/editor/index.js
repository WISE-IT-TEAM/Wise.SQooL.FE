// pages/editor/index.js

import React, { useEffect, useState } from 'react';
import SQLEditor from '../../components/editor/SqlEditor';
import useStore from '../../store/useStore';
import totalOffset from '../../store/useStore';

/**
 * Editor 컴포넌트
 * - SQL 편집기 화면을 렌더링합니다.
 * - 초기 로딩 시, API를 통해 데이터베이스를 생성합니다.
 * - SQL 쿼리 결과를 보여주기 위해 상태를 관리합니다.
 *
 * @returns {JSX.Element} SQL 편집기 페이지를 렌더링하는 컴포넌트
 */
const Editor = () => {
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;
  const isFullWidth = useStore((state) => state.isFullWidth); // Zustand에서 상태 가져오기
  const totalOffset = useStore((state) => state.totalOffset); // Zustand에서 totalOffset 가져오기
  const [queryResult, setQueryResult] = useState({ columns: [], rows: [] });

  useEffect(() => {
    /**
     * createDatabase 함수
     * - API를 호출하여 데이터베이스를 생성합니다.
     * - 페이지가 로드될 때 한 번 실행됩니다.
     */
    const createDatabase = async () => {
      try {
        const response = await fetch(apiInitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({ dbname: "Artist" }),
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
  }, [apiInitUrl]); // apiInitUrl이 변경될 때마다 useEffect가 다시 실행됨

  const container = `max-w-content-full mx-auto h-full min-h-[calc(100vh-${totalOffset}px)]`;

  return (
    <section className={container}>
      <SQLEditor
        placeholder="쿼리문을 입력해주세요. 예시) SELECT * FROM Artist;"
        queryResult={queryResult}
        setQueryResult={setQueryResult}
      />
    </section>
  );
}

export default Editor;
