import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

function ChangePasswordModal({ isOpen, onRequestClose }) {

    const { id } = useContext(AuthContext);

  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(oldPassword === null || newPassword === null || confirmPassword === null){
        toast.error('All Fields Must Be Filled', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return;
    }

    if(newPassword !== confirmPassword){
        toast.error('New Password And Confirm New Password Must Match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return;
    }

    const passwordPattern = /^(?=.*\d).{6,}$/;

    if(!passwordPattern.test(newPassword)){
        toast.error('Password must be at least 6 characters long with 1 digit in it', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        return;
    }


    fetch(`${process.env.REACT_APP_API_URL}/change_password/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            oldPassword,
            newPassword
        })
    })
    .then(response => response.json())
    .then((response)=>{

        console.log(response)

        if(response === "success"){
            toast.success('Success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
                });
               
                setTimeout(() => {
                    navigate('/all_campaigns');
                    }, 2000);
                

                
        }else if(response === "failed"){
            toast.error('Failed. Check Your Credentials!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        
    })
    .catch(err =>{
        toast.error('Failed. Server Error!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    })
    

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Change Password Modal"
      className="modal bg-opacity-30 w-3/4 lg:w-1/2 m-auto mt-48"
    >
        <ToastContainer />
      <div className="bg-sky-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold text-white">Change Password</h2>
        <form onSubmit={handleSubmit}>
        <label className="block mt-4 text-white m-1">Old Password:</label>
          <input
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <label className="block mt-4 text-white mb-1">New Password:</label>
          <input
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <label className="block mt-4 text-white mb-1">Confirm New Password:</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="mt-4 bg-red-800 text-white rounded p-2">
            Change Password
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ChangePasswordModal;
