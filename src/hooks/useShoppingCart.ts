import { type ShoppingCart, shoppingCartSchema } from '@/lib/zod/schemas/shoppingCart.schema';
import type { Product } from '@/lib/zod/schemas/product.schema';
import { createShoppingCart } from '@/utils/createShoppingCart';
import { useAudiophileContext } from './useAudiophileContext';

export const useShoppingCart = () => {
  const { shoppingCart, setShoppingCart } = useAudiophileContext();
  const isShoppingCartValid = shoppingCartSchema.safeParse(shoppingCart);

  if (!isShoppingCartValid.success) {
    createShoppingCart(setShoppingCart);
    return {};
  }

  const { data: validShoppingCart } = isShoppingCartValid;

  const getShoppingCartSubtotal = (shoppingCart: ShoppingCart) => {
    return shoppingCart.productsList.reduce((subtotal, { price, quantity }) => {
      return (subtotal += price * quantity);
    }, 0);
  };

  const getShoppingCartShippingTax = (itemCount: number) => {
    const isShoppingCartEmpty = itemCount <= 0;
    return isShoppingCartEmpty ? 0 : 50;
  };

  const getShoppingValueTaxAdded = (subtotal: number) => {
    const TWENTY_PERCENT = 0.2;
    return subtotal * TWENTY_PERCENT;
  };

  const updateShoppingCart = (shoppingCart: ShoppingCart) => {
    const subtotalAmount = getShoppingCartSubtotal(shoppingCart);
    const itemCount = shoppingCart.productsList.length;

    const shippingTaxAmount = getShoppingCartShippingTax(itemCount);
    const valueTaxAddedAmount = getShoppingValueTaxAdded(subtotalAmount);
    const totalAmount = subtotalAmount + shippingTaxAmount + valueTaxAddedAmount;

    shoppingCart.valueTaxAddedAmount = valueTaxAddedAmount;
    shoppingCart.shippingTaxAmount = shippingTaxAmount;
    shoppingCart.subtotalAmount = subtotalAmount;
    shoppingCart.totalAmount = totalAmount;
    shoppingCart.itemCount = itemCount;

    setShoppingCart(shoppingCart);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  };

  const incrementShoppingCartItem = (product: Product, quantity: number) => {
    const cartProduct = validShoppingCart.productsList.find(({ id }) => product.id === id);

    if (cartProduct) cartProduct.quantity += quantity;
    else validShoppingCart.productsList.push({ ...product, quantity });

    updateShoppingCart(validShoppingCart);
  };

  const decrementShoppingCartItem = (product: Product) => {
    const cartProduct = validShoppingCart.productsList.find(({ id }) => product.id === id);
    if (!cartProduct) return;

    const productList = validShoppingCart.productsList.filter(({ id }) => cartProduct.id !== id);
    if (cartProduct.quantity > 1) cartProduct.quantity -= 1;
    else validShoppingCart.productsList = productList;

    updateShoppingCart(validShoppingCart);
  };

  const removeAllShoppingCartItems = () => {
    validShoppingCart.productsList = [];
    updateShoppingCart(validShoppingCart);
  };

  return {
    validShoppingCart,
    incrementShoppingCartItem,
    decrementShoppingCartItem,
    removeAllShoppingCartItems,
  };
};
