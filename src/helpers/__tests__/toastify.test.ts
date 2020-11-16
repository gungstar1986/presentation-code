import { toastify } from 'helpers/toastify';

const toasty = () => {
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return toastify.success('0');
    case 1:
      return toastify.error('1');
    case 2:
      return toastify.info('3');
    default:
      return toastify.warning('4');
  }
};

describe('toastify created function', function () {
  it('should return toastify component', function () {
    const randomToastify = toasty();

    expect(randomToastify).toBeTruthy();
  });
});
