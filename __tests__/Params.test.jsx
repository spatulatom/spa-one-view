import Params from '../pages/search/[...params]';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import * as React from 'react';
import mockRouter from 'next-router-mock';

// Resources:
// https://testing-library.com/docs/react-testing-library/intro
// https://www.robinwieruch.de/react-testing-library/
// https://nextjs.org/docs/routing/dynamic-routes
// https://nextjs.org/docs/messages/next-router-not-mounted
// https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=1

// mock router: https://github.com/scottrippey/next-router-mock
jest.mock('next/router', () => require('next-router-mock'));
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';
mockRouter.useParser(createDynamicRouteParser(['/search/[...params]']));

// mock axios
jest.mock('axios');

// one suite: 'Async fetching and rendering', two tests inside
describe('Async fetching and rendering', () => {
  // this request is triggered in the app when we search for an item in the search bar
  it('renders posts if request succeeds with one individual product, which is an object ', async () => {
    // Arrange
    await mockRouter.push('/search/id=1');
    expect(mockRouter).toMatchObject({
      pathname: '/search/[...params]',
      query: { params: ['id=1'] },
    });

    const hits = {
      data: {
        color: 'p1',
        name: 'First post',
        year: '2023',
        pantone_value: 'value',
        id: '#88833',
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: hits }));
    render(<Params />);

    // Act
    // ...nothing

    // Assert
    const listItemElements = await screen.findByTestId('data2');
    expect(listItemElements).not.toBeNull();
  });

  // this request in triggerd on the first load and when pagination arrows are pressed
  it('renders posts if request succeeds with many products, products are objects stored in the array', async () => {
    // Arrange
    await mockRouter.push('/search/per_page=5&page=1');
    expect(mockRouter).toMatchObject({
      pathname: '/search/[...params]',
      query: { params: ['per_page=5&page=1'] },
    });

    const hits = {
      page: '1',
      per_page: 5,
      total: 12,
      total_pages: 3,
      data: [
        {
          id: 1,
          name: 'cerulean',
          year: 2000,
          color: '#98B2D1',
          pantone_value: '15-4020',
        },
        {
          id: 2,
          name: 'fuchsia rose',
          year: 2001,
          color: '#C74375',
          pantone_value: '17-2031',
        },
        {
          id: 3,
          name: 'true red',
          year: 2002,
          color: '#BF1932',
          pantone_value: '19-1664',
        },
        {
          id: 4,
          name: 'aqua sky',
          year: 2003,
          color: '#7BC4C4',
          pantone_value: '14-4811',
        },
        {
          id: 5,
          name: 'tigerlily',
          year: 2004,
          color: '#E2583E',
          pantone_value: '17-1456',
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: hits }));
    render(<Params />);

    // Act
    // ...nothing

    // Assert
    const listItemElements = await screen.findByTestId('data1');
    expect(listItemElements).not.toBeNull();
  });
});
