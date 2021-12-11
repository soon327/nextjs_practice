import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './App';
import { ServerStyleSheet } from 'styled-components';

// dist/index.html 파일을 가져온다.
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

// 미리 렌더링할 페이지 정의
export const prerenderPages = ['home'];

export function renderPage(page) {
  // 스타일을 추출하는 데 사용될 객체
  const sheet = new ServerStyleSheet();
  // collectStyles 메서드로 스타일정보를 수집하기위한 코드를 리액트요소에 삽입한다.
  const renderString = renderToString(sheet.collectStyles(<App page={page} />));
  // getStyleTags 메서드로 스타일정보를 추출한다.
  const styles = sheet.getStyleTags();
  const result = html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`).replace('__STYLE_FROM_SERVER__', styles);
  return result;
}
