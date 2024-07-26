import React, { useState, useEffect } from 'react';
import SQLEditor from '../../components/sql_editor';

const StartPage = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const apiInitUrl = process.env.NEXT_PUBLIC_API_INIT_URL;

  const toggleEditor = () => {
    setIsEditorOpen(!isEditorOpen);
  };

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
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/6 p-4 bg-gray-100 overflow-auto">
          <h2 className="text-xl font-bold mb-4">시작하기</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700">사전 체크 포인트</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">환경 설정</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">편의 모드 설정</a>
            </li>
            <h2 className="text-xl font-bold mb-4 mt-4">SQL 학습안내</h2>
            <li className="mb-2">
              <a href="#" className="text-gray-700">SQL이란?</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">테이블과 스키마</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">데이터 출력</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">조건에 맞는 데이터 가져오기</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">테이블 합치기</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">함수</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">그룹 만들기</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">테이블 관리하기</a>
            </li>
          </ul>
        </aside>
        <div className={`flex-1 flex ${isEditorOpen ? 'flex-row' : 'flex-col'}`}>
          <main className={`p-4 overflow-auto ${isEditorOpen ? 'w-1/2' : 'w-full'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">시작하기</h2>
              <h3 className="text-xl font-semibold mt-4">사전 체크 포인트</h3>
              <p className="mt-2 text-gray-700">제1항의 탄핵소추는 국회의 재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 단, 대통령에 대한 탄핵소추는 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 제2항 모든 국민은 법앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적 또는 문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.</p>
              <h3 className="text-xl font-semibold mt-4">환경 설정</h3>
              <p className="mt-2 text-gray-700">현재재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.</p>
              <h3 className="text-xl font-semibold mt-4">편의 모드 설정</h3>
              <p className="mt-2 text-gray-700">이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.</p>
            </div>
          </main>
          {isEditorOpen && (
            <div className="w-1/2 border-l border-gray-300 p-4">
              <SQLEditor initialValue="SELECT * FROM Artist;" />
            </div>
          )}
        </div>
        <button
          onClick={toggleEditor}
          className="fixed bottom-4 right-4 bg-purple-500 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        >
          {isEditorOpen ? '편집기 닫기' : '편집기 열기'}
        </button>
      </div>
    </div>
  );
};

export default StartPage;
