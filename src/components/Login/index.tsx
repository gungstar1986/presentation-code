import React from 'react';
import { observer } from 'mobx-react-lite';

import { useUserStore } from 'hooks/storesHooks/useUserStore';
import { useRedirectToCabinet } from 'hooks/customHooks/useRedirectToCabinet';

import { Login } from 'layouts/Login';
import { User } from 'store/user/interfaces';
import { FormikContextProvider } from 'components/common/FormikComponent';
import { loginFormicSchema, loginFormikData } from 'components/Login/constants';

export const LoginMainComponent: React.FC = observer(() => {
  const { checkUserIsAuth } = useUserStore();

  useRedirectToCabinet();

  const handleSubmit = (data: User) => {
    checkUserIsAuth(data);
  };

  return (
    <div className="main-content-container">
      <div className="form-container">
        <FormikContextProvider accept={handleSubmit} formikData={loginFormikData} formikSchema={loginFormicSchema}>
          <Login />
        </FormikContextProvider>
      </div>
    </div>
  );
});
