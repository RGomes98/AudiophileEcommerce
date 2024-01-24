import { type FormInitialState, validateFormAction } from '@/server-actions/validateFormAction';
import type { Checkout } from '@/lib/zod/schemas/checkout.schema';
import { useState, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

export type Option = 'eMoney' | 'cashOnDelivery';

const formInitialState: FormInitialState = {
  status: undefined,
  formState: {
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    eMoney: '',
    cashOnDelivery: '',
    eMoneyNumber: '',
    eMoneyPin: '',
  },
  formErrors: {},
};

export const useCheckoutForm = () => {
  const [formState, formAction] = useFormState(validateFormAction, formInitialState);
  const [activeOption, setActiveOption] = useState<Option>('eMoney');

  const formRef = useRef<HTMLFormElement>(null);

  const getInputError = (input: keyof Checkout) => formState.formErrors[input];
  const getInputValue = (input: keyof Checkout) => formState.formState[input];

  useEffect(() => {
    if (formState.status !== 'success') return;
    formRef.current?.reset();
    setActiveOption('eMoney');
  }, [formState]);

  return { formRef, activeOption, formAction, setActiveOption, getInputValue, getInputError };
};
