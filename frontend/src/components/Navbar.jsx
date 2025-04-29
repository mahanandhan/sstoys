import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-orange-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <h1
            className="text-2xl font-bold text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate('/')}
          >
            The Name
          </h1>
        </div>

        {/* Center: Main Navigation */}
        <div className="hidden md:flex gap-8 text-white text-base">
          <ul className="flex gap-8">
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/')}>Home</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/about')}>About</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </div>

        {/* Right: User Links */}
        <div className="flex gap-4 text-white text-sm md:text-base">
          <ul className="flex gap-4">
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/profile')}>Profile</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/cart')}>Cart</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/orders')}>Orders</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform" onClick={() => navigate('/save-address')}>Addresses</li>
            <li className="font-bold cursor-pointer hover:scale-110 transition-transform">Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
