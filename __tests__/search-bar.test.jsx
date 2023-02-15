import SearchBar from '../components/search-bar';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom'

// mock router: https://github.com/scottrippey/next-router-mock
jest.mock('next/router', () => require('next-router-mock'));

describe('Search Bar', () => {
    it('find incremnt/decrement numbers button in the input field', () => {
      render(<SearchBar />);

      const button = screen.queryByRole('spinbutton');
      expect(button).not.toBeNull();
    });

  it('see if the input changes when value entered', () => {
    render(<SearchBar />);

    // screen.debug();

    fireEvent.change(screen.queryByPlaceholderText('number'), {
      target: { value: '9' },
    });

   const text = screen.queryByText('9');
   expect(text).toBeInTheDocument()

    // screen.debug();
  });
});
