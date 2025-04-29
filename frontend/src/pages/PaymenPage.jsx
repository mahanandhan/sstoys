import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [toy, setToy] = useState(JSON.parse(localStorage.getItem("selectedToy"))); // Retrieve selected toy from localStorage

  const handleProceed = () => {
    if (!toy) {
      toast.error('No toy selected for checkout!');
      return;
    }

    // Get existing orders from localStorage, or initialize an empty array
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add the new order to the orders array
    const newOrder = {
      ...toy,  // Spread the toy data (image, name, price, etc.)
      status: 'Pending',  // Add status as 'Pending' by default
    };

    // Log to verify the order is being added to the array
    console.log('New Order:', newOrder);

    // Save the updated orders array back to localStorage
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Log the orders to verify it's being saved
    console.log('All Orders:', existingOrders);

    toast.success('Order placed successfully! 🎉');
    localStorage.removeItem("selectedToy");
    navigate('/orders'); // Navigate to orders page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Order Confirmation 🎉</h1>
        <div className="flex justify-center items-center mb-4">
          <img
            src={toy?.image}
            alt={toy?.name}
            className="w-32 h-32 object-cover mb-4 rounded"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{toy?.name}</h2>
            <p className="text-gray-600 text-sm">{toy?.description}</p>
            <p className="text-lg font-bold mt-2">₹{toy?.price}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">Quantity:</p>
          <p className="text-gray-700">{toy?.quantity} item(s)</p>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold">Total Price:</p>
          <p className="text-green-600 text-xl font-bold">₹{toy?.price * toy?.quantity}</p>
        </div>

        <button
          onClick={handleProceed}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
