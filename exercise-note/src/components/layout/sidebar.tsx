import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
`;

export default function sidebar() {
  return (
    <Container>
      <input placeholder="검색해주세요" />
      <Link href="/">홈페이지</Link>
      <Link href="/food">
        <a>칼로리계산</a>
      </Link>
    </Container>
  );
}
