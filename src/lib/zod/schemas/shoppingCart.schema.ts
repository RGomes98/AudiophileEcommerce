import { productSchema } from './product.schema';
import { z } from 'zod';

export const cartStructure = {
  itemCount: 0,
  shippingTaxAmount: 0,
  valueTaxAddedAmount: 0,
  totalAmount: 0,
  subtotalAmount: 0,
  productsList: [],
};

const quantity = z.object({
  quantity: z.number().int().nonnegative(),
});

const cartProduct = productSchema.merge(quantity);

export const shoppingCartSchema = z.object({
  itemCount: z.number().int().nonnegative(),
  shippingTaxAmount: z.number().nonnegative(),
  valueTaxAddedAmount: z.number().nonnegative(),
  totalAmount: z.number().nonnegative(),
  subtotalAmount: z.number().nonnegative(),
  productsList: z.array(cartProduct),
});

export type ShoppingCart = z.infer<typeof shoppingCartSchema>;
export type CartProduct = z.infer<typeof cartProduct>;
