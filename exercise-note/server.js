const express = require('express');
const next = require('next');
const axios = require('axios');

const port = 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.get('/api/:name', (req, res) => {
  //   const name = req.params.name;
  //   const URL = encodeURI(`http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_FOOD_KEY}/I2790/json/1/5/DESC_KOR=${name}`);
  //   axios.get(URL).then((respone) => {
  //     return res.send(respone.data.I2790);
  //   });
  // });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
