import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Login } from 'layouts/Login';
import { FormikContextProvider } from 'components/common/FormikComponent';
import { loginFormicSchema, loginFormikData } from 'components/Login/constants';

describe('Login component', function () {
  it('should return Login component', function () {
    const handleSubmit = jest.fn();

    const wrapper = render(
      <BrowserRouter>
        <FormikContextProvider accept={handleSubmit} formikData={loginFormikData} formikSchema={loginFormicSchema}>
          <Login />
        </FormikContextProvider>
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
