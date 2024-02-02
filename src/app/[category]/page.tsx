import { AudiophileShowcase } from '@/components/InteractionHub/AudiophileShowcase/AudiophileShowcase';
import { CategoryPanel } from '@/components/InteractionHub/CategoryPanel/CategoryPanel';
import { CategoryHeading } from '@/components/Category/CategoryHeading/CategoryHeading';
import { CategoryProduct } from '@/components/Category/CategoryProduct/CategoryProduct';
import type { Product } from '@/lib/zod/schemas/product.schema';
import { Category } from '@/components/Category/Category';
import { fetchData } from '@/helpers/fetchData';
import { Fragment } from 'react';

type Params = { params: { category: Product['category'] } };

export default async function Page({ params: { category } }: Params) {
  const data = await fetchData.getCategoryProducts(category);

  return (
    <Fragment>
      <CategoryHeading heading={category} />
      <Category.Container>
        {data.map(({ new: isProductNew, name, description, categoryImage, slug, category }) => (
          <CategoryProduct
            key={slug}
            {...{ isProductNew, name, description, categoryImage, slug, category }}
          />
        ))}
        <CategoryPanel />
        <AudiophileShowcase />
      </Category.Container>
    </Fragment>
  );
}
