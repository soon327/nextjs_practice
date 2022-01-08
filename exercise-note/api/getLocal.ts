const getLocal = (name: string) => {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export default getLocal;
