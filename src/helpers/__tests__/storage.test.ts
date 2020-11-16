import { storage } from 'helpers/storage';
import { USER } from 'store/user/constants';

describe('storage function', function () {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return correct item from localstorage', function () {
    const user = { role: 'admin' };
    localStorage.setItem('user', JSON.stringify(user));

    const localUser = storage.getUser();

    expect(localUser.role).toEqual('admin');
  });

  it('should write correct item to localstorage', function () {
    const user = { ...USER, rememberMe: true };

    storage.setUser(user);

    const { password } = storage.getUser();

    expect(password).toEqual(USER.password);
  });

  it('should correct clear localstorage', function () {
    storage.clear();

    const user = storage.getUser();

    expect(user).toBeFalsy();
  });
});
