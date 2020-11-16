import { instance } from 'api/index';
import { BEER } from 'constants/endpoints';

export const apiBeer = {
  getBeerList: async (query: string) => {
    try {
      const { data } = await instance.get(`${BEER}${query}`);
      return data;
    } catch (e) {
      throw e;
    }
  },

  getBeerById: async (id: number) => {
    try {
      const { data } = await instance.get(`${BEER}/${id}`);
      return data;
    } catch (e) {
      throw e;
    }
  },
};
