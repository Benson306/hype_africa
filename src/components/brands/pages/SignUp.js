import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='w-full min-h-screen bg-neutral-300'>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  my-10 lg:py-0 ">
            <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                Hype Africa    
            </div>
            <div class="rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-gray-800 border-gray-700 w-5/6 lg:w-1/2">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Create Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your Phone Number</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+254 707357072" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Company Name</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Country</label>
                            <select type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hype Africa" required="" >
                                <option>Kenya</option>
                                <option>Tanzania</option>
                                <option>Uganda</option>
                            </select>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">City</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nairobi" required="" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>

                        <Link to="/brand_login" >
                            <div className="w-full text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 focus:ring-primary-800 mt-5">Sign Up</div>
                        </Link>
                        <p class="text-sm  text-gray-100">
                            I have an account? <Link to="/brand_login" className="font-medium hover:underline text-sky-500"> Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp
