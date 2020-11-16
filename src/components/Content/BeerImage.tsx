import React from 'react';

import { BeerImgInterface } from 'components/Content/interfaces';

export const BeerImage: React.FC<BeerImgInterface> = ({ image, name }) => {
  return (
    <div className="content-item center">
      <div className="media">
        <img className="media-content" src={image} alt={name} />
      </div>
    </div>
  );
};
