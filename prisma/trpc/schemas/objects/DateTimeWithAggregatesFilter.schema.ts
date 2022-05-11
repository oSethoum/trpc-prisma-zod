import { z } from 'zod';
import { NestedDateTimeWithAggregatesFilterSchemaObject } from './NestedDateTimeWithAggregatesFilter.schema';;
import { NestedDateTimeWithAggregatesFilterObjectSchema } from './NestedDateTimeWithAggregatesFilter.schema';;
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';;
import { NestedDateTimeFilterSchemaObject } from './NestedDateTimeFilter.schema';;
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

export const DateTimeWithAggregatesFilterSchemaObject = {
    equals: z.date().optional(),
  in: z.union([z.date(), z.null()]).optional(),
  notIn: z.union([z.date(), z.null()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.object(NestedDateTimeWithAggregatesFilterSchemaObject) .optional(),
  _count: z.object(NestedIntFilterSchemaObject).optional(),
  _min: z.object(NestedDateTimeFilterSchemaObject).optional(),
  _max: z.object(NestedDateTimeFilterSchemaObject).optional()
};

export const DateTimeWithAggregatesFilterObjectSchema = z.object({
    equals: z.date().optional(),  in: z.union([z.date(), z.null()]).optional(),  notIn: z.union([z.date(), z.null()]).optional(),  lt: z.date().optional(),  lte: z.date().optional(),  gt: z.date().optional(),  gte: z.date().optional(),  not: z.object(NestedDateTimeWithAggregatesFilterSchemaObject) .optional(),  _count: z.object(NestedIntFilterSchemaObject).optional(),  _min: z.object(NestedDateTimeFilterSchemaObject).optional(),  _max: z.object(NestedDateTimeFilterSchemaObject).optional()
});
