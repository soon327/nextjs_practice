import getLocal from './getLocal';

const setLocal = (name: string, data: any) => {
  const currentData = localStorage.getItem(name) ?? '[]';
  const parsedData = JSON.parse(currentData);

  localStorage.setItem(name, JSON.stringify([...parsedData, data]));
  console.log(getLocal('foodList'));
};

export default setLocal;
