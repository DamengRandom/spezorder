import React from 'react';
import PropTypes, { func, string, bool } from 'prop-types';
// functions
import { ContextsConsumer } from "../../utils/StateContext";
// components
import Products from "../organisms/Products";
import ProductSidebar from '../organisms/ProductSidebar';

export default function Dashboard({ userId, setSignin }) {
  return (
    <ContextsConsumer>
      {({ state: { darkmode } }) => (
        <div className="flex flex-col md:flex-row">
          <div className="flex-none md:min-h-screen">
            <ProductSidebar setSignin={setSignin} />
          </div>
          <div className={`flex-grow w-full ${!darkmode ? 'bg-gray-800' : 'bg-white'}`}>
            <Products userId={userId} />
          </div>
        </div>
      )}
    </ContextsConsumer>
  )
}

Dashboard.propTypes = {
  userId: string,
  setSignin: func,
  state: PropTypes.shape({
    darkmode: bool
  })
};
