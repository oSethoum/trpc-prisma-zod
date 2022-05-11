import { z } from 'zod';
import { NestedDateTimeFilterSchemaObject } from './NestedDateTimeFilter.schema';;
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

export const DateTimeFilterSchemaObject = {
    equals: z.date().optional(),
  in: z.union([z.date(), z.null()]).optional(),
  notIn: z.union([z.date(), z.null()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.object(NestedDateTimeFilterSchemaObject) .optional()
};

export const DateTimeFilterObjectSchema = z.object({
    equals: z.date().optional(),  in: z.union([z.date(), z.null()]).optional(),  notIn: z.union([z.date(), z.null()]).optional(),  lt: z.date().optional(),  lte: z.date().optional(),  gt: z.date().optional(),  gte: z.date().optional(),  not: z.object(NestedDateTimeFilterSchemaObject) .optional()
});
