import { cartStructure, shoppingCartSchema } from '@/lib/zod/schemas/shoppingCart.schema';

export const validateShoppingCart = () => {
  const isLocalStorageValid = typeof localStorage !== 'undefined' ? localStorage : null;
  if (!isLocalStorageValid) return cartStructure;

  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || String(null));
  const validShoppingCart = shoppingCartSchema.safeParse(shoppingCart);

  if (!validShoppingCart.success) {
    localStorage.setItem('shoppingCart', JSON.stringify(cartStructure));
    return cartStructure;
  }

  return validShoppingCart.data;
};
