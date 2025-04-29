import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm p-8 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center mb-6'>Signup</h1>
        <form>
          {/* Username Field */}
          <div className='flex flex-col'>
            <label htmlFor="username" className='mb-1 text-sm font-medium text-gray-700'>Username:</label>
            <input
              type="text"
              id="username"
              placeholder='Enter your username'
              className='border border-gray-300 mt-2 p-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
              required
            />
          </div>

          {/* Email Field */}
          <div className='flex flex-col mt-4'>
            <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email:</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              className='border border-gray-300 p-2 mt-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
              required
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col mt-4'>
            <label htmlFor="password" className='text-sm font-medium text-gray-700'>Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder='Enter your password'
                className='border border-gray-300 p-2 mt-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400'
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-1/2 pt-2 transform -translate-y-1/2 text-sm text-blue-500 focus:outline-none cursor-pointer"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex flex-col mt-6'>
            <button
              type='submit'
              className='w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white py-2 rounded'
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
