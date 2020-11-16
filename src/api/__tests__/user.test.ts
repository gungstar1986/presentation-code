import { apiUser } from 'api/user';

import { EMAIL, USER } from 'store/user/constants';
import { User } from 'store/user/interfaces';

describe('Testing user api', function () {
  it('should return user', function () {
    const mockUser: User = { ...USER, rememberMe: true };

    expect(apiUser.userAuth(mockUser).email).toEqual(EMAIL);
  });
});
