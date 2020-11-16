import React from 'react';

import { Refs } from 'interfaces/refs';
import { BeerInterface, Hops } from 'store/beer/interfaces';

export interface PropTypes extends Refs {
  id: number;
  name: string;
  className: string;
  handleShowContentItem: (id: number) => void;
  image: string;
}

export type ItemListType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PropTypes> & React.RefAttributes<HTMLDivElement>
>;

export interface BeerImgInterface {
  name: string;
  image: string;
}

export interface BeerDescript {
  descript: BeerInterface;
}

export interface FoodPairingProps {
  food_pairing: string[];
}

export interface HopListProps {
  hops: Hops[];
}
