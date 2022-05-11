import { z } from 'zod';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';;
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';;
import { NestedStringNullableFilterSchemaObject } from './NestedStringNullableFilter.schema';;
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema';

export const NestedStringNullableWithAggregatesFilterSchemaObject = {
    equals: z.string() ,
  in: z.array(z.string()) ,
  notIn: z.array(z.string()) ,
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(),
z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]) .optional(),
  _count: z.object(NestedIntNullableFilterSchemaObject).optional(),
  _min: z.object(NestedStringNullableFilterSchemaObject).optional(),
  _max: z.object(NestedStringNullableFilterSchemaObject).optional()
};

export const NestedStringNullableWithAggregatesFilterObjectSchema = z.object({
    equals: z.string() ,  in: z.array(z.string()) ,  notIn: z.array(z.string()) ,  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]) .optional(),  _count: z.object(NestedIntNullableFilterSchemaObject).optional(),  _min: z.object(NestedStringNullableFilterSchemaObject).optional(),  _max: z.object(NestedStringNullableFilterSchemaObject).optional()
});
