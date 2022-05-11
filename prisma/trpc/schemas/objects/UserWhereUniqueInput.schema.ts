import { z } from 'zod';


export const UserWhereUniqueInputSchemaObject = {
    id: z.number().optional(),
  email: z.string().optional()
};

export const UserWhereUniqueInputObjectSchema = z.object({
    id: z.number().optional(),  email: z.string().optional()
});
