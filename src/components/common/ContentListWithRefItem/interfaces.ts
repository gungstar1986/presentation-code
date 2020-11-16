import { BeerInterface } from 'store/beer/interfaces';

export type ContentListProps = {
  contentItem: BeerInterface;
  content: BeerInterface[];
  loadFn: (id: number) => void;
};
