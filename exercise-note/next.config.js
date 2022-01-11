/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:name',
        destination: `http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_FOOD_KEY}/I2790/json/1/5/DESC_KOR=:name`,
      },
    ];
  },
};
