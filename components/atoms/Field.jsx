import React from 'react';
import PropTypes, { string, object } from "prop-types";

export default function Field({ field, register, errors }) {
  const validationTypes = Object.keys(field.register);
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
      {(validationTypes && validationTypes.length > 0) && (
        validationTypes.map(validationRule => (
          errors[field.name] && errors[field.name].type === validationRule &&
          <p key={validationRule} className="text-red-600 text-xs italic pb-2">
            {errors[field.name].message}
          </p>
        ))
      )}
    </div>
  )
}

Field.propTypes = {
  field: PropTypes.shape({
    label: string,
    name: string,
    register: object
  })
};
