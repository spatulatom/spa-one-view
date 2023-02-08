import Params from '../pages/search/[...params]';
import { render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import axios, {AxiosResponse} from 'axios';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";


// jest.mock('next/router', () => ({
//   useRouter() {
//     return {
//       route: '',
//       pathname: '',
//       query: '/search/id=3',
//       asPath: '',
//     };
//   },
// }));

// mock axios
// jest.mock('axios');

// const MockParams = () => {
//   return (
//       <BrowserRouter>
//           <Params/>
//       </BrowserRouter>
//   )
// }

mockRouter.useParser(createDynamicRouteParser([
  // These paths should match those found in the `/pages` folder:
  
  "/search/[...catchAll]"
]));

describe('Async fetching and rendering', () => {

  
  it('renders posts if request succeeds', async () => {
    //  global.fetch = jest.fn(()=> Promise.resolve({
 

    await mockRouter.push('/search/id=2');
    expect(mockRouter).toMatchObject({
      pathname: '/search/[...catchAll]',
    
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


  //   axios.get.mockImplementationOnce(() =>
  //   Promise.resolve( { data: hits })
  // );

    render(<Params/>);

    // const listItemElements = await screen.findByText(hits.data.name);
    const listItemElements = await screen.findByTestId('data2')
    expect(listItemElements).not.toBeNull()
  });
});
