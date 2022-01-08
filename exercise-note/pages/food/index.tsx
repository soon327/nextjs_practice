import { useState, useEffect } from 'react';
import Head from 'next/head';
import Input from '../../src/components/common/Input';

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
    <div className="flex flex-col items-center border-2 border-red-500 w-4/6 h-5/6 ">
      <Head>
        <title>오늘 먹은 영양분들</title>
      </Head>
      <div>
        <span>먹은음식 영양검색</span>
        <Input placeholder="뭐먹었어?" handleInput={(event) => setInput(event.target.value)} />
        <button onClick={() => setLocal('foodList', input)}>검색</button>
      </div>
      <div>
        <span>음식정보 직접등록</span>
        <Input placeholder="뭐먹었어?" handleInput={(event) => setInput(event.target.value)} />
        <button onClick={() => setLocal('foodList', input)}>등록</button>
      </div>
    </div>
  );
}
