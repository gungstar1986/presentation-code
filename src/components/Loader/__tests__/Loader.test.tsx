import React from 'react';

import { render } from '@testing-library/react';

describe('Index component', () => {
  it('should return loading animation', () => {
    // @ts-ignore
    React.useContext = () => ({
      beerStore: {
        isPending: true,
      },
    });

    const component = render(<div>Loading... </div>);

    expect(component.baseElement).toBeTruthy();
  });
});
