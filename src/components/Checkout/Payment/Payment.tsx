import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { getErrorStyles } from '@/utils/getErrorStyles';
import type { Dispatch, SetStateAction } from 'react';
import type { Option } from '@/hooks/useCheckoutForm';
import type { FormSlice } from '../Form/Form';
import styles from './Payment.module.scss';
import Image from 'next/image';

type Payment = FormSlice & { activeOption: Option; setActiveOption: Dispatch<SetStateAction<Option>> };

export const Payment = ({ activeOption, setActiveOption, getInputValue, getInputError }: Payment) => {
  return (
    <div className={styles.paymentWrapper}>
      <span className={styles.paymentHeading}>Payment Details</span>
      <div className={styles.checkboxWrapper}>
        <span className={styles.checkboxHeading}>Payment Method</span>
        <ul className={styles.checkboxList}>
          <li className={styles.checkboxItem} onClick={() => setActiveOption('eMoney')}>
            <input
              className={styles.checkbox}
              checked={activeOption === 'eMoney'}
              name='eMoney'
              type='checkbox'
              readOnly
            />
            <label className={styles.checkboxLabel} htmlFor='eMoney'>
              e-Money
            </label>
          </li>
          <li className={styles.checkboxItem} onClick={() => setActiveOption('cashOnDelivery')}>
            <input
              className={styles.checkbox}
              checked={activeOption === 'cashOnDelivery'}
              name='cashOnDelivery'
              type='checkbox'
              readOnly
            />
            <label className={styles.checkboxLabel} htmlFor='cashOnDelivery'>
              Cash on Delivery
            </label>
          </li>
        </ul>
      </div>
      {activeOption === 'eMoney' ? (
        <ul className={styles.eMoneyList}>
          <li className={styles.eMoneyItem}>
            <div className={styles.errorWrapper}>
              <label
                className={`${styles.label} ${getErrorStyles(
                  getInputError('eMoneyNumber'),
                  styles.invalidLabel
                )}`}
                htmlFor='eMoneyNumber'
              >
                e-Money Number
              </label>
              <ErrorMessage error={getInputError('eMoneyNumber')} />
            </div>
            <input
              className={`${styles.input} ${getErrorStyles(
                getInputError('eMoneyNumber'),
                styles.invalidInput
              )}`}
              maxLength={9}
              defaultValue={getInputValue('eMoneyNumber')}
              placeholder='238521993'
              inputMode='numeric'
              name='eMoneyNumber'
              type='text'
            />
          </li>
          <li className={styles.eMoneyItem}>
            <div className={styles.errorWrapper}>
              <label
                className={`${styles.label} ${getErrorStyles(
                  getInputError('eMoneyPin'),
                  styles.invalidLabel
                )}`}
                htmlFor='eMoneyPin'
              >
                e-Money PIN
              </label>
              <ErrorMessage error={getInputError('eMoneyPin')} />
            </div>
            <input
              className={`${styles.input} ${getErrorStyles(getInputError('eMoneyPin'), styles.invalidInput)}`}
              maxLength={4}
              defaultValue={getInputValue('eMoneyPin')}
              placeholder='6891'
              inputMode='numeric'
              name='eMoneyPin'
              type='text'
            />
          </li>
        </ul>
      ) : (
        <div className={styles.cashWrapper}>
          <Image
            className={styles.cashImage}
            src='/assets/icons/icon-cash-on-delivery.svg'
            alt='cash-on-delivery-icon'
            width={48}
            height={48}
          />
          <p className={styles.cashText}>
            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
            residence. Just make sure your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};
