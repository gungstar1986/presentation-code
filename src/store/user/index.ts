import { action, makeAutoObservable, observable } from 'mobx';

import { apiUser } from 'api/user';
import { storage } from 'helpers/storage';
import { toastify } from 'helpers/toastify';
import { USER } from 'store/user/constants';
import { User } from 'store/user/interfaces';
import { isUserValid } from 'helpers/isUserValid';
import { AUTH_ERROR, AUTH_SUCCESS, ERROR_MSG } from 'constants/messages';

export class UserStore {
  @observable
  pending = false;

  @observable
  user: User = null;

  @action
  checkUserIsAuth: (user: User) => void = async (user) => {
    try {
      this.pending = true;
      const data = apiUser.userAuth(user);
      this.updateUser({ ...USER, ...data });
    } catch (e) {
      console.error(ERROR_MSG);
    } finally {
      this.pending = false;
    }
  };

  @action
  updateUser: (user: User) => void = (user) => {
    const valid = isUserValid(user);

    if (valid && !this.user) {
      this.user = user;

      toastify.clear();

      return toastify.success(AUTH_SUCCESS);
    }

    return toastify.error(AUTH_ERROR);
  };

  @action
  setUserLogout: () => void = () => {
    this.user = null;
    storage.clear();
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
