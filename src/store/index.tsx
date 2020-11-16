import React, { createContext } from 'react';
import { configure } from 'mobx';

import { ContextInterface } from 'store/interfaces';

import { beerStore } from 'store/beer';
import { userStore } from 'store/user';

export const RootStoreContext = createContext<ContextInterface>(null);

export const RootStoreProvider: React.FC = ({ children }) => {
  const store: ContextInterface = { beerStore, userStore };

  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};

configure({ useProxies: 'never', enforceActions: 'never' });
