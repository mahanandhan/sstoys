import React from 'react';
import toys from '../toys';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ToyItems = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (toy) => {
    addToCart(toy);
    toast.success(`${toy.name} added to cart! 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Toys Collection 🎁</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {toys.map((toy) => (
          <div key={toy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src={toy.image} 
              alt={toy.name} 
              className="w-56 h-48 ml-30 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{toy.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{toy.description}</p>
              <p className="text-lg font-semibold mt-3">₹{toy.price}</p>
              <button
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                onClick={() => handleAddToCart(toy)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyItems;
