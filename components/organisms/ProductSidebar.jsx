import React, { useState } from 'react';
import PropTypes, { func, bool, string } from 'prop-types';
// functions
import { ContextsConsumer } from '../../utils/StateContext';
// components
import Navbar from '../atoms/Navbar';
import Footer from '../atoms/Footer';
import Modal from '../molecules/Modal';

export default function ProductSidebar({ setSignin, userId }) {
  const [isModalShown, setShowModal] = useState(false);
  return (
    <ContextsConsumer>
      {({ state: { darkmode } }) => (
        <div className={`flex flex-col justify-between h-full md:max-w-sm sticky ${!darkmode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="sticky top-0">
            <Navbar setSignin={setSignin} />
            <div className={`max-w-sm overflow-hidden p-6`}>
              <div className="divide-y-2 divide-gray-400 mt-8 text-right">
                <p className={`art-title ${!darkmode ? 'text-teal-400' : 'text-gray-800'}`}>
                  Create products (Show what you got)
                </p>
              </div>
              <div className="mt-4 mb-4 text-right">
                <button className={`text-teal font-bold ${!darkmode ? 'text-teal-400' : 'text-gray-800'}`}
                  onClick={() => setShowModal(true)}>
                  - Add Product (&#9776;)
                </button>
              </div>
              <div className="divide-y-2 divide-gray-400 mt-8">
                <p className={`art-title ${!darkmode ? 'text-teal-400' : 'text-gray-800'}`}>
                  Generating tailored menu for your customers
                </p>
              </div>
              <div className="mt-4 mb-4">
                <button className={`text-teal font-bold ${!darkmode ? 'text-teal-400' : 'text-gray-800'}`}
                  onClick={() => {}}>
                  - View Menu (&#9783;)
                </button>
              </div>
            </div>
            {isModalShown && <Modal setShowModal={setShowModal} userId={userId} />}
          </div>
          <Footer />
        </div>
      )}
    </ContextsConsumer>
  )
}

ProductSidebar.propTypes = {
  setSignin: func,
  userId: string,
  state: PropTypes.shape({
    darkmode: bool
  })
};
