// 넥스트는 리액트 모듈을 자동으로 포함시켜준다.
// import React from 'react';
import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';
import styled from 'styled-components';

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`;
export default function Homepage() {
  return (
    <MyP>
      <p>This is home page</p>
      <Link href="page2">
        <a>page2로 이동</a>
      </Link>
      <img src={Icon} width="300" height="300" />
      <Head>
        <title>homepage</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
    </MyP>
  );
}
