import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import ContextObject from '../../store/modal-data-context';

export default function Params() {
  type Item = {
    color: string;
    name: string;
    year: string;
    pantone_value: string;
    id: string;
  };
  type Details = {
    page: number;
    pages: number;
  };

  const [details, setDetails] = useState<Details | null>(null);
  const [data, setData] = useState<Item | Item[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const queryParams: string | string[] | undefined = router.query.params;

  const contextObject = useContext(ContextObject);

  // run useEffect on first rednder && when queryParams change
  useEffect(() => {
    if (queryParams) getData(queryParams);
  }, [queryParams]);

  async function getData(arg: string | string[]) {
    console.log('RUN');
    setLoading(true);

    try {
      const response = await axios.get(
        'https://reqres.in/api/products?' + arg,
        {}
      );
      const { data } = response;
      console.log('RESPONSE', response.data);

      // when we fetch object with more than one item we
      if (data.page) {
        setDetails({ page: data.page, pages: data.total_pages });
      }
      // when we fetch idividual item we dont setDetails
      else {
        setDetails(null);
      }
      // setData for both object with items && individula item
      setData(data.data);
      setError('');
      setLoading(false);
    } catch (err: unknown) {
      // when response that is not 2XX and not 5XX

      // when respones is 5XX

      setError('Something went wrong with the server! Try again in a minute.');
      setLoading(false);
    }
  }

  // to pass an argument into the even handler it need to return a function
  function modalHandler(item: any) {
    return () => {
      contextObject.showModal(item);
    };
  }

  // pagination logic:
  function paginationLinks() {
    // if(details){
    if (details) {
      const { page, pages } = details;
      if (page === 1) {
        return (
          <div className="text-white flex space-x-4 justify-center mt-6">
            <span>
              <i className="text-gray-500 fa-solid fa-angles-left"></i>
            </span>
            <Link href="/search/per_page=5&page=2">
              <i className="text-white fa-solid fa-angles-right"></i>
            </Link>
          </div>
        );
      } else if (page === pages) {
        return (
          <div className="text-white flex space-x-4 justify-center mt-6">
            <Link href="/search/per_page=5&page=2">
              <i className="text-white fa-solid fa-angles-left"></i>
            </Link>
            <span>
              <i className="text-gray-500 fa-solid fa-angles-right"></i>
            </span>
          </div>
        );
      } else {
        return (
          <div className="text-white flex space-x-4 justify-center mt-6">
            <Link href={`/search/per_page=5&page=${page - 1}`}>
              <i className="text-white fa-solid fa-angles-left"></i>
            </Link>
            <Link href={`/search/per_page=5&page=${page + 1}`}>
              <i className="text-white fa-solid fa-angles-right"></i>
            </Link>
          </div>
        );
      }
    }
  }

  // when redirected from home page for split second we have
  if (!data && !loading && !error) {
    return (
      <div className="text-center my-16">
        <i className="fa-solid fa-spinner fa-spin fa-2xl text-white"></i>
      </div>
    );
  }
  // when fetching
  else if (!data && loading) {
    return (
      <div className="text-center my-16">
        <i className="fa-solid fa-spinner fa-spin fa-2xl text-white"></i>
      </div>
    );
    // when fetching finished with the error
  } else if (error) {
    return (
      <div data-testid="data" className="flex justify-center my-16">
        <p className="text p-4 bg-white max-w-lg">{error}</p>
      </div>
    );

    // when we fetch sussesfully an object with items
  } else if (data && data.constructor == Array) {
    return (
      <div data-testid="data" className="bg-slate-900 py-8">
        <table className="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 ">Product Id</th>
              <th className="border border-slate-600 ">Product Name</th>
              <th className="border border-slate-600 ">Product Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                className="h-12 md:h-20 "
                style={{ backgroundColor: `${item.color}` }}
                onClick={modalHandler(item)}
              >
                <td className="border border-slate-700 text-center ">
                  {item.id}
                </td>
                <td className="border border-slate-700 text-center">
                  {item.name}
                </td>
                <td className="border border-slate-700 text-center">
                  {item.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Only show pagination links if 'details' are an object - otherwise
           details are set to 'null' when we only get a single item data and we dont need 
           pagination then:  */}
        {details && details.constructor === Object && paginationLinks()}
      </div>
    );

    // when fetched successfully an individual item which is an object
  } else if (
    typeof data === 'object' &&
    !Array.isArray(data) &&
    data !== null
  ) {
    const { color, id, name, year } = data;
    return (
      <div data-testid="data2" className="bg-slate-900 py-16">
        <table className="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 ">Product Id</th>
              <th className="border border-slate-600 ">Product Name</th>
              <th className="border border-slate-600 ">Product Year</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="h-20"
              style={{ backgroundColor: `${color}` }}
              onClick={modalHandler(data)}
            >
              <td className="border border-slate-700 text-center ">{id}</td>
              <td className="border border-slate-700 text-center">{name}</td>
              <td className="border border-slate-700 text-center">{year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-900 py-16">
        <table className="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 ">Product Id</th>
              <th className="border border-slate-600 ">Product Name</th>
              <th className="border border-slate-600 ">Product Year</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
