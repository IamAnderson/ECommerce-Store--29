import React from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();

  console.log(location)
  return (
    <div className='flex justify-center items-center h-screen'>
        {/* <div className='flex flex-col'>
            <div className='flex justify-center items-center mb-6'> <BsFillCartCheckFill className='text-[4rem] text-white bg-gradient-to-r from-purple-800 to-pink-700'/> </div>
            <div className='flex justify-center'>
                <div className='flex justify-center items-center mb-6 text-white text-2xl px-6 py-4 rounded-md bg-teal-800'>Successful</div>
            </div> */}
            <div>Your order is being prepared. Thanks for shopping with 29.</div>
        {/* </div> */}
    </div>
  )
}

export default Success