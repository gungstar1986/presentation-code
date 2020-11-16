import React, { createContext } from 'react';

import { useCustomFormik } from 'components/common/FormikComponent/hooks/useCustomFormik';
import { FormikContextInterface, FormikContextProps } from './interfaces';

export const FormikContext = createContext<FormikContextInterface>(null);

export const FormikContextProvider: React.FC<FormikContextProps> = ({
  accept,
  reject,
  formikData,
  formikSchema,
  children,
}) => {
  const formik = useCustomFormik({ values: formikData, schema: formikSchema, onSubmit: accept });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  const store: FormikContextInterface = { values, errors, touched, handleChange, reject };

  return (
    <FormikContext.Provider value={store}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormikContext.Provider>
  );
};
