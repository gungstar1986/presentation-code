import React from 'react';
import { observer } from 'mobx-react-lite';

import { LoginData } from 'components/Login/interfaces';
import { SimpleInput } from 'components/common/FormikComponent/Inputs/SimpleInput';
import { CheckboxInput } from 'components/common/FormikComponent/Inputs/CheckboxInput';
import { useFormikContext } from 'components/common/FormikComponent/hooks/useFormikContext';

// to using standard styles for input components uncomment the line below
import 'components/common/FormikComponent/styles/styles.scss';

export const Login: React.FC = observer(() => {
  const { handleChange, errors, touched, values } = useFormikContext();

  const { email, password, rememberMe } = values as LoginData;

  return (
    <div className="login">
      <div className="login-body-item">
        <div className="form-control">
          <SimpleInput
            name="email"
            type="text"
            title="Email"
            value={email}
            errors={errors}
            touched={touched}
            className="input"
            placeholder="Email"
            inputLabel="input-label"
            classNameError="input-label error"
            handleChange={handleChange}
          />
        </div>

        <div className="form-control">
          <SimpleInput
            name="password"
            type="password"
            title="password"
            value={password}
            errors={errors}
            touched={touched}
            className="input"
            placeholder="Password"
            inputLabel="input-label"
            classNameError="input-label error"
            handleChange={handleChange}
          />
        </div>

        <CheckboxInput
          name="rememberMe"
          title="Remember me?"
          className="checkbox-input"
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          defaultChecked={rememberMe}
        />

        <button className="btn-primary mod" type="submit">
          Вход
        </button>
      </div>
    </div>
  );
});
