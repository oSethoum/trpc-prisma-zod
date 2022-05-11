import { z } from 'zod';


export const NullableStringFieldUpdateOperationsInputSchemaObject = {
    set: z.string() .optional()
};

export const NullableStringFieldUpdateOperationsInputObjectSchema = z.object({
    set: z.string() .optional()
});
