import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.originalId === product.id);

    if (existingProduct) {
      updateQuantity(existingProduct.id, existingProduct.quantity + 1);
    } else {
      const newItem = {
        ...product,
        originalId: product.id, // to track real product ID
        id: new Date().getTime(), // unique internal ID
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) quantity = 1;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
