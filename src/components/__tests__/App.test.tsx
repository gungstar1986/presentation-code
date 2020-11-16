import React from 'react';

import { render } from '@testing-library/react';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  it('should render all field', () => {
    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(component.baseElement).toMatchSnapshot();
  });
});
