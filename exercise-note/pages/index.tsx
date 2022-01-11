import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full ">
      <Head>
        <title>운동노트</title>
        <meta name="description" content="private exercise note for soon" />
        <link rel="icon" href="/soon.png" />
      </Head>

      <main className="flex flex-col justify-center items-center w-2/6 h-5/6 bg-purple-200 shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-top-1">
        <h1 className=" font-extrabold text-center text-3xl text-gray-900">신년맞이 운동노트</h1>
        <img src="/soon.png" className=" w-8/12" />
        <p>1. 운동 주 3회이상 가기</p>
        <p>2. 계산된 단백질 하루 80g이상 먹기</p>
        <p>3. 몸무게 65kg 이상 유지하기</p>
      </main>
    </div>
  );
};

export default Home;
