type SliceKey = keyof typeof initialSlices;
type Slices = Record<SliceKey, number[]>;

const initialSlices = { first: [1], second: [1, 4], third: [4, 7], fourth: [7] };

export const formatPhoneNumber = (input: string) => {
  const ONE_DIGIT_COUNTRY_CODE_PHONE_LENGTH = 11;
  const phone = input.replace(/\D/g, '');

  const { first, second, third, fourth } = (Object.keys(initialSlices) as SliceKey[]).reduce((obj, key) => {
    obj[key] = initialSlices[key].map((n) => (n += phone.length - ONE_DIGIT_COUNTRY_CODE_PHONE_LENGTH));
    return obj;
  }, {} as Slices);

  const firstSlice = phone.length <= 11 ? phone.slice(0, 1) : phone.slice(0, first[0]);
  const secondSlice = phone.length <= 11 ? phone.slice(1, 4) : phone.slice(second[0], second[1]);
  const thirdSlice = phone.length <= 11 ? phone.slice(4, 7) : phone.slice(third[0], third[1]);
  const fourthSlice = phone.length <= 11 ? phone.slice(7) : phone.slice(fourth[0]);

  if (phone.length > 7) return `+${firstSlice} ${secondSlice}-${thirdSlice}-${fourthSlice}`;
  if (phone.length > 4) return `+${firstSlice} ${secondSlice}-${thirdSlice}`;
  if (phone.length > 1) return `+${firstSlice} ${secondSlice}`;
  if (phone.length > 0) return `+${firstSlice}`;
  return '';
};
