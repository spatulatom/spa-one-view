import React from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function params() {
  const router = useRouter();

  
  //  router.refresh()
  

  const filterData = router.query.params;
  console.log('FILTER', filterData)


  return (

    <div>[...params]</div>
  )
}
