import { z } from 'zod';


export const NestedIntNullableFilterSchemaObject = {
    equals: z.number() ,
  in: z.array(z.number()) ,
  notIn: z.array(z.number()) ,
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.lazy(() => NestedIntNullableFilterObjectSchema)]) .optional()
};

export const NestedIntNullableFilterObjectSchema = z.object({
    equals: z.number() ,  in: z.array(z.number()) ,  notIn: z.array(z.number()) ,  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.lazy(() => NestedIntNullableFilterObjectSchema)]) .optional()
});
