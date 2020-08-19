import React from 'react';
import PropTypes, { func, string, bool, array } from 'prop-types';
// functions
import { ContextsConsumer } from '../../utils/StateContext';
// components
import Products from '../organisms/Products';
import ProductSidebar from '../organisms/ProductSidebar';

export default function Dashboard({ userId, setSignin }) {
  return (
    <ContextsConsumer>
      {({ state: { darkmode } }) => (
        <div className="flex flex-col md:flex-row">
          <div className="flex-none md:min-h-screen">
            <ProductSidebar setSignin={setSignin} userId={userId} />
          </div>
          <div className={`flex-grow w-full ${!darkmode ? 'bg-gray-800' : 'bg-white'}`}>
            <Products />
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
