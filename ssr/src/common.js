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
  const sheet = new ServerStyleSheet();
  const renderString = renderToString(sheet.collectStyles(<App page={page} />));
  const styles = sheet.getStyleTags();
  const result = html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`).replace('__STYLE_FROM_SERVER__', styles);
  return result;
}
