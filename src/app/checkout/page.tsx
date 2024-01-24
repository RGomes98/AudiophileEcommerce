import { BackButton } from '@/components/Product/BackButton/BackButton';
import { Checkout } from '../../components/Checkout/Checkout';
import { Form } from '@/components/Checkout/Form/Form';

export default function Page() {
  return (
    <Checkout.Container>
      <BackButton />
      <Form />
    </Checkout.Container>
  );
}
