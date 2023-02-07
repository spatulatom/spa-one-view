import Params from '../pages/search/[...params]';
import { render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import axios from 'axios';

// mock useRouter
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));


jest.mock('axios');

describe('Async fetching and rendering', () => {

  
  it('renders posts if request succeeds', async () => {
    //  global.fetch = jest.fn(()=> Promise.resolve({
    //       json: () => Promise.resolve({
    //       data:  {
    //           color: 'p1',
    //           name: 'First post',
    //           year: '2023',
    //           pantone_value: 'value',
    //           id: '#88833',
    //         }})

    //     }))

    // global.fetch = jest.fn();
    // global.fetch.mockResolvedValueOnce(
    //   JSON.stringify({
    //     data: {
    //       color: 'p1',
    //       name: 'First post',
    //       year: '2023',
    //       pantone_value: 'value',
    //       id: '#88833',
    //     },
    //   })
    // );

    const hits = {
      data: {
        color: 'p1',
        name: 'First post',
        year: '2023',
        pantone_value: 'value',
        id: '#88833',
      },
    };


    axios.get.mockImplementationOnce(() =>
    Promise.resolve( { data: hits })
  );

    render(<Params />);

    const listItemElements = await screen.findAllByTestId('data');
    expect(listItemElements).toHaveLength(1);
  });
});
