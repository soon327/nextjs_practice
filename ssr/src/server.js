import express from 'express';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { renderPage, prerenderPages } from './common';
import lruCache from 'lru-cache';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

// 최대 100개의 페이지를 캐싱하고 각 아이템은 60초동안 캐싱되도록 설정
const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60,
});

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
  const cacheKey = parsedUrl.path;
  // 캐시가 존재하면 캐싱된 값을 사용한다.
  if (ssrCache.has(cacheKey)) {
    console.log('캐시사용');
    return res.send(ssrCache.get(cacheKey));
  }
  // substr 메서드로 슬래쉬(/) 제거
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'home';
  const initialData = { page };
  // 미리 렌더링된 페이지가 아닌 경우에만 새로 렌더링한다.
  const pageHtml = prerenderPages.includes(page) ? prerenderHtml[page] : renderPage(page);
  const result = pageHtml.replace('__DATA_FROM_SERVER__', JSON.stringify(initialData));
  // 캐시가 존재하지않으면 서버사이드 렌더링 후 그 결과를 캐시에 저장한다.
  ssrCache.set(cacheKey, result);
  res.send(result);
});
app.listen(3000);
