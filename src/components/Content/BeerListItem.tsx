import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { CONTENT } from 'constants/routes';
import { ItemListType } from './interfaces';

export const BeerListItem: ItemListType = forwardRef(({ id, className, handleShowContentItem, image, name }, ref) => {
  return (
    <div className={className} onClick={handleShowContentItem.bind(null, id)} ref={ref}>
      <Link className="content-link" to={`${CONTENT}/${id}`}>
        {name}
      </Link>
      <div className="link-img-container">
        <img className="content-link-img" src={image} alt={name} />
      </div>
    </div>
  );
});
