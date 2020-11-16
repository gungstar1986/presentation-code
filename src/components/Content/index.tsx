import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useBeerStore } from 'hooks/storesHooks/useBeerStore';

import { BeersList } from 'components/Content/BeersList';
import { CONTENT, BEER_FROM_COLLECTION } from 'constants/routes';
import { BeerInfoCommon } from 'components/Content/BeerInfoCommon';

export const ContentMainComponent: React.FC = observer(() => {
  const { fetchBeerList, beerList } = useBeerStore();

  useEffect(() => {
    if (!beerList) fetchBeerList();
  }, []);

  if (!beerList) return null;

  return (
    <div className="main-content-container">
      <Route path={CONTENT} component={BeersList} />
      <Route exact path={BEER_FROM_COLLECTION} component={BeerInfoCommon} />
    </div>
  );
});
