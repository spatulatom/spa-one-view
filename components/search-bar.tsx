import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SearchBar() {
  const [input, setInput] = useState('all products');
  const router = useRouter();

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    // when we have cleard input field
    if (!e.target.value) {
      setInput('all products');
      router.push('/search/per_page=5&page=1');
    }
    // when we have numer in the input field
    else {
      setInput(e.target.value);
      router.push('/search/id=' + e.target.value);
    }
  }

  // to prevent letter e, E from the input field type="number"
  function onKeyDownHandler(e: React.KeyboardEvent) {
    return ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  }

  return (
    <div className="w-full bg-white">
      
      <div className="sm:w-1/5 mx-2 sm:mx-auto py-4">
      <Link className='block mb-4 text-center uppercase rounded-md hover:bg-white hover:text-black border-black border bg-slate-600 text-white' href="/thinking-in-react">Thinking In React</Link>
      <Link onClick={()=>{setInput('all products')}} className='block mb-4 text-center uppercase rounded-md hover:bg-white hover:text-black border-black border bg-slate-600 text-white' href="/">Home</Link>
        <label className="block text-sm font-medium">Search by Item id:</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm ">id:</span>
          </div>

          <input
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            type="number"
            name="amount"
            pattern="^[0-9]+[0-9]*$"
            className="block w-full rounded-md border border-gray-800 py-3 pl-7 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="number"
          />
        </div>
      </div>
      <h1 className=" font-light italic text-lg text-center mt=0 pt-0 pb-2">
        Search results for: {input}
      </h1>
    </div>
  );
}
export default SearchBar;
