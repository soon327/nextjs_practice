import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import Head from 'next/head';
import wrapper from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poor Story" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
