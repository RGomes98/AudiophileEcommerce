import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { getErrorStyles } from '@/utils/getErrorStyles';
import { FormSlice } from '../Form/Form';
import styles from './Billing.module.scss';

export const Billing = ({ getInputValue, getInputError }: FormSlice) => {
  return (
    <div className={styles.billingWrapper}>
      <span className={styles.billingHeading}>Billing Details</span>
      <ul className={styles.billingList}>
        <li className={styles.billingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('name'), styles.invalidLabel)}`}
              htmlFor='name'
            >
              Name
            </label>
            <ErrorMessage error={getInputError('name')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('name'), styles.invalidInput)}`}
            defaultValue={getInputValue('name')}
            placeholder='Alexei Ward'
            name='name'
            type='text'
          />
        </li>
        <li className={styles.billingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('email'), styles.invalidLabel)}`}
              htmlFor='email'
            >
              Email Address
            </label>
            <ErrorMessage error={getInputError('email')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('email'), styles.invalidInput)}`}
            defaultValue={getInputValue('email')}
            placeholder='alexei@mail.com'
            name='email'
            type='email'
          />
        </li>
        <li className={styles.billingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('phone'), styles.invalidLabel)}`}
              htmlFor='phone'
            >
              Phone Number
            </label>
            <ErrorMessage error={getInputError('phone')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('phone'), styles.invalidInput)}`}
            maxLength={17}
            defaultValue={getInputValue('phone')}
            placeholder='+1 202-555-0136'
            name='phone'
            type='text'
          />
        </li>
      </ul>
    </div>
  );
};
