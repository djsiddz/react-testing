import "@testing-library/jest-dom/vitest";
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
  it('should render Hello with name when name is provided', () => {
    render(<Greet name="Sid"/>);
    const heading = screen.getByRole('heading');
    // const heading = screen.getByText(/hello sid/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello sid/i);
    // console.log(heading);
    // screen.debug();
  });

  it('should render Login button when name is not provided', () => {
    render(<Greet />);
    const button = screen.getByRole('button');
    // const heading = screen.getByText(/hello sid/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
    // console.log(heading);
    // screen.debug();
  })
})
