import { queryParser } from 'helpers/queryParser';

describe('queryParser function', function () {
  it('should return correct query string with next page', function () {
    const target = '?page=3&per_page=80';
    const pagination = { page: 2, per_page: 80 };
    const query = queryParser(pagination);

    expect(query).toEqual(target);
  });
});
