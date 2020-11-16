import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoadButtons } from 'components/common/LoadButtons/index';

describe('Button component', function () {
  it('should return Button component', function () {
    const loadFn = jest.fn();
    const title = 'title';
    const isRender = true;

    const wrapper = render(
      <BrowserRouter>
        <LoadButtons loadFn={loadFn} title={title} isRender={isRender} />
      </BrowserRouter>
    );

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
