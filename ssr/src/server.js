import express from 'express';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './App';

const app = express();
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

app.use('/dist', express.static('dist'));
// 브라우저가 자동으로 요청하는 favicon.ico파일을 필터링한다.
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const renderString = renderToString(<App initialPage="home" />);
  const result = html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`);
  res.send(result);
});
app.listen(3000);
