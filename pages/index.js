import { useEffect } from 'react';
import { useRouter } from 'next/router';

import React from 'react';

export default function Home() {
  return <div>index</div>;
}

// redirect at a built time from Home page'/' to '/search/per_page=5&page=1'-
// we can not display any products here since Home url is always '/'
// and we want our url to reflect our content on the page so we can copy/paste it
// to another browser:
// the redirect is done in file: next.confg.js
