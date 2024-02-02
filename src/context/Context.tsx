'use client';

import { type ShoppingCart } from '@/lib/zod/schemas/shoppingCart.schema';
import { validateShoppingCart } from '@/helpers/validateShoppingCart';
import type { ReactNode, SetStateAction, Dispatch } from 'react';
import { createContext, useState } from 'react';
import type { Toast } from '@/hooks/useToast';

type Context = {
  toasts: Toast[];
  setToasts: Dispatch<SetStateAction<Toast[]>>;
  shoppingCart: ShoppingCart;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart>>;
  isCartMenuOpen: boolean;
  setIsCartMenuOpen: Dispatch<SetStateAction<boolean>>;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<Context | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(validateShoppingCart());
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  return (
    <Context.Provider
      value={{
        toasts,
        setToasts,
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
