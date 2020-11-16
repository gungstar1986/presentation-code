import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { LoginMainComponent } from 'components/Login/index';

describe('LoginMainComponent component', function () {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      userStore: {
        checkUserIsAuth: jest.fn(),
        user: null,
      },
    });
  });

  it('should return main component', function () {
    const wrapper = shallow(
      <BrowserRouter>
        <LoginMainComponent />
      </BrowserRouter>
    );

    expect(wrapper).toBeTruthy();
  });
});
