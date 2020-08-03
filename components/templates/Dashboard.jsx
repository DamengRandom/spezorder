import React from 'react';
import Products from "../organisms/Products";
import ProductForm from '../organisms/ProductForm';

export default function Dashboard({ userId, setSignin }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-none md:min-h-screen">
        <ProductForm setSignin={setSignin} />
      </div>
      <div className="flex-grow w-full">
        <Products userId={userId} />
      </div>
    </div>
  )
}
