import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { mockBeerList } from '_mock/mock';

import { ContentMainComponent } from 'components/Content/index';

describe('Content component', () => {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      beerStore: {
        setInitialValues: jest.fn(),
        fetchBeerList: jest.fn(),
        beerList: mockBeerList,
      },
    });
  });

  it('should render Content component', () => {
    const wrapper = render(
      <BrowserRouter>
        <ContentMainComponent />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
