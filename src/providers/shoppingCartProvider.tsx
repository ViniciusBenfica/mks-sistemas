'use client';

import { useState, createContext, useContext } from 'react';
import { IProduct } from '../types/IProduct';

interface ICart {
  product: IProduct;
  quantity: number;
}

interface ÍCartContextProps {
  cartItems: ICart[];
  setCartItems: React.Dispatch<React.SetStateAction<ICart[]>>;
  addItem: (item: IProduct) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  updateItemQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
  getCartTotalItems: () => number;
  getCartTotal: () => number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ÍCartContextProps);

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  const addItem = (item: IProduct) => {
    setCartItems((oldItems) => {
      const existingItem = oldItems.find(
        (cartItem) => cartItem.product.id === item.id,
      );

      if (existingItem) {
        return oldItems.map((cartItem) =>
          cartItem.product.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...oldItems, { product: item, quantity: 1 }];
    });
  };

  const incrementItem = (id: number) => {
    setCartItems((oldItems) =>
      oldItems.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decrementItem = (id: number) => {
    setCartItems((oldItems) =>
      oldItems.map((item) =>
        item.product.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item,
      ),
    );
  };

  const updateItemQuantity = (id: number, newQuantity: number) => {
    setCartItems((oldItems) =>
      oldItems.map((item) =>
        item.product.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((oldItems) =>
      oldItems.filter((item) => item.product.id !== id),
    );
  };

  const getCartTotalItems = () => {
    return cartItems.reduce(
      (totalItens, item) => totalItens + item.quantity,
      0,
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + +item.product.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        incrementItem,
        decrementItem,
        updateItemQuantity,
        removeItem,
        getCartTotal,
        getCartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
