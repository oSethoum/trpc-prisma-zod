import { z } from 'zod';
import { NestedStringWithAggregatesFilterSchemaObject } from './NestedStringWithAggregatesFilter.schema';;
import { NestedStringWithAggregatesFilterObjectSchema } from './NestedStringWithAggregatesFilter.schema';;
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';;
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema';;
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema';

export const StringWithAggregatesFilterSchemaObject = {
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
z.object(NestedStringWithAggregatesFilterSchemaObject)]) .optional(),
  _count: z.object(NestedIntFilterSchemaObject).optional(),
  _min: z.object(NestedStringFilterSchemaObject).optional(),
  _max: z.object(NestedStringFilterSchemaObject).optional()
};

export const StringWithAggregatesFilterObjectSchema = z.object({
    equals: z.string().optional(),  in: z.union([z.string(), z.null()]).optional(),  notIn: z.union([z.string(), z.null()]).optional(),  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.object(NestedStringWithAggregatesFilterSchemaObject)]) .optional(),  _count: z.object(NestedIntFilterSchemaObject).optional(),  _min: z.object(NestedStringFilterSchemaObject).optional(),  _max: z.object(NestedStringFilterSchemaObject).optional()
});
