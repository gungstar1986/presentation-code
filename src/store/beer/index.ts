import { action, makeAutoObservable, observable } from 'mobx';

import { apiBeer } from 'api/beer';
import { toastify } from 'helpers/toastify';
import { ERROR_MSG } from 'constants/messages';
import { queryParser } from 'helpers/queryParser';
import { paginate, PER_PAGE } from 'store/beer/constants';
import { BeerInterface, Paginate, Query } from 'store/beer/interfaces';

export class BeerStore {
  @observable
  isPending = false;

  @observable
  beerList: BeerInterface[] = null;

  @observable
  beerListItem: BeerInterface = null;

  @observable
  paginate: Paginate = paginate;

  @action
  fetchContentByCustomPaginate: (data: Query) => void = async (data) => {
    const { page } = data;

    const paginateData = { page: page - 1, per_page: PER_PAGE };
    const query = queryParser(paginateData);

    try {
      this.isPending = true;
      const response = await apiBeer.getBeerList(query);
      this.paginate.curr = page;
      this.paginate.prev = page;
      this.setCustomPaginateData(response);
    } catch (e) {
      console.error(e);
    } finally {
      this.isPending = false;
    }
  };

  @action
  fetchBeerList: () => Promise<void> = async () => {
    const {
      paginate: { curr, per_page },
    } = this;

    const paginate = { page: curr, per_page };
    const query = queryParser(paginate);

    try {
      this.isPending = true;
      const response = await apiBeer.getBeerList(query);
      this.paginate.curr = this.paginate.curr + 1;
      this.setBeerData(response);
    } catch (e) {
      console.error(e);
    } finally {
      this.isPending = false;
    }
  };

  @action
  fetchPrevItemsList: () => Promise<void> = async () => {
    const {
      paginate: { prev, per_page },
    } = this;

    const paginate = { page: prev - 2, per_page };
    const query = queryParser(paginate);

    try {
      this.isPending = true;
      const response = await apiBeer.getBeerList(query);
      this.paginate.prev = this.paginate.prev - 1;
      this.setPrevBeerData(response);
    } catch (e) {
      console.error(e);
    } finally {
      this.isPending = false;
    }
  };

  @action
  fetchBeerById: (id: number) => Promise<void> = async (id) => {
    try {
      this.isPending = true;
      const [response] = await apiBeer.getBeerById(id);
      this.setSingleBeerData(response);
    } catch (e) {
      toastify.error(ERROR_MSG);
    } finally {
      this.isPending = false;
    }
  };

  @action
  setBeerData: (data: BeerInterface[]) => void = (data) => {
    if (!this.beerList) {
      this.beerList = data;
      return;
    }
    this.beerList = [...this.beerList, ...data];
  };

  @action
  setPrevBeerData: (data: BeerInterface[]) => void = (data) => {
    this.beerList = [...data, ...this.beerList];
  };

  @action
  setCustomPaginateData: (data: BeerInterface[]) => void = (data) => {
    this.beerList = data;
  };

  @action
  setSingleBeerData: (data: BeerInterface) => void = (data) => {
    this.beerListItem = data;
  };

  @action
  setInitialValues: () => void = () => {
    this.paginate.prev = 0;
    this.paginate.curr = 0;
    this.beerListItem = null;
    this.beerList = null;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const beerStore = new BeerStore();
