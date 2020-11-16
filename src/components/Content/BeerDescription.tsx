import React from 'react';

import { HopList } from 'components/Content/HopList';
import { BeerDescript } from 'components/Content/interfaces';
import { ScrollContainer } from 'components/common/ScrollContainer';
import { FoodPairingList } from 'components/Content/FoodPairingList';

export const BeerDescription: React.FC<BeerDescript> = ({ descript }) => {
  const { volume, description, first_brewed, food_pairing, ingredients, boil_volume, brewers_tips } = descript;

  const { hops } = ingredients;

  return (
    <div className="content-item right">
      <ScrollContainer>
        <div className="content-link-container active">{brewers_tips}</div>
        <div className="content-link-container active">{description}</div>
        <div className="content-link-container active">{first_brewed}</div>
        <div className="content-link-container active">
          <div className="list">
            <FoodPairingList food_pairing={food_pairing} />
          </div>
        </div>
        <div className="content-link-container active">
          <div className="list">
            <HopList hops={hops} />
          </div>
        </div>
        <div className="content-link-container active">
          {volume.unit} {volume.value}
        </div>
        <div className="content-link-container active">
          {boil_volume.unit} {boil_volume.value}
        </div>
      </ScrollContainer>
    </div>
  );
};
