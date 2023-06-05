import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    addToCart(id, cartItem);
  };
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      console.log("yo");
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
