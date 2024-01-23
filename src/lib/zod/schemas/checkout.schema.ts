import { z } from 'zod';

export const billingDetailsSchema = z.object({
  name: z.string().trim().min(1, { message: 'Required.' }),
  email: z.string().email({ message: 'Wrong format.' }),
  phone: z.string().regex(new RegExp(/^\+\d{1,3} \d{3}-\d{3}-\d{4}$/), { message: 'Wrong format.' }),
});

export const shippingInfoSchema = z.object({
  address: z.string().trim().min(1, { message: 'Required.' }),
  zipCode: z.string().trim().length(5, { message: 'Please enter a valid 5-digit zip code.' }),
  city: z.string().trim().min(1, { message: 'Required.' }),
  country: z.string().trim().min(1, { message: 'Required.' }),
});

export const paymentDetailsSchema = z.object({
  eMoney: z.string().optional(),
  cashOnDelivery: z.string().optional(),
  eMoneyNumber: z
    .string()
    .trim()
    .length(9, { message: 'Valid 9-digit e-Money Number required.' })
    .optional()
    .or(z.literal('')),
  eMoneyPin: z
    .string()
    .trim()
    .length(4, { message: 'Valid 4-digit e-Money PIN required.' })
    .optional()
    .or(z.literal('')),
});

export const checkoutSchema = z
  .object({})
  .merge(billingDetailsSchema)
  .merge(shippingInfoSchema)
  .merge(paymentDetailsSchema)
  .superRefine(({ eMoney, eMoneyNumber, eMoneyPin }, refinementContext) => {
    if (eMoney === 'on' && !eMoneyNumber) {
      refinementContext.addIssue({
        message: 'Required.',
        code: z.ZodIssueCode.custom,
        path: ['eMoneyNumber'],
      });
    }

    if (eMoney === 'on' && !eMoneyPin) {
      refinementContext.addIssue({
        message: 'Required.',
        code: z.ZodIssueCode.custom,
        path: ['eMoneyPin'],
      });
    }
  });

export type BilligDetails = z.infer<typeof billingDetailsSchema>;
export type ShippingInfo = z.infer<typeof shippingInfoSchema>;
export type PaymentDetails = z.infer<typeof paymentDetailsSchema>;
export type Checkout = z.infer<typeof checkoutSchema>;
