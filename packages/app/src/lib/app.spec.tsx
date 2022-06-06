import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByTestId } = render(<App />);

    const text = getByTestId("text-heading");

    expect(text).toBeTruthy();
    expect(text.textContent).toContain("Welcome Copilot");
  });
});
