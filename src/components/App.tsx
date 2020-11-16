import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { RootStoreProvider } from 'store';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import { Navbar } from 'components/NavBar';
import { PrivatRoute } from 'routes/PrivatRoute';
import { LoginMainComponent } from 'components/Login';
import { ErrorPage } from 'components/ErrorPage';
import { CabinetMainComponent } from 'components/Cabinet';
import { ContentMainComponent } from 'components/Content';
import { CABINET, CONTENT, LOGIN, ROOT } from 'constants/routes';

import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
  return (
    <RootStoreProvider>
      <ToastContainer />
      <Loader>
        <Header />
        <Navbar />
        <Switch>
          <PrivatRoute path={LOGIN} component={LoginMainComponent} />
          <PrivatRoute path={CONTENT} component={ContentMainComponent} />
          <PrivatRoute path={CABINET} component={CabinetMainComponent} />
          <Redirect exact from={ROOT} to={LOGIN} />
          <Route component={ErrorPage} />
        </Switch>
      </Loader>
    </RootStoreProvider>
  );
};
