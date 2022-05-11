import { z } from 'zod';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';;
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';;
import { NestedFloatNullableFilterSchemaObject } from './NestedFloatNullableFilter.schema';;
import { NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema';

export const NestedIntNullableWithAggregatesFilterSchemaObject = {
    equals: z.number() ,
  in: z.array(z.number()) ,
  notIn: z.array(z.number()) ,
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)]) .optional(),
  _count: z.object(NestedIntNullableFilterSchemaObject).optional(),
  _avg: z.object(NestedFloatNullableFilterSchemaObject),
  _sum: z.object(NestedIntNullableFilterSchemaObject),
  _min: z.object(NestedIntNullableFilterSchemaObject).optional(),
  _max: z.object(NestedIntNullableFilterSchemaObject).optional()
};

export const NestedIntNullableWithAggregatesFilterObjectSchema = z.object({
    equals: z.number() ,  in: z.array(z.number()) ,  notIn: z.array(z.number()) ,  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)]) .optional(),  _count: z.object(NestedIntNullableFilterSchemaObject).optional(),  _avg: z.object(NestedFloatNullableFilterSchemaObject),  _sum: z.object(NestedIntNullableFilterSchemaObject),  _min: z.object(NestedIntNullableFilterSchemaObject).optional(),  _max: z.object(NestedIntNullableFilterSchemaObject).optional()
});
