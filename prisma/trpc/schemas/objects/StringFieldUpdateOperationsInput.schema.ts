import { z } from 'zod';


export const StringFieldUpdateOperationsInputSchemaObject = {
    set: z.string().optional()
};

export const StringFieldUpdateOperationsInputObjectSchema = z.object({
    set: z.string().optional()
});
