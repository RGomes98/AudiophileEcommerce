import { type FormInitialState, validateFormAction } from '@/server-actions/validateFormAction';
import type { Checkout } from '@/lib/zod/schemas/checkout.schema';
import { useState, useEffect, useRef } from 'react';
import { useShoppingCart } from './useShoppingCart';
import { useFormState } from 'react-dom';
import { useToast } from './useToast';

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
  const { removeAllShoppingCartItems } = useShoppingCart();
  const { createToast } = useToast();

  const modalRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const createToastRef = useRef(createToast);

  const getInputError = (input: keyof Checkout) => formState.formErrors[input];
  const getInputValue = (input: keyof Checkout) => formState.formState[input];

  useEffect(() => {
    if (formState.status === 'error') createToastRef.current('error', 'Incomplete or Incorrect Form.', 3000);
    if (formState.status !== 'success') return;

    formRef.current?.reset();
    setActiveOption('eMoney');
    modalRef.current?.showModal();
  }, [formState]);

  useEffect(() => {
    const ref = modalRef.current;
    const handleEscapeKey = (event: KeyboardEvent) => {
      const { key } = event;
      if (key === 'Escape') removeAllShoppingCartItems();
    };

    ref?.addEventListener('keydown', handleEscapeKey);
    return () => ref?.removeEventListener('keydown', handleEscapeKey);
  }, [removeAllShoppingCartItems]);

  return { formRef, modalRef, activeOption, formAction, setActiveOption, getInputValue, getInputError };
};
