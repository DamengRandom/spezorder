import React from 'react';

export default function Field({ field, register, errors }) {
  // const CapitalizeFieldText =
  //   field => field.charAt(0).toUpperCase() + field.slice(1);

  return (
    <div className="w-full mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {field.label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        name={field.name}
        defaultValue={""}
        ref={register(field.register)}
      />
      {errors[field] &&
        <p className="text-red-500 text-xs italic">
          {errors[field].message}
        </p>
      }
    </div>
  )
}
