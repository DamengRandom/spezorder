import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes, { func, string, bool, array } from 'prop-types';
// functions
import { ContextsConsumer } from "../../utils/StateContext";
import productFetcher from '../../utils/productFetcher';
// components
import Products from "../organisms/Products";
import ProductSidebar from '../organisms/ProductSidebar';

export default function Dashboard({ userId, setSignin }) {
  // get products
  const {status, data, error} = useQuery('products', () => productFetcher(userId));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <ContextsConsumer>
      {({ state: { darkmode } }) => (
        <div className="flex flex-col md:flex-row">
          <div className="flex-none md:min-h-screen">
            <ProductSidebar setSignin={setSignin} userId={userId} />
          </div>
          <div className={`flex-grow w-full ${!darkmode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* <Products userId={userId} products={products} /> */}
            {status === 'loading' && <div>Loading ..</div>}
            {status === 'error' && <pre>{JSON.stringify(error, null, 2)}</pre>}
            {products && <Products products={products} />}
          </div>
        </div>
      )}
    </ContextsConsumer>
  )
}

Dashboard.propTypes = {
  userId: string,
  setSignin: func,
  products: array,
  state: PropTypes.shape({
    darkmode: bool
  })
};
