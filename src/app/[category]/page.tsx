import { AudiophileShowcase } from '@/components/InteractionHub/AudiophileShowcase/AudiophileShowcase';
import { CategoryPanel } from '@/components/InteractionHub/CategoryPanel/CategoryPanel';
import { CategoryHeading } from '@/components/Category/CategoryHeading/CategoryHeading';
import { CategoryProduct } from '@/components/Category/CategoryProduct/CategoryProduct';
import { type Category as CategoryType, fetchData } from '@/utils/fetchData';
import { Category } from '@/components/Category/Category';
import { Fragment } from 'react';

type Params = { params: { category: CategoryType } };

export default async function Page({ params: { category } }: Params) {
  const data = await fetchData.getCategoryProducts(category);

  return (
    <Fragment>
      <CategoryHeading heading={category} />
      <Category.Container>
        {data.map(({ new: isProductNew, name, description, categoryImage, slug, category }, index) => (
          <CategoryProduct
            key={slug}
            {...Object({ index, isProductNew, name, description, categoryImage, slug, category })}
          />
        ))}
        <CategoryPanel />
        <AudiophileShowcase />
      </Category.Container>
    </Fragment>
  );
}
