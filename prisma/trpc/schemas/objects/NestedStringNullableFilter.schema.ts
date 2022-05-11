import { z } from 'zod';


export const NestedStringNullableFilterSchemaObject = {
    equals: z.string() ,
  in: z.array(z.string()) ,
  notIn: z.array(z.string()) ,
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(),
z.lazy(() => NestedStringNullableFilterObjectSchema)]) .optional()
};

export const NestedStringNullableFilterObjectSchema = z.object({
    equals: z.string() ,  in: z.array(z.string()) ,  notIn: z.array(z.string()) ,  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.lazy(() => NestedStringNullableFilterObjectSchema)]) .optional()
});
