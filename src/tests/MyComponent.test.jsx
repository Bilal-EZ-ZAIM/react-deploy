import MyComponent from '../compentes/MyComponent';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('MyComponent', () => {
  it("return : Hello, World!", () => {
    render(<MyComponent />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
