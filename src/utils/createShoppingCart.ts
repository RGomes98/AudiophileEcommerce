import { type ShoppingCart, cartStructure } from '@/lib/zod/schemas/shoppingCart.schema';
import { Dispatch, SetStateAction } from 'react';

export const createShoppingCart = (setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>) => {
  const isLocalStorageValid = typeof localStorage !== 'undefined' ? localStorage : null;

  if (isLocalStorageValid) {
    setShoppingCart(cartStructure);
    localStorage.setItem('shoppingCart', JSON.stringify(cartStructure));
  }
};
