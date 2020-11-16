import React from 'react';
import { observer } from 'mobx-react-lite';

import { useBeerStore } from 'hooks/storesHooks/useBeerStore';
import { useRedirectToFirstItem } from 'hooks/customHooks/useRedirectToFirstItem';

import { LoadButtons } from 'components/common/LoadButtons';
import { ScrollContainer } from 'components/common/ScrollContainer';
import { MAX_CONTENT_ITEMS, MIN_CONTENT_ITEMS } from 'store/beer/constants';
import { NEXT_BUTTON, PREV_BUTTON } from 'components/common/LoadButtons/constants';
import { ContentListWithRefItem } from 'components/common/ContentListWithRefItem';

export const BeersList: React.FC = observer(() => {
  const { beerList, fetchBeerById, beerListItem, fetchBeerList, fetchPrevItemsList } = useBeerStore();

  useRedirectToFirstItem(beerList);

  const handleFetchBeerItem = async (id: number) => {
    if (beerListItem.id === id) return;
    await fetchBeerById(id);
  };

  const handleLoadNextContent = async () => {
    await fetchBeerList();
  };

  const handleLoadPrevContent = async () => {
    await fetchPrevItemsList();
  };

  const firstItem = MIN_CONTENT_ITEMS < beerList[0].id;
  const lastItem = MAX_CONTENT_ITEMS > beerList[beerList.length - 1].id;

  return (
    <div className="content-item">
      <ScrollContainer>
        <LoadButtons loadFn={handleLoadPrevContent} title={PREV_BUTTON} isRender={firstItem} />
        <ContentListWithRefItem loadFn={handleFetchBeerItem} content={beerList} contentItem={beerListItem} />
        <LoadButtons loadFn={handleLoadNextContent} title={NEXT_BUTTON} isRender={lastItem} />
      </ScrollContainer>
    </div>
  );
});
