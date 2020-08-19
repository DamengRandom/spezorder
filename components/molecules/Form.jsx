import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, array } from 'prop-types';
// constants
import { formFields } from '../../constants/formConstants';
// functions
import createProduct from '../../utils/createProduct';
import { ContextsConsumer } from '../../utils/StateContext';
// components
import Field from '../atoms/Field';

export default function Form({ userId, setShowModal }) {
  const [isFailed, setFailed] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, products, setProducts) => {
    if (userId) {
      createProduct(userId, data, setFailed, setShowModal, products, setProducts);
    } else {
      setFailed(true);
    }
  };

  return (
    <ContextsConsumer>
      {({ state: { products }, setProducts }) => (
        <form onSubmit={handleSubmit(data => onSubmit(data, products, setProducts))}>
          {isFailed && <p>Ooops, something is wrong, please try it again.</p>}
          {formFields.map(field => (
            <Field key={field.label} field={field} register={register} errors={errors} />
          ))}
          <div className="text-right mt-8">
            <input type="submit" className="bg-transparent hover:bg-teal-400 text-teal-400 font-semibold hover:text-white py-2 px-4 border border-teal-400 hover:border-transparent" />
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
