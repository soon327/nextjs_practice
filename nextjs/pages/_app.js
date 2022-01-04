import Link from 'next/link';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>next practice</title>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <Link href="/homepage">
        <a>homepage</a>
      </Link>
      <Link href="/page2">
        <a>page2</a>
      </Link>
      <Component {...pageProps} />
    </>
  );
}
