import { useContext } from 'react';

import { FormikContext } from '../index';

export const useFormikContext = () => useContext(FormikContext);
