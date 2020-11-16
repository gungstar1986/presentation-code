import { User } from 'store/user/interfaces';

export const storage = {
  getUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  setUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  clear: () => {
    localStorage.clear();
  },
};
