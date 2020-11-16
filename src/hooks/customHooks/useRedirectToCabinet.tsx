import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserStore } from 'hooks/storesHooks/useUserStore';

import { CABINET } from 'constants/routes';

export const useRedirectToCabinet = () => {
  const { user } = useUserStore();
  const { push } = useHistory();

  useEffect(() => {
    if (!user) return;

    push(CABINET);
  }, [user]);
};
