import React, { useEffect } from 'react';

import { useUserStore } from 'hooks/storesHooks/useUserStore';

import { storage } from 'helpers/storage';

export const useAuthCheck = () => {
  const { user } = useUserStore();
  const { checkUserIsAuth } = useUserStore();

  useEffect(() => {
    if (user) return;
    const localUser = storage.getUser();

    if (localUser) {
      checkUserIsAuth(localUser);
      return;
    }
  }, [user]);
};
