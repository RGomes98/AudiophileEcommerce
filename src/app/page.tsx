import { InteractionHub } from '@/components/InteractionHub/InteractionHub';
import { Featured } from '@/components/Featured/Featured';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Featured />
      <InteractionHub />
    </Fragment>
  );
}
