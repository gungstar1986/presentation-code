import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useBeerStore } from 'hooks/storesHooks/useBeerStore';

import { CONTENT } from 'constants/routes';
import { getParamsId } from 'helpers/getParamsId';
import { BeerInterface } from 'store/beer/interfaces';

export const useRedirectToFirstItem = (data: BeerInterface[]) => {
  const { beerListItem } = useBeerStore();
  const { pathname } = useLocation();
  const { push } = useHistory();

  const paramsId = getParamsId(pathname);

  useEffect(() => {
    if (!paramsId) return;

    const id = beerListItem?.id ? beerListItem.id : paramsId;

    push(`${CONTENT}/${id}`);
  }, [data, beerListItem]);
};
