import React, { useContext } from 'react';

import { RootStoreContext } from 'store';

export const useUserStore = () => {
  const { userStore } = useContext(RootStoreContext);

  return userStore;
};
