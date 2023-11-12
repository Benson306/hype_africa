import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utils/AuthContext';

function ApprovalPending() {

    const { company_id, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    return (
        <div className='w-full min-h-screen bg-black'>
        <div className='mt-32 mx-2 lg:mx-20 bg-zinc-950 border border-gray-900 shadow-2xl p-5'>

          <div className='text-3xl text-center my-2 font-serif tracking-wider text-blue-500'>
            You are almost there!
          </div>

            <div className='text-lg text-center text-white my-2 mb-5'>
              Your Have Succesfully Completed Account Creation.
            </div>

            <div className='text-xl text-center text-white my-2'>
              Expect approval of your account within 24 hours
            </div>

            <div className='flex justify-center mt-10 mb-10'>
                <img src={require('../../images/file.gif')} className='w-36 lg:w-52 rounded-xl' />
            </div>

            <div className='flex justify-center'>
                <button onClick={() => {
                    logout()
                    navigate("/company_login")
                }} className='bg-green-600 text-white p-3 font-bold rounded-lg hover:bg-green-400'>
                    Sign Out
                </button>
            </div>


        </div>
    </div>
        )
}

export default ApprovalPending;
