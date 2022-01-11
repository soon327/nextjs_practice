import { useState } from 'react';
import Head from 'next/head';
import Input from '../../src/components/common/Input';
import SearchModal from '../../src/components/common/modal/SearchModal';
import getFoodInfo from '../../api/getFoodInfo';
import { eventTypes } from 'customTypes';

let timerHandle: any;
export default function Food() {
  const [data, setData] = useState([]);

  const searchFood = (event: eventTypes.Input) => {
    const food = event.target.value;
    clearTimeout(timerHandle);
    timerHandle = setTimeout(async () => {
      const result = await getFoodInfo(food);
      if (result?.row) {
        setData(result.row);
        console.log('dfddfdf');
      }
    }, 500);
  };

  return (
    <div className="w-full h-full border-4 border-stone-900">
      <SearchModal open={false} />
      <div className="flex flex-col items-center border-2 border-red-500 w-full h-full relative">
        <Head>
          <title>오늘 먹은 영양분들</title>
        </Head>
        <div>
          <span>먹은음식 영양검색</span>
          <Input placeholder="뭐먹었어?" handleInput={searchFood} />
          <button>검색</button>
        </div>
        <div>
          <span>음식정보 직접등록</span>
        </div>
        <div>
          {data.map((v: { DESC_KOR: string }, index) => (
            <li key={index}>{v.DESC_KOR}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
