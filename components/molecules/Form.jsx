import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, array } from 'prop-types';
// constants
import { formFields } from '../../constants/formConstants';
// functions
import createProduct from '../../utils/createProduct';
import { ContextsConsumer } from '../../utils/StateContext';
// components
import Field from "../atoms/Field";

export default function Form({ userId, setShowModal }) {
  const [isFailed, setFailed] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    if (userId) {
      createProduct(userId, data, setFailed, setShowModal);
    } else {
      setFailed(true);
    }
  };

  return (
    <ContextsConsumer>
      {() => (
        <form onSubmit={handleSubmit(onSubmit)}>
          {isFailed && <p>Ooops, something is wrong, please try it again.</p>}
          {formFields.map(field => (
            <Field key={field.label} field={field} register={register} errors={errors} />
          ))}
          <div className="text-right mt-8">
            <input type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent" />
          </div>
        </form>
      )}
    </ContextsConsumer>
  )
}

Form.propTypes = {
  formFields: array,
  errors: object
};
