import React from 'react';

export default function Modal({ setShowModal }) {
  return (
    // <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50   outline-none focus:outline-none"
    // >
    //   <button className="" onClick={() => setToggleModal(false)}>Close</button>
    //   Modal
    // </div>
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
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
            {/*body*/}
            <div className="relative p-6 flex-auto">
              form here
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300">
              <button
                className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none p-2"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none p-2"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
