import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SaveAddress = () => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
    phone: ''
  });

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem('savedAddresses')) || [];
    setSavedAddresses(addresses);
  }, []);

  const handleDelete = (index) => {
    const updatedAddresses = [...savedAddresses];
    updatedAddresses.splice(index, 1);

    setSavedAddresses(updatedAddresses);
    localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
    toast.success('Address deleted successfully!');
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditFormData(savedAddresses[index]);
  };

  const handleEditChange = (e) => {
    setEditFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = (index) => {
    const updatedAddresses = [...savedAddresses];
    updatedAddresses[index] = editFormData;

    setSavedAddresses(updatedAddresses);
    localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
    toast.success('Address updated successfully!');
    setEditingIndex(null);
  };

  const handleSelect = (index) => {
    setSelectedAddressIndex(index);
    toast.success('Address selected!');
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Saved Addresses 📦</h2>

        {savedAddresses.length > 0 ? (
          savedAddresses.map((address, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 mb-4 rounded-lg shadow-lg w-full transition-all hover:shadow-xl ${selectedAddressIndex === index ? 'border-2 border-orange-500' : ''}`}
            >
              {editingIndex === index ? (
                <>
                  <input 
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                    placeholder="Name"
                    className="w-full mb-2 p-2 border rounded-md"
                  />
                  <input 
                    type="text"
                    name="street"
                    value={editFormData.street}
                    onChange={handleEditChange}
                    placeholder="Street"
                    className="w-full mb-2 p-2 border rounded-md"
                  />
                  <input 
                    type="text"
                    name="city"
                    value={editFormData.city}
                    onChange={handleEditChange}
                    placeholder="City"
                    className="w-full mb-2 p-2 border rounded-md"
                  />
                  <input 
                    type="text"
                    name="zip"
                    value={editFormData.zip}
                    onChange={handleEditChange}
                    placeholder="ZIP Code"
                    className="w-full mb-2 p-2 border rounded-md"
                  />
                  <input 
                    type="text"
                    name="phone"
                    value={editFormData.phone}
                    onChange={handleEditChange}
                    placeholder="Phone"
                    className="w-full mb-4 p-2 border rounded-md"
                  />

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleUpdate(index)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                    >
                      Save
                    </button>
                    <button 
                      onClick={() => setEditingIndex(null)}
                      className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {address.name}</p>
                  <p><strong>Street:</strong> {address.street}</p>
                  <p><strong>City:</strong> {address.city}</p>
                  <p><strong>ZIP Code:</strong> {address.zip}</p>
                  <p><strong>Phone:</strong> {address.phone}</p>

                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => handleSelect(index)}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
                    >
                      Select
                    </button>
                    <button 
                      onClick={() => handleEditClick(index)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(index)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700">No addresses saved yet. Please add one first.</p>
        )}

        <button 
          onClick={() => navigate('/address')}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-all duration-300"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default SaveAddress;
