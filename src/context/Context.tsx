'use client';

import type { ReactNode, SetStateAction, Dispatch } from 'react';
import { createContext, useState } from 'react';

type Context = {
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext({} as Context);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return <Context.Provider value={{ isDropdownActive, setIsDropdownActive }}>{children}</Context.Provider>;
};
