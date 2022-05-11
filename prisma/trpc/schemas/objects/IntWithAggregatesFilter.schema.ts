import { z } from 'zod';
import { NestedIntWithAggregatesFilterSchemaObject } from './NestedIntWithAggregatesFilter.schema';;
import { NestedIntWithAggregatesFilterObjectSchema } from './NestedIntWithAggregatesFilter.schema';;
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';;
import { NestedFloatFilterSchemaObject } from './NestedFloatFilter.schema';;
import { NestedFloatFilterObjectSchema } from './NestedFloatFilter.schema';

export const IntWithAggregatesFilterSchemaObject = {
    equals: z.number().optional(),
  in: z.union([z.number(), z.null()]).optional(),
  notIn: z.union([z.number(), z.null()]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.object(NestedIntWithAggregatesFilterSchemaObject)]) .optional(),
  _count: z.object(NestedIntFilterSchemaObject).optional(),
  _avg: z.object(NestedFloatFilterSchemaObject),
  _sum: z.object(NestedIntFilterSchemaObject),
  _min: z.object(NestedIntFilterSchemaObject).optional(),
  _max: z.object(NestedIntFilterSchemaObject).optional()
};

export const IntWithAggregatesFilterObjectSchema = z.object({
    equals: z.number().optional(),  in: z.union([z.number(), z.null()]).optional(),  notIn: z.union([z.number(), z.null()]).optional(),  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.object(NestedIntWithAggregatesFilterSchemaObject)]) .optional(),  _count: z.object(NestedIntFilterSchemaObject).optional(),  _avg: z.object(NestedFloatFilterSchemaObject),  _sum: z.object(NestedIntFilterSchemaObject),  _min: z.object(NestedIntFilterSchemaObject).optional(),  _max: z.object(NestedIntFilterSchemaObject).optional()
});
