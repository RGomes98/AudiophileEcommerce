import { z } from 'zod';

export const categories = ['headphones', 'speakers', 'earphones'] as const;

export const imageSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
  cart: z.string(),
});

export const categoryImageSchema = imageSchema.omit({
  cart: true,
});

export const includeSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});

export const gallerySchema = z.object({
  first: categoryImageSchema,
  second: categoryImageSchema,
  third: categoryImageSchema,
});

export const otherSchema = z.object({
  slug: z.string(),
  name: z.string(),
  image: categoryImageSchema,
  category: z.enum(categories),
});

export const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  image: imageSchema,
  category: z.enum(categories),
  categoryImage: categoryImageSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(includeSchema),
  gallery: gallerySchema,
  others: z.array(otherSchema),
});

export type CategoryImage = z.infer<typeof categoryImageSchema>;
export type ProductImage = z.infer<typeof imageSchema>;
export type Include = z.infer<typeof includeSchema>;
export type Gallery = z.infer<typeof gallerySchema>;
export type Product = z.infer<typeof productSchema>;
export type Other = z.infer<typeof otherSchema>;
