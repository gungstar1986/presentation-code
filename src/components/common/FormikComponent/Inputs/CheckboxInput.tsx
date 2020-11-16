import React from 'react';

import { FormikCheckboxInterface } from '../interfaces';

export const CheckboxInput: React.FC<FormikCheckboxInterface> = ({
  name,
  title,
  errors,
  touched,
  handleChange,
  defaultChecked,
  className = 'checkbox-input',
  textClassName = 'checkbox-text',
  containerClassName = 'checkbox',
  labelClassName = 'checkbox-label',
  errorTextClassName = 'error-data',
}) => {
  return (
    <div className={containerClassName}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={className}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <label className={labelClassName} htmlFor={name}>
        <span className={textClassName}>
          {errors[name] && touched[name] ? <span className={errorTextClassName}>{errors[name]}</span> : title}
        </span>
      </label>
    </div>
  );
};
