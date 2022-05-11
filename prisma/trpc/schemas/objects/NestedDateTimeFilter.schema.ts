import { z } from 'zod';


export const NestedDateTimeFilterSchemaObject = {
    equals: z.date().optional(),
  in: z.union([z.date(), z.null()]).optional(),
  notIn: z.union([z.date(), z.null()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.lazy(() => NestedDateTimeFilterObjectSchema) .optional()
};

export const NestedDateTimeFilterObjectSchema = z.object({
    equals: z.date().optional(),  in: z.union([z.date(), z.null()]).optional(),  notIn: z.union([z.date(), z.null()]).optional(),  lt: z.date().optional(),  lte: z.date().optional(),  gt: z.date().optional(),  gte: z.date().optional(),  not: z.lazy(() => NestedDateTimeFilterObjectSchema) .optional()
});
