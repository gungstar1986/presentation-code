import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerData } from '_mock/mock';

import { HopList } from 'components/Content/HopList';

describe('HopList component', () => {
  it('should render HopList component', () => {
    const {
      ingredients: { hops },
    } = mockBeerData;

    const wrapper = render(
      <BrowserRouter>
        <HopList hops={hops} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
