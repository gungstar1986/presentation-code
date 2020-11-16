import { Counter } from 'helpers/interfaces';
import { Query } from 'store/beer/interfaces';

export const pageCounter: ({ beerId, perPage }: Counter) => Query = ({ beerId, perPage }) => {
  const page = Math.ceil(beerId / perPage);
  const per_page = beerId;

  return { page, per_page };
};
