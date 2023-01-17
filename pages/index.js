import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SPA One View</title>
        <meta
          name="description"
          content="Select a product from our collection"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <tr class="bg-slate-400 h-32">
              <td class="border border-slate-700 text-center ">Indiana</td>
              <td class="border border-slate-700 text-center">Indianapolis</td>
              <td class="border border-slate-700 text-center">Ohio</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
