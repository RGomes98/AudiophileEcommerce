import { z } from 'zod';

export const image = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
  cart: z.string(),
});

export const categoryImage = image.omit({
  cart: true,
});

export const include = z.object({
  quantity: z.number(),
  item: z.string(),
});

export const gallery = z.object({
  first: categoryImage,
  second: categoryImage,
  third: categoryImage,
});

export const other = z.object({
  slug: z.string(),
  name: z.string(),
  image: categoryImage,
});

export const product = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: image,
  category: z.string(),
  categoryImage: categoryImage,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(include),
  gallery: gallery,
  others: z.array(other),
});

export type CategoryImage = z.infer<typeof categoryImage>;
export type ProductImage = z.infer<typeof image>;
export type Include = z.infer<typeof include>;
export type Gallery = z.infer<typeof gallery>;
export type Product = z.infer<typeof product>;
export type Other = z.infer<typeof other>;
