import { z } from 'zod';


export const NestedStringFilterSchemaObject = {
    equals: z.string().optional(),
  in: z.union([z.string(), z.null()]).optional(),
  notIn: z.union([z.string(), z.null()]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(),
z.lazy(() => NestedStringFilterObjectSchema)]) .optional()
};

export const NestedStringFilterObjectSchema = z.object({
    equals: z.string().optional(),  in: z.union([z.string(), z.null()]).optional(),  notIn: z.union([z.string(), z.null()]).optional(),  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.lazy(() => NestedStringFilterObjectSchema)]) .optional()
});
