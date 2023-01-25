import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function SearchBar() {
  const [input, setInput] = useState('');
  const router = useRouter();

  function onChangeHandler(e) {
    // when we have cleard input field
    if (!e.target.value) {
      router.push('/search/per_page=5&page=1');
    }
    // when we have numer in the input field
    else {
      setInput(e.target.value);
      router.push('/search/id=' + e.target.value);
    }
  }

  // to prevent letter e, E from the input field type="number"
  function onKeyDownHandler(e) {
    return ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  }

  return (
    <div class="w-full bg-white">
      <div class="sm:w-1/5 mx-2 sm:mx-auto py-8">
        <label for="price" class="block text-sm font-medium">
          Search by Item id:
        </label>
        <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm ">id:</span>
          </div>

          <input
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            type="number"
            name="amount"
            pattern="^[0-9]+[0-9]*$"
            class="block w-full rounded-md border border-gray-800 py-3 pl-7 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="number"
          />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
