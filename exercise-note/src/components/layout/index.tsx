import Head from 'next/head';
import React from 'react';
import Sidebar from './Sidebar';

export default function index({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex border-2 border-sky-500 h-screen">
      <Head>
        <title>운동일지</title>
      </Head>
      <Sidebar />
      <main className="flex-5 border border-red-400 w-full">{children}</main>
    </div>
  );
}
