import React from 'react';

const Searchbar = () => {
  return (
    <div className="min-h-20 flex justify-center items-center bg-gray-100 p-4">
      <div className="flex flex-row">
        {/* Input Field */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="border-2 border-gray-300 rounded-l-md p-2 w-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition-all duration-300"
        />
        
        {/* Search Button */}
        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-r-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
