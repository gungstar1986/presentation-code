import { User } from 'store/user/interfaces';

export const apiUser = {
  userAuth: (user: User) => {
    try {
      return { ...user };
    } catch (e) {
      throw e;
    }
  },
};
