import { apiBeer } from 'api/beer';
import { queryParser } from 'helpers/queryParser';

describe('Testing beer api', function () {
  it('should return array with items', function () {
    const paginate = { page: 0, per_page: 10 };
    const query = queryParser(paginate);

    return apiBeer.getBeerList(query).then((data) => {
      expect(data.length).toEqual(10);
    });
  });

  it('should return array with single item', function () {
    const id = 1;

    return apiBeer.getBeerById(id).then((data) => {
      expect(data.length).toEqual(1);
    });
  });

  it('should return array item id is equal its id', function () {
    const id = 1;

    return apiBeer.getBeerById(id).then((data) => {
      expect(data[0].id).toEqual(id);
    });
  });
});
