import { Query } from 'store/beer/interfaces';

export const queryParser: (paginate: Query) => string = (...paginate) => {
  const query = [...paginate].reduce((url, curr) => {
    url += `page=${curr.page + 1}&`;
    if (curr.per_page) url += `per_page=${curr.per_page}`;
    return url;
  }, '?');

  return query;
};
