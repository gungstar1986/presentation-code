import { UserStore } from 'store/user';
import { USER } from 'store/user/constants';

const user = { ...USER, rememberMe: true };

describe('user store', function () {
  const userStore = new UserStore();

  afterAll(() => {
    userStore.user = null;
  });

  it('should update user if user it`s a correct', function () {
    userStore.checkUserIsAuth(user);

    expect(userStore.user).toBeTruthy();
  });

  it('should update user', function () {
    userStore.updateUser(user);

    expect(userStore.user).toBeTruthy();
  });

  it('should delete user', function () {
    userStore.updateUser(user);

    const isUserIsExist = !!userStore.user;

    userStore.setUserLogout();

    const currUser = !!userStore.user;

    expect(isUserIsExist).not.toBe(currUser);
  });
});
