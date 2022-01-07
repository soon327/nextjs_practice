import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>운동노트</title>
        <meta name="description" content="private exercise note for soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>신년맞이 운동노트</h1>
        <p className="text-3xl font-bold underline">for Soon</p>
      </main>
    </div>
  );
};

export default Home;
