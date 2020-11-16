import React from 'react';
import { observer } from 'mobx-react-lite';

import { useUserStore } from 'hooks/storesHooks/useUserStore';
import { useBeerStore } from 'hooks/storesHooks/useBeerStore';

export const CabinetMainComponent: React.FC = observer(() => {
  const { user, setUserLogout } = useUserStore();
  const { setInitialValues } = useBeerStore();

  if (!user) return null;

  const handleLogout = () => {
    setUserLogout();
    setInitialValues();
  };

  const { name, email, role } = user;

  return (
    <div className="main-content-container">
      <div className="form-container">
        <div className="login">
          <div className="login-body-item">
            <div className="logout-item-title">User Information</div>
            <div className="logout-item-container">
              <div className="logout-item">Name:</div>
              <div className="logout-item description">{name}</div>
            </div>
            <div className="logout-item-container">
              <div className="logout-item">Email:</div>
              <div className="logout-item description">{email}</div>
            </div>
            <div className="logout-item-container">
              <div className="logout-item">Role:</div>
              <div className="logout-item description">{role}</div>
            </div>
            <div className="button-container">
              <button className="btn-primary mod" type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
