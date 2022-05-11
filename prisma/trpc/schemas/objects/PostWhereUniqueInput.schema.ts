import { z } from 'zod';


export const PostWhereUniqueInputSchemaObject = {
    id: z.number().optional()
};

export const PostWhereUniqueInputObjectSchema = z.object({
    id: z.number().optional()
});
