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
      <Masonry breakpointCols={breakpointColumnsObj}
        className="w-auto flex"
        columnClassName="my-masonry-grid_column">
          {products && products.map(({ name, imageUrl, description, price }) =>
            <Card name={name} imageUrl={imageUrl} description={description} price={price} />)}
      </Masonry>
    </div>
  )
}
