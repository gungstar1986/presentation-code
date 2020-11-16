import { Refs } from 'interfaces/refs';
import { BeerInterface } from 'store/beer/interfaces';

export interface ScrollTo extends Refs {
  index: number;
  content: BeerInterface[];
  setScroll: (data: boolean) => void;
}

export type Counter = {
  beerId: number;
  perPage: number;
};
