import React from 'react'
import { useState } from 'react';

import Header from './Header'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />

      </div>
      <form action="" className=' w-3/12 absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-800' />}

        <input
          type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-800' />

        <input
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-800 ' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? Sign Up Now " : "Already Regsitered? Sign in "}</p>
      </form>
    </div>
  )
}

export default Login