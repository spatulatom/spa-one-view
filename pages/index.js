import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// its not recommended to use getServerSideprops to communicate with
// its own API, and since I can not directly get data into getServerSideProps
// because Im doing pagination on the backend, I will fetch the data from the
// client side. see for reference:
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#getserversideprops-or-api-routes

export default function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.push('/search/per_page=5&page=1')
    
  }, []);

  

  // async function getData() {
  //   setIsLoading(true);
  //   const response = await fetch('api/products', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await response.json();
  //   try {
  //     if (response.ok) {
  //       setData(data);
  //       setError('');
  //       setIsLoading(false);
  //     } else {
  //       throw new Error(data.message || 'Something went wrong!');
  //     }
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong with the server!');
  //     setIsLoading(false);
  //   }
  // }

  // return (
  //   <>
  //     <Head>
  //       <title>SPA One View</title>
  //       <meta
  //         name="description"
  //         content="Select a product from our collection"
  //       />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
      // <main class="bg-slate-900 h-screen">
      //   <table class="border-separate border-spacing-2 border w-8/12 text-white m-auto border-slate-500 ">
      //     <thead>
      //       <tr>
      //         <th class="border border-slate-600 ">Product Id</th>
      //         <th class="border border-slate-600 ">Product Name</th>
      //         <th class="border border-slate-600 ">Product Year</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr class="bg-slate-400 h-32">
      //         <td class="border border-slate-700 text-center ">Indiana</td>
      //         <td class="border border-slate-700 text-center">Indianapolis</td>
      //         <td class="border border-slate-700 text-center">Ohio</td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </main>
  //   </>
  // );
}
