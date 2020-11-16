import React from 'react';

import { render } from '@testing-library/react';

import { Header } from 'components/Header';

describe('Index component', () => {
  it('should render Index component', () => {
    const component = render(<Header />);
    expect(component.baseElement).toMatchSnapshot();
  });
});
