import { type Product, categories } from '@/lib/zod/schemas/product.schema';
import { getAbsoluteURL } from './getAbsoluteURL';
import { redirect } from 'next/navigation';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(getAbsoluteURL('/data/products.json'));
  return await response.json();
};

const getProduct = async (categorySlug: Product['category'], productSlug: string) => {
  const data = await fetchProducts();
  const product = data.find(({ category, slug }) => category === categorySlug && slug === productSlug);
  if (!product) redirect('/');
  return product;
};

const getCategoryProducts = async (categorySlug: Product['category']) => {
  if (!categories.includes(categorySlug)) redirect('/');
  const data = await fetchProducts();
  return data
    .filter(({ category }) => category === categorySlug)
    .sort(({ new: a }, { new: b }) => Number(b) - Number(a));
};

export const fetchData = { getProduct, getCategoryProducts };
