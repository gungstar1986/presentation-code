import { useFormik } from 'formik';

import { UseCustomFormikInterface } from '../interfaces';

export const useCustomFormik = ({ values, schema, onSubmit }: UseCustomFormikInterface) => {
  return useFormik({
    initialValues: values,
    validationSchema: schema,
    onSubmit: (data) => {
      onSubmit(data);
    },
  });
};
