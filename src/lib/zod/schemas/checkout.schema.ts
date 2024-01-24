import { z } from 'zod';

export const billingDetailsSchema = z.object({
  name: z.string().trim().min(1, { message: 'Required.' }),
  email: z.string().email({ message: 'Wrong email format.' }),
  phone: z.string().regex(new RegExp(/^\+\d{1,3} \d{3}-\d{3}-\d{4}$/), { message: 'Wrong phone format.' }),
});

export const shippingInfoSchema = z.object({
  address: z.string().trim().min(1, { message: 'Required.' }),
  zipCode: z.string().trim(),
  city: z.string().trim().min(1, { message: 'Required.' }),
  country: z.string().trim().min(1, { message: 'Required.' }),
});

export const paymentDetailsSchema = z.object({
  eMoney: z.string().optional(),
  cashOnDelivery: z.string().optional(),
  eMoneyNumber: z.string().trim().optional().or(z.literal('')),
  eMoneyPin: z.string().trim().optional().or(z.literal('')),
});

export const checkoutSchema = z
  .object({})
  .merge(billingDetailsSchema)
  .merge(shippingInfoSchema)
  .merge(paymentDetailsSchema)
  .superRefine(({ zipCode, eMoney, eMoneyNumber, eMoneyPin }, refinementContext) => {
    if (!Number.isInteger(Number(zipCode)) || zipCode?.length !== 5) {
      refinementContext.addIssue({
        message: 'Valid 5-digit zip code required.',
        code: z.ZodIssueCode.custom,
        path: ['zipCode'],
      });
    }

    if (eMoney === 'on' && (!Number.isInteger(Number(eMoneyNumber)) || eMoneyNumber?.length !== 9)) {
      refinementContext.addIssue({
        message: 'Valid 9-digit number required.',
        code: z.ZodIssueCode.custom,
        path: ['eMoneyNumber'],
      });
    }

    if (eMoney === 'on' && (!Number.isInteger(Number(eMoneyPin)) || eMoneyPin?.length !== 4)) {
      refinementContext.addIssue({
        message: 'Valid 4-digit PIN required.',
        code: z.ZodIssueCode.custom,
        path: ['eMoneyPin'],
      });
    }
  });

export type BilligDetails = z.infer<typeof billingDetailsSchema>;
export type ShippingInfo = z.infer<typeof shippingInfoSchema>;
export type PaymentDetails = z.infer<typeof paymentDetailsSchema>;
export type Checkout = z.infer<typeof checkoutSchema>;
