import { z } from 'zod';
import { NestedStringNullableFilterSchemaObject } from './NestedStringNullableFilter.schema';;
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema';

export const StringNullableFilterSchemaObject = {
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
z.object(NestedStringNullableFilterSchemaObject)]) .optional()
};

export const StringNullableFilterObjectSchema = z.object({
    equals: z.string() ,  in: z.array(z.string()) ,  notIn: z.array(z.string()) ,  lt: z.string().optional(),  lte: z.string().optional(),  gt: z.string().optional(),  gte: z.string().optional(),  contains: z.string().optional(),  startsWith: z.string().optional(),  endsWith: z.string().optional(),  not: z.union([z.string(),
z.object(NestedStringNullableFilterSchemaObject)]) .optional()
});
