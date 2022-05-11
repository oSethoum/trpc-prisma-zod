import { z } from 'zod';


export const NestedBoolFilterSchemaObject = {
    equals: z.boolean().optional(),
  not: z.union([z.boolean(),
z.lazy(() => NestedBoolFilterObjectSchema)]) .optional()
};

export const NestedBoolFilterObjectSchema = z.object({
    equals: z.boolean().optional(),  not: z.union([z.boolean(),
z.lazy(() => NestedBoolFilterObjectSchema)]) .optional()
});
