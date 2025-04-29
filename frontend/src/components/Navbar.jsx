import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=''>
        <nav className="flex flex-row bg-orange-500 mt-2 p-4 shadow-md">

            <div>
                <h1 className='text-2xl font-bold text-white cursor-pointer hover:scale-110'>The Name</h1>
            </div>
            <div className='gap-4 flex flex-row ml-140 mt-1'>
                <ul className='flex flex-row gap-7 text-white '>
                    <li className='font-bold cursor-pointer hover:scale-110 active:underline'>Home</li>
                    <li onClick={() => navigate('/about')} className='font-bold cursor-pointer hover:scale-110'>About</li>
                    <li onClick={() => navigate('/contact')} className='font-bold cursor-pointer hover:scale-110'>Contact</li>
                </ul>
            </div>
            <div className='ml-40 flex flex-row gap-4'>
                <ul className='flex flex-row gap-6 text-white'>
                    <li onClick={() => navigate('/profile')} className='font-bold cursor-pointer hover:scale-110'>profile</li>
                    <li onClick={() => navigate('/cart')} className='font-bold cursor-pointer hover:scale-110'>cart</li>
                    <li onClick={() => navigate('/orders')} className='font-bold cursor-pointer hover:scale-110'>orders</li>
                    <li onClick={() => navigate('/save-address')} className='font-bold cursor-pointer hover:scale-110'>Addresses</li>
                    <li className='font-bold cursor-pointer hover:scale-110'>logout</li>
                </ul>
            </div>
        </nav>
      </div>
    </div>
  )
}
export default Navbar
