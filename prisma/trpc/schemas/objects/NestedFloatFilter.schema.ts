import { z } from 'zod';


export const NestedFloatFilterSchemaObject = {
    equals: z.number().optional(),
  in: z.union([z.number(), z.null()]).optional(),
  notIn: z.union([z.number(), z.null()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.lazy(() => NestedFloatFilterObjectSchema)]) .optional()
};

export const NestedFloatFilterObjectSchema = z.object({
    equals: z.number().optional(),  in: z.union([z.number(), z.null()]).optional(),  notIn: z.union([z.number(), z.null()]).optional(),  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.lazy(() => NestedFloatFilterObjectSchema)]) .optional()
});
