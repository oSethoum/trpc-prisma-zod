import { z } from 'zod';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema';;
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema';

export const StringFilterSchemaObject = {
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
z.object(NestedStringFilterSchemaObject)]) .optional()
};

export const StringFilterObjectSchema = z.object({
    equals: z.string().optional(),  in: z.union([z.string(), z.null()]).optional(),  notIn: z.union([z.string(), z.null()]).optional(),  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.object(NestedStringFilterSchemaObject)]) .optional()
});
