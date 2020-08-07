import React from 'react';
import Navbar from "../atoms/Navbar";
import Footer from '../atoms/Footer';
import Modal from '../molecules/Modal';

export default function ProductSidebar({ setSignin }) {
  const [isModalShown, setShowModal] = React.useState(false);
  return (
    <div className="flex flex-col justify-between bg-gray-200 h-full md:max-w-sm sticky">
      <div className="sticky top-0">
        <Navbar setSignin={setSignin} />
        <div className="max-w-sm overflow-hidden">
          <div className="divide-y-2 divide-gray-400 mt-4 mb-6">
            <p className="art-title">
              Starting generate your tailored menu for your customers !!
            </p>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full"
              onClick={() => setShowModal(true)}>
              (+) Product
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full"
              onClick={() => {}}>
              View Menu
            </button>
          </div>
          <div className="mb-4">
            TBC ATM
          </div>
        </div>
        {isModalShown && <Modal setShowModal={setShowModal} />}
      </div>
      <Footer />
    </div>
  )
}
