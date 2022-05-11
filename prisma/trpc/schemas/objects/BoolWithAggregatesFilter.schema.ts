import { z } from 'zod';
import { NestedBoolWithAggregatesFilterSchemaObject } from './NestedBoolWithAggregatesFilter.schema';;
import { NestedBoolWithAggregatesFilterObjectSchema } from './NestedBoolWithAggregatesFilter.schema';;
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';;
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';;
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema';;
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

export const BoolWithAggregatesFilterSchemaObject = {
    equals: z.boolean().optional(),
  not: z.union([z.boolean(),
z.object(NestedBoolWithAggregatesFilterSchemaObject)]) .optional(),
  _count: z.object(NestedIntFilterSchemaObject).optional(),
  _min: z.object(NestedBoolFilterSchemaObject).optional(),
  _max: z.object(NestedBoolFilterSchemaObject).optional()
};

export const BoolWithAggregatesFilterObjectSchema = z.object({
    equals: z.boolean().optional(),  not: z.union([z.boolean(),
z.object(NestedBoolWithAggregatesFilterSchemaObject)]) .optional(),  _count: z.object(NestedIntFilterSchemaObject).optional(),  _min: z.object(NestedBoolFilterSchemaObject).optional(),  _max: z.object(NestedBoolFilterSchemaObject).optional()
});
