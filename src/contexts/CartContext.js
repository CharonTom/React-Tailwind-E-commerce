import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //amount state
  const [amountItem, setAmountItem] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumaltor, currentItem) => {
      return accumaltor + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumaltor, currentItem) => {
        return accumaltor + currentItem.amount;
      }, 0);
      setAmountItem(amount);
    }
  }, [cart]);

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
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
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
        amountItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
