import React from 'react';
import Products from "../organisms/Products";
import ProductSidebar from '../organisms/ProductSidebar';
import {
  ContextsConsumer
} from "../../utils/StateContext";

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
