import React from 'react';
import { v4 as uuid } from 'uuid';

import { HopListProps } from 'components/Content/interfaces';

export const HopList: React.FC<HopListProps> = ({ hops }) => {
  const hopList = hops.map((hop) => {
    return (
      <div key={uuid()}>
        <div>{hop.name}</div>
        <div>
          {hop.amount.unit}: {hop.amount.value}
        </div>
        <div>{hop.attribute}</div>
      </div>
    );
  });

  return <>{hopList}</>;
};
