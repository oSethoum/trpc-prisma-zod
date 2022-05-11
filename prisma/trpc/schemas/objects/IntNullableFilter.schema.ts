import { z } from 'zod';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';;
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';

export const IntNullableFilterSchemaObject = {
    equals: z.number() ,
  in: z.array(z.number()) ,
  notIn: z.array(z.number()) ,
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(),
z.object(NestedIntNullableFilterSchemaObject)]) .optional()
};

export const IntNullableFilterObjectSchema = z.object({
    equals: z.number() ,  in: z.array(z.number()) ,  notIn: z.array(z.number()) ,  lt: z.number().optional(),  lte: z.number().optional(),  gt: z.number().optional(),  gte: z.number().optional(),  not: z.union([z.number(),
z.object(NestedIntNullableFilterSchemaObject)]) .optional()
});
