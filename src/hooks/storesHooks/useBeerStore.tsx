import { useContext } from 'react';

import { RootStoreContext } from 'store';

export const useBeerStore = () => {
  const { beerStore } = useContext(RootStoreContext);

  return beerStore;
};
