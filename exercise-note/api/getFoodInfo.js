export default function getFoodInfo(name) {
  const URL = encodeURI(`http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_FOOD_KEY}/I2790/json/1/5/DESC_KOR=${name}`);

  const res = fetch(URL)
    .then((res) => res.json())
    .then((data) => data.I2790);

  return res;
}
