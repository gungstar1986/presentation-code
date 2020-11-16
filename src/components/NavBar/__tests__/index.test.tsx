import React from 'react';

import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Navbar } from 'components/NavBar/index';
import { USER } from 'store/user/constants';

describe('Navbar component', () => {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      userStore: {
        user: USER,
      },
    });
  });

  it('should render Navbar component', () => {
    const component = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(component.baseElement).toMatchSnapshot();
  });
});
