import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import Masonry from "react-masonry-css";
import productFetcher from "../../utils/productFetcher";
import Card from '../molecules/Card';

export default function Products({ userId }) {
  const {status, data, error} = useQuery('products', () => productFetcher(userId));
  const [products, setProducts] = useState([]);
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 1
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if(status === 'loading')
    return <div>Loading ..</div>;
  if(status === 'error')
    return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="flex m-2">
      {products ?
        <Masonry breakpointCols={breakpointColumnsObj}
          className="w-auto flex"
          columnClassName="my-masonry-grid_column">
            {products && products.map(({ name, imageUrl, description, price }) =>
              <Card key={name} name={name} imageUrl={imageUrl} description={description} price={price} />)}
        </Masonry>
        : 
        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 w-full" role="alert">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
          <p>No products created yet ..</p>
        </div>}
    </div>
  )
}
