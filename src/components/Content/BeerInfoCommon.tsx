import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { useBeerStore } from 'hooks/storesHooks/useBeerStore';

import { pageCounter } from 'helpers/pageCounter';
import { BeerImage } from 'components/Content/BeerImage';
import { BeerDescription } from 'components/Content/BeerDescription';

export const BeerInfoCommon: React.FC = observer(() => {
  const {
    beerListItem,
    fetchBeerById,
    paginate: { per_page },
    fetchContentByCustomPaginate,
  } = useBeerStore();

  const { beerId } = useParams();

  useEffect(() => {
    const isCustomPaginate = Number(beerId) > per_page && !beerListItem;

    if (isCustomPaginate) {
      const paginate = pageCounter({ beerId: Number(beerId), perPage: per_page });
      fetchContentByCustomPaginate(paginate);
    }

    if (!beerListItem) fetchBeerById(beerId);
  }, []);

  if (!beerListItem) return null;

  const { image_url, name } = beerListItem;

  return (
    <>
      <BeerImage name={name} image={image_url} />
      <BeerDescription descript={beerListItem} />
    </>
  );
});
