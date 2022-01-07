import { useState, useEffect } from 'react';
import Head from 'next/head';

// https://www.foodsafetykorea.go.kr/api/newDatasetDetail.do

export default function Food() {
  const [input, setInput] = useState('');

  const setLocal = (name: string, data: any) => {
    if (name === 'foodList') {
      const currentData = localStorage.getItem('foodList') ?? '[]';
      const parsedData = JSON.parse(currentData);

      localStorage.setItem(name, JSON.stringify([...parsedData, data]));
      console.log(getLocal('foodList'));
    }
  };

  const getLocal = (name: string) => {
    const data = localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
    return '데이터가 없습니다.';
  };

  return (
    <div>
      <Head>
        <title>오늘 먹은 영양분들</title>
      </Head>
      <input onChange={(event) => setInput(event.target.value)} placeholder="칼로리 등록" />
      <button onClick={() => setLocal('foodList', input)}>등록</button>
      <div className="bg-cyan-500 hover:bg-cyan-700 md:bg-green-300 lg:bg-red-400">ddddddd</div>
    </div>
  );
}
