import React from 'react';
import { useForm } from 'react-hook-form';
// components
import Field from "../atoms/Field";

export default function Form() {
  const formFields = [
    {
      label: 'Product Name',
      name: 'name',
      register: {
        required: `Name is required`,
        pattern: /^[A-Za-z]+$/i
      }
    },
    {
      label: 'Product Image URL',
      name: 'imageUrl',
      register: {
        required: `Image URL is required`,
        pattern: /((http)?s?:\/\/.*\.(?:png|jpg))/i
      }
    },
    {
      label: 'Product Description',
      name: 'description',
      register: {
        required: `Description is required`,
        pattern: /^[A-Za-z]+$/i
      }
    },
    {
      label: 'Product Price',
      name: 'price',
      register: {
        required: `Price is required`,
        pattern: /\d+/
      }
    }];
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(field => (
        <Field field={field} register={register} errors={errors} />
      ))}
      <div className="text-right mt-8">
        <input type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent" />
      </div>
    </form>
  )
}
