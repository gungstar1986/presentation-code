import React, { Component, useEffect } from 'react';
import { Route, useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

import { useUserStore } from 'hooks/storesHooks/useUserStore';

import { LOGIN } from 'constants/routes';
import { storage } from 'helpers/storage';
import { toastify } from 'helpers/toastify';
import { LOGIN_MSG } from 'constants/messages';
import { ProtectedRouteInterface } from 'routes/PrivatRoute/interfaces';

export const PrivatRoute: React.FC<ProtectedRouteInterface> = observer(({ component: Component, path, ...rest }) => {
  const { user, checkUserIsAuth } = useUserStore();

  const { push } = useHistory();

  useEffect(() => {
    if (user) return;

    const localUser = storage.getUser();

    if (localUser) {
      checkUserIsAuth(localUser);
      return;
    }

    if (!user && !localUser) {
      push(LOGIN);
      toastify.info(LOGIN_MSG);
    }
  }, [user]);

  return <Route {...rest} render={(props) => <Component {...rest} {...props} />} />;
});
