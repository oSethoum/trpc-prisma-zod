import { z } from 'zod';


export const NestedIntFilterSchemaObject = {
    equals: z.number().optional(),
  in: z.union([z.number(), z.null()]).optional(),
  notIn: z.union([z.number(), z.null()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.lazy(() => NestedIntFilterObjectSchema)]) .optional()
};

export const NestedIntFilterObjectSchema = z.object({
    equals: z.number().optional(),  in: z.union([z.number(), z.null()]).optional(),  notIn: z.union([z.number(), z.null()]).optional(),  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.lazy(() => NestedIntFilterObjectSchema)]) .optional()
});
