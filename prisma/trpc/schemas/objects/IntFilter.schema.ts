import { z } from 'zod';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';

export const IntFilterSchemaObject = {
    equals: z.number().optional(),
  in: z.union([z.number(), z.null()]).optional(),
  notIn: z.union([z.number(), z.null()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.object(NestedIntFilterSchemaObject)]) .optional()
};

export const IntFilterObjectSchema = z.object({
    equals: z.number().optional(),  in: z.union([z.number(), z.null()]).optional(),  notIn: z.union([z.number(), z.null()]).optional(),  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.object(NestedIntFilterSchemaObject)]) .optional()
});
