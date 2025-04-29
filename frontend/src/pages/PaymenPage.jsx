import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [toy, setToy] = useState(JSON.parse(localStorage.getItem('selectedToy')));
  const [address, setAddress] = useState(JSON.parse(localStorage.getItem('selectedAddress')));

  const handleProceed = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      ...toy,
      status: 'Pending',
      address: address || {}
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    toast.success('Order placed!');
    localStorage.removeItem('selectedToy');
    localStorage.removeItem('selectedAddress');
    navigate('/orders');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Confirm Your Order ✅</h2>

        {toy ? (
          <div className="mb-6">
            <img
              src={toy.image}
              alt={toy.name}
              className="w-48 h-48 ml-30 object-cover"
            />
            <p><strong>Toy:</strong> {toy.name}</p>
            <p><strong>Price:</strong> ₹{toy.price}</p>
          </div>
        ) : (
          <p className="text-red-500">No toy selected.</p>
        )}

        <div className="mb-6">
          <h2 className="text-lg font-semibold">Shipping Address:</h2>
          {address ? (
            <div className="text-gray-800">
              <p><strong>Name:</strong> {address.name}</p>
              <p><strong>Street:</strong> {address.street}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>ZIP:</strong> {address.zip}</p>
              <p><strong>Phone:</strong> {address.phone}</p>
            </div>
          ) : (
            <p className="text-red-500">No address selected.</p>
          )}
        </div>

        <button
          onClick={handleProceed}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-all duration-300"
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
