import Head from 'next/head';
import React from 'react';
import Sidebar from './sidebar';

export default function index({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>운동일지</title>
      </Head>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
