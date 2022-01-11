import axios from 'axios';

export default function getFoodInfo(name: string) {
  const result = axios.get(`/api/${name}`).then((res) => {
    try {
      return res.data.I2790;
    } catch (err) {
      console.log('getFoodInfo error');
    }
  });

  return result;
}
