'use server';

import { type Checkout, checkoutSchema } from '@/lib/zod/schemas/checkout.schema';

export type FormInitialState = {
  status: undefined | 'success' | 'error';
  formErrors: Record<string, string>;
  formState: Checkout;
};

export const validateFormAction = async (formInitialState: FormInitialState, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());
  const parsedForm = checkoutSchema.safeParse(form);

  if (!parsedForm.success) {
    const { issues } = parsedForm.error;

    const errors = issues.reduce<FormInitialState['formErrors']>((obj, { path, message }) => {
      const [errorPath] = path;
      obj[errorPath] = message;

      return obj;
    }, {});

    return {
      formState: {
        name: String(form.name),
        email: String(form.email),
        phone: String(form.phone),
        address: String(form.address),
        zipCode: String(form.zipCode),
        city: String(form.city),
        country: String(form.country),
        eMoney: String(form.eMoneySelect),
        cashOnDelivery: String(form.cashOnDeliverySelect),
        eMoneyNumber: String(form.eMoneyNumber),
        eMoneyPin: String(form.eMoneyPin),
      },
      status: 'error' as const,
      formErrors: errors,
    };
  }

  const { data: formState } = parsedForm;
  const formKeys = Object.keys(formState) as Array<keyof FormInitialState['formState']>;

  const resetedFormState = formKeys.reduce((obj, key) => {
    obj[key] = '';
    return obj;
  }, {} as FormInitialState['formState']);

  return {
    formState: resetedFormState,
    status: 'success' as const,
    formErrors: {},
  };
};
