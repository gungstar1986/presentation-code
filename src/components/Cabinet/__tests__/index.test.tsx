import React from 'react';
import { render } from '@testing-library/react';

import { CabinetMainComponent } from '../index';
import { BrowserRouter } from 'react-router-dom';
import { USER } from '../../../store/user/constants';

describe('Cabinet component render', function () {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      userStore: {
        user: USER,
        setUserLogout: jest.fn(),
      },
      beerStore: {
        setInitialValues: jest.fn(),
      },
    });
  });

  afterEach(() => {
    // @ts-ignore
    React.useContext = () => ({
      userStore: {
        user: null,
        setUserLogout: jest.fn(),
      },
      beerStore: {
        setInitialValues: jest.fn(),
      },
    });
  });

  it('should return Cabinet component when user logged id', function () {
    const wrapper = render(
      <BrowserRouter>
        <CabinetMainComponent />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it('should return empty component when user is NOT logged in', function () {
    const wrapper = render(
      <BrowserRouter>
        <CabinetMainComponent />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
