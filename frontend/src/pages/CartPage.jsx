import React from 'react';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (id) => {
    const toy = cart.find(item => item.id === id);
    if (toy) {
      // Ensure quantity is a valid number and increment it
      updateQuantity(id, toy.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (id) => {
    const toy = cart.find(item => item.id === id);
    if (toy && toy.quantity > 1) {
      // Ensure quantity doesn't go below 1
      updateQuantity(id, toy.quantity - 1);
    }
  };

  const handleBuy = (toy) => {
    localStorage.setItem('selectedToy', JSON.stringify(toy));
    toast.success(`Selected ${toy.name} for checkout! 🚀`);
    navigate('/address');
  };

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart! ❌`);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart 🛒</h1>

      <div className="text-center text-lg mb-6">
        Total Items in Cart: <span className="font-bold">{totalItems}</span>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cart.map((toy) => (
            <div key={toy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src={toy.image} 
                alt={toy.name} 
                className="w-56 ml-30 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{toy.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{toy.description}</p>
                <p className="text-lg font-semibold mt-3">₹{toy.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-3">
                  <button
                    className="bg-gray-300 text-black py-1 px-3 rounded-md mr-2"
                    onClick={() => handleDecreaseQuantity(toy.id)}
                  >
                    -
                  </button>
                  <span className="text-lg">{toy.quantity || 0}</span>  {/* Ensure quantity is a valid number */}
                  <button
                    className="bg-gray-300 text-black py-1 px-3 rounded-md ml-2"
                    onClick={() => handleIncreaseQuantity(toy.id)}
                  >
                    +
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex mt-4 gap-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex-1 transition-all duration-300"
                    onClick={() => handleRemove(toy.id, toy.name)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex-1 transition-all duration-300"
                    onClick={() => handleBuy(toy)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
