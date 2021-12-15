// 넥스트는 리액트 모듈을 자동으로 포함시켜준다.
// import React from 'react';
import Head from 'next/head';

export default function Homepage() {
  return (
    <div>
      <p>This is home page</p>
      <img src="/static/icon.png" />
      <Head>
        <title>homepage</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      <style jsx>
        {`
          p {
            color: blue;
            font-size: 18pt;
          }
        `}
      </style>
    </div>
  );
}
