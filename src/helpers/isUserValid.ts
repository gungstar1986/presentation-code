import { storage } from 'helpers/storage';
import { User } from 'store/user/interfaces';
import { EMAIL, PASSWORD } from 'store/user/constants';

export const isUserValid: (user: User) => boolean = (user) => {
  const { email, password, rememberMe } = user;
  const valid = email === EMAIL && password === PASSWORD;

  if (valid && rememberMe) {
    storage.setUser(user);
  }

  return valid;
};
