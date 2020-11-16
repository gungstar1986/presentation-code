import React from 'react';

import { useAuthCheck } from 'hooks/customHooks/useAuthCheck';

export const ErrorPage = () => {
  useAuthCheck();

  return (
    <div className="main-content-container">
      <div className="form-container">
        <div className="login">
          <div className="not-support-wrapper">
            <div className="wrapper">
              <div className="warning-icon"></div>
              <h1 className="title">Wrong way!</h1>
              <p className="text">We're sorry, this page does not exist.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
