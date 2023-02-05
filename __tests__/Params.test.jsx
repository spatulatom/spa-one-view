import  Params  from '../pages/search/[...params]'
import { render, screen } from '@testing-library/react';

describe('Async fetching and rendering', () => {
    test('renders posts if request succeeds', async () => {
      render(<Params />)
  
      const listItemElements = await screen.findAllByRole('row')
      expect(listItemElements).not.toHaveLength(0);
    });
  });