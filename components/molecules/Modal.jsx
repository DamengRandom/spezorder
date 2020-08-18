import React from 'react';
import { func, string } from 'prop-types';
// components
import Form from "./Form";

export default function Modal({ setShowModal, userId }) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-2xl md:w-1/2">
          {/* Modal content */}
          <div className="border-0 shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300">
              <h3 className="text-xl font-semibold">
                Create A Product
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/* Modal body */}
            <div className="relative p-6 flex-auto">
              <Form userId={userId} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  )
}

Modal.propTypes = {
  userId: string,
  setShowModal: func
};
