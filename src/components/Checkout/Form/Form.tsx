'use client';

import type { Checkout } from '@/lib/zod/schemas/checkout.schema';
import { useCheckoutForm } from '@/hooks/useCheckoutForm';
import { Shipping } from '../Shipping/Shipping';
import { Payment } from '../Payment/Payment';
import { Billing } from '../Billing/Billing';
import { Summary } from '../Summary/Summary';
import { Modal } from '../Modal/Modal';
import { Fragment } from 'react';
import styles from './Form.module.scss';

export type FormSlice = {
  getInputValue: (input: keyof Checkout) => string | undefined;
  getInputError: (input: keyof Checkout) => string;
};

export const Form = () => {
  const { formRef, modalRef, activeOption, formAction, getInputValue, getInputError, setActiveOption } =
    useCheckoutForm();

  return (
    <Fragment>
      <Modal modalRef={modalRef} />
      <form className={styles.form} action={formAction} ref={formRef}>
        <div className={styles.mainWrapper}>
          <h3 className={styles.heading}>Checkout</h3>
          <div className={styles.formSlices}>
            <Billing {...{ getInputValue, getInputError }} />
            <Shipping {...{ getInputValue, getInputError }} />
            <Payment {...{ activeOption, setActiveOption, getInputValue, getInputError }} />
          </div>
        </div>
        <Summary />
      </form>
    </Fragment>
  );
};
