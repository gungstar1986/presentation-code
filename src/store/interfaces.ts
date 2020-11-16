import { BeerStore } from 'store/beer';
import { UserStore } from 'store/user';

export interface ContextInterface {
  beerStore: BeerStore;
  userStore: UserStore;
}
