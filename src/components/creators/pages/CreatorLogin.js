import React from 'react'
import { Link } from 'react-router-dom'

function CreatorLogin() {
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <div className='lg:w-2/6 mx-2 lg:mx-auto bg-white shadow-2xl items-center p-4 mt-32 rounded'>
        <div className='text-center text-lg font-bold'>Hype Africa</div>
        <div className='text-center text-2xl mt-3 '>Welcome Back!</div>

        <form className='mt-10 mx-6'>
          <input type='text' className='border-2 border-gray-500 w-full p-4 rounded' placeholder='Email Address' required/>
          <input type='password' className='border-2 border-gray-500 w-full p-4 rounded mt-5 mb-5' placeholder='Password' required/>

          <Link to={"#"} className="text-sky-900 underline">Forgot Password?</Link>

          <button className='w-full bg-black text-white text-center text-xl p-5 mt-5 mb-5 rounded'>
            Continue
          </button>
        <div className='flex gap-1 text-lg mb-10'>
          <span className='font-bold'>Don't Have an Account?</span>
          <Link to={"/creator_signup"} className="text-sky-900 underline">Sign Up</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreatorLogin
