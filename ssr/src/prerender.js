import fs from 'fs';
import path from 'path';
import { renderPage, prerenderPages } from './common';

for (const page of prerenderPages) {
  const result = renderPage(page);
  // 페이지를 렌더링해서 dist폴더밑에 저장한다
  fs.writeFileSync(path.resolve(__dirname, `../dist/${page}.html`), result);
}
