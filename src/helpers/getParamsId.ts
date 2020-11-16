import qs from 'qs';

export const getParamsId: (url: string) => string = (url) => {
  const parsedArr = Object.entries(qs.parse(url, { delimiter: '/' }));

  if (parsedArr.length > 2) return;

  const paramsId = parsedArr.length > 1 ? parsedArr[0][0] : '1';

  return paramsId;
};
