import express from 'express';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import App from './App';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

app.use('/dist', express.static('dist'));
// 브라우저가 자동으로 요청하는 favicon.ico파일을 필터링한다.
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // substr 메서드로 슬래쉬(/) 제거
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'home';
  // 스타일을 추출하는 데 사용될 객체
  const sheet = new ServerStyleSheet();
  // collectStyles 메서드로 스타일정보를 수집하기위한 코드를 리액트요소에 삽입한다.
  const renderString = renderToString(sheet.collectStyles(<App initialPage={page} />));
  // hetStyleTags 메서드로 스타일정보를 추출한다.
  const styles = sheet.getStyleTags();
  const initialData = { page };
  const result = html
    .replace('<div id="root"></div>', `<div id="root">${renderString}</div>`)
    // __DATA_FROM_SERVER__ 문자열을 초기데이터로 대체한다.
    .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData))
    .replace('__STYLE_FROM_SERVER__', styles);
  res.send(result);
});
app.listen(3000);
