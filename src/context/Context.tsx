'use client';

import type { ShoppingCart } from '@/lib/zod/schemas/shoppingCart.schema';
import type { ReactNode, SetStateAction, Dispatch } from 'react';
import { createContext, useState } from 'react';

const isLocalStorageValid = typeof localStorage !== 'undefined' ? localStorage : null;
const localStorageShoppingCart = isLocalStorageValid ? localStorage.getItem('shoppingCart') : null;

type Context = {
  shoppingCart: ShoppingCart | null;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>;
  isCartMenuOpen: boolean;
  setIsCartMenuOpen: Dispatch<SetStateAction<boolean>>;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<Context | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(
    JSON.parse(localStorageShoppingCart || String(null))
  );
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        isDropdownActive,
        setIsDropdownActive,
        isCartMenuOpen,
        setIsCartMenuOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
