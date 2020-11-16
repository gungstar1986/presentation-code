import { BeerStore } from 'store/beer';

describe('Beer store', () => {
  const beerStore = new BeerStore();

  it('should return not empty beerList', () => {
    beerStore.fetchBeerList().then((data) => {
      expect(data).toBeTruthy();
    });
  });

  it('should update', function () {
    beerStore.paginate.prev = 5;

    beerStore.fetchPrevItemsList().then((data) => {
      expect(data).toBeTruthy();
    });
  });

  it('should return value by id', function () {
    const id = 5;

    beerStore.fetchBeerById(id).then((data) => {
      expect(data).toBeTruthy();
    });
  });

  it('should set initial value to the beerList', () => {
    beerStore.setInitialValues();

    expect(beerStore.beerList).toBeNull();
  });
});
