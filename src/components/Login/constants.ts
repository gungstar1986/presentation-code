import * as Yup from 'yup';

import { LoginData } from 'components/Login/interfaces';

export const loginFormikData: LoginData = {
  email: '',
  password: '',
  rememberMe: false,
};

const passValidate = {
  numbers: /(?=.*[0-9])/,
  lowercase: /(?=.*[a-z])/,
  uppercase: /(?=.*[A-Z])/,
  symbols: /(?=.*[*@#$%!&])/,
  length: /[0-9a-zA-Z*@#$%!&]{8,}/,
};

export const loginFormicSchema = Yup.object({
  email: Yup.string().email('Incorrect field').required('Required field'),
  password: Yup.string()
    .matches(passValidate.lowercase, 'At least 1 symbol in lower case')
    .matches(passValidate.uppercase, 'At least 1 symbol in upper case')
    .matches(passValidate.numbers, 'At least 1 number')
    .matches(passValidate.symbols, 'At least 1 service symbol')
    .matches(passValidate.length, 'Length must be more then 8 symbols')
    .required('Required field'),
});
