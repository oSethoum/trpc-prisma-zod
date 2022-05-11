import { z } from 'zod';


export const NullableIntFieldUpdateOperationsInputSchemaObject = {
    set: z.number() .optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
};

export const NullableIntFieldUpdateOperationsInputObjectSchema = z.object({
    set: z.number() .optional(),  increment: z.number().optional(),  decrement: z.number().optional(),  multiply: z.number().optional(),  divide: z.number().optional()
});
