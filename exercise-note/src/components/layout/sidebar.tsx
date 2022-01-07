import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  return (
    <Container className="flex-1 border-2 border-green-600 w-full">
      <input placeholder="검색해주세요" />
      <Link href="/">
        <a>홈페이지</a>
      </Link>
      <Link href="/food">
        <a>칼로리계산</a>
      </Link>
    </Container>
  );
}
