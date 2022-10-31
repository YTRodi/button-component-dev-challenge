import { render } from '@testing-library/react';

import ButtonLayout from './button-layout';

describe('ButtonLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonLayout />);
    expect(baseElement).toBeTruthy();
  });
});
