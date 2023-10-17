import React from 'react'
import { Link } from 'react-router-dom'

function CreatorSignUp() {
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
      <div className='lg:w-2/6 mx-2 lg:mx-auto bg-white shadow-2xl items-center p-4 mt-32 rounded'>
        <div className='text-center text-lg font-bold'>Hype Africa</div>
        <div className='text-center text-2xl mt-3 '>Create your Creator Account</div>

        <form className='mt-10 mx-6'>
            <div className='flex gap-2 mb-5'>
                <input type='text' className='border-2 border-gray-500 w-1/2 p-4 rounded ' placeholder='First Name' required/>
                <input type='text' className='border-2 border-gray-500 w-1/2 p-4 rounded' placeholder='Last Name' required/>
            </div>

          <input type='text' className='border-2 border-gray-500 w-full p-4 rounded mb-5' placeholder='Email Address' required/>

          <div className='flex gap-2'>

            <select className='border-2 border-gray-500 w-2/6 lg:w-1/6 p-2 rounded bg-white'>
                <option value="+254">+254</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
            </select>

            <input type='number' className='w-4/6 lg:w-5/6 border-2 border-gray-500 p-4 rounded ' placeholder='Phone Number (e.g 712 345 678)' required/>

          </div>

          <input type='password' className='border-2 border-gray-500 w-full p-4 rounded mt-5 mb-5' placeholder='Password' required/>

          

          <Link to={"#"} className="text-sky-900 underline">Forgot Password?</Link>

          <button className='w-full bg-black text-white text-center text-xl p-5 mt-5 mb-5 rounded'>
            Continue
          </button>
        <div className='flex gap-1 text-lg mb-10'>
          <span className='font-bold'>I Have an Account?</span>
          <Link to={"/creator_login"} className="text-sky-900 underline">Sign In</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreatorSignUp
