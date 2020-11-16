import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorPage } from 'components/ErrorPage/index';
import { USER } from 'store/user/constants';

describe('Error page render', function () {
  beforeAll(() => {
    // @ts-ignore
    React.useContext = () => ({
      userStore: {
        user: USER,
      },
    });
  });

  it('should return Error page', function () {
    const wrapper = render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
