import axios from 'axios';

export default function getFoodInfo(name: string) {
  const URL = encodeURI(`http://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_FOOD_KEY}/I2790/json/1/5/DESC_KOR=${name}`);

  const result = axios.get(URL).then((res) => {
    return res.data.I2790;
  });

  return result;
}
