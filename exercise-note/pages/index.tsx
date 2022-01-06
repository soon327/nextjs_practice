import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>exercise-note</title>
        <meta name="description" content="private exercise note for soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>신년맞이 운동노트</h1>
        <p className="text-3xl font-bold underline">for Soon</p>
      </main>
    </div>
  );
};

export default Home;
