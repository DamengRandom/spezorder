import React from 'react';
import { useForm } from 'react-hook-form';
// components
import Field from "../atoms/Field";

export default function Form() {
  const formFields = [
    {
      label: 'Name',
      name: 'name',
      register: {
        required: `Name is required`,
        pattern: /^[A-Za-z]+$/i
      }
    },
    {
      label: 'Image URL',
      name: 'imageUrl',
      register: {
        required: `Image URL is required`,
        pattern: /((http)?s?:\/\/.*\.(?:png|jpg))/i
      }
    },
    {
      label: 'Description',
      name: 'description',
      register: {
        required: `Description is required`,
        pattern: /^[A-Za-z]+$/i
      }
    },
    {
      label: 'Price',
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
      <input type="submit" />
    </form>
  )
}
