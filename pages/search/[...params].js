import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState,useContext } from 'react';
import Link from 'next/link';
import NotificationContext from '@/store/notification-context';

export default function params() {
  const [details, setDetails] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const filterData = router.query.params;

  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    console.log('FILTER', filterData);
    // setQuery(filterData);
    getData(filterData);
  }, [filterData]);

  async function getData(arg = 'per_page=5&page=1') {
    console.log('RUN')
    setLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/products?' + arg, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('FULL', data);
      if (response.ok) {
        if (data.page) {
          setDetails({ page: data.page, pages: data.total_pages });
        } else {
          setDetails({});
        }
        setData(data.data);
        setError('');
        setLoading(false);
      } else {
        setData('');
        setError(
          data.message ||
            'No items for your search! We only have 12 items. Try different number!'
        );
        setLoading(false);
      }
    } catch (err) {
      setData('');
      setError('Something went wrong with the server! Try again in a minute.');
      setLoading(false);
    }
  }
  console.log('DATA', data instanceof Array, data);
  console.log('DETAILS', details);

  function modalHandler(arg) {
    return () => {
      console.log(arg);
      notificationCtx.showModal(arg)
    };
  }

  function activeLink() {
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
    return <div>Loading</div>;
  } else if (!data && !loading && error) {
    return <div>{error}</div>;
  } else if (data.constructor == Array) {
    return (
      <div>
        <main class="bg-slate-900 h-screen">
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
                <tr class="h-20" style={{backgroundColor:`${item.color}`}} onClick={modalHandler(item)}>
                  <td class="border border-slate-700 text-center ">
                    {item.id}
                  </td>
                  <td class="border border-slate-700 text-center">
                    {item.name}
                  </td>
                  <td class="border border-slate-700 text-center">
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {details.constructor === Object && activeLink()}
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <main class="bg-slate-900 h-screen">
          <table class="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
            <thead>
              <tr>
                <th class="border border-slate-600 ">Product Id</th>
                <th class="border border-slate-600 ">Product Name</th>
                <th class="border border-slate-600 ">Product Year</th>
              </tr>
            </thead>
            <tbody>
              <tr class={`bg-[${data.color}] h-20`}>
                <td class="border border-slate-700 text-center ">{data.id}</td>
                <td class="border border-slate-700 text-center">{data.name}</td>
                <td class="border border-slate-700 text-center">{data.year}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}
