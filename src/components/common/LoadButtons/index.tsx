import React from 'react';

import { ButtonProps } from 'components/common/LoadButtons/interfaces';

export const LoadButtons: React.FC<ButtonProps> = ({ title, loadFn, isRender }) => {
  if (!isRender) return null;

  return (
    <div className="button-container">
      <button className="btn-default" onClick={loadFn}>
        {title}
      </button>
    </div>
  );
};
