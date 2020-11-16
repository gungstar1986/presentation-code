import { USER } from 'store/user/constants';
import { isUserValid } from 'helpers/isUserValid';

describe('isUserValid function', function () {
  it('should return true if user valid', function () {
    const user = { ...USER, rememberMe: true };

    const valid = isUserValid(user);

    expect(valid).toBeTruthy();
  });

  it('should return false if user invalid', function () {
    const user = { ...USER, rememberMe: true, password: '54545454' };

    const valid = isUserValid(user);

    expect(valid).toBeFalsy();
  });
});
