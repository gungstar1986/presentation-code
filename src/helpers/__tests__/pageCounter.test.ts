import { pageCounter } from 'helpers/pageCounter';

describe('pageCounter function', function () {
  it('should return pagination object with right page', function () {
    const paginationData = {
      beerId: 17,
      perPage: 10,
    };

    const pagination = pageCounter(paginationData);

    expect(pagination.page).toEqual(2);
  });
});
