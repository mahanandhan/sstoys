import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the existing addresses from localStorage
    const existingAddresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
    // Append the new address to the array
    existingAddresses.push(formData);

    // Save the updated list of addresses
    localStorage.setItem('savedAddresses', JSON.stringify(existingAddresses));

    // Reset form after submit
    setFormData({
      name: '',
      street: '',
      city: '',
      zip: '',
      phone: ''
    });

    // Notify the user
    toast.success('Address saved successfully! 📦');
    navigate('/save-address'); // Redirect to the SaveAddress page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Delivery Address 📬</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Street</label>
          <input 
            type="text" 
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">City</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
          <input 
            type="text" 
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input 
            type="text" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
        >
          Save Address
        </button>
        <button onClick={() => navigate('/save-address')} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 mt-4">Saved Address</button>
      </form>
    </div>
  );
};

export default AddressPage;
