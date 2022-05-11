import { z } from 'zod';


export const DateTimeFieldUpdateOperationsInputSchemaObject = {
    set: z.date().optional()
};

export const DateTimeFieldUpdateOperationsInputObjectSchema = z.object({
    set: z.date().optional()
});
