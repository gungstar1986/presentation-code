import React from 'react';
import { v4 as uuid } from 'uuid';

import { FoodPairingProps } from 'components/Content/interfaces';

export const FoodPairingList: React.FC<FoodPairingProps> = ({ food_pairing }) => {
  const foodList = food_pairing.map((food, index) => {
    return (
      <span key={uuid()}>
        {index}: {food}
      </span>
    );
  });

  return <>{foodList}</>;
};
