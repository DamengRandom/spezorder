import React from 'react';
import Navbar from "../atoms/Navbar";
import Footer from '../atoms/Footer';

export default function ProductForm({ children, setSignin }) {
  return (
    <div className="flex flex-col justify-between bg-gray-200 h-full md:max-w-md sticky">
      <div className="sticky top-0 p-6">
        <Navbar setSignin={setSignin} />
        {children}
      </div>
      <Footer />
    </div>
  )
}
