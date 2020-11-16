import React from 'react';

import { FormikInputInterface } from '../interfaces';

export const SimpleInput: React.FC<FormikInputInterface> = ({
  name,
  type,
  value,
  title,
  errors,
  touched,
  className = 'input',
  inputLabel = 'input-label',
  placeholder,
  handleChange,
  classNameError = 'input-label error',
}) => {
  return (
    <>
      <label className={inputLabel} htmlFor={name}>
        {errors[name] && touched[name] ? <span className={classNameError}>{errors[name]}</span> : title}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className={className}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};
