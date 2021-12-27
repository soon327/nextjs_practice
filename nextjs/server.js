const express = require('express');
const next = require('next');
const url = require('url');
const lruCache = require('lru-cache');
const fs = require('fs');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const prerenderList = [
  { name: 'homepage', path: '/homepage' },
  { name: 'page2-hello', path: '/page2?text=hello' },
  { name: 'page2-world', path: '/page2?text=world' },
];

const prerendereCache = {};
if (!dev) {
  for (const info of prerenderList) {
    const { name, path } = info;
    const html = fs.readFileSync(`./out/${name}.html`, 'utf8');
    prerendereCache[path] = html;
  }
}

const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60,
});

//넥스트 준비과정이 끝나면 입력함수를 실행한다.
app.prepare().then(() => {
  const server = express();

  server.get('/page/:id', (req, res) => {
    res.redirect(`/page${req.params.id}`);
  });

  server.get(/^\/page[1-9]/, (req, res) => renderAndCache(req, res));
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  async function renderAndCache(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const cacheKey = parsedUrl.path;
    if (ssrCache.has(cacheKey)) {
      console.log('캐시사용');
      return res.send(ssrCache.get(cacheKey));
    }
    if (prerendereCache.hasOwnProperty(cacheKey)) {
      console.log('미리 렌더링한 HTML 사용');
      return res.send(prerendereCache[cacheKey]);
    }
    try {
      const { query, pathname } = parsedUrl;
      const html = await app.renderToHTML(req, res, pathname, query);
      if (res.statusCode === 200) {
        ssrCache.set(cacheKey, html);
      }
      res.send(html);
    } catch (err) {
      app.renderError(err, req, res, pathname, query);
    }
  }

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
