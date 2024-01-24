import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { getErrorStyles } from '@/utils/getErrorStyles';
import { FormSlice } from '../Form/Form';
import styles from './Shipping.module.scss';

export const Shipping = ({ getInputValue, getInputError }: FormSlice) => {
  return (
    <div className={styles.shippingWrapper}>
      <span className={styles.shippingHeading}>Shipping Info</span>
      <ul className={styles.shippingList}>
        <li className={styles.shippingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('address'), styles.invalidLabel)}`}
              htmlFor='address'
            >
              Address
            </label>
            <ErrorMessage error={getInputError('address')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('address'), styles.invalidInput)}`}
            defaultValue={getInputValue('address')}
            placeholder='1137 Williams Avenue'
            name='address'
            type='text'
          />
        </li>
        <li className={styles.shippingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('zipCode'), styles.invalidLabel)}`}
              htmlFor='zipCode'
            >
              Zip Code
            </label>
            <ErrorMessage error={getInputError('zipCode')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('zipCode'), styles.invalidInput)}`}
            maxLength={5}
            defaultValue={getInputValue('zipCode')}
            placeholder='10001'
            name='zipCode'
            type='text'
          />
        </li>
        <li className={styles.shippingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('city'), styles.invalidLabel)}`}
              htmlFor='city'
            >
              City
            </label>
            <ErrorMessage error={getInputError('city')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('city'), styles.invalidInput)}`}
            defaultValue={getInputValue('city')}
            placeholder='New York'
            name='city'
            type='text'
          />
        </li>
        <li className={styles.shippingItem}>
          <div className={styles.errorWrapper}>
            <label
              className={`${styles.label} ${getErrorStyles(getInputError('country'), styles.invalidLabel)}`}
              htmlFor='country'
            >
              Country
            </label>
            <ErrorMessage error={getInputError('country')} />
          </div>
          <input
            className={`${styles.input} ${getErrorStyles(getInputError('country'), styles.invalidInput)}`}
            defaultValue={getInputValue('country')}
            placeholder='United States'
            name='country'
            type='text'
          />
        </li>
      </ul>
    </div>
  );
};
