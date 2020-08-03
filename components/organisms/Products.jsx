import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import productFetcher from "../../utils/productFetcher";

export default function Products({ userId }) {
  const {status, data, error} = useQuery('products', () => productFetcher(userId));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if(status === 'loading')
    return <div>Loading ..</div>;
  if(status === 'error')
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="p-6 lg:max-w-2xl">
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}
