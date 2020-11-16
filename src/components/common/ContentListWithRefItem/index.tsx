import React, { useRef, useState } from 'react';

import cn from 'classnames';

import { scrollToTop } from 'helpers/scrollTo';
import { createRefElem } from 'helpers/createRefElem';
import { ContentListProps } from 'components/common/ContentListWithRefItem/interfaces';

export const ContentListWithRefItem: React.FC<ContentListProps> = ({ content, loadFn, contentItem }) => {
  const [scroll, setScroll] = useState<boolean>(true);

  const activeEl = useRef(null);

  const handleShowContentItem = (id: number) => {
    if (contentItem.id === id) return;
    loadFn(id);
  };

  const list = content.map((beerItem, index) => {
    const { name, id, image_url } = beerItem;

    const active = id === contentItem?.id;
    const lastElem = index === content.length - 1;
    const className = cn('content-link-container', { active });

    if (lastElem && scroll) scrollToTop({ index, content, ref: activeEl, setScroll });

    return createRefElem(active, { id, className, handleShowContentItem, image: image_url, name, ref: activeEl });
  });

  return <>{list}</>;
};
