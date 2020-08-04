import React from 'react';

export default function Card({ name, description, imageUrl, price }) {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg m-2">
      <img className="w-full" src={imageUrl} alt={`image-${name}`} />
      <div className="px-6 py-4">
        {name && <div className="font-bold text-xl mb-2">{name}</div>}
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 text-right">
        <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${price}</span>
      </div>
    </div>
  )
}
