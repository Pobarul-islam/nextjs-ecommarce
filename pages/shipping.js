import React from 'react';
import { useForm } from 'react-hook-form';
import CheckOutWizard from '../components/CheckOutWizard';
import Layouts from '../components/Layouts';

export default function shipping() {
  const {
    handleSubmit,
    register,
    formState: {errors},
    setValue,
    getValues,
  }= useForm();
  const submitHandler = ({fullName, address, city, postalCode, country})=>{
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
  }
  return (
    <Layouts title="Shipping Address">
      <CheckOutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="w-full input"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter your full name',
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="w-full input"
            id="address"
            {...register('address', {
              required: 'Please enter your address',
              minLength: { value: 3, message: 'Address is more than 2 char' },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="w-full input"
            id="city"
            {...register('city', {
              required: 'Please enter your city',
              minLength: { value: 3, message: 'City is more than 2 char' },
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal code</label>
          <input
            type="text"
            className="w-full input"
            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter your postalCode',
              minLength: {
                value: 3,
                message: 'PostalCode is more than 2 char',
              },
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="w-full input"
            id="country"
            {...register('country', {
              required: 'Please enter your country',
              minLength: { value: 3, message: 'Country is more than 2 char' },
            })}
          />
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layouts>
  );
}
