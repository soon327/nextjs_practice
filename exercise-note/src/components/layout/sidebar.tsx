import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
`;

const menu = [
  { name: '오늘먹은 칼탄단', href: '/food' },
  { name: '운동달력', href: '/calendar' },
  { name: '몸무게변화', href: '/weight' },
];

const setMenu = (data: { name: string; href: string }[]) => {
  return data.map((v) => {
    return (
      <Link href={v.href} key={v.href}>
        <a className="hover:bg-purple-300">{v.name}</a>
      </Link>
    );
  });
};

export default function Sidebar() {
  return (
    <Container className=" flex-1 border-2 bg-purple-200 w-full h-full">
      <div className="w-2/12 ">
        <Link href="/">
          <a className="text-base flex items-center">
            <img src="/soon.png" className="w-16 h-16" />
            <p className="text-blue-700 font-bold">Soon's EN</p>
          </a>
        </Link>
      </div>
      <div className="flex w-10/12 items-center justify-around font-semibold ">{setMenu(menu)}</div>
    </Container>
  );
}
