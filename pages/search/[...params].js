import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import ContextObject from '@/store/modal-data-context';

export default function params() {
  const [details, setDetails] = useState(null);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const queryParams = router.query.params;

  const contextObject = useContext(ContextObject);

  useEffect(() => {
    if(queryParams)
    getData(queryParams);
  }, [queryParams]);

  async function getData(arg = '/search/per_page=5&page=1') {
    console.log('RUN', queryParams);
    setLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/products?' + arg, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        if (data.page) {
          setDetails({ page: data.page, pages: data.total_pages });
        } else {
          setDetails(null);
        }
        setData(data.data);
        setError('');
        setLoading(false);
      } else {
        setData('');
        setError(
          data.message ||
            'Sorry, no item for your search! We only have 12 items. Try different number!'
        );
        setLoading(false);
      }
    } catch (err) {
      setData('');
      setError('Something went wrong with the server! Try again in a minute.');
      setLoading(false);
    }
  }

  // to pass an argument into the even handler we this to construct such
  // that it returns a function:
  function modalHandler(arg) {
    return () => {
      contextObject.showModal(arg);
    };
  }

  // pagination logic:
  function paginationLinks() {
    const { page, pages } = details;
    if (page === 1) {
      return (
        <div class="text-white flex space-x-4 justify-center mt-6">
          <span>
            <i class="text-gray-500 fa-solid fa-angles-left"></i>
          </span>
          <Link href="/search/per_page=5&page=2">
            <i class="text-white fa-solid fa-angles-right"></i>
          </Link>
        </div>
      );
    } else if (page === pages) {
      return (
        <div class="text-white flex space-x-4 justify-center mt-6">
          <Link href="/search/per_page=5&page=2">
            <i class="text-white fa-solid fa-angles-left"></i>
          </Link>
          <span>
            <i class="text-gray-500 fa-solid fa-angles-right"></i>
          </span>
        </div>
      );
    } else {
      return (
        <div class="text-white flex space-x-4 justify-center mt-6">
          <Link href={`/search/per_page=5&page=${page - 1}`}>
            <i class="text-white fa-solid fa-angles-left"></i>
          </Link>
          <Link href={`/search/per_page=5&page=${page + 1}`}>
            <i class="text-white fa-solid fa-angles-right"></i>
          </Link>
        </div>
      );
    }
  }

  if (!data && loading) {
    return (
      <div className="text-center my-16">
        <i class="fa-solid fa-spinner fa-spin fa-2xl text-white"></i>
      </div>
    );
  } else if (!data && !loading && error) {
    return (
      <div class="flex justify-center my-16">
        <p class="text p-4 bg-white max-w-lg">{error}</p>
      </div>
    );
  } else if (data.constructor == Array) {
    return (
      <div class="bg-slate-900 py-8">
        <table class="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
          <thead>
            <tr>
              <th class="border border-slate-600 ">Product Id</th>
              <th class="border border-slate-600 ">Product Name</th>
              <th class="border border-slate-600 ">Product Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                class="h-12 md:h-20 "
                style={{ backgroundColor: `${item.color}` }}
                onClick={modalHandler(item)}
              >
                <td class="border border-slate-700 text-center ">{item.id}</td>
                <td class="border border-slate-700 text-center">{item.name}</td>
                <td class="border border-slate-700 text-center">{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Only show pagination links if 'details' are an object - otherwise
           details are set to 'null' when we only get a single item data and we dont need 
           pagination then:  */}
        {details.constructor === Object && paginationLinks()}
      </div>
    );
  } else {
    return (
      <div class="bg-slate-900 py-16">
        <table class="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
          <thead>
            <tr>
              <th class="border border-slate-600 ">Product Id</th>
              <th class="border border-slate-600 ">Product Name</th>
              <th class="border border-slate-600 ">Product Year</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="h-20"
              style={{ backgroundColor: `${data.color}` }}
              onClick={modalHandler(data)}
            >
              <td class="border border-slate-700 text-center ">{data.id}</td>
              <td class="border border-slate-700 text-center">{data.name}</td>
              <td class="border border-slate-700 text-center">{data.year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
