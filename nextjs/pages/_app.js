import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
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
