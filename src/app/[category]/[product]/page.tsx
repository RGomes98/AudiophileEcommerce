import { AudiophileShowcase } from '@/components/InteractionHub/AudiophileShowcase/AudiophileShowcase';
import { RecommendedProducts } from '@/components/Product/RecommendedProducts/RecommendedProducts';
import { ProductDescription } from '@/components/Product/ProductDescription/ProductDescription';
import { CategoryPanel } from '@/components/InteractionHub/CategoryPanel/CategoryPanel';
import { ProductGallery } from '@/components/Product/ProductGallery/ProductGallery';
import { ProductDetails } from '@/components/Product/ProductDetails/ProductDetails';
import type { Product as ProductType } from '@/lib/zod/schemas/product.schema';
import { Product } from '@/components/Product/Product';
import { fetchData } from '@/utils/fetchData';

type Params = { params: { category: ProductType['category']; product: string } };

export default async function Page({ params: { category: categorySlug, product: productSlug } }: Params) {
  const product = await fetchData.getProduct(categorySlug, productSlug);

  const {
    image,
    name,
    description,
    price,
    id,
    new: isProductNew,
    features,
    includes,
    gallery: { first, second, third },
    others: recommendedProducts,
  } = product;

  return (
    <Product.Container>
      <ProductDescription {...{ image, name, description, price, id, isProductNew, product }} />
      <ProductDetails {...{ features, includes }} />
      <ProductGallery {...{ first, second, third }} />
      <RecommendedProducts {...{ recommendedProducts }} />
      <CategoryPanel />
      <AudiophileShowcase />
    </Product.Container>
  );
}
