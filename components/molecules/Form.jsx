import React from 'react';
import { useForm } from 'react-hook-form';
import { object, array } from 'prop-types';
// constants
import { formFields } from '../../constants/formConstants';
// components
import Field from "../atoms/Field";

export default function Form() {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data); // update

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(field => (
        <Field key={field.label} field={field} register={register} errors={errors} />
      ))}
      <div className="text-right mt-8">
        <input type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent" />
      </div>
    </form>
  )
}

Form.propTypes = {
  formFields: array,
  errors: object
};
