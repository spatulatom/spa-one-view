import SearchBar from '../components/search-bar'
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

// mock router: https://github.com/scottrippey/next-router-mock
jest.mock('next/router', () => require('next-router-mock'));

describe('Search Bar', () => {
    it('find incremnt/decrement numbers button in the input field', () => {
      render(<SearchBar />);
  
   const button =   screen.queryByRole('spinbutton');
   expect(button).not.toBeNull()
    });

  });