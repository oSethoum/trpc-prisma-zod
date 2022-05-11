import { z } from 'zod';


export const NestedFloatNullableFilterSchemaObject = {
    equals: z.number() ,
  in: z.array(z.number()) ,
  notIn: z.array(z.number()) ,
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.lazy(() => NestedFloatNullableFilterObjectSchema)]) .optional()
};

export const NestedFloatNullableFilterObjectSchema = z.object({
    equals: z.number() ,  in: z.array(z.number()) ,  notIn: z.array(z.number()) ,  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.lazy(() => NestedFloatNullableFilterObjectSchema)]) .optional()
});
