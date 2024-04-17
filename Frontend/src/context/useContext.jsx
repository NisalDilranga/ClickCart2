import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    }
    return [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("totalPrice") !== null
        ? JSON.parse(localStorage.getItem("totalPrice"))
        : 0;
    }
    return 0;
  });
  const [totalQuantities, setTotalQuantities] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("totalQuantities") !== null
        ? JSON.parse(localStorage.getItem("totalQuantities"))
        : 0;
    }
    return 0;
  });

  // Add to cart
  const onAdd = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      product.quantity = quantity;
      cartItems.push(product);
    }
    setCartItems([...cartItems]);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  };

  // Remove item from cart
  const onRemove = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updatedCartItems);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - product.price * product.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - product.quantity
    );
  };

  // Toggle cart item quantity
  const toggleCartItemQuantity = (id, value) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        if (value === "inc") {
          item.quantity += 1;
        } else if (value === "dec" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCartItems);
    updateTotalPriceAndQuantities();
  };

  // Update total price and quantities
  const updateTotalPriceAndQuantities = () => {
    let updatedTotalPrice = 0;
    let updatedTotalQuantities = 0;

    cartItems.forEach((item) => {
      updatedTotalPrice += item.price * item.quantity;
      updatedTotalQuantities += item.quantity;
    });

    setTotalPrice(updatedTotalPrice);
    setTotalQuantities(updatedTotalQuantities);
  };

  // Update local storage when cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
  }, [cartItems, totalPrice, totalQuantities]);

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
