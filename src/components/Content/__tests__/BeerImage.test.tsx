import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerData } from '_mock/mock';
import { BeerImage } from 'components/Content/BeerImage';

describe('BeerImage component', () => {
  it('should render BeerImage component', () => {
    const { name, image_url } = mockBeerData;

    const wrapper = render(
      <BrowserRouter>
        <BeerImage name={name} image={image_url} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
