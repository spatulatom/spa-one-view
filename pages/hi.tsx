import React, { useState, useEffect } from 'react';

export default function ExampleComponent(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count+ 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return <div className="text-6xl text-red-600">Count: {count}</div>;
}