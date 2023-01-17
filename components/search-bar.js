import React from 'react'

 function SearchBar() {
  return (
    <div class="sm:w-1/5 mx-2 sm:mx-auto my-8" >
  <label for="price" class="block text-sm font-medium text-gray-700">Search by Product Id:</label>
  <div class="relative mt-1 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm ">id:</span>
    </div>
    <input type="number" min="xxx" max="yyy" title="Format: 3 digits"  class="block w-full rounded-md border border-gray-800 py-3 pl-7 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="number"/>
    
  </div>
</div>
  )
}
export default SearchBar