import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const navigate = useNavigate();

  // Get all orders from localStorage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <p className="text-xl font-semibold text-gray-800">No orders found.</p>
        <button
          onClick={() => navigate('/cart')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Go Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Orders 🎉</h1>

      <div className="w-full max-w-md">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-center items-center mb-4">
              <img
                src={order.image}
                alt={order.name}
                className="w-32 h-32 object-cover mb-4 rounded"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{order.name}</h2>
                <p className="text-gray-600 text-sm">{order.description}</p>
                <p className="text-lg font-bold mt-2">₹{order.price}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Quantity:</p>
              <p className="text-gray-700">{order.quantity} item(s)</p>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Total Price:</p>
              <p className="text-green-600 text-xl font-bold">₹{order.price * order.quantity}</p>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Status:</p>
              <p className="text-yellow-600 font-semibold">{order.status}</p>
            </div>

            {order.address && (
              <div className="mb-4">
                <p className="text-lg font-semibold">Delivery Address:</p>
                <p className="text-gray-700">{order.address.name}</p>
                <p className="text-gray-700">{order.address.phone}</p>
                <p className="text-gray-700">{order.address.street}</p>
                <p className="text-gray-700">{order.address.city} - {order.address.pincode}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/home')}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrdersPage;
