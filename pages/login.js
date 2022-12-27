import Link from 'next/link';
import React, { useEffect } from 'react';
import {signIn, useSession} from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layouts from '../components/Layouts';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import { useRouter } from 'next/router';


export default function LoginScreen() {
const {data: session} = useSession();
const router = useRouter();
const {redirect} = router.query;
  useEffect(()=>{
      if(session?.user){
        router.push(redirect || '/');
      }
  },[router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async({ email, password }) => {
    try{
      const result = await signIn('credentials',{
         rediredt:false,
         email,
         password,
      });
      if(result.error){
        toast.error(result.error);
      }
    }catch(err){
      toast.error(getError(err));
    }
  };
  return (
    <div>
      <Layouts title="Login">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  px-16 bg-base-100">
                <div className="card-body">
                  <div className="form-control items-center">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'Please enter your email !',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                          message: 'Please enter valid email !',
                        },
                      })}
                      // type="email"
                      placeholder="Email"
                      className="input input-bordered w-60"
                    />
                    {errors.email && (
                      <div className="text-red-600 mt-2">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-control items-center">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      // type="password"
                      {...register('password', {
                        required: 'Please enter password',
                        minLength: {
                          value: 6,
                          message: 'Password is more than 5',
                        },
                      })}
                      placeholder="Password"
                      className="input input-bordered w-60"
                    />
                    {errors.password && (
                      <div className="text-red-500 mt-2">
                        {errors.password.message}{' '}
                      </div>
                    )}
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
