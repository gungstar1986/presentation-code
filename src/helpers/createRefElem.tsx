import React from 'react';

import { PropTypes } from 'components/Content/interfaces';
import { BeerListItem } from 'components/Content/BeerListItem';

export const createRefElem = (flag: boolean, props: PropTypes) => {
  const { ref, ...rest } = props;
  const { id } = rest;

  return flag ? <BeerListItem key={id} {...rest} ref={ref} /> : <BeerListItem key={id} {...rest} />;
};
