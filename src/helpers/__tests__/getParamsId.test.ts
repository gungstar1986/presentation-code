import { getParamsId } from 'helpers/getParamsId';

describe('get params id from current url', function () {
  it('should return correct id', function () {
    const id = '19';
    const pathname = 'collection/19';
    const paramsId = getParamsId(pathname);

    expect(id).toEqual(paramsId);
  });
});
