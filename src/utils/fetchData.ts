import { Product } from '@/lib/zod/schemas/product.schema';
import { getAbsoluteURL } from './getAbsoluteURL';
import { redirect } from 'next/navigation';

const categories = ['headphones', 'speakers', 'earphones'] as const;
export type Category = (typeof categories)[number];

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(getAbsoluteURL('/data/products.json'));
  return await response.json();
};

const getProduct = async (categorySlug: Category, productSlug: string) => {
  const data = await fetchProducts();
  const product = data.find(({ category, slug }) => category === categorySlug && slug === productSlug);
  if (!product) redirect('/');
  return product;
};

const getCategoryProducts = async (categorySlug: Category) => {
  if (!categories.includes(categorySlug)) redirect('/');
  const data = await fetchProducts();
  return data.filter(({ category }) => category === categorySlug);
};

export const fetchData = { getProduct, getCategoryProducts };
