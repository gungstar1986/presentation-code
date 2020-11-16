import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerData } from '_mock/mock';
import { BeerDescription } from 'components/Content/BeerDescription';

describe('BeerDescription component', () => {
  it('should render BeerDescription component', () => {
    const wrapper = render(
      <BrowserRouter>
        <BeerDescription descript={mockBeerData} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
