import { z } from 'zod';
import { NestedBoolFilterSchemaObject } from './NestedBoolFilter.schema';;
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

export const BoolFilterSchemaObject = {
    equals: z.boolean().optional(),
  not: z.union([z.boolean(),
z.object(NestedBoolFilterSchemaObject)]) .optional()
};

export const BoolFilterObjectSchema = z.object({
    equals: z.boolean().optional(),  not: z.union([z.boolean(),
z.object(NestedBoolFilterSchemaObject)]) .optional()
});
