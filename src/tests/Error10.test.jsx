import React from 'react';
import { render, screen } from '@testing-library/react';
import Error10 from '../compentes/Error10'; // تأكد من أن المسار صحيح
import { describe, it, expect } from 'vitest';

describe('Error10 Component', () => {
  it("should display the main error message", () => {
    render(<Error10 />);
    expect(screen.getByText(/looks like you've found the doorway to the great nothing/i)).toBeInTheDocument();
  });

  it("should display the content not found message", () => {
    render(<Error10 />);
    expect(screen.getByText(/the content you’re looking for doesn’t exist/i)).toBeInTheDocument();
  });

  it("should display the apology message", () => {
    render(<Error10 />);
    expect(screen.getByText(/sorry about that/i)).toBeInTheDocument();
  });

  it("should have a button to go back to the homepage", () => {
    render(<Error10 />);
    const button = screen.getByRole('button', { name: /go back to homepage/i });
    expect(button).toBeInTheDocument();
  });
});
