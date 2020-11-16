import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { RootStoreContext } from 'store';

import animation from 'assets/loader.svg';

import 'components/Loader/style.scss';

export const Loader: React.FC = observer(({ children }) => {
  const stores: { [key: string]: any } = useContext(RootStoreContext);

  const isPending = Object.keys(stores).find((store) => stores[store].isPending);

  return (
    <div className="app">
      {isPending && (
        <div className="spinner">
          <img src={animation} alt="loading" />
        </div>
      )}
      {children}
    </div>
  );
});
