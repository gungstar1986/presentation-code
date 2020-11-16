import React from 'react';
import PerfectScrollbar, { ScrollBarProps } from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

export const ScrollContainer: React.FC<ScrollBarProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <PerfectScrollbar
      options={{
        suppressScrollX: true,
      }}
      {...restProps}
    >
      {children}
    </PerfectScrollbar>
  );
};
