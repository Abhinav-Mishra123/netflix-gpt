import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true)


    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div className='login-section relative h-screen'>
      <Header />
      <form className='absolute p-12 w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white rounded'>
        <h3 className='text-3xl mb-2'>{isSignInForm ? "Sign In" : "Sign up"}</h3>
        {!isSignInForm && (
        <input type='text' placeholder='Full Name' className='p-3 my-4 w-full rounded bg-gray-200 text-black' />
        )}
        <input type='text' placeholder='Email Address' className='p-3 my-4 w-full rounded bg-gray-200 text-black' />
        <input type='password' placeholder='Password' className='p-3 my-4 w-full rounded bg-gray-200 text-black' />
        <button className='p-5 py-2 mt-4 w-full bg-red-600  my-4 h-12 text-xl rounded hover:bg-red-700'>{isSignInForm ? "Sign In" : "Sign up"}</button>
        <p onClick={toggleSignInForm} className='cursor-pointer'>{isSignInForm ? "New to Netflix Sign up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;
