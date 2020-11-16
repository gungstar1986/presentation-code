import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerData } from '_mock/mock';
import { BeerInfoCommon } from 'components/Content/BeerInfoCommon';

describe('BeerInfoCommon component', () => {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      beerStore: {
        fetchBeerById: jest.fn(),
        beerListItem: mockBeerData,
        paginate: { per_page: 10 },
        fetchContentByCustomPaginate: jest.fn(),
      },
    });
  });

  it('should render BeerInfoCommon component', () => {
    const {
      ingredients: { hops },
    } = mockBeerData;

    const wrapper = render(
      <BrowserRouter>
        <BeerInfoCommon />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
