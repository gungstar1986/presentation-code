import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerData } from '_mock/mock';
import { FoodPairingList } from 'components/Content/FoodPairingList';

describe('FoodPairingList component', () => {
  it('should render FoodPairingList component', () => {
    const { food_pairing } = mockBeerData;

    const wrapper = render(
      <BrowserRouter>
        <FoodPairingList food_pairing={food_pairing} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
