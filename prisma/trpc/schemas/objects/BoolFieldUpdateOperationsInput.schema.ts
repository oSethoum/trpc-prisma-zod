import { z } from 'zod';


export const BoolFieldUpdateOperationsInputSchemaObject = {
    set: z.boolean().optional()
};

export const BoolFieldUpdateOperationsInputObjectSchema = z.object({
    set: z.boolean().optional()
});
