import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useUserStore } from 'hooks/storesHooks/useUserStore';

import { CABINET, CONTENT, LOGIN } from 'constants/routes';

export const Navbar: React.FC = () => {
  const [location, setLocation] = useState<string>(null);

  const { user } = useUserStore();
  const { pathname } = useLocation();

  const handleLocation = (event: React.MouseEvent, destination: string) => {
    setLocation(pathname);
    if (location.includes(destination)) event.preventDefault();
  };

  useEffect(() => {
    setLocation(pathname);
  }, [pathname]);

  return (
    <div className="main-navbar-container">
      {!user && (
        <div className="navbar-item-container">
          <NavLink onClick={(e) => handleLocation(e, LOGIN)} activeClassName="active-link" to={LOGIN}>
            <span className="navbar-link-text">LOGIN</span>
          </NavLink>
        </div>
      )}

      {user && (
        <>
          <div className="navbar-item-container">
            <NavLink onClick={(e) => handleLocation(e, CABINET)} activeClassName="active-link" to={CABINET}>
              <span className="navbar-link-text">CABINET</span>
            </NavLink>
          </div>
          <div className="navbar-item-container">
            <NavLink onClick={(e) => handleLocation(e, CONTENT)} activeClassName="active-link" to={CONTENT}>
              <span className="navbar-link-text">CONTENT</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};
