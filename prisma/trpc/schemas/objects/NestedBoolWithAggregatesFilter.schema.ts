import { z } from 'zod';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';;
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema';;
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

export const NestedBoolWithAggregatesFilterSchemaObject = {
    equals: z.boolean().optional(),
  not: z.union([z.boolean(),
z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]) .optional(),
  _count: z.object(NestedIntFilterSchemaObject).optional(),
  _min: z.object(NestedBoolFilterSchemaObject).optional(),
  _max: z.object(NestedBoolFilterSchemaObject).optional()
};

export const NestedBoolWithAggregatesFilterObjectSchema = z.object({
    equals: z.boolean().optional(),  not: z.union([z.boolean(),
z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema)]) .optional(),  _count: z.object(NestedIntFilterSchemaObject).optional(),  _min: z.object(NestedBoolFilterSchemaObject).optional(),  _max: z.object(NestedBoolFilterSchemaObject).optional()
});
