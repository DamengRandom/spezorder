import React from 'react';
import PropTypes, { bool, func, string } from 'prop-types';
// functions
import { ContextsConsumer } from '../../utils/StateContext';

export default function Card({ name, description, imageUrl, price }) {
  return (
    <ContextsConsumer>
      {({ state: { darkmode } }) => (
        <div className={`max-w-sm overflow-hidden shadow-lg m-2 mb-4 ${!darkmode ? 'bg-white' : 'bg-white'}`}>
          <img className="w-full" src={imageUrl} alt={`image-${name}`} />
          <div className={`px-6 py-4`}>
            {name && <div className={`font-bold text-xl mb-2 ${!darkmode ? 'text-teal-400' : 'text-gray-800'} break-all`}>{name}</div>}
            <p className={`text-gray-700 text-base ${!darkmode ? 'text-teal-400' : 'text-gray-800'} break-all`}>
              {description}
            </p>
          </div>
          <div className="px-6 py-4 text-right">
            <span className={`inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ${!darkmode ? 'text-teal-400' : 'text-gray-800'}`}>${price}</span>
          </div>
        </div>
      )}
    </ContextsConsumer>
  )
}

Card.propTypes = {
  state: PropTypes.shape({
    darkmode: bool,
    toggleMode: func
  }),
  name: string,
  description: string,
  imageUrl: string,
  price: string
};
