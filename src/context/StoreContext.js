// src/context/StoreContext.js
import React, { createContext, useState, useEffect } from 'react';

// Sample watch data
const luxuryWatchesData = [
  {
    id: 1,
    name: "Royal Oak Chronograph",
    price: 24500,
    image: "/api/placeholder/400/400",
    shortDescription: "Iconic octagonal bezel with 'tapisserie' dial pattern",
    description: "The Royal Oak Chronograph continues to be one of the most sought-after luxury sport watches.",
    features: [
      "Self-winding chronograph movement",
      "41mm stainless steel case",
      "Water resistant to 50m",
      "Sapphire crystal case back",
      "Blue 'Grande Tapisserie' dial"
    ]
  }
];

const smartWatchesData = [
  {
    id: 101,
    name: "Ultimate Pro 5",
    price: 799,
    image: "/api/placeholder/400/400",
    shortDescription: "Advanced health monitoring with premium design",
    description: "The Ultimate Pro 5 combines sophisticated health sensors with a premium titanium design.",
    features: [
      "Always-on OLED display",
      "Titanium case with sapphire crystal",
      "Advanced health monitoring suite",
      "5-day battery life",
      "5ATM water resistance"
    ]
  }
];

// Create the context
export const StoreContext = createContext();

// Context provider
export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse saved cart from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === product.id);
      if (index >= 0) {
        const updated = [...prev];
        updated[index].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        luxuryWatches: luxuryWatchesData,
        smartWatches: smartWatchesData,
        cartItems,
        cartItemCount,
        addToCart,
        updateQuantity,
        removeFromCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
