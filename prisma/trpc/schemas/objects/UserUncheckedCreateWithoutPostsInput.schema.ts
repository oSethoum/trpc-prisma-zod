import { z } from 'zod';


export const UserUncheckedCreateWithoutPostsInputSchemaObject = {
    id: z.number().optional(),
  email: z.string(),
  name: z.string() 
};

export const UserUncheckedCreateWithoutPostsInputObjectSchema = z.object({
    id: z.number().optional(),  email: z.string(),  name: z.string() 
});
