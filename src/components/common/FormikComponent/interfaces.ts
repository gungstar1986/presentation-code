import React from 'react';
import { ObjectSchema } from 'yup';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';

export interface LayoutInterface {
  values?: FormikValues;
  errors?: FormikErrors<FormikValues>;
  touched?: FormikTouched<FormikValues>;
  handleChange?: (e: React.ChangeEvent<any>) => void;
  onSubmit?: (data: FormikValues) => void;
}

export interface FormikContextProps {
  accept: (data?: any) => void;
  reject?: (data?: any) => void;
  formikData: FormikValues;
  formikSchema: ObjectSchema;
}

export interface FormikInputInterface extends LayoutInterface {
  name: string;
  type: string;
  title: string;
  value: string;
  className: string;
  inputLabel: string;
  placeholder: string;
  classNameError: string;
}

export interface FormikCheckboxInterface {
  name: string;
  title: string;
  className: string;
  defaultChecked?: boolean;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  textClassName?: string;
  labelClassName?: string;
  errorTextClassName?: string;
  containerClassName?: string;
}

export interface UseCustomFormikInterface {
  values: FormikValues;
  schema: ObjectSchema;
  onSubmit: (data: FormikValues) => void;
}

export interface FormikContextInterface {
  values: FormikValues;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  reject: () => void;
}
