import React from 'react';

export default function Field({ field, register, errors }) {
  // const fieldCapitalized =
  //   field => field.charAt(0).toUpperCase() + field.slice(1);

  return (
    <div>
      <label>
        {field.label}
      </label>
      <input
        name={field.name}
        defaultValue={""}
        ref={register(field.register)}
      />
      {errors[field] && <p>{errors[field].message}</p>}
    </div>
  )
}
