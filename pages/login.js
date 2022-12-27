import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layouts from '../components/Layouts';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: {errors},
  }=useForm();

  const submitHandler = ({email, password})=>{

  }
  return (
    <div>
      <Layouts title="Login">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  px-16 bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                   
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && (<div className='text-red-600 mt-2'>{errors.email.message}</div>)}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input

                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <span
                        href="#"
                        className="label-text-alt link link-hover text-red-600"
                      >
                        Don't have an account ?{' '}
                        <Link href="/register">Register</Link>
                      </span>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layouts>
    </div>
  );
}
