import express from 'express';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { renderPage, prerenderPages } from './common';
import React from 'react';
import App from './App';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

const prerenderHtml = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(path.resolve(__dirname, `../dist/${page}.html`), 'utf8');
  prerenderHtml[page] = pageHtml;
}

app.use('/dist', express.static('dist'));
// 브라우저가 자동으로 요청하는 favicon.ico파일을 필터링한다.
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // substr 메서드로 슬래쉬(/) 제거
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'home';
  const initialData = { page };
  // 미리 렌더링된 페이지가 아닌 경우에만 새로 렌더링한다.
  const pageHtml = prerenderPages.includes(page) ? prerenderHtml[page] : renderPage(page);
  const result = pageHtml.replace('__DATA_FROM_SERVER__', JSON.stringify(initialData));

  res.send(result);
});
app.listen(3000);
